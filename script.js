// Popup controls
const popup = document.getElementById("popup");

function openPopup() {
  if (popup) popup.style.display = "flex";
}

function goToFinal() {
  window.location.href = "final.html";
}

function goBack() {
  window.location.href = "index.html";
}

// Soft falling petals
const petalsContainer = document.getElementById("petals-container");

function createPetal() {
  if (!petalsContainer) return;

  const petal = document.createElement("span");
  petal.classList.add("petal");

  const startLeft = Math.random() * 100; // vw
  const drift = (Math.random() * 30 - 15).toFixed(1) + "vw"; // -15vw to +15vw
  const duration = 8 + Math.random() * 5; // 8–13s

  petal.style.left = startLeft + "vw";
  petal.style.setProperty("--x-move", drift);
  petal.style.animationDuration = duration + "s";

  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, duration * 1000);
}

// start petals gently
if (petalsContainer) {
  setInterval(createPetal, 600);
  for (let i = 0; i < 10; i++) {
    setTimeout(createPetal, i * 500);
  }
}



