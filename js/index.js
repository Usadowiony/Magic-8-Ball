const input = document.querySelector(".app__input");
const ball = document.querySelector(".app__img");
const result = document.querySelector(".app__result");
const answers = [
	"yes",
	"no",
	"count on it",
	"may be",
	"ask again",
	"no doubt",
	"absolutely",
	"go for it",
	"wait for it",
	"not now",
	"cannot tell now",
	"very likely",
];

const ballAnimation = () => {
	ball.classList.add("shake-animation");
	setTimeout(() => {
		ball.classList.remove("shake-animation");
	}, 1000);
};

const showAnswer = () => {
	const answer = answers[Math.floor(Math.random() * answers.length)];
	result.textContent = "";
	setTimeout(() => {
		result.textContent = answer;
	}, 1000);
};

ball.addEventListener("click", () => {
	ballAnimation();
	showAnswer();
});
