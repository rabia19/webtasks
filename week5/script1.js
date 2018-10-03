var M = [ [1,2,3],
          [4,5,6],
          [7,8,9] ];

function det(M) {
   if (M.length==2) { return (M[0][0]*M[1][1])-(M[0][1]*M[1][0]); }
   return M[0][0]*det(deleteRowAndColumn(M,0)) - 
          M[0][1]*det(deleteRowAndColumn(M,1)) +
          M[0][2]*det(deleteRowAndColumn(M,2));
}

function deleteRowAndColumn(M,index) {
   var temp = [];
   // copy the array first
   for (var i=0; i<M.length; i++) { temp.push(M[i].slice(0)); } 
   // delete the first row
   temp.splice(0,1); 
   // delete the column at the index specified
   for (var i=0; i<temp.length; i++) { temp[i].splice(index,1); } 
   return temp;
}
