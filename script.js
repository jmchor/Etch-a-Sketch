const mainframe = document.querySelector('.main');

function createGrid(num) {
	for (let i = 1; i <= num; i++) {
		newRow = document.createElement('div');
		newRow.classList.add('row');
		mainframe.appendChild(newRow);

		for (let i = 1; i <= num; i++) {
			newSquare = document.createElement('div');
			newSquare.classList.add('square');
			newRow.appendChild(newSquare);
		}
	}

	let squares = document.querySelectorAll('.square');

	squares.forEach((square) => {
		square.addEventListener('click', (e) => {
			console.log(e);
		});
	});
}
function startButton() {
	let num = parseInt(prompt('Please put in a number!'));

	if (mainframe.hasChildNodes()) {
		while (mainframe.firstChild) {
			mainframe.removeChild(mainframe.firstChild);
		}
		createGrid(num);
	} else {
		createGrid(num);
	}
}

const btn = document.querySelector('#gridCreator');
btn.addEventListener('click', startButton);

// squares.forEach((square) => {
// 	square.addEventListener('click', () => {
// 		square.classList.add('black');
// 	});
// });
