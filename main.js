let numar = 0;
let message = "";

let messageEl = document.getElementById("message-el");

function calcul(v) {
    if(v == 1)
    {
        numar += 10;
    }
    else if(v == 0)
    {
        numar -= 5;
    }

    message = "ai pasat pe buton de ";

    if(numar == 100)
    {
        messageEl.textContent = "felicitari, ai apasat pe buton de 100 de ori!";
    }
    else{
        messageEl.textContent = message + numar + " ori";
    }
}