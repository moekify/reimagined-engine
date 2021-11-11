<script>
	import { onMount } from 'svelte';
	import '@interactjs/auto-start';
	import '@interactjs/actions/drag';
	import '@interactjs/actions/resize';
	import '@interactjs/modifiers';
	import '@interactjs/dev-tools';
	import interact from '@interactjs/interact';

	onMount(() => {
		const sns = 'http://www.w3.org/2000/svg';
		const xns = 'http://www.w3.org/1999/xlink';
		let roots = document.getElementsByClassName('svg-edit-demo');
		let stars = document.getElementsByClassName('edit-star');
    console.log(stars)
    let i = 0;

		function applyTransforms(item, matrix, transformedPoints, originalPoints, event) {
			matrix = item.getScreenCTM();

			transformedPoints = originalPoints.map((point) => {
				return point.matrixTransform(matrix);
			});

			interact('.point-handle').draggable({
				snap: {
					targets: transformedPoints,
					range: 20 * Math.max(matrix.a, matrix.d)
				}
			});
		}

		for (const root of roots) {
			let rootMatrix;
			const originalPoints = [];
			let transformedPoints = [];
      let star = stars[i];
      console.log(root)

			for (let i = 0, len = star.points.numberOfItems; i < len; i++) {
				const handle = document.createElementNS(sns, 'use');
				const point = star.points.getItem(i);
				const newPoint = root.createSVGPoint();

				handle.setAttributeNS(xns, 'href', '#point-handle');
				handle.setAttribute('class', 'point-handle');

				handle.x.baseVal.value = newPoint.x = point.x;
				handle.y.baseVal.value = newPoint.y = point.y;

				handle.setAttribute('data-index', i);

				originalPoints.push(newPoint);

				root.appendChild(handle);
			}

			interact(root)
				.on('mousedown', applyTransforms(root, rootMatrix, transformedPoints, originalPoints))
				.on('touchstart', applyTransforms(root, rootMatrix, transformedPoints, originalPoints));

			interact('.point-handle')
				.draggable({
					onstart: function (event) {
						root.setAttribute('class', 'dragging');
					},
					onmove: function (event) {
						const i = event.target.getAttribute('data-index') | 0;
						const point = star.points.getItem(i);

						point.x += event.dx / rootMatrix.a;
						point.y += event.dy / rootMatrix.d;

						event.target.x.baseVal.value = point.x;
						event.target.y.baseVal.value = point.y;
					},
					onend: function (event) {
						root.setAttribute('class', '');
					},
					snap: {
						targets: originalPoints,
						range: 10,
						relativePoints: [{ x: 0.5, y: 0.5 }]
					},
					restrict: { restriction: document.rootElement }
				})
				.styleCursor(false);

			document.addEventListener('dragstart', (event) => {
				event.preventDefault();
			});
		}
	});
</script>

<svg
	class="svg-edit-demo"
	viewBox="0 0 400 400"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
>
	<defs>
		<circle
			id="point-handle"
			r="10"
			x="0"
			y="0"
			stroke-width="4"
			fill="#fff"
			fill-opacity="0.4"
			stroke="#fff"
		/>
	</defs>
	<polygon
		class="edit-star"
		stroke="#29e"
		stroke-width="20"
		stroke-linejoin="round"
		fill="none"
		points="260.8676170428898331,219.7770876399966369 297.8074659814675442,334.6204278639912673 200.0000000000000000,264.0000000000000000 102.1925340185324700,334.6204278639912673 139.1323829571101669,219.7770876399966369 41.7441956884864567,148.5795721360087214 162.3817438532817334,148.2229123600033631 200.0000000000000284,33.5999999999999943 237.6182561467182950,148.2229123600033631 358.2558043115135433,148.5795721360087498"
	/>
</svg>

<svg
	class="svg-edit-demo"
	viewBox="0 0 400 400"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
>
	<defs>
		<circle
			id="point-handle"
			r="10"
			x="0"
			y="0"
			stroke-width="4"
			fill="#fff"
			fill-opacity="0.4"
			stroke="#fff"
		/>
	</defs>
	<polygon
		class="edit-star"
		stroke="#29e"
		stroke-width="20"
		stroke-linejoin="round"
		fill="none"
		points="260.8676170428898331,219.7770876399966369 297.8074659814675442,334.6204278639912673 200.0000000000000000,264.0000000000000000 102.1925340185324700,334.6204278639912673 139.1323829571101669,219.7770876399966369 41.7441956884864567,148.5795721360087214 162.3817438532817334,148.2229123600033631 200.0000000000000284,33.5999999999999943 237.6182561467182950,148.2229123600033631 358.2558043115135433,148.5795721360087498"
	/>
</svg>
