function getDisplay() {
    let input = document.getElementById('input-text')
    let div = document.getElementById('output-display')

    div.innerHTML = input.value.split('').reverse().join('').replace(/[\W_]+/g,"")

    let inputText = div.innerHTML.toLowerCase().replace(/[\W_]+/g,"")
    let displayText = input.value.toLowerCase().replace(/[\W_]+/g,"")

    if (inputText === displayText) {
        document.getElementById("output-display").style.color = 'green'
    } else {
        document.getElementById("output-display").style.color = 'red'
    }
}
