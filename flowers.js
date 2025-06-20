onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};


document.addEventListener('click', function () {
  const music = document.getElementById('bg-music');
  if (music && music.paused) {
    music.play();
  }
});
