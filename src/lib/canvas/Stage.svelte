<script>
	import { onMount } from 'svelte';
	import { interactable, resizeCanvases } from '$lib/_interact';
	import position from '$lib/_position';

	onMount(() => {
		const elements = Array.from(document.querySelectorAll('.draggable'));
		if (elements) {
			for (const el of elements) {
				position(el).then(() => {
					el.classList.add('opacity-100');
				});
			}
			interactable();
		}
	});

	const resetCanvas = (event) => {
		const context = event.target.getContext('2d');
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		resizeCanvases();
	};
</script>

<section id="stage" class="w-screen h-screen" style="touch-action: none;" on:dblclick={resetCanvas}>
	<canvas class="absolute w-full h-full rainbow-pixel-canvas" />
	<slot />
</section>
