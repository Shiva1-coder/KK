document.getElementById('openLetter').onclick = function () {
  document.getElementById('loveLetterModal').style.display = 'block';
};

document.querySelector('.close').onclick = function () {
  document.getElementById('loveLetterModal').style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == document.getElementById('loveLetterModal')) {
    document.getElementById('loveLetterModal').style.display = 'none';
  }
};
