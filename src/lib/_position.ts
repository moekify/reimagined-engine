const position = (el) => {
	return new Promise<void>((resolve) => {
		const x = parseFloat(el.getAttribute('data-x')) || 0;
		const y = parseFloat(el.getAttribute('data-y')) || 0;

		// convert percentage to pixels
		const xPx = Math.round((x * el.parentNode.clientWidth) / 100);
		const yPx = Math.round((y * el.parentNode.clientHeight) / 100);

		// translate the element
		el.style.transform = 'translate(' + xPx + 'px, ' + yPx + 'px)';

		// update the posiion attributes
		el.setAttribute('data-x', xPx);
		el.setAttribute('data-y', yPx);

		resolve();
	});
};

export default position;
