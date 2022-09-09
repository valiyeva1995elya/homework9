let arr = [5, 65, 143, 42, 3, 241, 56, 176, 254, 10];
let min = Math.min(...arr);
console.log(min);
let max = Math.max(...arr);
console.log(max);




let array = [];
for(let i = 0; i < 5; i++){
    let a = +prompt("Введите число");
    array.push(a);
}
console.log(array);

let c = 0;
for(let i = 0; i < array.length; i++){
    c += array[i]
}
console.log(c);

let d = c / array.length;
console.log(d);





let arrOne = [254, 5, 56, 65, 143, 42, 3];
let arrTwo = [15, 6, 56, 63, 143, 142, 13];
for ( let i = 0; i < arrOne.length; i++){
    let arr =[]
    for( let j = i; j < i +1; j++){
        if( arrOne[i] == arrTwo[j]){
            arr.push("=")
        }else if( arrOne[i] < arrTwo[j]){
            arr.push("<")
        }else if( arrOne[i] > arrTwo[j]){
            arr.push(">")
        } 
    }
    console.log(arr);
}






let arr2 = [254, 5, 56, 65, 143, 42, 3, 241, 176, 10];
let newArr = [];
for (let i = 0; i < arr2.length; i++){
    if(arr2[i]%2 == 0){
        newArr.push(arr2[i])
    }
   
}
console.log(arr2)
console.log(newArr)