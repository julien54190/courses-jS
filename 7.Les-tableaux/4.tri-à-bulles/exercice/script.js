function bubbleSort(arr) {
    const len = arr.length
  
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // Utilisation de la déstructuration pour échanger les éléments
        }
      }
    }
  
    return arr
  }
  
  let persons = ['jules', 'laure', 'vincent', 'emma']
  
  const sortPersons = bubbleSort(persons)
  console.log(sortPersons)
  