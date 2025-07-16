const emojis = ["💖", "😘", "😍", "💖", "💗", "💘", "💙"];

const photos = [
  'Img/photo1.jpg',
  'Img/photo2.jpg',
  'Img/photo3.jpg',
  'Img/photo4.jpg'
];

let lastHeartTime = 0;
let lastPhotoTime = 0;

const heartInterval = 300;   // ms entre chaque cœur (≈3.3 cœurs/s)
const photoInterval = 1500;  // ms entre chaque photo (≈0.66 photo/s)

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

  // Position horizontale centrée entre 35vw et 65vw
  const minLeft = 35; // en vw
  const maxLeft = 65;
  photo.style.left = (minLeft + Math.random() * (maxLeft - minLeft)) + "vw";

  photo.style.animationDuration = (3 + Math.random() * 3) + "s";
  photo.style.width = (50 + Math.random() * 100) + "px";
  photo.style.pointerEvents = 'none';

  document.body.appendChild(photo);

  setTimeout(() => {
    photo.remove();
  }, 6000);
}


function animate(time = 0) {
  if (time - lastHeartTime > heartInterval) {
    createHeart();
    lastHeartTime = time;
  }

  if (time - lastPhotoTime > photoInterval) {
    createPhoto();
    lastPhotoTime = time;
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
