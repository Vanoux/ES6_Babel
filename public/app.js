"use strict";

// function getValue(){  
//     let name = prompt("Entrer votre nom : ");  
//     document.write(` Bonjour ${name}`);  
//  }


var getValue = function getValue() {
    var valeur = document.getElementById("name").value;

    if (valeur == "") {
        document.write(" Bonjour P\xE8re No\xEBl ! ");
    } else {
        document.write(" Bonjour " + valeur + " !");
    }
};

// let memory = [''];
// memory.push(getValue())
// console.log(memory)
