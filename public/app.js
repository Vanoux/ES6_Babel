"use strict";

// function getValue(){  
//     let name = prompt("Entrer votre nom : ");  
//     document.write(` Bonjour ${name}`);  
//  }

var memory = [];

var getValue = function getValue() {
    var valeur = document.getElementById("name").value;

    if (valeur == "") {
        valeur = "Père Noel";
    }
    memory.push(valeur);
    document.getElementById("answer").innerHTML = " Bonjour " + valeur + " !";

    var li = document.createElement('li');
    //valeur = valeur[0].toUpperCase()
    li.innerHTML = valeur[0].toUpperCase();
    document.getElementById("list").append(li);
    console.log(memory);
};
