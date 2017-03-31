# Funda app Server Side - Browserify

Met behulp van Browserify kunnen meerdere bestanden samengevoegd worden tot één bestand. In dit project is het toegepast op twee JavaScript-bestanden, die d.m.v. Browserify worden gebundeld in bundle.js.

## Installatie
(Indien `npm install` nog niet is uitgevoerd)

Installeren `npm install -g browserify`

## Bestanden bundelen

### Stap 1
In één van de bestanden die gebundeld moeten worden, wordt het andere bestand bovenaan die pagina aangeroepen met de volgende regel:

`var page = require('./page.js')`


### Stap 2
Onderaan dezelfde pagina wordt de volgende code geserveerd om tot export over te gaan:

`module.exports`


### Stap 3
Voer in de terminal (binnen hetzelfde mapje van het project) de volgende regel in:

`browserify [naam van bestand waarin stap 1 en stap 2 zijn verwerkt].js > bundle.js`

Bundle.js wordt met deze commandline aangemaakt of geupdate.


