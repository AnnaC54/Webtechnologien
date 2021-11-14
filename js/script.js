/*

later: for token via angular (inf!) or php

window.chatToken = "...";
window.chatCollectionId = "...";
window.chatServer = "https://online-lectures-cs.thi.de/chat";


*/

/*Nutzen Sie dann zum Beispiel in den entsprechenden Aufrufen der XmlHttpRequest-Klasse die
global verfügbaren Informationen:

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let data = JSON.parse(xmlhttp.responseText);
        console.log(data);
    }
};
// Chat Server URL und Collection ID als Teil der URL
xmlhttp.open("GET", window.chatServer + "/" + window.chatCollectionId +
    "/user", true);
// Das Token zur Authentifizierung, wenn notwendig
xmlhttp.setRequestHeader('Authorization', 'Bearer ' + window.chatToken);
xmlhttp.send();*/


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 204) {
            console.log("Exists");
        } else if(xmlhttp.status == 404) {
            console.log("Does not exist");
        }
    }
};
xmlhttp.open("GET", "https://online-lectures-cs.thi.de/chat/f7286ba2-ed3e-4266-a184-e8c21c9f3b03/user/Tom", true);
xmlhttp.send();


// password check 

function pass()
{
if(document.Formular.Passwort1.value != document.Formular.Passwort2.value &  document.Formular.Passwort2.value != document.Formular.Passwort1.value)
{
	alert("Die angegebenen Passwörter stimmen nicht überein!");
	document.Formular.Passwort2.focus();
	return false;
}
}