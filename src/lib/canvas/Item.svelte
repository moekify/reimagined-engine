<script lang="ts">
	export let classes = '';
	export let width = '';
	export let dataX = '';
	export let dataY = '';
	export let padding = true;
</script>

<div
	class={`draggable absolute transition-opacity opacity-0 duration-500 ${width}`}
	style={`touch-action: none; user-select: none`}
	data-x={dataX}
	data-y={dataY}
>
	<div class={`shadow-xl shadow-inner shadow-color-white breathe ${classes}`}
	class:p-5={padding === true}>
		<slot>Wub</slot>
	</div>
</div>

<style style lang="postcss">
	.breathe:hover {
		animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}
	@keyframes pulse {
		0%,
		100% {
			transform: none;
		}
		50% {
			transform: scale3d(1.05,1.05,1.05)
		}
	}
</style>
