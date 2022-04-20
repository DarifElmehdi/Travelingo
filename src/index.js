window.onload = () => {
    const menu = document.getElementById("menu");
    const x = document.getElementById("x");
    const navbar = document.getElementById("nav");
    menu.addEventListener("click", () => {
        menu.classList.add("hidden");
        menu.classList.remove("block");
        x.classList.remove("hidden");
        x.classList.add("block");
        navbar.classList.remove("hidden");
        navbar.classList.add("flex");
    });
    x.addEventListener("click", () => {
        x.classList.add("hidden");
        x.classList.remove("block");
        menu.classList.remove("hidden");
        menu.classList.add("block");
        navbar.classList.add("hidden");
        navbar.classList.remove("flex");
    });
};
