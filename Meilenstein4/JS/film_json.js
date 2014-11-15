var film = [
    {
        Filmtitel: "A Clockwork Orange",
        Regie: "Stanley",
        Drehbuch: "Stanley Kubrick",
        Erscheinungsjahr: "1971",
        Genre: "Komödie"
    },
    {
        Filmtitel: "Love Exposure",
        Regie: "Haruo Umekawa",
        Drehbuch: "Sion Sono",
        Erscheinungsjahr: "2008",
        Genre: "Psycho"
    },
    {
        Filmtitel: "Richy Guitar",
        Regie: "Michael Laux",
        Drehbuch: "Michael Laux",
        Erscheinungsjahr: "1985",
        Genre: "Komödie"
    },
    {
        Filmtitel: "Inglourious Basterds",
        Regie: "Quentin Tarantino",
        Drehbuch: "Quentin Tarantino",
        Erscheinungsjahr: "2009",
        Genre: "Komödie"
    },
    {
        Filmtitel: "Pulp Fiction",
        Regie: "Quentin Tarantino",
        Drehbuch: "Quentin Tarantino",
        Erscheinungsjahr: "1994",
        Genre: "Psycho"
    },
    {
        Filmtitel: "Léon - der Profi",
        Regie: "Luc Besson",
        Drehbuch: "Luc Besson",
        Erscheinungsjahr: "1994",
        Genre: "Romanze"
    },
    {
        Filmtitel: "Das Schicksal ist ein mieser Verräter",
        Regie: "Josh Boone",
        Drehbuch: "Scott Neustädter",
        Erscheinungsjahr: "2014",
        Genre: "Romanze"
    },
    {
        Filmtitel: "Tatsächlich ... Liebe",
        Regie: "Richard Curtis",
        Drehbuch: "Richard Curtis",
        Erscheinungsjahr: "2003",
        Genre: "Romanze"
    },
    {
        Filmtitel: "Crank",
        Regie: "Mark Neveldine",
        Drehbuch: "Mark Neveldine",
        Erscheinungsjahr: "2006",
        Genre: "Komödie"
    },
    {
        Filmtitel: "Snatch",
        Regie: "Guy Ritchie",
        Drehbuch: "Guy Ritchie",
        Erscheinungsjahr: "2000",
        Genre: "Komödie"
    },
    {
        Filmtitel: "Trainspotting",
        Regie: "Danny Boyle",
        Drehbuch: "John Hodge",
        Erscheinungsjahr: "1996",
        Genre: "Komödie"
    },
    {
        Filmtitel: "The Transporter",
        Regie: "Louis Leterrier",
        Drehbuch: "Luc Besson",
        Erscheinungsjahr: "2002",
        Genre: "Krimi"
    }
];

function myfilm() {
    var table = document.getElementById("favoriten"); // get the table
    while (table.rows.length > 0) {
        table.deleteRow(0); // clear table
    }
    for (var i = 0; i < film.length; i++) {
        var row = table.insertRow(i); // add tr
        row.insertCell(0).innerHTML = film[i].Filmtitel; // add td & set text
        row.insertCell(1).innerHTML = film[i].Regie;
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