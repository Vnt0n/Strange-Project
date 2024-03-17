const playPauseButton = document.getElementById("play-btn");
const iframeContainer = document.getElementById("video-container");
const audio = document.querySelector("audio");

const videos = [
    "https://player.vimeo.com/video/922973382?h=84d2736be5&amp;background=1&amp;loop=1",
    "https://player.vimeo.com/video/49804013&amp;background=1&amp;loop=1",
];

const sounds = [
    "sounds/test-sound_1.mp3",
    "sounds/test-sound_2.mp3",
    "sounds/zelda.mp3",
];

playPauseButton.addEventListener("click", function() {
    const randomSoundIndex = Math.floor(Math.random() * sounds.length);
    const soundUrl = sounds[randomSoundIndex];

    audio.src = soundUrl;
    audio.play();

    const randomVideoIndex = Math.floor(Math.random() * videos.length);
    const videoUrl = videos[randomVideoIndex];

    const iframeHtml = `
            <iframe
                src="${videoUrl}"
                frameborder="0"
                width="1203px"
                height="767px"
                >
            </iframe>
    `;

    iframeContainer.innerHTML = '';

    playPauseButton.classList.add("playing");

    iframeContainer.innerHTML = iframeHtml;

    iframeContainer.classList.add('fade-in');
    setTimeout(() => {
        iframeContainer.classList.add('show-video');
    }, 1000);

    iframeContainer.classList.remove("hide-video");
    iframeContainer.classList.remove("fade-out");

});

audio.addEventListener("ended", () => {
    playPauseButton.classList.remove("playing");

    iframeContainer.classList.remove("fade-in");
    iframeContainer.classList.remove("show-video");

    iframeContainer.classList.add("hide-video");
    iframeContainer.classList.add("fade-out");
    setTimeout(() => {
        const rotationCount = parseInt(playPauseButton.getAttribute("data-rotation")) || 0;

        playPauseButton.setAttribute("data-rotation", rotationCount + 90);
        playPauseButton.style.transform = `rotate(${rotationCount + 90}deg)`;
    }, 1500);
});
