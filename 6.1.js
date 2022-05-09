let arr = [1, 2, 6.7, null, 8, 1, undefined];
let zerocount = 0;
let numbercount = 0;
let evencount = 0; 
let oddcount = 0;

function countNumber(){
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" || !isNaN(arr[i])){
            numbercount += 1;
            if (arr[i] === 0){
                zerocount += 1;
            } else if (arr[i] % 2 === 0) {
                evencount += 1;
            } else {
                oddcount += 1;
            }
        }
    }
    console.log('В массиве : ' + numbercount + ' цифр, ' + zerocount +' нулей, '+ evencount + ' четных, ' + oddcount + ' нечетных!')
}

countNumber();