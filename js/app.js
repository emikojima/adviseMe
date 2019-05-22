const adviceSlip_div = document.getElementById('advice-slip');
const advice = document.getElementById('advice');
const close = document.getElementById('close');
const intro = document.getElementById('intro');

const clear = () => advice.innerHTML = "";
const advise = () => {fetch('https://api.adviceslip.com/advice').then(response => response.json()).then(data =>  advice.append(`${data.slip.advice}`))};

const introTimeOut = () => {
  setTimeout(function(){$('#intro').hide()}, 9000
)}

const main = () => {
adviceSlip_div.addEventListener('click', function() {clear(); advise();$('#advice').show().fadeOut(9000);$('#advice-slip').css({"pointer-events": "none"}); setTimeout(function(){$('#advice-slip').css("pointer-events", "auto")}, 8000)});

close.addEventListener('click', function() {
  $('#intro').hide()})
};

main()
introTimeOut()
