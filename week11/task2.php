<!DOCTYPE html>
<html>

  <head>
	<style>
	
		.car{
		  display:flex;
		  border:1px solid black;
		  border-radius:5px;
		  width:250px;
		  padding:10px;
		}
		.title{
		  font-size:16px;
		  font-weight:bold;
		}
		.attributes .row{
		  display:flex;
		}
		.attributes .row div{
		  width:50%;
		}
		.attributes .row .name{
		  font-weight:bold;
		}
		.car img{
		  margin-right:10px;
		}
	</style>
  </head>

  <body>
    <div class="cars">
      <div class="car">
        <img width="100" height="60" src="https://toyota.com.my/ToyotaOfficialWebsite/media/ToyotaMedia/model/Camry%202.0/2016/colors_camry_grey.jpg"/>
	      <div class="right">
		<div class="title">Toyota Camry 50</div>
		<div class="attributes">
		  <div class="row"><div class="name">Year:</div><div>2011</div></div>
		  <div class="row"><div class="name">Price:</div><div>30.000$</div></div>            
		  </div>
		</div>
	      </div>
    </div>
  </body>

</html>


<?php
$user = 'root';
$pass = '';
$db = 'cars_database';


$db  = new mysqli('localhost', $user, $pass, $db) or die("Could not connect: ");

	    



?>
