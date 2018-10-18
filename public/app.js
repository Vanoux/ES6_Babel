"use strict";

// function getValue(){  
//     let name = prompt("Entrer votre nom : ");  
//     document.write(` Bonjour ${name}`);  
//  }

var memory = [];

var getValue = function getValue() {
    var valeur = document.getElementById("name").value;

    if (valeur == "") {
        valeur = "père noel";
    }
    memory.push(valeur);
    document.getElementById("answer").innerHTML = " Bonjour " + valeur + " !";

    var li = document.createElement('li');
    //valeur = valeur[0].toUpperCase()
    var letter = valeur.split('');
    // let letterMap = letter.map((x, i) => {
    // (i == 0){
    //     x.toUpperCase()
    // } 
    // })
    console.log(letter);
    li.innerHTML = valeur;
    document.getElementById("list").append(li);
    console.log(memory);
};
