var alpha = /^[a-zäöüß]+[a-z äöüß]*$/i;
var alphaNum = /^([a-zäöüß]+|[0-9]+)( ([a-zäöüß]+|[0-9]+))*$/i;
var person = /^[a-zäöüß]+ [a-zäöüß]+$/i;
var year = /^[0-9]{1,4}$/;
var list = /^([a-zäöüß]+[a-z äöüß]*)+(, ([a-zäöüß]+[a-z äöüß]*))*$/i;

function validateMusic() {
    var errors = 0;
    if (!check(alpha, document.getElementById("interpreter")))
        setFocus(errors++, document.getElementById("interpreter"));
    if (!check(alphaNum, document.getElementById("album")))
        setFocus(errors++, document.getElementById("album"));
    if (!checkYear(document.getElementById("year")))
        setFocus(errors++, document.getElementById("year"));
    if (!check(list, document.getElementById("songs")))
        setFocus(errors++, document.getElementById("songs"));
    return isValid(errors);
}

function validateFilm() {
    var errors = 0;
    if (!check(alpha, document.getElementById("titel")))
        setFocus(errors++, document.getElementById("titel"));
    if (!check(person, document.getElementById("regie")))
        setFocus(errors++, document.getElementById("regie"));
    if (!check(person, document.getElementById("drehbuch")))
        setFocus(errors++, document.getElementById("drehbuch"));
    if (!checkYear(document.getElementById("year")))
        setFocus(errors++, document.getElementById("year"));
    if (!check(list, document.getElementById("schauspieler")))
        setFocus(errors++, document.getElementById("schauspieler"));
    return isValid(errors);
}

function setFocus(errors, element) {
    if (errors === 0)
        element.focus();
}

function isValid(errors) {
    if (errors === 0)
        return true;
    alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    return false;
}

function check(type, element) {
    if (type.test(element.value)) {
        element.style.border = "none";
        return true;
    } else {
        element.style.border = "2px solid red";
        return false;
    }
}

function checkYear(element) {
    if (!check(year, element))
        return false;
    if (element.value > new Date().getFullYear()) {
        element.style.border = "2px solid red";
        return false;
    }
    return true;
}