/* =====================================================
   ANERI FINANCIAL SERVICES
   JavaScript
===================================================== */

/* ==========================
   MOBILE NAVIGATION
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* ==========================
   FAQ ACCORDION
========================== */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        /* Close all other FAQs */

        document.querySelectorAll(".faq-answer").forEach(item => {

            if(item !== answer){
                item.style.maxHeight = null;
            }

        });

        /* Toggle current FAQ */

        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
        }else{
            answer.style.maxHeight = answer.scrollHeight + "px";
        }

    });

});

/* ==========================
   CONTACT FORM VALIDATION
========================== */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phonePattern =
    /^[0-9]{10}$/;

    if(name.length < 3){
        alert("Please enter your full name.");
        return;
    }

    if(!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    if(!phonePattern.test(phone)){
        alert("Phone number must contain exactly 10 digits.");
        return;
    }

    if(message.length < 10){
        alert("Message should contain at least 10 characters.");
        return;
    }

    alert("Thank you! Your message has been submitted successfully.");

    form.reset();

});

/* ==========================
   NAVBAR SHADOW ON SCROLL
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 8px 20px rgba(0,0,0,0.25)";

    }
    else{

        navbar.style.boxShadow =
        "0 5px 15px rgba(0,0,0,0.15)";

    }

});

/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================
   SCROLL ANIMATION
========================== */

const cards = document.querySelectorAll(
".service-card, .card, .testimonial, .about-grid div"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{

    threshold:0.2

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.7s ease";

    observer.observe(card);

});

/* ==========================
   ACTIVE NAV LINK
========================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

console.log("Aneri Financial Services Website Loaded Successfully.");

