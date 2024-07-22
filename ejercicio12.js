let array = [4,6,9,7,3,8,10,50,80,6]
let min = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
        
    }
    
}

console.log("el numero más chico es:", min);
