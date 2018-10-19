"use strict";

// function getValue(){  
//     let name = prompt("Entrer votre nom : ");  
//     document.write(` Bonjour ${name}`);  
//  }

//Tableau vide pour pusher les nom dedans
var memory = [];

// Fonction du boutton envoyer 
var getValue = function getValue() {

    //Récup la valeur de l'input name
    var valeur = document.getElementById("name").value;
    //Si la valeur est vide alors ce sera père noêl qui s'affichera
    if (valeur == "") {
        valeur = "père noel";
    }

    //Met la 1ère lettre du nom en majuscule
    var letterMaj = valeur.split(''); //On "split" le nom récupéré (éclate la string en array)
    letterMaj[0] = letterMaj[0].toUpperCase(); //On dit que pour la 1ère lettre du nom (indice[0] de l'array), on veut quelle soit égale à majuscule
    var newWord = letterMaj.join(''); //On "join" les éléments de l'array pour les remettre en string 
    memory.push(newWord); //Puis on "push" le nom transformé dans le tableau vide
    console.log(newWord);

    // Affiche le nom récupéré + la majuscule
    document.getElementById("answer").innerHTML = " Bonjour " + newWord + " !";

    //Crée une liste avec les noms saisis
    var li = document.createElement("li");
    li.innerHTML = newWord; //On écrit le nom dans la liste
    document.getElementById("list").append(li);
};

// Fonction du bouton rechercher
var searchValue = function searchValue() {
    //Récup la valeur de l'input research
    var search = document.getElementById("research").value;

    //Si le champs de recherche est vide
    if (search == "") {
        search = "Faite une recherche por favor !";
    }

    //Compare le mot recherché avec les mot dans le tableau
    var letterMaj = search.split(''); //On "split" le nom recherché (éclate la string en array)  
    letterMaj[0] = letterMaj[0].toUpperCase(); //On dit que pour la 1ère lettre du nom (indice[0] de l'array), on veut quelle soit égale à majuscule
    var word = letterMaj.join(''); //On "join" les éléments de l'array pour les remettre en string
    var compare = memory.filter(function (x) {
        return x.startsWith(word);
    }); //On "filter" les éléments du tableau avec la condition "startsWith" => booléen qui vérifie le mot cherché avec les mots du tableau

    //Si il n'y a pas de mots dans le tableau correspondant à la recherche
    if (compare == "") {
        compare = "Il n'y a aucun résultat pour cette recherche !";
    }
    //Affiche le résultat
    var display = document.getElementById("result");
    display.innerHTML = compare;

    console.log(compare);
};
