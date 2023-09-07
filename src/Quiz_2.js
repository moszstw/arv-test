const arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10];

const duplicatesArray = arr.filter((value, index, self) => {
    return self.indexOf(value) !== index;
});

console.log(duplicatesArray);
