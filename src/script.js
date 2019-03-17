function getDisplay() {
    let input = document.getElementById('input-text')
    let div = document.getElementById('output-display')

    div.innerHTML = input.value.split('').reverse().join('')

    if (div.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        document.getElementById("output-display").style.color = 'green'
    } else {
        document.getElementById("output-display").style.color = 'red'
    }
}
