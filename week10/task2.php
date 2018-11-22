<html>
<head>
<style>
select{
  width:100%;
  background:white;
  padding:5px;
  border-radius:5px;
  color:#444444;
}
input{
  border-radius:5px;
  padding:5px;
}
input[type='text'],input[type='number']{
  width:calc(100% - 12px);
}
table tr td{
  padding:3px;
}
</style>
</head>
<?php
$makers = ["Toyota","BMW","Mercedes"];
$engine = ["gas","diesel","petroleum"];
?>
<form action="task9_2_submit.php" method="post">
   Maker: <select name="makers" id="makers">
      <?php
        for($i=0;$i<sizeof($makers);$i++){
          echo '<option>' . $makers[$i] . '</option>';
        }
      ?> 
      <table>  
    </select>

    <td>Years: </td><select name="years" id="years">
      <?php
        for($i=2018;$i>1900;$i--){
          echo '<option>' . ($i) . '</option>';
        }
      ?> 
      <table>
    </select>
    Model: <input type="text" name="model">
    <?php
        for($i=0;$i<sizeof($engine);$i++){
          echo '<input type="radio" name="engine" value="'.$engine[$i].'"> '.$engine[$i].'<br>';
        }
      ?>   
      <table>
    Price: <input type="text" name="price">
   <td> Additional:</td><td> <br><input type="checkbox" name="additional1" value="yes"> tax payed<br>
    <input type="checkbox" name="additional2" value="yes"> technical check passed<br>
    <input type="checkbox" name="additional3" value="yes" checked>doesn't require investment<br></td>
    
  </table>
  <input type="submit"/>
</form>