const images = ['0.jpeg', '1.jpeg', '2.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

// const path = window.location.pathname;
// console.log(path);
document.body.style.backgroundImage = `url(./img/${chosenImage})`;
document.body.style.bagroundSize = 'cover';
