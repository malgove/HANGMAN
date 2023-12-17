function guess (guessedChar){
//zgadywany znak
//    let guessedChar = document.getElementById("guessedChar").value;
//pobieramy znak, czekamy chwile i potem czyscimy pole tekstowe
//setTimeout(() =>{
//    document.getElementById("guessedChar").value = "";
//}, 500)

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
    if(errorCounter >=9) {
        //zmien funkcje wywolywana po probie odgadniecia znaku  
        //document.getElementById("guessedChar").removeEventListener("input", guess);
        //document.getElementById("guessedChar").addEventListener("input", gameOver);
        //wyświetl kompletnego wisielca
        let imageUrl = "img/h9.png";
        document.getElementById("image").src=imageUrl;
        //zablokuj klawiature - usun przypiete zdarzenia z guzikow, stworz tablice zlozana z guzikow pobranych z DOM
        //potrzebujemy array,from poniewaz foreach nie umie pracowac z HTMLCollection
        let buttons = Array.from(document.getElementById("keyboard").children);
        //używamy pętli foreach zeby wykonac to samo dzialanie dla kazdego guzika
        buttons.forEach((button) => {
            //wylaczamy guzik
            button.disabled = true;
            //odpinamy zdarzenies
            button.removeEventListener("click", buttonPressed);
            //zmieniamy kolor tla literek na szare
            button.style.backgroundColor = "gray";
    })
        //wyswietl komunikat o koncu gry po czasie
        setTimeout(gameOver, 500);
    } else{
    //wygeneruj nowy url obrazka
    let imageUrl = "img/h" + errorCounter + ".png";
    //podmien obrazek na stronie (zmien jesgo src)
    document.getElementById("image").src = imageUrl;
    }
 
} else {
    //sprawdz czy zgadlismy ostatnia litere
    if(maskedPassword.indexOf("_") == -1) {
        document.getElementById("victorySound").play();
        setTimeout( ()=>{
            window.alert("Gratulacje!");
        }, 500)
        
    }
}

//wyświetl zamaskowane hasło
document.getElementById("maskedPassword").innerHTML = maskedPassword.join("");

}



//dodaj zdarzenie ktore odpali si epo zaladowaniu strony
    window.addEventListener("load", ()=> {
    //funkcja anonimowa
    //dodaj do pola edycyjnego 
//    document.getElementById("guessedChar").addEventListener("input", guess);

    //przypnij funkcje newGame do guzika
    document.getElementById("newGameButton").addEventListener("click", newGame);
    
    newGame();
    
})


function gameOver () {
    //funkcja uruchamia się po osiągnięciu maksymalnej liczby błędnych odpowiedzi
    alert("Koniec gry :(");
    //zablokuj klawiatruę - usun przypiete zdarzenia z guzikow
    
}

function newGame () {
    //apisz do hasła ciag tesktowy otrzymany z okna dialogowego podzielony metodą split na tablice po jednym znaku w komorce
    password = prompt("Podaj hasło do odgadnięcia: ").split("");
    //funkcja do resetowania gry i rozpoczynania od nowa
    errorCounter = 0;
    document.getElementById("image").src = "img/h0.png";
    let passwordLength = password.length;
    maskedPassword = Array (passwordLength).fill("_");
    //wyswietl zamaskowane hasło
    document.getElementById("maskedPassword").innerHTML = maskedPassword.join("");
    //zresetuj eventListener dla pola textowego
//    document.getElementById("guessedChar").removeEventListener("input", gameOver);
//    document.getElementById("guessedChar").addEventListener("input", guess);
drawKeyboard();
}

function drawKeyboard(){ 
    //tworzymy string zawierający wszystkie możliwe do użycia litery
    const chars = "abcdefghijklmnopqrstuwxyz";
    //zamieniamy je na tablicę - po jednym znaku w każdej komórce
    let charsArray  = chars.split("");
    //znajdz i przygotuj odnośnik do lewej części strony
    let keyboardDiv = document.getElementById("keyboard");
    //czyscimy diva przed rozpoczeciem rysowania klawiatury
    keyboardDiv.innerHTML="";
    //lecimy pętlą foreach przez tablicę
    //dla każdego elementu tablicy wywołaj funkcję anonimową
    //dla każdego wywołana aktualny element jest dostępny pod nazwą zmiennej "c"
    charsArray.forEach((c) => {
        //keyboardDiv.innerHTML += c + " ";

        let newButton = document.createElement("button");
        newButton.innerHTML = c;
        newButton.addEventListener("click", buttonPressed);
        keyboardDiv.appendChild(newButton);
    });

}

function buttonPressed(event) {
    //console.log(event);
    let button = event.srcElement;
    let char = button.innerHTML;
    button.disabled = true;
    button.style.backgroundColor = "gray";
    console.log("wcisnieto guzik:"+ char);
    guess(char);
}

var password = "choinka".split("");
var maskedPassword 
