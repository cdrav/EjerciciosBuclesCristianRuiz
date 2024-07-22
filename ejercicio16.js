let array = [2, 5, 78, 65, 95, 4, 65, 81, 36, 59];

for (let i = 0; i < array.length; i++) {
    for (let h = 0; h < array.length - 1; h++) {
        if (array[h] > array[h + 1]) {
            let temp = array[h];
            array[h] = array[h + 1];
            array[h + 1] = temp;
        }
    }
}

console.log("Este es el array ordenado", array);
