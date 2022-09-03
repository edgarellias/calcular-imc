let age = document.querySelector("#age").value;
let height = document.querySelector("#height").value;
let weight = document.querySelector("#weight").value;
let btn = document.querySelector("#container__button");
let result = document.querySelector("#container__result");


if (age != null && height != null && weight != null) {
    btn.addEventListener("click", function () {
        
        const calculate = weight / (height * height);
        console.log("clicou");
        result.textContent = `Seu imc é : ${calculate}`
    });
}


