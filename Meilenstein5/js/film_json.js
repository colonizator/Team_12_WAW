function myfilm() {
    var table = document.getElementById("favoriten"); // get the table
    while (table.rows.length > 0) {
        table.deleteRow(0); // clear table
    }
    var xhr = new XMLHttpRequest(); // replace form and submit
    xhr.open('GET', './getFavorites.php?action=film', false);
    xhr.send();
    var film = JSON.parse(xhr.responseText);
    for (var i = 0; i < film.length; i++) {
        var row = table.insertRow(i); // add tr
        row.insertCell(0).innerHTML = film[i].Filmtitel; // add td & set text
        row.insertCell(1).innerHTML = "<span>" + film[i].Regie + "</span>"; // tricky but easy
        row.insertCell(2).innerHTML = film[i].Drehbuch;
        row.insertCell(3).innerHTML = film[i].Erscheinungsjahr;
        row.insertCell(4).innerHTML = film[i].Genre;
    }
    var header = table.createTHead(); // create the table head
    var row = header.insertRow(0); // add tr
    row.insertCell(0).innerHTML = "Filmtitel"; // add td & set text
    row.insertCell(1).innerHTML = "Regie";
    row.insertCell(2).innerHTML = "Drehbuch";
    row.insertCell(3).innerHTML = "Erscheinungsjahr";
    row.insertCell(4).innerHTML = "Genre";
    document.getElementById("film").className = "button selected"; // change color over class
    document.getElementById("music").className = "button"; // reset class
}

window.addEventListener("load", function load() { // is executed when DOM is loaded
    myfilm(); // draw table on load
    document.getElementById("film").addEventListener("click", myfilm); // add listener on button
});