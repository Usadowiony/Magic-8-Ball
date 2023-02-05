const input = document.querySelector(".app__input");
const ball = document.querySelector(".app__img");
const result = document.querySelector(".app__result");

const ballAnimation = () => {
	ball.classList.add("shake-animation");
	setTimeout(() => {
		ball.classList.remove("shake-animation");
	}, 1000);
};

ball.addEventListener("click", () => {
	ballAnimation();
});
