<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>IMMD</title>
    </head>
    <body>
        <?php
        if (isset($_GET["filmtitel"])) { // is film then
            $array = array();
            $array[] = isset($_GET["filmtitel"]) ? $_GET["filmtitel"] : '';
            $array[] = isset($_GET["regie"]) ? $_GET["regie"] : '';
            $array[] = isset($_GET["drehbuch"]) ? $_GET["drehbuch"] : '';
            $array[] = isset($_GET["filmerscheinungsjahr"]) ? $_GET["filmerscheinungsjahr"] : '';
            $array[] = isset($_GET["schauspieler"]) ? $_GET["schauspieler"] : '';
            $array[] = isset($_GET["filmgenre"]) ? $_GET["filmgenre"] : '';
            $array[] = isset($_GET["filmfavorit"]) ? $_GET["filmfavorit"] : '';
            $datei = fopen("film.txt", "a");
            fwrite($datei, implode(",", $array) . "\n");
            fclose($datei);
            echo "Film wurde erfolgreich eingetragen.";
        } elseif (isset($_GET["interpreter"])) { // is music then
            $array = array();
            $array[] = isset($_GET["interpreter"]) ? $_GET["interpreter"] : '';
            $array[] = isset($_GET["albumtitel"]) ? $_GET["albumtitel"] : '';
            $array[] = isset($_GET["musicerscheinungsjahr"]) ? $_GET["musicerscheinungsjahr"] : '';
            $array[] = isset($_GET["songs"]) ? $_GET["songs"] : '';
            $array[] = isset($_GET["musicgenre"]) ? $_GET["musicgenre"] : '';
            $array[] = isset($_GET["musicfavorit"]) ? $_GET["musicfavorit"] : '';
            $datei = fopen("music.txt", "a");
            fwrite($datei, implode(",", $array) . "\n");
            fclose($datei);
            echo "Album wurde erfolgreich eingetragen.";
        } else { // error:
            echo "Fehler: Weder Musik- noch Filmdaten übertragen.";
        }
        ?>
    </body>
</html>