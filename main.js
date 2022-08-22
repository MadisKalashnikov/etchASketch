const wrapper = document.querySelector(".boxes-wrapper")
const multipleDivs = (num) => {
	for (let i = 1; i <= num * num; i++) {
		const div = document.createElement("div")
		div.classList.add("box")
		div.style.width = `${600 / num}px`
		div.style.height = `${600 / num}px`
		wrapper.appendChild(div)
	}
}
multipleDivs(16)
const divs = document.querySelectorAll('.box')
const changeColor = (e) => {
	const target = e.target
	if (target.classList.contains("black")) return;
	target.classList.add("black")
}
divs.forEach(div => {
	div.addEventListener("mouseover", changeColor)
})

const clearGrid = () => {
	divs.forEach(div => {
		div.classList.remove("black")
	})
}
const clearBtn = document.querySelector("#clear")
clearBtn.addEventListener("click", clearGrid)