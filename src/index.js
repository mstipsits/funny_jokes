import '@/styles/index.scss'

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

let menuIcon = document.getElementById("menuIcon");
menuIcon.addEventListener("click", () => toggleMenu(menuList));

let randomDog = document.getElementById("randomDog");
if (randomDog) {
    fetchRandomDog(randomDog)
}

function toggleMenu(menuList) {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "130px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

function fetchRandomDog(randomDog) {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            let dogImgUrl = data.message;
            let dogImg = document.createElement("img")
            dogImg.setAttribute('src', `${dogImgUrl}`)
            dogImg.setAttribute('width', '340px');
            dogImg.setAttribute('alt', 'Picture of random Dog');
            randomDog.appendChild(dogImg);
        })
        // eslint-disable-next-line no-console
        .catch(err => console.log(err))
}