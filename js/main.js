const playPauseButton = document.getElementById("play-btn");
const iframeContainer = document.getElementById("video-container");
const audio = document.querySelector("audio");

playPauseButton.addEventListener("click", function() {

  const iframeHtml = `
     <iframe
        src="https://player.vimeo.com/video/922973382?h=84d2736be5&amp;background=1&amp;loop=1"
        frameborder="0"
        width="1203px"
        height="767px"
    >
    </iframe>
  `;
  iframeContainer.innerHTML = iframeHtml;
});

playPauseButton.addEventListener("click", () => {
    audio.play();
    playPauseButton.classList.add("playing");

});

audio.addEventListener("ended", () => {
  playPauseButton.classList.remove("playing");
  iframeContainer.style.display = "none";

  setTimeout(() => {
      playPauseButton.classList.add("completed");
  }, 700);

});
