// script.js — Adds a simple click counter to the page's button.
// When the button is clicked the number increases by one and the
// button text is updated to show the count.

document.addEventListener('DOMContentLoaded', () => {
	// Select the first <button> on the page. If you add more buttons
	// or want a specific button, give it an id and use document.getElementById.
	const btn = document.querySelector('button');
	if (!btn) return; // nothing to do if no button exists

	let count = 0;
	// Initialize the button text to include the counter
	btn.textContent = `This is my button (clicked ${count} times)`;

	btn.addEventListener('click', () => {
		count += 1;
		btn.textContent = `This is my button (clicked ${count} times)`;
	});
});
