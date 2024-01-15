const burger = document.querySelector(".burger-cont");
const navSec = document.querySelector(".nav-sec");
const navSecLink = document.querySelectorAll(".nav-sec__link");

function toggleNavSec() {
	burger.classList.toggle("active");
	navSec.classList.toggle("active");
	navMain.classList.toggle("hidden");

	toggleScrolling();
}

// checks if the nav sec is active
function isNavSecActive() {
	return navSec.classList.contains("active");
}
function toggleScrolling() {
	isNavSecActive()
		? (document.body.style.overflow = "hidden")
		: (document.body.style.overflow = "auto");
}
burger.addEventListener("click", () => {
	toggleNavSec();
});

navSecLink.forEach((link) => {
	link.addEventListener("click", () => {
		console.log("click");
		burger.classList.remove("active");
		navSec.classList.remove("active");
		navMain.classList.remove("hidden");
		toggleScrolling();
	});
});

// Nav main
const navMain = document.querySelector(".nav-main");
const navMainKey = document.querySelectorAll(".nav-main__key");

window.addEventListener("keydown", (e) => {
	// checks if anything is focused (an input or a button)
	if (document.activeElement === document.body) {
		navMainKey.forEach((key) => {
			if (key.getAttribute("data-key") === e.key) {
				key.classList.add("active");
				// redirects to the link if the key pressed is not N
				if (key.getAttribute("data-key") != "n") {
					window.location.href = key.getAttribute("href");
				}
			}
		});
		if (e.key === "n") {
			toggleNavSec();
		}
	}
});

// enables and disables the nav menu when the N key is pressed
navMainKey.forEach((key) => {
	if (key.getAttribute("data-key") === "n") {
		key.addEventListener("click", (e) => {
			e.preventDefault();
			toggleNavSec();
		});
	}
});

window.addEventListener("keyup", (e) => {
	navMainKey.forEach((key) => {
		if (key.getAttribute("data-key") === e.key) {
			key.classList.remove("active");
		}
	});
});
