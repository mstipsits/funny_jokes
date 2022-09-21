import '@/styles/index.scss'

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

let menuIcon = document.getElementById("menuIcon");
menuIcon.addEventListener("click", () => toggleMenu(menuList));

function toggleMenu(menuList) {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "130px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}
