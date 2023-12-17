function guess (){
//funkcja ktora pobiera pojedynczy znak z pola tekstowego na stronie i wyszukuje oraz ujawnia posaujące znaki w hasle

//zgadywany znak
let guessedChar = document.getElementById("guessedChar").value;
//pobieramy znak, czekamy chwile i potem czyscimy pole tekstowe
setTimeout(() =>{
    document.getElementById("guessedChar").value = "";
}, 1000)

console.log("Próba odgadnięcia znaku: " + guessedChar);

//dodaj flagę (true or false) okreslajaca czy w tej probie trafilismy jakas litere, domyslnie flaga ma wartosc false (nietrafiony)
let correct = false;

//odkryj literki jesli trafione


//przekdz petla przez cale jaslo jesli znajdziesz pasujaca litere to w zamaskowanym hasle zamien "_" n awlasciwa litere

for(let i=0; i<password.length; i++) {
    //jeżeli w zamaskowany haśle jest "_" tylko wtedy cokolwiek zmieniamy 
    if (maskedPassword[i] == "_") {
    //jeżeli zgadywana litera jeest taka sama jak i-ta litera w hasle
        if(guessedChar == password[i]) {
        //to odkryj w zamaskowanym hasle te listere
        maskedPassword[i] = password[i];
        //zgadlismy litere - postaw flage
        correct = true;
        }
    }
}
//sprawdz czy trafilismy i w razie potrzeby zwiększ licznik nieudanych prób 
if (!correct) {
    //inkrementuj(zwieksz) licznik
    errorCounter++;
    //wygeneruj nowy url obrazka
    let imageUrl = "img/h" + errorCounter + ".png";
    //podmien obrazek na stronie (zmien jesgo src)
    document.getElementById("image").src = imageUrl;
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

function gameOver () {
    //funkcja uruchamia się po osiągnięciu maksymalnej liczby błędnych odpowiedzi
    alert("Koniec gry :(");
}

const password = "choinka".split("");
var maskedPassword = "_______".split("");
var errorCounter = 0;