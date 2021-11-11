<script>
	import { onMount } from 'svelte';
	import '@interactjs/auto-start';
	import '@interactjs/actions/drag';
	import '@interactjs/actions/resize';
	import '@interactjs/modifiers';
	import '@interactjs/dev-tools';
	import interact from '@interactjs/interact';
	export let handle = '';


	onMount(() => {
		const root = document.getElementById(handle);
		const object = document.getElementById(`object-${handle}`);
		const sns = 'http://www.w3.org/2000/svg';
		const xns = 'http://www.w3.org/1999/xlink';
		const rootMatrix = root.getScreenCTM();
		const originalPoints = [];
		let transformedPoints = [];
		let pointHandleClass = `${handle}-point-handle`;
		for (let i = 0, len = object.points.numberOfItems; i < len; i++) {
			const handle = document.createElementNS(sns, 'use');
			const point = object.points.getItem(i);
			const newPoint = root.createSVGPoint();

			handle.setAttributeNS(xns, 'href', '#point-handle');
			handle.setAttribute('class', pointHandleClass);

			handle.x.baseVal.value = newPoint.x = point.x;
			handle.y.baseVal.value = newPoint.y = point.y;

			handle.setAttribute('data-index', i);

			originalPoints.push(newPoint);

			root.appendChild(handle);
		}

		function applyTransforms(event) {


			transformedPoints = originalPoints.map((point) => {
				return point.matrixTransform(rootMatrix);
			});

			interact(`.${handle}-point-handle`).draggable({
				snap: {
					targets: transformedPoints,
					range: 20 * Math.max(rootMatrix.a, rootMatrix.d)
				}
			});
		}

		interact(root).on('mousedown', applyTransforms).on('touchstart', applyTransforms);

		interact(`.${handle}-point-handle`)
			.draggable({
				onstart: function (event) {
					root.setAttribute('class', 'dragging');
				},
				onmove: function (event) {
					const i = event.target.getAttribute('data-index') | 0;
					const point = object.points.getItem(i);

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
	});
</script>

<div class="w-6/12">
	<svg
		viewBox="-20 -30 280 280"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		id={handle}
	>
		<defs>
			<circle
				id="point-handle"
				r="10"
				x="0"
				y="0"
				stroke-width="5"
				fill="#ff0000"
				fill-opacity="0.4"
				stroke="#ff0000"
			/>
		</defs>
		<polygon
			id={`object-${handle}`}
			points="234.74000930786133,1.589999943971634 170.79999923706055,7.749999761581421 161.01999938488007,15.429999828338623 120.09999930858612,132.91999578475952 78.979997634887695,15.420000553131104 69.20000076293945,7.749999761581421 5.260000228881836,1.589999943971634 0.4100000113248825,7.829999923706055 80.85000038146973,231.49999618530273 90.73000013828278,238.44999611377716 152.96000063419342,238.44999611377716 153.35000064224005,238.44999611377716 155.14000069350004,237.8999961167574 157.89000075310469,234.97999615967274 158.28000076115131,233.89999613165855 239.5800019055605,7.82999262213707 234.74000930786133,1.589999943971634"
			stroke="#000"
			stroke-width="20"
			stroke-linejoin="round"
			fill="none"
		/></svg
	>
</div>
