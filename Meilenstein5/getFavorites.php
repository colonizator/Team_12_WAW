<?php
header('Content-Type: application/json');
if (isset($_GET["action"]) && $_GET["action"] == "music") {
    echo file_get_contents("json/music.json");
} else {
    echo file_get_contents("json/film.json");
}
?>