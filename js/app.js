const adviceSlip_div = document.getElementById('advice-slip');
const advice = document.getElementById('advice');
const close = document.getElementById('close');
const intro = document.getElementById('intro');

const clear = () => advice.innerHTML = "";
const change = () => adviceSlip_div.innerHTML = "";
const advise = () => {fetch('https://api.adviceslip.com/advice').then(response => response.json()).then(data =>  advice.append(`${data.slip.advice}`))};
const heart = $('<p>For you with &#x2665</p>')

const introTimeOut = () => {
  setTimeout(function(){$('#intro').hide()}, 10000
)}

const main = () => {
  adviceSlip_div.addEventListener('click', function() {
    clear();
    advise();
    $('#advice').show().fadeOut(9000);
    $('#advice-slip').css({"pointer-events": "none"});
    change();
    $('#advice-slip').append(heart[0]);
    $('#advice-slip').fadeOut(9000);

    setTimeout(function(){
      $('#advice-slip').css({"pointer-events": "auto", "border-color": "pink", "box-shadow": "0 10px 10px -10px pink"})
      change();
      $('#advice-slip').append("GET ADVICE").show()}, 9100);
})

close.addEventListener('click', function() {
  $('#intro').hide()})
};

main()
introTimeOut()
