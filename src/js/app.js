let NameWebsite = document.querySelector("h1");
text = document.title.split("");
NameWebsite.textContent = "";
let i = 0;

let mainTextLoading = () => {
	//animation text
	if (i < text.length) {
		NameWebsite.textContent += text[i];
		i++;
		setTimeout(mainTextLoading, 150);
	}
};
document.addEventListener("load", mainTextLoading());
setInterval(() => {
	i = 0; //loop animation
	NameWebsite.textContent = "";

	mainTextLoading();
}, 9000);

let dc = document.querySelector("#copyDc");
let dcText = document.querySelector("#copyDcText");
let temp = dcText.textContent;

dc.addEventListener("click", () => {
	//click copy to discord
	navigator.clipboard.writeText("kacpep#0828");
	dcText.textContent = "✔ Copied";
	setTimeout(() => {
		dcText.style.opacity = "0%";
		dcText.textContent = temp;
		dcText.style.opacity = "100%";
	}, 1000);
});

let toogle = document.getElementById("toggle");
let objAnimtion = document.querySelectorAll("section");
let allPToogle = document.querySelectorAll(".option p");

//animation fn
let animation = () => {
	if (toogle.checked) {
		objAnimtion[0].classList.add("animation-out");
		objAnimtion[1].classList.remove("animation-in");

		allPToogle[1].classList.remove("active");
		allPToogle[0].classList.add("active");

		setTimeout(() => {
			objAnimtion[0].classList.add("d-none");
			objAnimtion[0].classList.remove("animation-out");
			objAnimtion[1].classList.remove("d-none");
			objAnimtion[1].classList.add("animation-in");
		}, 400);
	} else {
		objAnimtion[1].classList.add("animation-out");
		objAnimtion[0].classList.remove("animation-in");

		allPToogle[1].classList.add("active");
		allPToogle[0].classList.remove("active");
		setTimeout(() => {
			objAnimtion[1].classList.add("d-none");
			objAnimtion[1].classList.remove("animation-out");
			objAnimtion[0].classList.remove("d-none");
			objAnimtion[0].classList.add("animation-in");
		}, 400);
	}
};

let option = document.querySelector(".option");

option.addEventListener("click", () => {
	//click on p for phone big finger
	toogle.checked == true ? (toogle.checked = false) : (toogle.checked = true);
	animation();
});

toogle.addEventListener("click", () => {
	animation();
});
