const randomizerButton = document.querySelector(".randomizer");
const assignValues = () => {
	fetch("https://api.adviceslip.com/advice")
		.then((response) => response.json())
		.then((data) => {
			document.querySelector(
				".advice-id",
			).textContent = `Advice #${data.slip.id}`;
			document.querySelector(
				".advice-text",
			).textContent = `"${data.slip.advice}"`;
		});
};

randomizerButton.onclick = () => {
	assignValues();
};

assignValues();
