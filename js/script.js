



/* Teilaufgaben a: Registrieren

Das Formular zum Registrieren soll die Eingabemöglichkeiten überprüfen und durch
entsprechende Fehlermeldungen visualisieren, ob die Eingabe korrekt ist oder Fehler vorliegen.
Solange Fehler vorliegen, soll das Formular nicht abgesendet werden können. Zu überprüfen
sind die folgenden Aspekte:
- DONE _Der gewählte Nutzername soll min. drei Zeichen lang sein
-  Der gewählte Nutzername darf noch nicht verwendet worden sein, nutzen Sie hierfür
- aus den Dummy-Datensatz und Informationen die Server-Funktion User Exists
- Das Passwort muss min. 8 Zeichen haben
- Die Passwort-Wiederholung muss dem Passwort entsprechen
- Die visuelle Anzeige, ob die Eingabe korrekt ist oder Fehler vorliegen soll mittels CSS-KlassenWechsel am Eingabefeld umgesetzt werden (vgl. Experimente). Sie können hier zum Beispiel
  die Farbe des Rahmens auf grün bzw. rot wechseln.

  Hinweis: Recherchieren Sie nach Möglichkeiten, um mittels onsubmit-Ereignis das Absenden
des Formulars zu verhindern.
*/


var chatServer = "https://online-lectures-cs.thi.de/chat";
var chatToken; 
var userTomToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjM3MDcwMDI1fQ.lZ9CgGwXFKUrHdQIn8O0Zl2HorDtb9J0iTEaiZrYN60";
var userJerryToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiSmVycnkiLCJpYXQiOjE2MzcwNzAwMjV9.n5dIDlc_-3au_EmppGBSbXPoKHE2z2IZeMi2c-WvsRc";
var collectionId = "185ead53-1b4c-40a3-beff-89c5560908a2";
var testUserTrue = "Tom"; 
var testUserFalse = "Yannick"; 


/*
// Chat Server URL und Collection ID als Teil der URL
xmlhttp.open("GET", window.chatServer + "/" + window.chatCollectionId +
    "/user", true);
*/

var serverRequest = "https://online-lectures-cs.thi.de/chat/" + collectionId + "/user/" + testUserTrue;

// password check;

function password() {

    password1 = document.getElementById("password");
    password2 = document.getElementById("password-rep");

    // If password not entered
    if (password1 == '')
        alert("Please enter Password");

    // If confirm password not entered
    else if (password2 == '')
        alert("Please enter confirm password");

    // If Not same return False.    
    else if (password1 != password2) {
        alert("\nPassword did not match: Please try again...")
        return false;
    }

    // If same return True.
    else {
        alert("Password Match: Welcome to GeeksforGeeks!")
        return true;
    }
}

// Server Request if user exists; 

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 204) {
            console.log("Exists");
        } else if (xmlhttp.status == 404) {
            console.log("Does not exist");
        }
    }
};
xmlhttp.open("GET", serverRequest, true);
xmlhttp.send();
