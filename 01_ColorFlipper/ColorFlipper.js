const colorDiv = document.getElementById('color-div')
const btnColor = document.getElementById('btn-color')
const colorIndicator = document.getElementById('color-indicator')
const predefinedColors = [[255,0,0, 'Red'], [0,255,0, 'Green'], [0,0,255, 'Blue']]

function changeColorRandom()  {
    var colorPicked = predefinedColors[Math.floor(Math.random() * predefinedColors.length)]
    console.log(colorPicked)
    var r = colorPicked[0]
    var g = colorPicked[1]
    var b = colorPicked[2]
    var name = colorPicked[3]

    colorDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    colorIndicator.innerHTML = `<h1>Background Color: <a style="color: rgb(${r}, ${g}, ${b})">${name}</h1>`
}

btnColor.addEventListener("click", changeColorRandom)