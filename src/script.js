function getDisplay() {
    let input = document.getElementById('input-text')
    let div = document.getElementById('output-display')

    div.innerHTML = input.value.split('').reverse().join('').replace(/[\W_]+/g,"")

    if (div.innerHTML.toLowerCase().replace(/[\W_]+/g,"") === input.value.toLowerCase().replace(/[\W_]+/g,"")) {
        document.getElementById("output-display").style.color = 'green'
    } else {
        document.getElementById("output-display").style.color = 'red'
    }
}
