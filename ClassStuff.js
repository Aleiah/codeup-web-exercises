
var Fruits = ["apple", "banana", "orange", "apple", "pineapple"];
var Bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];



function allIndexesOf(array, value) {
    var result = [];
    for (var i = 0; i <array.length; i++) {
        if (array[i] === value) {
            result.push(i);
        }
        return result;
}

}
    console.log("The number of apples in this array is "+ allIndexesOf(Fruits, "apple"));



function removeAll(array, itemToRemove) {
    var output = [];
    array.forEach(function(element) {
        if(itemToRemove !== element) {
            output.push(element);
        };
    });
    return output;
}
console.log("The array [2,2,4] with all the 2s remove is:" + ([2,2,4] , 2));
