
/* Für das Auslagern später

let conf = {}
    import("security.js").then(module => {
        conf = module.val(); 
    }
*/


/* Teilaufgaben a: Registrieren

Das Formular zum Registrieren soll die Eingabemöglichkeiten überprüfen und durch
entsprechende Fehlermeldungen visualisieren, ob die Eingabe korrekt ist oder Fehler vorliegen.
Solange Fehler vorliegen, soll das Formular nicht abgesendet werden können. Zu überprüfen
sind die folgenden Aspekte:
- DONE _Der gewählte Nutzername soll min. drei Zeichen lang sein
- Der gewählte Nutzername darf noch nicht verwendet worden sein, nutzen Sie hierfür
- aus den Dummy-Datensatz und Informationen die Server-Funktion User Exists
- Das Passwort muss min. 8 Zeichen haben
- Die Passwort-Wiederholung muss dem Passwort entsprechen
- Die visuelle Anzeige, ob die Eingabe korrekt ist oder Fehler vorliegen soll mittels CSS-KlassenWechsel am Eingabefeld umgesetzt werden (vgl. Experimente). Sie können hier zum Beispiel
  die Farbe des Rahmens auf grün bzw. rot wechseln.

  Hinweis: Recherchieren Sie nach Möglichkeiten, um mittels onsubmit-Ereignis das Absenden
des Formulars zu verhindern.
*/


var chatServer = "https://online-lectures-cs.thi.de/chat";
var userTomToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM3MDcwMDI1fQ.lZ9CgGwXFKUrHdQIn8O0Zl2HorDtb9J0iTEaiZrYN60";
var userJerryToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiSmVycnkiLCJpYXQiOjE2MzcwNzAwMjV9.n5dIDlc_-3au_EmppGBSbXPoKHE2z2IZeMi2c-WvsRc";
var collectionId = "185ead53-1b4c-40a3-beff-89c5560908a2";

//var user = document.forms["myForm"]["fname"].value;
//let password1 = document.forms["myForm"]["password"].value;
//let password2 = document.forms["myForm"]["passwordConfirmation"].value;
var serverRequest = "https://online-lectures-cs.thi.de/chat/" + collectionId + "/user/" + userName;

var user = document.getElementById("username");
let password1 = document.getElementById("password");
let password2 = document.getElementById("password-rep");
var validation;
var userName;
/*
// Chat Server URL und Collection ID als Teil der URL
xmlhttp.open("GET", window.chatServer + "/" + window.chatCollectionId +
    "/user", true);
*/


// ******************* password check *******************

function passwordCheck() {

    if (password1 == password2) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
    }

    else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
    }
}

function checkExistState(userName) {

    userName = userName;

    // no username given 
    if (user == "") {
        alert("Pls enter your username");
        return false;
    }

    // bc you have to wait until server response if user already exists, you deactive the asynchronous property
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", serverRequest, false);
    xmlhttp.send();

    if (xmlhttp.status == 204) {
        return false;
    } else if (xmlhttp.status == 404) {
        return true;

    }
}


document.getElementById("registrationForm").onsubmit = function (evt) {

    user.style.border = "1px solid green";
    password1.style.border = "1px solid green";
    password2.style.border = "1px solid green";



    if (user.value.length < 3) {
        user.style.border = "1px solid red";
        validation = false;
    }

    if (password1.value.length < 8) {
        password1.style.border = "1px solid red";
        validation = false;
    }

    if (password2.value != password1.value) {
        password2.style.border = "1px solid red";
        validation = false;
    }

    if (checkExistState(user.value)) {
        user.style.border = "1px solid red";
        validation = false;
    }

    if (validation) {
        alert("Registrierung erfolgreich")
    }

    else {
        evt.preventDefault();
    }



}


