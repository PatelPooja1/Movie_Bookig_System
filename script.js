const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	const movie = document.querySelector('#movie').value;
	const date = document.querySelector('#date').value;
	const time = document.querySelector('#time').value;
	const seats = document.querySelector('#seats').value;

	alert(`You have booked ${seats} seats for ${movie} on ${date} at ${time}.`);
});
