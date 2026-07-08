// Welcome Message
window.onload = function () {
    alert("Welcome to Muppu Reethika's Portfolio!");
};

// Typing Animation
const text = [
    "Frontend Web Developer",
    "Web Designer",
    "React Learner"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let letter = "";

function type() {

    if (index < text.length) {

        if (charIndex < text[index].length) {

            currentText += text[index].charAt(charIndex);
            document.querySelector(".hero h3").textContent = currentText;

            charIndex++;

            setTimeout(type, 100);

        } else {

            setTimeout(erase, 1500);

        }

    }

}

function erase() {

    if (charIndex > 0) {

        currentText = currentText.slice(0, -1);

        document.querySelector(".hero h3").textContent = currentText;

        charIndex--;

        setTimeout(erase, 50);

    } else {

        index++;

        if (index >= text.length) {
            index = 0;
        }

        setTimeout(type, 500);

    }

}

document.addEventListener("DOMContentLoaded", type);


// Fade-in Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s";

});


// Scroll To Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563eb";
topButton.style.color = "white";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};


// Active Navbar

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});