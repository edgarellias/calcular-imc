let age = document.querySelector("#age");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let btn = document.querySelector("#container__button");
let result = document.querySelector("#container__result");

if (age != "" && height != "" && weight != "") {
	btn.addEventListener("click", function () {
		const imcValue = weight.value / (height.value * height.value);
		if ((imcValue < 18, 5)) {
			result.textContent = `Seu imc é : ${imcValue.toFixed(1)} e você está muito magro`;
		}
		if ((imcValue > 18, 5 && imcValue < 24, 9)) {
			result.textContent = `Seu imc é : ${imcValue.toFixed(1)} e você está no peso normal`;
		}
		if ((imcValue >= 25 && imcValue <= 29, 9)) {
			result.textContent = `Seu imc é : ${imcValue.toFixed(1)} e você está com sobrepeso`;
		}
		if ((imcValue >= 30 && imcValue <= 34, 9)) {
			result.textContent = `Seu imc é : ${imcValue.toFixed(1)} e você está com obesidade grau I`;
		}
		if ((imcValue >= 35 && imcValue <= 39, 9)) {
			result.textContent = `Seu imc é : ${imcValue.toFixed(1)} e você está com obesidade grau II`;
		}
		if (imcValue > 40) {
			result.textContent = `Seu imc é : ${imcValue.toFixed(1)} e você está com obesidade grau III`;
		}
	});
}
