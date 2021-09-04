  
var a=1;
var age;
var adno;
var mno;
function v(){
    age = prompt("Please enter your Age (Must be Greater then 10)");
    if (isNaN(age) || age < 10 || age > 100) {
        var text = alert("Input not valid");
        v();
      }
}
function nmo(){
     mno = prompt("Please enter your Mobile Number");
    if (isNaN(mno) || !Number(mno) ){
        alert("Eneter only number");
        nmo();
    }

}
function register() {
  var name = prompt("Please enter your Full Name", " ");
   adno = prompt("Please enter your Adhar Number");
  if (isNaN(adno) || !Number(adno)) {
      alert("Eneter only number");
      adno = prompt("Please enter your Adhar Number");

  }
  age = prompt("Please enter your Age (Must be Greater then 10)");
  if (isNaN(age) || age < 10 || age > 100) {
      alert("Enter Age in Number (Greter then 10)");
      v();
  } 
  
  mno = prompt("Please enter your Mobile Number");
  if (isNaN(mno) || !Number(mno) ){
    alert("Eneter only number");
    nmo();
}

  
  var table=document.getElementById('table')
  var row = table.insertRow(a);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML=name;
  cell2.innerHTML=adno;
  cell3.innerHTML=age;
  cell4.innerHTML=mno;
  cell5.innerHTML='<button id="btnEdit"  onclick=getConfirmation()>Delete </button>';
  a+=1;

}

function getConfirmation(){
    var retVal = confirm("Are you sure want to Delete ?");
    if (retVal == true)
        {
           
            remove();
            return true;
        } 
    else
        {
          
            return false;
        }
    }

function remove(){
        if (a>1){
        document.getElementById('table').deleteRow(a-1);
        a-=1;
        }
    }

 
function selectText(){
  var table = document.getElementById('table');
  for (var i=0;i < table.rows.length;i++){
   table.rows[i].onclick= function () {
    if(!this.hilite){
     this.origColor=this.style.backgroundColor;
     this.style.backgroundColor='#FFFF33';
     this.hilite = true;
    }
    else{
        this.style.backgroundColor=this.origColor;
     this.hilite = false;
    }
     }
  }
 }

