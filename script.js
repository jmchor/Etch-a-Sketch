const mainframe = document.querySelector('.main');
const clear = document.querySelector('#clear');
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true); //courtesy of michaelosman
document.body.onmouseup = () => (mouseDown = false);

function clearGrid() {
	let squares = document.querySelectorAll('.square');
	squares.forEach((square) => {
		square.style.backgroundColor = 'white';
	});
}

function newBgColor(e) {
	if (e.type === 'mouseover' && !mouseDown) return;
	//mouseDown evaluates to false, so !mouseDown = truthy
	//comes down to "on mouse over and holding the mousebutton"
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
			let suffix = mainframe.dataset.size;
			let newWidthHeight = 900 / parseInt(num) - 0.5 + suffix; //divide the containing elements width by number of squares
			newSquare = document.createElement('div');
			newSquare.classList.add('square');
			newSquare.style.width = newWidthHeight;
			newSquare.style.height = newWidthHeight;
			newRow.appendChild(newSquare);
		}
	}
	let squares = document.querySelectorAll('.square');

	squares.forEach((square) => {
		square.addEventListener('mouseover', newBgColor);
		square.addEventListener('mousedown', newBgColor);
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
