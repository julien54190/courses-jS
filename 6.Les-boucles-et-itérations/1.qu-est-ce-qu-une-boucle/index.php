<?php
// Ce code designe pout 1 modulo 2 (sois 1 % 2 qui garde juste le reste de la division) si le reste est 0 chiffre paire sinon impaire

echo '1 est ' .(1 % 2 === 0 ? 'pair ': 'impair' )
.'<br' ;
echo '2 est ' .(2 % 2 === 0 ? 'pair ': 'impair' )
.'<br' ;
echo '3 est ' .(3 % 2 === 0 ? 'pair ': 'impair' )
.'<br' ;
echo '4 est ' .(4 % 2 === 0 ? 'pair ': 'impair' )
.'<br' ;
echo '5 est ' .(5 % 2 === 0 ? 'pair ': 'impair' )
.'<br' ;
echo '6 est ' .(6 % 2 === 0 ? 'pair ': 'impair' )
.'<br' ;
echo '7 est ' .(7 % 2 === 0 ? 'pair ': 'impair' )
.'<br' ;
echo '8 est ' .(8 % 2 === 0 ? 'pair ': 'impair' )
.'<br' ;
echo '9 est ' .(9 % 2 === 0 ? 'pair ': 'impair' )
.'<br' ;
echo '10 est ' .(10 % 2 === 0 ? 'pair ': 'impair' )
.'<br' ;

// Ici si on doit faire des modification il nous faudrai modifier sur les 10 lignes ou 100 ou 1000 ....
// c'est pour ceci que nous allons voir les boucle pour que un code comme celui si puisse tenir dans un minimum de ligne grace au boucle.