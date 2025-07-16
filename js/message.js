const emojis = ["💖", "😘", "😍", "💖", "💗", "💘", "💙"];

const photos = [
  'Img/photo1.png',
  'Img/photo2.jpg',
  'Img/photo3.png',
];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('coeur');
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  heart.style.fontSize = (1 + Math.random() * 2) + "rem";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function createPhoto() {
  const photo = document.createElement('img');
  photo.classList.add('coeur');
  photo.src = photos[Math.floor(Math.random() * photos.length)];

  // Propriétés d’animation similaires aux cœurs
  photo.style.left = Math.random() * 100 + "vw";
  photo.style.animationDuration = (3 + Math.random() * 3) + "s";
  photo.style.width = (50 + Math.random() * 100) + "px";
  photo.style.pointerEvents = 'none';

  document.body.appendChild(photo);

  setTimeout(() => {
    photo.remove();
  }, 6000);
}

// Cœurs toutes les 200 ms
setInterval(createHeart, 200);

// Photos toutes les 4 à 7 secondes
setInterval(() => {
  createPhoto();
}, 4000 + Math.random() * 3000);
