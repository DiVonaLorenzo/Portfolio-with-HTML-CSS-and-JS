document.getElementById("myForm").addEventListener('submit', function(event) {
    let textarea = document.getElementById('myTextarea');
  if (textarea.value.trim() === "") {
    textarea.setAttribute('required', 'true');
    event.preventDefault();
    alert("You can't send the message without any characters");
  }
  else {
    alert('Thanks! You have correctly send a message.');
  }
});





function rock(){
    let rock = 1;
    let paper = 2;
    let scissor =3;
    let minimo = 1;
    let massimo = 3;
    let numeroCasuale = Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;
    alert('You have chose "Rock"');
    document.getElementById("resumemy").textContent='You have chose "Rock"';

    if (numeroCasuale==rock){
        alert('CPU chosen "Rock" the result is "Draw"');
        document.getElementById("resumecpu").innerHTML=('CPU have chosen "Rock"<br> <h1>Draw!</h1>');
    }
        else if(numeroCasuale==paper){
            alert('CPU chosen "Paper" You have Lost');
            document.getElementById("resumecpu").innerHTML=('CPU have chosen "Paper"<br><h1> You Lost! </h1>');
        }
        else if(numeroCasuale==scissor){
            alert('CPU chosen "Scissor" You have Win');
            document.getElementById("resumecpu").innerHTML=('CPU have chosen "Scissor"<br><h1> You Win! </h1>');
        }

}
function paper(){
    let rock = 1;
    let paper = 2;
    let scissor =3;
    let minimo = 1;
    let massimo = 3;
    let numeroCasuale = Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;
    alert('You have chose "Paper"');
    document.getElementById("resumemy").textContent='You have chose "Paper"';
    if (numeroCasuale==paper){
        alert('CPU chosen "Paper" the result is "Draw"');
        document.getElementById("resumecpu").innerHTML=('CPU have chosen "Paper"<br> <h1>Draw!</h1>');
    }
        else if(numeroCasuale==scissor){
            alert('CPU chosen "Scissor" You have Lost');
            document.getElementById("resumecpu").innerHTML=('CPU have chosen "Scissor"<br> <h1>You Lost! </h1>');
        }
        else if(numeroCasuale==rock){
            alert('CPU chosen "Rock" You have Win');
            document.getElementById("resumecpu").innerHTML=('CPU have chosen "Rock"<br> <h1>You Win!</h1>');
        }
}
function scissor(){
    let rock = 1;
    let paper = 2;
    let scissor =3;
    let minimo = 1;
    let massimo = 3;
    let numeroCasuale = Math.floor(Math.random() * (massimo - minimo + 1)) + minimo;
    alert('You have chose "Scissor"');
    document.getElementById("resumemy").textContent='You have chose "Scissor"';
    if (numeroCasuale==scissor){
        alert('CPU chosen "scissor" the result is "Draw"');
        document.getElementById("resumecpu").innerHTML=('CPU have chosen "Scissor"<br> <h1>Draw!</h1>');
    }
        else if(numeroCasuale==rock){
            alert('CPU chosen "Rock" You have Lost');
            document.getElementById("resumecpu").innerHTML=('CPU have chosen "Rock"<br> <h1>You Lost! </h1>');
        }
        else if(numeroCasuale==paper){
            alert('CPU chosen "Paper" You have Win');
            document.getElementById("resumecpu").innerHTML=('CPU have chosen "Paper"<br> <h1>You Win!</h1>');
        }
}
