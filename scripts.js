let age = document.querySelector("#age")
let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
let btn = document.querySelector("#container__button");
let result = document.querySelector("#container__result");


if (age != "" && height != "" && weight != "") {
    btn.addEventListener("click", function () { 
        const imcValue = weight.value / (height.value * height.value);
        result.textContent = `Seu imc é : ${imcValue.toFixed(2)}`
    });
}