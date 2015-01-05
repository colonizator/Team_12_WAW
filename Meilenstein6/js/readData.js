function myfilm() {
    read("film");
    document.getElementById("film").className = "button selected"; // change color over class
    document.getElementById("music").className = "button"; // reset class
}

function mymusic() {
    read("music");
    document.getElementById("music").className = "button selected"; // change color over class
    document.getElementById("film").className = "button"; // reset class
}

function read(data) {
    var table = document.getElementById("favoriten"); // get the table
    while (table.rows.length > 0) {
        table.deleteRow(0); // clear table
    }

    var xhr = new XMLHttpRequest(); // replace form and submit
    xhr.open('GET', './getFavorites.php?action=' + data, false);
    xhr.send();
    
    film = JSON.parse(xhr.responseText);
    if (film.length > 0) {
        for (var i = 0; i < film.length; i++) {
            var row = table.insertRow(i); // add tr
            for (var value in film[i]) {
                row.insertCell().innerHTML = film[i][value]; // add td & set text
            }
        }

        var header = table.createTHead(); // create the table head
        var row = header.insertRow(0); // add tr
        for (var value in film[0]) {
            row.insertCell().innerHTML = value; // add td & set text
        }
    }
}

window.addEventListener("load", function load() { // is executed when DOM is loaded
    myfilm(); // draw table on load
    document.getElementById("film").addEventListener("click", myfilm); // add listener on button
    document.getElementById("music").addEventListener("click", mymusic); // add listener on button
});