# Funda app Server Side - Service Worker

## Lighthouse
Lighthouse is een open-source, geautomatiseerde tool voor het verbeteren van de prestaties, kwaliteit en juistheid van een web-apps. Deze tool loopt de gehele app door en komt vervolgens met een rapport vol concrete bevindingen die nagelopen kunnen worden om de app te verbeteren.

## Funda App vóór het gebruik van Service Worker
Voorafgaand het toepassen van Service Worker is de eerste test uitgevoerd met behulp van Lighthouse. De onderstaande afbeelding was het resultaat.

![alt tag](https://github.com/nooroel-imamdi/funda-server-side/blob/serviceworker/lighthouse-voor.png?raw=true)
Rapport Lighthouse vóór toepassen Service Worker.

Verbeterpunten die werden aanbevolen door Lighthouse:
- [ ] Er is geen offline-versie van de app beschikbaar
- [ ] Netwerk maakt geen gebruik van HTTPS
- [ ] `<meta name="theme-color">`-tag ontbreekt
- [ ] Niet alle afbeeldingen bevatten ene `alt=""`-tag

## Aanbrengen verbeteringen

### Offline-versie
Met behulp Server Worker is het mogelijk om cache op te slaan en te serveren. Indien de gebruiker geen verbinding met het internet heeft, wordt de data uit de cache gehaald die bij de eerdere bezoeken zijn opgeslagen en ingeladen.

### Het gebruik van HTTPS (redirect vanaf HTTP)
De NPM-tool `express-https-redirect` zorgt ervoor dat de HTTP-requests worden geredirect naar HTTPS.

#### Installatie
`npm install express-https-redirect --save`

#### Gebruik
`var express = require('express');`
`var httpsRedirect = require('express-https-redirect');`
`var app = express();`
`app.use('/', httpsRedirect());`

### `<meta name="theme-color">`-tag ontbreekt
De meta-tag is toegevoegd aan de `<head>` van de HTML. Hiermee kan de topbar van een Web App een gewenste kleur krijgen, waardoor het meer op een App gaat lijken.

### `alt=""`-tag toevoegen
Alle afbeeldingen die worden ingeladen middels een `<img>`-tag zijn nu voorzien van een `alt=""`-tag.

## Funda App ná het gebruik van Service Worker
Het rapport van Lighthouse geeft na aanpassen van dit lijstje een 100/100 score. Daarmee is de Funda App volgens de richtlijnen van Lighthouse met succes geoptimaliseerd.

![alt tag](https://github.com/nooroel-imamdi/funda-server-side/blob/serviceworker/lighthouse-na.png?raw=true)
Rapport Lighthouse ná toepassen Service Worker.
