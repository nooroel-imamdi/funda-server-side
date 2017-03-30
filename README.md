# Funda app Server Side - Optimization

## Compression
Met behulp van `compression`, die `deflate` en `gzip` ondersteunt, wordt getracht bestanden 'samen te persen' voor een betere performance. Er zijn twee metingen verricht: één voor en één na de het toepassen van compression.

Resultaat vóór het toepassen van Compression
![alt tag](https://github.com/nooroel-imamdi/funda-server-side/blob/optimization/voor-gzip.png?raw=true)

Resultaat ná het toepassen van Compression
![alt tag](https://github.com/nooroel-imamdi/funda-server-side/blob/optimization/na-gzip.png?raw=true)

Resultaat volgens checkgzipcompression.com
![alt tag](https://github.com/nooroel-imamdi/funda-server-side/blob/optimization/gzip-checker.png?raw=true)

81,7% winst werd er behaald door gebruik van Gzip. Van 9,815 bytes naar 1,798 bytes. 


