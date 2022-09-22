# advancedJS
# Blockchain JS Demo (frontend)
A web-based demonstration of blockchain concepts Labs. Après la formation advancedJS
on peut explorer
Thx Anders. et Christian L.
Using Pug (ex-Jade)
## Setup
Pour obtenir le code:

```
git clone https://github.com/rakhery/blockchain-js.git
```

Installation des  dépendences:

```
cd blockchain-js
npm install
```
Lancer le serveur:

```
npm start
```

OU

```
./bin/www
```
#Verifier si nodes est bien installé:
```
node ./bin/www
```

Navigateur:

```
http://localhost:3000
```

## En utilisant docker

Pour obtenir le code:

```
git clone https://github.com/rakhery/blockchain-js.git
```

Lancer docker:

```
cd blockchain-js
docker-compose up -d
```

Navigateur:

```
http://localhost:3000
```

## Configuration optionnel
Vous pouvez ajuster le "nombre de zéros" requis par la démo en modifiant les deux premières lignes de
`public/javascripts/blockchain.js`.

Parce qu'il y a 16 combinaisons possibles dans une valeur hexadécimale, chaque fois que vous augmentez la difficulté
par un, vous rendez le puzzle 16 fois plus difficile. Dans mes tests, une difficulté de 6 nécessite un
maximumNonce bien au-dessus de 500 000 000.

Si vous ajustez la difficulté au-dessus de 4, les blocs apparaîtront comme non exctractables car les données de l'app
suppose 4 zéros pour un bloc signé. Par exemple, sur la page `http://localhost:3000/block`
avec une difficulté de 6, le premier  qui fonctionne est `8719932` donnant un hachage de
`000000669445c22167511857d8f3b822b331c3342f25dfdcb326e35c1a7aa267`. Cela devient assez incontrôlable
rapidement cependant. Voici quelques estimations de temps aux différents seuils.

|digits|nonce|time estimate|
|------|-------|-------------|
|4|500,000|15 minutes
|5|8,000,000|4 heures
|6|128,000,000|3 jours
|7|2,048,000,000|1 mois
|8|32,768,000,000|2 ans
|9|524,288,000,000|30 ans
|10|8,388,608,000,000|481 ans
|11|134,217,728,000,000|7,690 ans
|12|2,147,483,648,000,000|123,036 ans
|13|34,359,738,368,000,000|1,968,581 ans
|14|549,755,813,888,000,000|31,497,291 ans
|15|8,796,093,022,208,000,000|503,956,662 ans

Dans la vraie product°  de bitcoins, le bloc "458 091" contient le résumé de hachage
`00000000000000000000011246f099d94f91628d71c9d75ad2f9a06e2beb7e92`. C'est 21 zéros d'affilée !
Ce bloc prendrait environ 8 454 989 768 407 765 ans à Miner.
