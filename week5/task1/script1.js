function mat(){
  var s1 = document.getElementById('s11').value;
  var s2 = document.getElementById('s12').value;
  var s3 = document.getElementById('s13').value;
  var s4 = document.getElementById('s21').value;
  var s5 = document.getElementById('s22').value;
  var s6 = document.getElementById('s23').value;
  var s7 = document.getElementById('s31').value;
  var s8 = document.getElementById('s32').value;
  var s9 = document.getElementById('s33').value;

  document.getElementById('result').innerHTML=(s1)*((s5*s9)-(s8*s6))+s2*((s4*s9)-(s7*s6))+
  s3*((s4*s8)-(s5*s7));


}
let btn = document.getElementById('determinant');
btn.addEventListener('click',mat);

