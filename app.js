let NameWebsite = document.querySelector("h1");
text = document.title.split("");
NameWebsite.textContent = "";
let i = 0;

let mainTextLoading = () => {
	if (i < text.length) {
		NameWebsite.textContent += text[i];
		i++;
		setTimeout(mainTextLoading, 150);
	}
};
document.addEventListener("load", mainTextLoading());
setInterval(() => {
	i = 0;
	NameWebsite.textContent = "";

	mainTextLoading();
}, 9000);

let dc = document.querySelector("#copyDc");
let dcText = document.querySelector("#copyDcText");
let temp = dcText.textContent;

dc.addEventListener("click", () => {
	navigator.clipboard.writeText("kacpep#0828");
	dcText.textContent = "✔ Copied";
	setTimeout(() => {
		dcText.style.opacity = "0%";
		dcText.textContent = temp;
		dcText.style.opacity = "100%";
	}, 1000);
});
