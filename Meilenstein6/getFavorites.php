<?php
header('Content-Type: application/json');
if (isset($_GET["action"]) && $_GET["action"] == "music") {
    try {
        $mysqli = new mysqli("localhost", "test", "1234", "musik");
        if ($mysqli->connect_error) {
            throw new Exception("Datenbankzugriff zurzeit nicht möglich.");
        }

        if (!$result = $mysqli->query("SELECT i.name AS Interpret, a.titel AS Albumtitel, a.jahr AS Erscheinungsjahr, a.genre AS Genre, (SELECT GROUP_CONCAT(s.name SEPARATOR ', ') FROM songs s WHERE s.album = a.id) AS Songs FROM album a INNER JOIN interpreter i ON i.id = a.interpreter WHERE a.favorit = true;")) {
            throw new Exception("Daten konnten nicht gelesen werden.");
        }

        $encode = array();
        while ($row = $result->fetch_assoc()) {
            $encode[] = $row;
        }
        echo json_encode($encode);

        $mysqli->close();
    } catch (Exception $ex) {
        echo "[]";
    }
} else {
    try {
        $mysqli = new mysqli("localhost", "test", "1234", "filme");
        if ($mysqli->connect_error) {
            throw new Exception("Datenbankzugriff zurzeit nicht möglich.");
        }

        if (!$result = $mysqli->query("SELECT f.titel AS Filmtitel, r.name AS Regie, d.name AS Drehbuch, f.jahr AS Erscheinungsjahr, f.genre AS Genre, (SELECT GROUP_CONCAT(p.name SEPARATOR ', ') FROM person p INNER JOIN rolle r ON p.id = r.person WHERE r.film = f.id) AS Schauspieler FROM film f INNER JOIN person r ON f.regie = r.id INNER JOIN person d ON f.drehbuch = d.id WHERE f.favorit = true")) {
            throw new Exception("Daten konnten nicht gelesen werden.");
        }

        $encode = array();
        while ($row = $result->fetch_assoc()) {
            $encode[] = $row;
        }
        echo json_encode($encode);

        $mysqli->close();
    } catch (Exception $ex) {
        echo "[]";
    }
}
?>

