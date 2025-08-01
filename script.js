const modal = document.getElementById("loveLetterModal");
const btn = document.getElementById("openLetter");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Yes/No logic
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const responseMsg = document.getElementById("responseMessage");

yesBtn.onclick = function () {
  responseMsg.innerHTML = "Yay! 💕 You've just made me the happiest person on Earth!";
  startConfetti();
};

noBtn.onclick = function () {
  responseMsg.innerHTML = "It’s okay... still sending you love and cookies 🍪💔";
};

// Confetti function
function startConfetti() {
  const duration = 5 * 1000;
  const end = Date.now() + duration;

  const colors = ['#bb0000', '#ffffff', '#ff69b4'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
