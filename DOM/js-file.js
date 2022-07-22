const body = document.body
const p = document.createElement("p")
const h3 = document.createElement("h3")
const div = document.createElement("div")
const divh1 = document.createElement("h1")
const p2 = document.createElement("p")
p.textContent = "Hey I'm red!"
p.style.color = "red"
h3.textContent = "I'm a blue h3!"
h3.style.color = "blue"
div.style.borderColor = "black"
div.style.backgroundColor = "pink"
body.append(p, h3, div)
divh1.textContent = "I'm in a div"
p2.textContent = "ME TOO!"
div.append(divh1, p2)