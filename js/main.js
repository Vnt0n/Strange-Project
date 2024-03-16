const playPauseButton = document.getElementById("play-btn");
const iframeContainer = document.getElementById("video-container");
const audio = document.querySelector("audio");

playPauseButton.addEventListener("click", function() {
    const iframeHtml = `
        <div id="first-video">
            <iframe
                src="https://player.vimeo.com/video/922973382?h=84d2736be5&amp;background=1&amp;loop=1"
                frameborder="0"
                width="1203px"
                height="767px"
                >
            </iframe>
        </div>
    `;
    iframeContainer.innerHTML = iframeHtml;
    iframeContainer.classList.add('fade-in');
    setTimeout(() => {
        iframeContainer.classList.add('show-video');
    }, 1000);
});

playPauseButton.addEventListener("click", () => {
    audio.play();
    playPauseButton.classList.add("playing");
});

audio.addEventListener("ended", () => {
    playPauseButton.classList.remove("playing");

    iframeContainer.classList.remove("fade-in");
    iframeContainer.classList.remove("show-video");

    iframeContainer.classList.add("hide-video");
    iframeContainer.classList.add("fade-out");
    setTimeout(() => {
        playPauseButton.classList.add("completed");
    }, 1500);
});
