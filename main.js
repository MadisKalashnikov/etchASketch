const wrapper = document.querySelector(".boxes-wrapper")

const multipleDivs = (num) => {
	for (let i = 1; i <= num * num; i++) {
		const div = document.createElement("div")
		div.innerHTML = "a"
		div.classList.add("box")
		wrapper.appendChild(div)
	}
}
multipleDivs(16)