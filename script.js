function guess (){
//funkcja ktora pobiera pojedynczy znak z pola tekstowego na stronie i wyszukuje oraz ujawnia posaujące znaki w hasle

//zgadywany znak
let guessedChar = document.getElementById("guessedChar").value;
//pobieramy znak, czekamy chwile i potem czyscimy pole tekstowe
setTimeout(() =>{
    document.getElementById("guessedChar").value = "";
}, 1000)

console.log("Próbwa odgadnięcia znaku: " + guessedChar);

//odkryj literki jesli trafione


//przekdz petla przez cale jaslo jesli znajdziesz pasujaca litere to w zamaskowanym hasle zamien "_" n awlasciwa litere

for(let i=0; i<password.length; i++) {
    //jeżeli w zamaskowany haśle jest "_" tylko wtedy cokolwiek zmieniamy 
    if (maskedPassword[i] == "_") {
    //jeżeli zgadywana litera jeest taka sama jak i-ta litera w hasle
        if(guessedChar == password[i]) {
        //to odkryj w zamaskowanym hasle te listere
        maskedPassword[i] = password[i]
        }
    }
}

//wyświetl zamaskowane hasło
document.getElementById("maskedPassword").innerHTML = maskedPassword.join("");

}



//dodaj zdarzenie ktore odpali si epo zaladowaniu strony
window.addEventListener("load", ()=> {
    //funkcja anonimowa
    //dodaj do pola edycyjnego 
    document.getElementById("guessedChar").addEventListener("input", guess);

    //wyświetl zamaskowane hasło
    document.getElementById("maskedPassword").innerHTML = maskedPassword.join("");
    
})

const password = "choinka".split("");
var maskedPassword = "_______".split("");