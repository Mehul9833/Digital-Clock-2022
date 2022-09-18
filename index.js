let interval = setInterval(clock, 1000);

const stopButton = document.querySelector("#stop");
const startButton = document.querySelector("#start");

function clock() {
	const time = document.querySelector("#time");
	const date = document.querySelector("#date");

	const day = new Date().getDate();
	const month = new Date().getMonth();
	const year = new Date().getFullYear();
	const hours = new Date().getHours();
	let minutes = new Date().getMinutes();
	const seconds = new Date().getSeconds();
	const meridies = hours <= 12 ? "AM" : "PM";

	time.innerText = `${hours < 10 ? `0${hours}` : hours}:${
		minutes < 10 ? `0${minutes}` : minutes
	}:${seconds < 10 ? `0${seconds}` : seconds} ${meridies}`;
	date.innerText = `${day}/${month}/${year}`;
}

startButton.addEventListener("click", () => {
	interval = setInterval(clock, 1000);
});

stopButton.addEventListener("click", () => {
	clearInterval(interval);
});
