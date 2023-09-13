const loginInput = document.getElementById("login");
const hasloInput = document.getElementById("haslo");
const zalogujPrzycisk = document.getElementById("przycisk");
const wynik = document.getElementById("wynik");
zalogujPrzycisk.addEventListener("click", pokazWynik)


function pokazWynik()
{
    let login = loginInput.value;
    let haslo = hasloInput.value;

    wynik.innerHTML = "Twoj login i haslo to: " + login + " " + haslo + ".";

}