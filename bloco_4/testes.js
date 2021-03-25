// Desafio 11

// Dividir a função em problemas menores. 

// 1 - Descobrir se há repetição no array.

//function findRepetition (arrayOfNumbers) {  

  //  for (let key of arrayOfNumbers) {
    //    if (arrayOfNumbers[key] === arrayOfNumbers[key ++]) {
      //          return (new Set(arrayOfNumbers)).size !== arrayOfNumbers.length;
        //    }
    //}
     
//} 

// Tive que criar mais uma função para verificar número de repetições

//function numberOfRepetionsEqualToOrLargerThan3 (repetitions) {
  //  repetitions = [];
   // let count = {};
    //let result = false;
    //repetitions.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    //if (count[i] === count[i] >= 3)
    //return result === true;
// }

//}

  
  // 2 - Acessar os valores do array.
  
  function theExcludentConditions (arrayOfNumbers) {
    let excludentConditions = false;
    for (let key of arrayOfNumbers) {
      if(arrayOfNumbers[key] < 0 || arrayOfNumbers[key] > 9) {
        return excludentConditions === true;
      }
    }
  }
  
  // 3 - Transformar em string.
  
  function convertArrayToString (arrayOfNumbers, firstIndex, secondIndex) {
    let result = ' ';
  
    for (let index = firstIndex; index <= secondIndex; index += 1) {
      result += arrayOfNumbers[index].toString();
    }
    return result;
  }
  
  function generatePhoneNumber(phoneNumber) {
   
    let message = ' ';
    phoneNumber.length === 11;
  
      if (phoneNumber.length != 11) {
        return message = 'Array com tamanho incorreto.';
      }
      else if (theExcludentConditions(phoneNumber) === true) {
        return message = 'não é possível gerar um número de telefone com esses valores'; 
      } 
      else if ( findDuplicates(phoneNumber) && findDuplicates(phoneNumber) === true) {
          return message = 'não é possível gerar um número de telefone com esses valores';
      } else {
        message = `(${convertArrayToString(phoneNumber,0, 1)})${convertArrayToString(phoneNumber, 2, 6)}-${convertArrayToString(phoneNumber, 7,10)}`;
      }
    return message;
  }


function findDuplicates (arrayOfNumbers) {
    let sorted_arrayOfNumbers = arrayOfNumbers.slice().sort();
    let results = [];
    let repetition;
    
    for (let index = 0; index < sorted_arrayOfNumbers.length; index += 1) {
        if (sorted_arrayOfNumbers[index + 1] == sorted_arrayOfNumbers[index]) {
           return results.push(sorted_arrayOfNumbers[0,10]);
        }
        if (results.length >= 3) {
            return repetition === true;
        }
}
 return results && repetition;
}


//function excludeTripleRepetitions (sorted_arrayOfNumbers) {
//    let repetition = false;
//    for (let index in sorted_arrayOfNumbers) {
 //       if (sorted_arrayOfNumbers.length[index] >= 3) {
   //          repetition === true;
 //       }
 //   }
   // return repetition;
// }

let myNumber = [3,9,9,9,9,0,5,0,7,9,0] ;
console.log(generatePhoneNumber(myNumber)) 

function verifyNumbers(number) {
    if (number <= 9 && number >= 0) {
      return number;
    }
  }
 
  function formatNumber(string) {
    let formatedNumber = '(';
    formatedNumber += string.slice(0, 2);
    formatedNumber += ') ';
    formatedNumber += string.slice(2, 7);
    formatedNumber += '-';
    formatedNumber += string.slice(7, 11);
 
    return formatedNumber;
  }
 
  function checkRepeat(array, number) {
    let checkCounter = 0;
    for (let index = 0; index < array.length; index += 1) {
      if (number === array[index]) {
        checkCounter += 1;
      }
    }
    return checkCounter;
  }
 
  function generatePhoneNumber(array) {
    if (array.length !== 11) {
      return 'Array com tamanho incorreto.';
    }
    let phoneNumber = '';
 
    for (let index = 0; index < array.length; index += 1) {
      let number = verifyNumbers(array[index]);
      let counter = checkRepeat(array, number);
      if (number === undefined || counter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      phoneNumber += number;
    }
 
    return formatNumber(phoneNumber);
}
// Desafio

function fizzBuzzConversor (number) {
    let secondNumber = 3;
    let thirdNumber = 5;
    
    switch (true) {
        case (number % 5 === 0 && number % 3 === 0) :
            return 'fizzBuzz';
        case (number % 3 === 0) :
            return 'fizz';
        case (number % 5 === 0) :
            return 'buzz';
        default :
        return 'bug!';
        break;
    }
} 

function fizzBuzzConvert (number) {

    if (number % 5 === 0 && number % 3 === 0) {
        return 'fizzBuzz';
    }
    else if (number % 3 === 0) {
        return 'fizz';
    }
    else if (number % 5 === 0) {
        return 'buzz';
    } else {
        return 'bug!';
    }
}

function fizzBuzz(arrayNumbers) {
    // seu código aqui
    let newArrayNumbers = [];
  
    for(let key = 0; key < arrayNumbers.length; key += 1) {
       newArrayNumbers.push(fizzBuzzConvert(arrayNumbers[key]));
    } 
    return newArrayNumbers;
  }

  myArrayTeste = [7, 9];
  console.log(fizzBuzz(myArrayTeste));

  function verifySum(lineA, lineB, lineC) {

    let sumOfAandB = lineA + lineB; // para linha C 
    let sumOfAandC = lineA + lineC; // para linha B
    let sumOfCandB = lineB + lineC; // para linha A

    if (lineA < sumOfCandB && lineB < sumOfAandC && lineC < sumOfAandB) {
        return true;
    }
    else {
        return false;
    }
  }

  function verifySubtraction(lineA, lineB, lineC) {

    let subtractionOfAandB = Math.abs(lineA - lineB);
    let subtractionOfAandC = Math.abs(lineA - lineC);
    let subtractionOfBandC = Math.abs(lineB - lineC);
    if (lineA = ) {

    }
  }
 


  function triangleCheck(lineA, lineB, lineC) {

    let verifyTriangle = false;
  
   if (() && 
        (lineA > Math.abs(subtractionOfBandC) && lineB > Math.abs(subtractionOfAandC) && lineC > Math.abs(subtractionOfAandB))) {
         return verifyTriangle === true;
   } else {
         return verifyTriangle === false;
   }
  }

  console.log(triangleCheck(10, 14, 8));