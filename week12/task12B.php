<?php
$cars = [["id"=>1,"maker"=>"Toyota","model"=>"Camry 50","price"=>30000],["id"=>2,"maker"=>"Mercedes","model"=>"C 100","price"=>20000],["id"=>3,"maker"=>"Daewoo","model"=>"Nexia","price"=>15000],["id"=>4,"maker"=>"Mercedes","model"=>"S 500","price"=>27000]];
$basket = null;
if (isset($_COOKIE["basket"])){
	$basket = json_decode($_COOKIE["basket"]);
}
else{
	$basket = [];
}
/* Enter your code here */
?>