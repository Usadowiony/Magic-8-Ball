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
	console.log(input.textContent.slice(-1));
};

ball.addEventListener("click", () => {
	//if empty input
	if (input.value === "") {
		result.classList.add("app__result--error");
		result.textContent = "You must enter the question!";
	} else if (input.value.slice(-1) !== `?`) {
		result.classList.add("app__result--error");
		result.textContent = "The question must end with ?";
	} else {
		result.classList.remove("app__result--error");
		ballAnimation();
		showAnswer();
	}
});
