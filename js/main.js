const playPauseButton = document.getElementById("play-btn");
const iframeContainer = document.getElementById("video-container");
const audio = document.querySelector("audio");

const videos = [
    "https://player.vimeo.com/video/922973382?h=84d2736be5&amp;background=1&amp;loop=1",
    "https://player.vimeo.com/video/49804013&amp;background=1&amp;loop=1",
    "images/white.jpg",
];

const sounds = [
    "sounds/test-sound_1.mp3",
    "sounds/test-sound_2.mp3",
    "sounds/zelda.mp3",
];

let currentIndex = 0;

playPauseButton.addEventListener("click", function() {

    const soundUrl = sounds[currentIndex];
    const videoUrl = videos[currentIndex];

    // Code pour randomiser
//    const randomSoundIndex = Math.floor(Math.random() * sounds.length);
//    const soundUrl = sounds[randomSoundIndex];
//    const randomVideoIndex = Math.floor(Math.random() * videos.length);
//    const videoUrl = videos[randomVideoIndex];

    audio.src = soundUrl;
    audio.play();

    const iframeHtml = `
            <iframe
                src="${videoUrl}"
                frameborder="0"
                width="1203px"
                height="767px"
                >
            </iframe>
    `;

    playPauseButton.classList.add("playing");

    iframeContainer.innerHTML = '';
    iframeContainer.innerHTML = iframeHtml;

    iframeContainer.classList.add('fade-in');
    setTimeout(() => {
        iframeContainer.classList.add('show-video');
    }, 500);

    iframeContainer.classList.remove("hide-video");
    iframeContainer.classList.remove("fade-out");

    currentIndex = (currentIndex + 1) % sounds.length; // Réinitialiser à 0 une fois qu'on atteint la fin du tableau
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
