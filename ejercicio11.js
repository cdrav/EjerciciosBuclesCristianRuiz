let array = [4,6,9,7,3,8,10,50,80,6]
let max = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i]> max) {
        max = array[i];
        
    }
    
}
console.log("el numero más  grande es:",max);