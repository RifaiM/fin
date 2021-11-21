const button = document.querySelector("#sound");
const icon = document.querySelector("#sound > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove('bi-volume-up');
    icon.classList.add('bi-volume-mute');
    
  } else {
    audio.pause();
    icon.classList.remove('bi-volume-mute');
    icon.classList.add('bi-volume-up');
  }
  button.classList.add("fade");
});
