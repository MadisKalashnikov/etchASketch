const wrapper = document.querySelector(".boxes-wrapper")

const multipleDivs = (num) => {
	for (let i = 1; i <= num * num; i++) {
		const div = document.createElement("div")
		div.innerHTML = "a"
		div.classList.add("box")
		div.style.width = `${600 / num}px`
		div.style.height = `${600 / num}px`
		wrapper.appendChild(div)
	}
}
multipleDivs(6)