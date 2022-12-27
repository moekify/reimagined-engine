<script>
	import Item from '$lib/canvas/Item.svelte';
	import Stage from '$lib/canvas/Stage.svelte';
</script>

<Stage>
	<Item width="w-96" classes="bg-white" dataX="20" dataY="73">
		<h2 class="font-regular text-4xl pb-2">Explanation</h2>
		<p>Drag over the background to draw, double click to clear</p>
		<p>Resize and drag these boxes as you like!</p>
	</Item>
	<Item width="w-96" classes="bg-white" dataX="60" dataY="73">
		<h2 class="font-regular text-4xl pb-2">Who is Mirko</h2>
		<p>Entrepreneur, Software Developer, Product Manager, Human</p>
		<a class="hover:underline" href="mailto:mirko+website@nitschke.me" data-sveltekit-preload-data
			><p class="text-lg hover:underline">Reach out to Mirko?!</p></a
		>
	</Item>
	<Item width="w-90" classes="bg-white" dataX="45" dataY="7"
		><h2 class="font-regular text-4xl pb-2">What projects is Mirko involed in?</h2>
		<ul class="prose">
			<li>
				<a
					class="hover:underline"
					href="https://www.love-foundation.org"
					data-sveltekit-preload-data>Love Foundation</a
				>
			</li>
			<li>
				<a class="hover:underline" href="https://music.hugrecords.world" data-sveltekit-preload-data
					>Hug Records</a
				>
			</li>
		</ul>
	</Item>
	<Item width="w-90" classes="bg-white" dataX="8" dataY="55"
		><h2 class="font-regular text-4xl pb-2">Offerings</h2>
		<div class="flex flex-wrap space-x-2 space-y-1">
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-black"
				>Web Development</span
			>
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-black"
				>Product Management</span
			>
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-black"
				>Email Services</span
			>
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-black"
				>Hosting</span
			>
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-black"
				>DevOps</span
			>
		</div>
	</Item>
	<Item width="w-1/5" classes="bg-white" dataX="50" dataY="30"
		><h2 class="font-regular text-4xl pb-2">Imprint</h2>
		<ul class="prose">
			<li>
				<a class="hover:underline" href="/impressum" data-sveltekit-preload-data>Impressum</a>
			</li>
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
				Typescript
			</span>
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-black"
			>
				CI/CD
			</span>
		</div>
	</Item>
</Stage>
