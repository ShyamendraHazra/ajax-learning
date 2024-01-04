<?php

    include('inc/connect-to-db.php');

    $query = "SELECT * FROM demo";
    $res = mysqli_query($conn,$query);

    $rows = mysqli_fetch_all($res, MYSQLI_ASSOC);
    $jsonData = json_encode($rows);
    echo $jsonData;

    include('inc/destroy-db-connection.php');
?>