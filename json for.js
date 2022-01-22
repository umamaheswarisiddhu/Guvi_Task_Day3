 //for loop condition
let numbers = [10,20,30,40,50]
for (let i = 0; i < numbers.length; i++){
  console.log(numbers[i])
}



//for in condition
var person = {
    fname: "uma",
    lname: " maheswari",
    age:28
};
for (let x in person) {
    console.log(x + ": "+person[x])
}

//for of condition
let fruits=[{"name":"apple","orgin":"kashmir"},{"name":"mango","orgin":"salem"}]
for (let i of fruits){
    console.log(i)

//for each condition
var names = ["jerry",  "tom", "pluto", "micky", "mini"];
names.forEach(function1);
function function1(currentvalue,index) {
    console.log("index in array is: "+index + ":: value is: "+currentvalue);
}
