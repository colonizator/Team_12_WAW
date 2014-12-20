function mymusic() {
    var table = document.getElementById("favoriten"); // get the table
    while (table.rows.length > 0) {
        table.deleteRow(0); // clear table
    }
    var xhr = new XMLHttpRequest(); // replace form and submit
    xhr.open('GET', './getFavorites.php?action=music', false);
    xhr.send();
    var music = JSON.parse(xhr.responseText);
    for (var i = 0; i < music.length; i++) {
        var row = table.insertRow(i); // add tr
        row.insertCell(0).innerHTML = music[i].Interpreter; // add td & set text
        row.insertCell(1).innerHTML = "<span>" + music[i].Albumtitel + "</span>"; // tricky but easy
        row.insertCell(2).innerHTML = music[i].Erscheinungsjahr;
        row.insertCell(3).innerHTML = music[i].Genre;
    }
    var header = table.createTHead(); // create the table head
    var row = header.insertRow(0); // add tr
    row.insertCell(0).innerHTML = "Interpreter"; // add td & set text
    row.insertCell(1).innerHTML = "Albumtitel";
    row.insertCell(2).innerHTML = "Erscheinungsjahr";
    row.insertCell(3).innerHTML = "Genre";
    document.getElementById("music").className = "button selected"; // change color over class
    document.getElementById("film").className = "button"; // reset class
}

window.addEventListener("load", function load() { // is executed when DOM is loaded
    document.getElementById("music").addEventListener("click", mymusic); // add listener on button
});
