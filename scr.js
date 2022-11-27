document.addEventListener('DOMContentLoaded', function()  {
	let first = document.querySelector('body > div > input:nth-of-type(1)');
	let second = document.querySelector('body > div > input:nth-of-type(2)');
	let action = document.querySelector('body > div > select');

	function check() { return (first.value && second.value); }

	first.addEventListener('input', () => {
		if (check()) calc(first.value, second.value, action.value, 'body > div > input:nth-of-type(3)');
	});
	second.addEventListener('input', () => {
		if (check()) calc(first.value, second.value, action.value, '#result');
	});
	action.addEventListener('change', () => {
		if (check()) calc(first.value, second.value, action.value, '#result');
	});

	function calc(first, second, action, selector) {

	}
});