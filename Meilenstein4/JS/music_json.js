var music = [
    {
        Interpreter: "Farin Urlaub",
        Albumtitel: "Faszination Weltraum",
        Erscheinungsjahr: 2014,
        Genre: "Punk"
    },
    {
        Interpreter: "Die Ärzte",
        Albumtitel: "Planet Punk",
        Erscheinungsjahr: 1995,
        Genre: "Punk"
    },
    {
        Interpreter: "The Offspring",
        Albumtitel: "Smash",
        Erscheinungsjahr: 1994,
        Genre: "Punk"
    },
    {
        Interpreter: "Blink 182",
        Albumtitel: "Enema of the State",
        Erscheinungsjahr: 1999,
        Genre: "Punk"
    },
    {
        Interpreter: "Rise Against",
        Albumtitel: "Siren Song of the Counter Culture",
        Erscheinungsjahr: 2004,
        Genre: "Punk"
    },
    {
        Interpreter: "Vampire Weekend",
        Albumtitel: "Vampire Weekend",
        Erscheinungsjahr: 2007,
        Genre: "Punk"
    },
    {
        Interpreter: "Bouncing Souls",
        Albumtitel: "How I spent my summer vacation",
        Erscheinungsjahr: 2001,
        Genre: "Punk"
    },
    {
        Interpreter: "Beatsteaks",
        Albumtitel: "Living Targets",
        Erscheinungsjahr: 2002,
        Genre: "Punk"
    },
    {
        Interpreter: "Bloc Party",
        Albumtitel: "Silent Alarm",
        Erscheinungsjahr: 2005,
        Genre: "Punk"
    },
    {
        Interpreter: "WIZO",
        Albumtitel: "Anderster",
        Erscheinungsjahr: 2004,
        Genre: "Punk"
    }
];

function mymusic() {
    var table = document.getElementById("favoriten"); // get the table
    while (table.rows.length > 0) {
        table.deleteRow(0); // clear table
    }
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
