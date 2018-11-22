<a href="task92.php?category=sport">Sport news</a> | <a href="task92.php?category=politics">Politic news</a><br/><br/>
<a href="task92.php?category=sport&format=json">Sport news (JSON)</a> | <a href="task92.php?category=politics&format=json">Politic news (JSON)</a><br/><br/>

<?php
$news = ["sport"=>["C. Ronaldo has scored three goals in last five matches","Golovkin has won match for title"],
"politics"=>["Trump has cancelled his visit to North Corea, because of sanction","N. Nazarbayev has approved new version of alphabet"]];
$category = ["sport"];


if (isset($_GET['category'])&& isset($_GET['format'])){ //function is used to check whether a variable is set or not
    $category =$_GET['category']; //переданных скрипту через параметры URL
    if($category=="sport"){
        print json_encode($news['sport']); //Возвращает JSON-представление данных
    }
    else{
        print json_encode($news['politics']); 
    }

}



elseif (isset($_REQUEST['category'])) {
	$category = $_REQUEST['category'];
	if($category=="sport"){
		
		foreach ($news as $key => $value) {
			if ($key=="sport") {
				 print $value[0]."<hr>";
				 print $value[1]."<hr>";
				
			}
		}
	}
	else{
		foreach ($news as $key => $value) {
			if ($key=="politics") {
				echo $value[0]."<hr>";
				echo $value[1]."<hr>";
			
			}
		}
	}
}

?>





