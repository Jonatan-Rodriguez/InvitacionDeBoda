/* (function ($) {
    "use strict";
    $('.sakura-falling').sakura();
})(jQuery); */

/* $(document).on('click', function () {
    document.getElementById("my_audio").play();
}); */

//copy paste
let inputCbu = document.getElementById(`inputCbu`);
let btnCopyCbu = document.getElementById(`btnCopyCbu`);
let inputAlias = document.getElementById(`inputAlias`);
let btnCopyAlias = document.getElementById(`btnCopyAlias`);
let mensajeCbu = document.getElementById(`mensajeCbu`);
let mensajeAlias = document.getElementById(`mensajeAlias`);

btnCopyCbu.addEventListener(`click`, ()=>{
    inputCbu.focus();
    document.execCommand(`selectAll`);
    document.execCommand(`copy`);
    mensajeCbu.style.display="flex";
    setTimeout(()=>{
        mensajeCbu.style.display="none";
    },3000);
})

btnCopyAlias.addEventListener(`click`, ()=>{
    inputAlias.focus();
    document.execCommand(`selectAll`);
    document.execCommand(`copy`);
    mensajeAlias.style.display="flex";
    setTimeout(()=>{
        mensajeAlias.style.display="none";
    },3000);
})

// Set the date we're counting down to
var countDownDate = new Date("December 17, 2022 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='block'><div class='days'>" + days + "</div><p class='dias'>Dias</p></div>" + "<div class='block'><div class='hours'>" + hours + "</div><p class='horas'>Hs.</p></div>" + "<div class='block'><div class='minutes'>" + minutes + "</div><p class='minutos'>Min.</p></div>" + "<div class='block'><div class='seconds'>" + seconds + "</div><p class='segundos'>Seg.</p></div></div>";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "¡Bendice a la pareja casada para una vida feliz!";
    }
}, 1000);

