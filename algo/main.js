function twoSum(array, target) {
    const indices = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == target) {
                indices.push(i, j);
                return indices;
            }
        }
    }
    return null;
}

const myArray = [2, 7, 11, 15];
const myTarget = 9;
const sum = twoSum(myArray, myTarget);
console.log(sum);
