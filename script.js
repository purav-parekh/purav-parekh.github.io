// var shownElement = document.querySelector(".show");

// // const changeTab = (tabList, id) => {
// // 	// let triggerTabList = document.querySelectorAll("#normalyze-tab");
// // 	let name = document.querySelector(id);
// // 	tabList.addEventListener("click", function (event) {
// // 		event.preventDefault();
// // 		const shownElement = document.querySelector(".show");
// // 		shownElement.classList.remove("active", "show");
// // 		name.classList.add("show", "active");
// // 	});
// // 	console.log("clicked");
// // };

// var triggerTabList = document.querySelector("#normalyze-tab");
// console.log(triggerTabList);
// let normalyze = document.querySelector("#normalyze");
// triggerTabList.addEventListener("click", function (event) {
// 	event.preventDefault();
// 	const shownElement = document.querySelector(".show");
// 	shownElement.classList.remove("active", "show");
// 	normalyze.classList.add("show", "active");
// 	console.log("clicked norm");
// });

// var triggerTabList = document.querySelector("#gwu-tab");
// let gwu = document.querySelector("#gwu");

// triggerTabList.addEventListener("click", function (event) {
// 	event.preventDefault();
// 	const shownElement = document.querySelector(".show");
// 	shownElement.classList.remove("active", "show");
// 	gwu.classList.add("show", "active");
// 	console.log("clicked gwu");
// });

// var triggerTabList = document.querySelector("#adcuratio-tab");
// let adcuratio = document.querySelector("#adcuratio");

// triggerTabList.addEventListener("click", function (event) {
// 	event.preventDefault();
// 	const shownElement = document.querySelector(".show");
// 	shownElement.classList.remove("active", "show");
// 	adcuratio.classList.add("show", "active");
// 	console.log("clicked adc");
// });

// var triggerTabList = document.querySelector("#freelancer-tab");
// let freelancer = document.querySelector("#freelancer");

// triggerTabList.addEventListener("click", function (event) {
// 	event.preventDefault();
// 	const shownElement = document.querySelector(".show");
// 	shownElement.classList.remove("active", "show");
// 	freelancer.classList.add("show", "active");
// 	console.log("clicked free");
// });

const paragraph = document.getElementById("my-paragraph");
const textNodes = getTextNodes(paragraph);
const hoverDuration = 3000; // 3 seconds

textNodes.forEach((node) => {
	const letters = node.textContent.split("");
	const fragment = document.createDocumentFragment();

	letters.forEach((letter, index) => {
		const span = document.createElement("span");
		span.setAttribute("data-letter", letter);
		span.style.setProperty("--hover-color", getRandomColor());
		span.textContent = letter;

		span.addEventListener("mouseover", () => {
			span.style.color = span.style.getPropertyValue("--hover-color");
			setTimeout(() => {
				span.style.color = "";
			}, hoverDuration);
		});

		fragment.appendChild(span);
	});

	node.replaceWith(fragment);
});

function getTextNodes(element) {
	const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
	const textNodes = [];

	let currentNode;
	while ((currentNode = treeWalker.nextNode())) {
		if (currentNode.textContent.trim() !== "") {
			textNodes.push(currentNode);
		}
	}

	return textNodes;
}

function getRandomColor() {
	const colors = [
		"#FF6EC7",
		"#00FFFF",
		"#39FF14",
		"#FFFF33",
		"#BF00FF",
		"#FFA500",
		"#FF69B4",
		"#00D8FF",
		"#00FF00",
		"#FFFF00",
		"#FF0000",
		"#00E6D4",
		"#FF7F50",
		"#EE82EE",
		"#CCFF00",
	];
	const letters = "0123456789ABCDEF";
	let color = "";
	for (let i = 0; i < 11; i++) {
		color = colors[Math.floor(Math.random() * 10)];
	}
	return color;
}

// profile pic transition
{
	let image = document.querySelector(".image img");

	image.addEventListener("mouseenter", () => {
		image.style.filter = "none";
	});
	image.addEventListener("mouseleave", () => {
		image.style.filter = "grayscale(100%) contrast(1) brightness(90%)";
	});
}

function handleResize() {
	let tabs = document.querySelector(".inner");
	var navPills = document.querySelector(".nav-pills");
	var screenSize = window.innerWidth;

	if (screenSize < 1500) {
		navPills.classList.add("justify-content-center");
		navPills.classList.remove("flex-column");
		tabs.classList.remove("inner", "d-flex");

		console.log(navPills.classList, tabs.classList);
	} else {
		navPills.classList.add("flex-column");
		navPills.classList.remove("justify-content-center");
		tabs.classList.add("d-flex");
		console.log("> 1500", tabs.classList);
	}
}

const changeTab = (triggerTab, contentTab) => {
	triggerTab.addEventListener("click", function (event) {
		event.preventDefault();
		const shownElement = document.querySelector(".show");
		const shownButton = document.querySelector("button.active");

		shownElement.classList.remove("active", "show");
		shownButton.classList.remove("active");

		contentTab.classList.add("show", "active");
		triggerTab.classList.add("active");

		// Add a small delay before applying the transition class
		setTimeout(function () {
			contentTab.classList.add("tab-content-transition");
		}, 10);

		// Remove the transition class after the transition has ended
		setTimeout(function () {
			contentTab.classList.remove("tab-content-transition");
		}, 300);
	});
};

let nistBtn = document.querySelector("#nist-tab");
let nist = document.querySelector("#nist");
changeTab(nistBtn, nist);

let normalyzeBtn = document.querySelector("#normalyze-tab");
let normalyze = document.querySelector("#normalyze");
changeTab(normalyzeBtn, normalyze);

let gwuBtn = document.querySelector("#gwu-tab");
let gwu = document.querySelector("#gwu");
changeTab(gwuBtn, gwu);

let adcuratioBtn = document.querySelector("#adcuratio-tab");
let adcuratio = document.querySelector("#adcuratio");
changeTab(adcuratioBtn, adcuratio);

let freelancerBtn = document.querySelector("#freelancer-tab");
let freelancer = document.querySelector("#freelancer");
changeTab(freelancerBtn, freelancer);



// project image tranisition
{
	let projects = document.querySelectorAll(".dIcCVR");
	projects.forEach((project) => {
		let projectImage = project.querySelector(".project-image .img");
		let projectDesc = project.querySelector(".project-content");
		const originalDisplay = window.getComputedStyle(document.querySelector(".project-content")).display;
		project.addEventListener("mouseenter", () => {
			projectImage.style.filter = "none";
			if (window.innerWidth < 1024) {
				projectDesc.style.display = "none";
			}
		});
		project.addEventListener("mouseleave", () => {
			projectImage.style.filter = "grayscale(100%) contrast(1) brightness(50%)";
			if (window.innerWidth < 1024) {
				projectDesc.style.display = originalDisplay;
			}
		});
	});
}
