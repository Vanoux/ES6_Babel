// function getValue(){  
//     let name = prompt("Entrer votre nom : ");  
//     document.write(` Bonjour ${name}`);  
//  }

let memory = [];

const getValue = () => {
    let valeur = document.getElementById("name").value;

    if (valeur == "") {
        valeur = "Père Noel"
    }
    memory.push(valeur)
    document.getElementById("answer").innerHTML = ` Bonjour ${valeur} !`;

    let li = document.createElement('li')
    //valeur = valeur[0].toUpperCase()
    li.innerHTML = valeur[0].toUpperCase()
    document.getElementById("list").append(li)
    console.log(memory);
}