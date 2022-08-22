const wrapper = document.querySelector(".boxes-wrapper");
// initialize divs
let divs = document.querySelectorAll(".box");
// change color function, add class black to target
// mode 
const changeModes = document.querySelectorAll(".mode");
let currentMode = "color";
const currentModeElement = document.querySelector("#currentElement");
const changemode = (e) => {
	currentMode = e.target.dataset.mode;
	if (currentMode === "classic") {
		currentModeElement.textContent = "Current Mode: Classic";
	} else if (currentMode === "eraser") {
		currentModeElement.textContent = "Current Mode: Eraser";
	} else if (currentMode === "rgb") {
		currentModeElement.textContent = "Current Mode: RGB";
	} else if (currentMode === "color") {
		currentModeElement.textContent = "Current Mode: Picked";
		pickedColor = e.target.value
	}
}
changeModes.forEach(mode => {
	mode.addEventListener("click", changemode);
})
const getRgbColor = () => {
	let i = 0;
	const values = [];
	while (i < 3) {
		values.push(Math.ceil(Math.random() * 255));
		i++;
	}
	return `rgb(${values.join(",")})`;
}
const pick = document.querySelector("#pick");
let pickedColor = "black";
pick.addEventListener("change", changemode);
const changeColor = (e) => {
	if (currentMode === "classic") {
		e.target.style.backgroundColor = "black";
	} else if (currentMode === "eraser") {
		e.target.style.backgroundColor = "rgba(0, 0, 0, 0.03)";
	} else if (currentMode === "rgb") {
		e.target.style.backgroundColor = getRgbColor();
	} else if (currentMode === "color") {
		e.target.style.backgroundColor = pickedColor;
	}
}
// create empty array for divs
const divsArray = []
// add mouse over event listener to all divs
const addEventToDivs = () => {
	divsArray.forEach(div => {
		div.addEventListener("mouseover", changeColor)
	})
}

// change divs size according to number of divs
// add divs according to given number
const multipleDivs = (num) => {
	wrapper.innerHTML = ""
	divsArray.length = 0
	for (let i = 1; i <= num * num; i++) {
		const div = document.createElement("div");
		div.classList.add("box");
		div.style.width = `${600 / num}px`;
		div.style.height = `${600 / num}px`;
		divsArray.push(div)
		wrapper.appendChild(div);
	}
	addEventToDivs()
}

multipleDivs(6)
// clear grid function, remove black class from all divs
const clearGrid = () => {
	divsArray.forEach(div => {
		div.style.backgroundColor = "rgba(0, 0, 0, 0.03)"
	})
}
const btns = document.querySelector(".btn-wrapper")

const clearBtn = document.querySelector("#clear")
clearBtn.addEventListener("click", clearGrid)

// change number of divs according to chosen range value
const rangeValue = document.querySelector("#range-value")
rangeValue.textContent = `6 x 6`
const rangeInput = document.querySelector("#range")
const changeGrid = (e) => {
	const number = parseInt(e.target.value);
	multipleDivs(number);
	rangeValue.textContent = `${number} x ${number}`
}
rangeInput.addEventListener("input", changeGrid)
