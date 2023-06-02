let numbers = [3, 8, 5, 9, 1];
let numbersLength = numbers.length;
for (let main = 0; main < numbersLength - 1; main++) {
	for (let cell = 0; cell < numbersLength - main - 1; cell++) {
	  if (numbers[cell] > numbers[cell + 1]) { // Si la valeur de la case actuelle est supérieure à la valeur de la case d'après, on permute les valeurs (en utilisant l'échange de variables)
     numbers[cell] = numbers[cell] + numbers[cell + 1];
		 numbers[cell + 1] = numbers[cell] - numbers[cell + 1];
		 numbers[cell] = numbers[cell] - numbers[cell + 1];
    }
  }
}
console.log(numbers);

console.log('------------------------')


function bubbleSort(arr) {
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Utilisation de la déstructuration pour échanger les éléments
        }
      }
    }
  
    return arr;
  }
  
  // Exemple d'utilisation
  const unsortedArray = ['orange', 'apple', 'banana', 'pear', 'grape'];
  const sortedArray = bubbleSort(unsortedArray);
  console.log(sortedArray); // Affiche ["apple", "banana", "grape", "orange", "pear"]
  