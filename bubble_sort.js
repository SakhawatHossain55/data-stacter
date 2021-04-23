const numbers = [ 12, 89, 14, 15, 16, 17, 18, 19, 20];

function bubbleSort(array) {
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if(array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        
    }
    return array;
}
// function bubbleSortDes(array) {
//     for (let j = 0; j < array.length; j++) {
//         for (let i = 0; i < array.length; i++) {
//             if(array[j] < array[j + 1]) {
//                 const temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
        
//     }
//     return array;
// }

const sorted = bubbleSort(numbers);
console.log(sorted);

// const sortedDes = bubbleSortDes(numbers);
// console.log(sortedDes);