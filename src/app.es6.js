// function getValue(){  
//     let name = prompt("Entrer votre nom : ");  
//     document.write(` Bonjour ${name}`);  
//  }

let memory = [];

const getValue = () => {

    //Récup l'input name
    let valeur = document.getElementById("name").value;

    if (valeur == "") {
        valeur = "père noel"
    }

    //Met la 1ère lettre du nom en majuscule
    let letterMaj = valeur.split('');
    letterMaj[0] = letterMaj[0].toUpperCase();
    let newWord = letterMaj.join('');
    memory.push(newWord);
    console.log(newWord);

     // Affiche le nom récupéré + la majuscule
     document.getElementById("answer").innerHTML = ` Bonjour ${newWord} !`;

    //Crée une liste avec les noms saisis
    let li = document.createElement("li")
    li.innerHTML = newWord
    document.getElementById("list").append(li)
}