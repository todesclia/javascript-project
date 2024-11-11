const add = (step) => {
    console.log("add function");
    let numberElement = document.getElementById("number");
    let number = parseInt(numberElement.value);
    console.log(number);
    number += step;
    numberElement.value = number;
};

const subtract = (step) => {
    console.log("substract function");
    let numberElement = document.getElementById("number");
    let number = parseInt(numberElement.value);
    console.log(number);
    number -= step;
    numberElement.value = number;
};

const reset = (step) => {
    console.log("reset function");
    let numberElement = document.getElementById("number");
    numberElement.value = step;
};