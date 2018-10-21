# ES6_Babel#  Exo 

### Step 1
Créer un fichier app.js permettant de saluer l'utilisateur. L'utilisateur saisit son nom dans un champ de texte.
Quand l'utilisateur clique sur le bouton, le programme doit afficher juste en dessous *** "Bonjour {nom saisi} !" ***.

Si le champ est vide, le programme affiche *** "Bonjour Père Noël !" ***.


## Spécifications
* pas de mot clé 'function'
* pas de concaténation de String
* pas de de mot-clé 'var'
* pas de jQuery : full Vanilla Javascript
* architecture :
  * public/
    * index.html
    * style.css
    * (app.js généré depuis src/app.es6.js)
  * src/
    * app.es6.js

## Tooling
* ES6
* babel


### Step 2
Garder en mémoire sous forme de tableau la liste des noms saisies. Afficher cet historique sur la page et pour chacun des noms, mettre la première lettre en majuscule et le reste en minuscule.

### Step 3
Ajouter un champ de recherche et un bouton au dessus de l'historique. Lorsque ce bouton est cliqué, n'afficher que les noms commençant par la chaîne de caractères saisie dans ce champ ('case insensitive')

## Ressources
* [Wiki - ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)
* [Babel - Learn ES2015](http://babeljs.io/learn-es2015/)
* [Try ES6](http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=latest%2Creact%2Cstage-2&experimental=false&loose=false&spec=false&code=%5B1%2C2%2C3%5D.map(n%20%3D%3E%20n%20%2B%201)%3B&playground=true)
* [Vanilla Js](http://vanilla-js.com/)
* [De jQuery à Vanilla](http://putaindecode.io/fr/articles/js/de-jquery-a-vanillajs/)
* [You might not need jquery](http://youmightnotneedjquery.com/)


---
# babel-cli
[Doc Babel CLI](http://babeljs.io/docs/usage/cli/)

```
npm install --save-dev babel-cli babel-preset-env

./node_modules/.bin/babel --version
# 6.18.0 (babel-core 6.21.0)

## Créer le fichier .babelrc et y mettre :
{
  "presets": ["env"]
}

# Transpilation dans la sortie standard du terminal
./node_modules/.bin/babel NomFICHIER.es6.js

# Transpilation dans un fichier de destination
./node_modules/.bin/babel NomFICHIER.es6.js -o NomFICHIER.js

# Transpilation et watch
./node_modules/.bin/babel NomFICHIER.es6.js -w -o NomFICHIER.js
```

## Mémo babel
```
babel NomFICHIER.es6.js --out-dir public
babel NomFICHIER.es6.js -d public

babel NomFICHIER.es6.js --out-file begin.js
babel NomFICHIER.es6.js -o begin.js

babel NomFICHIER.es6.js --watch -o begin.js
babel NomFICHIER.es6.js -w -o begin.js
```
