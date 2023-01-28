const video = document.querySelector("video");
const startButton = document.querySelector(".video-start");
const pauseButton = document.querySelector(".video-pause");

startButton.addEventListener('click',() => {
  video.play();
})

pauseButton.addEventListener('click',() => {
  video.pause();
})

video.addEventListener('canplaythrough',() => {
  let vDuration = parseInt(video.duration / 60, 10);
  console.log(vDuration);
})