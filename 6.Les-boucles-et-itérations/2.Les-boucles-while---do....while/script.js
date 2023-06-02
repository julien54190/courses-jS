/**
 * ----- Version PSEUDO-CODE -----
 * 
 * TANT QUE <conditon> FAIRE
 *  <instruction>
 *FIN TANT QUE
 */

let time = 12 // Il est midi 
let i = 0

while (i < time) {
    console.log('Ding !', i)
    i++
}


/**
 * FAIRE
 *  <instruction>
 * TANT QUE <condition>
 */

let j = 12

do {
    console.log(j)
    j++
} while (j < 12 )