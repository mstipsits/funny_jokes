import '@/styles/jokes.scss'

let joke = document.getElementById("joke");
if (joke) {
    fetchJoke(joke);
}

let likeButton = document.getElementById("likeButton");
if (likeButton) {
    likeButton.addEventListener("click", () => addToFavorites());
}

let newJokeButton = document.getElementById("newJokeButton");
if (newJokeButton) {
    newJokeButton.addEventListener("click", () => fetchJoke(joke));
}

let favoriteJokesList = document.getElementById("favoriteJokesList");

function fetchJoke(joke) {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then((response) => response.json())
        .then((data) => {
            joke.innerHTML = data.joke;
        })
        .catch((err) => {
            console.log(err);
            joke.innerHTML = "It seems that there are no jokes available :(";
            likeButton.setAttribute('disabled', "disabled");
        })
}

function addToFavorites() {
    let joke = document.getElementById("joke");
    let li = document.createElement("li");
    li.className = "favoriteElement";
    li.innerText = joke.innerHTML;
    li.addEventListener("click", () => removeElement(li));
    favoriteJokesList.appendChild(li);
}

function removeElement(elementToRemove) {
    if (confirm("Do you really want to delete the joke from your List?")) {
        favoriteJokesList.removeChild(elementToRemove);
    }
}
