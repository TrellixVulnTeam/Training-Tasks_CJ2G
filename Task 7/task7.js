  
var a=1;
function register() {
  var name = prompt("Please enter your Full Name");
  var age = prompt("Please enter your Adhar Number");
  var rol = prompt("Please enter your Age");
  var faname = prompt("Please enter your Mobile Number");
  var table=document.getElementById('table')
  var row = table.insertRow(a);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML=name;
  cell2.innerHTML=faname;
  cell3.innerHTML=age;
  cell4.innerHTML=rol;
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

