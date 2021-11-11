import '@interactjs/auto-start';
import '@interactjs/actions/drag';
import '@interactjs/actions/resize';
import '@interactjs/modifiers';
import '@interactjs/dev-tools';
import interact from '@interactjs/interact';

let pixelSize = 16;

export const interactable = () => {
	interact('.draggable')
		.draggable({
			listeners: {
				move: dragMoveListener
			},
			modifiers: [
				interact.modifiers.restrictRect({
					restriction: 'parent'
				})
			],
			inertia: true
		})
		.resizable({
			// resize from all edges and corners
			edges: { left: true, right: true, bottom: true, top: true },

			listeners: {
				move(event) {
					var target = event.target;
					var x = parseFloat(target.getAttribute('data-x')) || 0;
					var y = parseFloat(target.getAttribute('data-y')) || 0;

					// update the element's style
					target.style.width = event.rect.width + 'px';
					target.style.height = event.rect.height + 'px';

					// translate when resizing from top or left edges
					x += event.deltaRect.left;
					y += event.deltaRect.top;

					target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

					target.setAttribute('data-x', x);
					target.setAttribute('data-y', y);
				}
			},
			modifiers: [
				// keep the edges inside the parent
				interact.modifiers.restrictEdges({
					outer: 'parent'
				}),

				// minimum size
				interact.modifiers.restrictSize({
					min: { width: 100, height: 50 }
				})
			],

			inertia: true
		});

	interact('.rainbow-pixel-canvas')
		.draggable({
			max: Infinity,
			maxPerElement: Infinity,
			origin: 'self',
			modifiers: [
				interact.modifiers.snap({
					// snap to the corners of a grid
					targets: [interact.snappers.grid({ x: pixelSize, y: pixelSize })]
				})
			],
			listeners: {
				// draw colored squares on move
				move: function (event) {
					let context = event.target.getContext('2d');
					// calculate the angle of the drag direction
					let dragAngle = (180 * Math.atan2(event.dx, event.dy)) / Math.PI;

					// set color based on drag angle and speed
					context.fillStyle =
						'hsl(' + dragAngle + ', 86%, ' + (30 + Math.min(event.speed / 1000, 1) * 50) + '%)';

					// draw squares
					context.fillRect(
						event.pageX - pixelSize / 2,
						event.pageY - pixelSize / 2,
						pixelSize,
						pixelSize
					);
				}
			}
		})
		// clear the canvas on doubletap
		.on('doubletap', function (event) {
			let context = event.target.getContext('2d');

			context.clearRect(0, 0, context.canvas.width, context.canvas.height);
			resizeCanvases();
		});

	resizeCanvases();
};

export const resizeCanvases = () => {
	let canvas = document.querySelector('.rainbow-pixel-canvas');
	delete canvas.width;
	delete canvas.height;

	let rect = canvas.getBoundingClientRect();

	canvas.width = rect.width;
	canvas.height = rect.height;
};

function dragMoveListener(event) {
	var target = event.target;
	// keep the dragged position in the data-x/data-y attributes
	var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
	var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

	// translate the element
	target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

	// update the posiion attributes
	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
}
