
window.addEventListener("scroll", () => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

document.getElementById("scrollToTopBtn").addEventListener("click", () => {
    console.log("ddddd");
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function toggleSubtree(folder) {
    const subtree = folder.nextElementElement;
    subtree.style.display = subtree.style.display === "block" ? "none" : "block";
}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("product-slide");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 3000); // Change slide every 3 seconds (adjust as needed)
}
