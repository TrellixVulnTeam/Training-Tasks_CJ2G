  
var a=1;
function register() {
  var name = prompt("Please enter your name");
  var age = prompt("Please enter your age");
  var rol = prompt("Please enter your rollnumber");
  var faname = prompt("Please enter your father's name");
  // let   = prompt("Please enter roll number");
  var table=document.getElementById('table')
  var row = table.insertRow(a);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 =  row.insertCell(4);

  cell1.innerHTML=name;
  cell2.innerHTML=faname;
  cell3.innerHTML=age;
  cell4.innerHTML=rol;
  cell5.innerHTML='<button id="btnEdit" style="color:red " onclick=table.deleteRow()> Delete </button>';
  a+=1;

}
function remove(){
    if (a>1){
    document.getElementById('table').deleteRow(a-1);
    a-=1;
    }
}
