
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
