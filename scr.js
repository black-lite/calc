document.addEventListener('DOMContentLoaded', function()  {
	let first = document.querySelector('body > div > input:nth-of-type(1)');
	let second = document.querySelector('body > div > input:nth-of-type(2)');
	let action = document.querySelector('body > div > select');

	function check() { return (first.value && second.value); }

	first.addEventListener('input', () => { if (check()) calc(first.value, second.value, action.value, '#result'); });
	second.addEventListener('input', () => { if (check()) calc(first.value, second.value, action.value, '#result'); });
	action.addEventListener('change', () => { if (check()) calc(first.value, second.value, action.value, '#result'); });

	function calc(first, second, action, selector) {
		let result = document.querySelector(selector);
		switch (action) {
			case '+': result.textContent = Number(first) + Number(second); break;
			case '-': result.textContent = Number(first) - Number(second); break;
			case '*': result.textContent = Number(first) * Number(second); break;
			case '/': Number(first) / Number(second) !== Infinity ? result.textContent = Number(first) / Number(second) : result.textContent = '---'; break;
			default: return alert('Такие операции не обрабатываются!');
		}
	}
});