function table(){
		var tableRef = document.getElementById('students');
		if(document.getElementById("name").value==""){
			document.getElementById("name").style.border = "5px solid blue";

		}else if(document.getElementById("surname").value==""){
			document.getElementById("surname").style.border = "5px solid red";	
		
		}else if(document.getElementById("faculty").value=="-1"){
			document.getElementById("faculty").style.border="5px solid red";
		}else{
			// Insert a row in the table at the last row
			var newRow   = tableRef.insertRow();
			// Insert a cell in the row at index 0
			var newCell1  = newRow.insertCell();
			var newCell2  = newRow.insertCell();
			var newCell3  = newRow.insertCell();
			var newText1  = document.createTextNode(document.getElementById("name").value);
			var newText2  = document.createTextNode(document.getElementById("surname").value);
			var newText3  = document.createTextNode(document.getElementById("faculty").value);
			newCell1.appendChild(newText1);
			newCell2.appendChild(newText2);	
			newCell3.appendChild(newText3);		
		}
}



var btn=document.getElementById("addStudent")
btn.addEventListener("click", table);