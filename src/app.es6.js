// function getValue(){  
//     let name = prompt("Entrer votre nom : ");  
//     document.write(` Bonjour ${name}`);  
//  }


const getValue = () => {
    let valeur = document.getElementById("name").value;

    if(valeur == ""){
       document.write(` Bonjour Père Noël ! `) 
    } else {
        document.write(` Bonjour ${valeur} !`); 
    }  
}

// let memory = [''];
// memory.push(getValue())
// console.log(memory)
