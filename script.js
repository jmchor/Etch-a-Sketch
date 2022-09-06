const mainframe = document.querySelector('.main');
const clear = document.querySelector('#clear');

function clearGrid() {
	let squares = document.querySelectorAll('.square');
	squares.forEach((square) => {
		square.style.backgroundColor = 'white';
	});
}

function newBgColor(e) {
	e.target.style.backgroundColor = 'black';
}

function createGrid(num) {
	if (mainframe.hasChildNodes()) {
		mainframe.removeChild(announceBox.childNodes[0]);
	}
	for (let i = 1; i <= num; i++) {
		newRow = document.createElement('div');
		newRow.classList.add('row');
		mainframe.appendChild(newRow);

		for (let i = 1; i <= num; i++) {
			newSquare = document.createElement('div');
			newSquare.classList.add('square');
			if (num <= 10) {
				(newSquare.style.width = '70px'), (newSquare.style.height = '70px');
			} else if (num <= 30) {
				(newSquare.style.width = '25px'), (newSquare.style.height = '25px');
			} else if (num <= 60) {
				(newSquare.style.width = '13px'), (newSquare.style.height = '13px');
			} else if (num <= 100) {
				(newSquare.style.width = '8px'), (newSquare.style.height = '8px');
			}
			newRow.appendChild(newSquare);
		}
	}
	let squares = document.querySelectorAll('.square');

	squares.forEach((square) => {
		square.addEventListener('mouseover', newBgColor);
	});
}
function startButton() {
	let num = parseInt(prompt('Please put in a number up to 100!'));

	if (num > 100) {
		alert("That's a bit more then 100, isn't it? Try again.");
		parseInt(prompt('Please put in a number less then 100!'));
	} else {
	}

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

clear.addEventListener('click', clearGrid);
