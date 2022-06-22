<script>
	import Item from '$lib/canvas/Item.svelte';
	import Stage from '$lib/canvas/Stage.svelte';
</script>

<Stage>
	<Item width="w-96" classes="bg-white" dataX="20" dataY="73">
		<h2 class="font-regular text-4xl pb-2">This place is still under construction</h2>
		<p>Drag over the background to draw, double click to clear</p>
		<p>Resize and drag these boxes as you like!</p>
	</Item>
	<Item width="w-96" classes="bg-white" dataX="60" dataY="73">
		<h2 class="font-regular text-4xl pb-2">Who is Mirko</h2>
		<p>Entrepreneur, Software Developer, Product Manager, Human</p>
		<a href="mailto:mirko+website@nitschke.me" sveltekit:prefetch
			><p class="text-lg hover:underline">Reach out to Mirko?!</p></a
		>
	</Item>
	<Item width="w-1/5" classes="bg-white" dataX="45" dataY="7"
		><h2 class="font-regular text-4xl pb-2">What is Mirko?</h2>
		<ul class="prose">
			<li><a href="https://www.love-foundation.org" sveltekit:prefetch>Love Foundation</a></li>
			<li><a href="https://music.hugrecords.world" sveltekit:prefetch>Hug Records</a></li>
		</ul>
	</Item>
	<Item width="w-1/5" classes="bg-white" dataX="5" dataY="5">
		<h2 class="font-regular text-4xl pb-2">Technologies</h2>
		<div class="flex flex-wrap space-x-2 space-y-1">
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-black"
			>
				Svelte
			</span>
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-black"
			>
				Firebase
			</span>
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-black"
			>
				React
			</span>
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-black"
			>
				Capacitor
			</span>
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-black"
			>
				Ionic
			</span>
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-black"
			>
				Docker
			</span>
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-black"
			>
				Cypress
			</span>
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-black"
			>
				CI/CD
			</span>
		</div>
	</Item>
</Stage>
