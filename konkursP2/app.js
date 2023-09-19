const Input = document.getElementById("wpisanie");

Input.addEventListener("click", zmianaKoloru);
function zmianaKoloru()
{
    Input.style.borderColor = "aqua";
}

let smerf2115 = setInterval(kys, 1000);
let audio =new Audio('niger.mp3')
function kys(){

let smf = document.getElementById('wpisanie').value
let Boximg = document.getElementById("smBox");

if(smf =="Kot smerf"){
    let imgSmurf = document.createElement("img");
    imgSmurf.setAttribute("id", "sm");
    imgSmurf.setAttribute("src", "we-live-we-love-we-lie.png");
    Boximg.appendChild(imgSmurf);
    clearInterval(smerf2115);
    audio.play();
}

}
audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play();
});
