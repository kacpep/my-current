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
