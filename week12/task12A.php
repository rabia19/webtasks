<?php
if (isset($_GET["name"])){
	setcookie("name",$_GET["name"]);
}
else if (!isset($_COOKIE["name"])){
?>
<form action="task12A.php">
Enter your name:<input type="text" name="name"/>
<input type="submit"/>
</form>
<?php
}
else{
echo "Hello ".$_COOKIE["name"];
}
?>

<?php
 	$dbhost = 'localhost:3306';
    $dbuser = 'root';
    $dbpass = 'root';
    $dbname = 'test3';

    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname)  
    if(! $conn ){
            die('Could not connect: ' . mysqli_error());
         }