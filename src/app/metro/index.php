<?php 

while($row = mysqli_fetch_array($query)) {
    $results['idt'] = $row['idTreno'];
    $results['linea'] = $row['linea'];
    $results['direzione'] = $row['direzione'];
    $results['numchatting'] = $row['numchatting'];
    $results['tempo'] = $row['unixtime'];
    $results['stazione'] = $row['stazione'];
    array_push($strout, $results);
}
header('Content-Type: application/json');
echo'{"dati":' . json_encode($strout) . '}';
