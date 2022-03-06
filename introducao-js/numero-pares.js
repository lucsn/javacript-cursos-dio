let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 12, 15, 31];

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; 1 < array.length; i++){
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
        //  else {
            // console.log('${array[]} não é par!');
        // }
    }
   console.log(evenNums);
}

returnEvenValues(array);