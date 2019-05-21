const adviceSlip_div = document.getElementById('advice-slip')
const advice = document.getElementById('advice')
const clear = () => advice.innerHTML = ""
const advise = () => {fetch('https://api.adviceslip.com/advice').then(response => response.json()).then(data =>  advice.append(`${data.slip.advice}`))}

const main = () => {
adviceSlip_div.addEventListener('click', function() {clear(); advise(); $('#advice').show().fadeOut(9000)})
}

main()
