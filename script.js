const captcha = document.querySelector('.captcha');
const userCaptcha = document.querySelector('.user-captcha');
const checkBtn = document.querySelector('.check-btn');

let num1 = Math.round(Math.random() * 100) + 1;
let num2 = Math.round(Math.random() * 100);
let operator = [ '+', '-' ];
let randomArrIndex = Math.floor(Math.random() * 2);
let result;
switch (randomArrIndex) {
	case 0:
		result = num1 + num2;
		break;
	case 1:
		result = num1 - num2;
		break;
}
console.log(num1, num2, result, operator[randomArrIndex]);
captcha.innerHTML = num1 + operator[randomArrIndex] + num2;

checkBtn.addEventListener('click', () => {
	checkBtn.innerHTML = 'Clicked';
	userCaptchaValue = userCaptcha.value;
	console.log(userCaptchaValue);
	if (result == userCaptchaValue) {
		checkBtn.innerHTML = 'Success';
		window.alert('Captcha Success');
	}
	else {
		alert('Please Check Your Captcha');
		location.reload();
	}
});