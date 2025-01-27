function myFunction() {
    let text;
    if (confirm("Press a button!") == true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
      document.getElementById("demo").innerHTML = text;
    }

function mysecFunction() {
    let text;
    if (confirm("Press a button!") == true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
      document.getElementById("demo2").innerHTML = text;
    }
function changecolor() {
  var dd1=document.getElementById('terzo');
  dd1.className="colorelightblue";
  dd1.innerHTML="Good! you have change background color!";
    }
function changecolorsec() {
  var dd2=document.getElementById('quarto');
  dd2.className="coloregrey";
  dd2.innerHTML="Good! you have change background color!";
    }
function refresh(){
  window.location.reload("Refresh")
    }
