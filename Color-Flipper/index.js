const body = document.getElementsByTagName("body")[0]

function setColor(color) {
    body.style.backgroundColor = color
}

function randomColor() {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}
