<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>IMMD</title>
    </head>
    <body>
        <?php
        function read($var) {
            if (isset($_GET[$var])) {
                return $_GET[$var];
            } else {
                throw new Exception("Formular konnte nicht gesendet werden.");
            }
        }

        if (isset($_GET["filmtitel"])) { // is film then
            try {
                $filmtitel = read("filmtitel");
                $regie = read("regie");
                $drehbuch = read("drehbuch");
                $filmerscheinungsjahr = read("filmerscheinungsjahr");
                $schauspieler = explode(',', read("schauspieler")); // array
                $filmgenre = read("filmgenre");
                $filmfavorit = (isset($_GET["filmfavorit"])) ? true : false;

                $mysqli = new mysqli("localhost", "christian", "*swordfish*", "filme");
                if ($mysqli->connect_error) {
                    throw new Exception("Datenbankzugriff zurzeit nicht möglich.");
                }

                try {
                    if (!$mysqli->autocommit(false)) {
                        throw new Exception("Datenbank kann nicht vorbereitet werden.");
                    }

                    if (!$mysqli->query("INSERT IGNORE INTO person (name) VALUES ('$regie');")) {
                        throw new Exception("Daten konnten nicht eingefügt werden.");
                    }

                    if (!$mysqli->query("INSERT IGNORE INTO person (name) VALUES ('$drehbuch');")) {
                        throw new Exception("Daten konnten nicht eingefügt werden.");
                    }

                    if (!$mysqli->query("INSERT INTO film (titel, regie, drehbuch, jahr, genre, favorit) SELECT '$filmtitel', regie.id, drehbuch.id, '$filmerscheinungsjahr', '$filmgenre', '$filmfavorit' FROM person regie, person drehbuch WHERE regie.name = '$regie' AND drehbuch.name = '$drehbuch';")) {
                        throw new Exception("Daten konnten nicht eingefügt werden.");
                    }

                    $film_id = $mysqli->insert_id;

                    foreach ($schauspieler as $person) {
                        $person = trim($person);
                        if (!$mysqli->query("INSERT IGNORE INTO person (name) VALUES ('$person');")) {
                            throw new Exception("Daten konnten nicht eingefügt werden.");
                        }
                        if (!$mysqli->query("INSERT INTO rolle (film, person) SELECT '$film_id', person.id FROM person WHERE name = '$person';")) {
                            throw new Exception("Daten konnten nicht eingefügt werden.");
                        }
                    }

                    $mysqli->commit();

                    echo "Film wurde erfolgreich eingetragen.";
                } catch (Exception $ex) {
                    $mysqli->rollback();
                    echo $ex->getMessage();
                }
                $mysqli->autocommit(true);
                $mysqli->close();
            } catch (Exception $ex) {
                echo $ex->getMessage();
            }
        } elseif (isset($_GET["interpreter"])) { // is music then
            try {
                $interpreter = read("interpreter");
                $albumtitel = read("albumtitel");
                $musicerscheinungsjahr = read("musicerscheinungsjahr");
                $songs = explode(',', read("songs")); // array
                $musicgenre = read("musicgenre");
                $musicfavorit = (isset($_GET["musicfavorit"])) ? true : false;

                $mysqli = new mysqli("localhost", "christian", "*swordfish*", "musik");
                if ($mysqli->connect_error) {
                    throw new Exception("Datenbankzugriff zurzeit nicht möglich.");
                }
                
                 try {
                    if (!$mysqli->autocommit(false)) {
                        throw new Exception("Datenbank kann nicht vorbereitet werden.");
                    }

                    if (!$mysqli->query("INSERT IGNORE INTO interpreter (name) VALUES ('$interpreter');")) {
                        throw new Exception("Daten konnten nicht eingefügt werden.");
                    }
                    
                    if (!$mysqli->query("INSERT INTO album (interpreter, titel, jahr, genre, favorit) SELECT i.id, '$albumtitel', '$musicerscheinungsjahr', '$musicgenre', '$musicfavorit' FROM interpreter i WHERE i.name = '$interpreter';")) {
                        throw new Exception("Daten konnten nicht eingefügt werden.");
                    }

                    $album_id = $mysqli->insert_id;

                    foreach ($songs as $song) {
                        $song = trim($song);
                        if (!$mysqli->query("INSERT INTO songs (album, name) VALUES ('$album_id', '$song');")) {
                            throw new Exception("Daten konnten nicht eingefügt werden.");
                        }
                    }

                    $mysqli->commit();

                    echo "Album wurde erfolgreich eingetragen.";
                } catch (Exception $ex) {
                    $mysqli->rollback();
                    echo $ex->getMessage();
                }
                $mysqli->autocommit(true);
                $mysqli->close();
            } catch (Exception $ex) {
                echo $ex->getMessage();
            }
        } else { // error:
            echo "Fehler: Weder Musik- noch Filmdaten übertragen.";
        }
        ?>
    </body>
</html>