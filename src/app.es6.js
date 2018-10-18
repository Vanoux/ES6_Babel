// function getValue(){  
//     let name = prompt("Entrer votre nom : ");  
//     document.write(` Bonjour ${name}`);  
//  }

let memory = [];

const getValue = () => {
    let valeur = document.getElementById("name").value;

    if (valeur == "") {
        valeur = "père noel"
    }
    memory.push(valeur)
    document.getElementById("answer").innerHTML = ` Bonjour ${valeur} !`;

    let li = document.createElement('li')
    //valeur = valeur[0].toUpperCase()
    let letter = valeur.split('')
    // let letterMap = letter.map((x, i) => {
    // if (i == 0){
    //     x.toUpperCase()
    // } 
    // })
    console.log(letter)
    li.innerHTML = valeur
    document.getElementById("list").append(li)
    console.log(memory);
}