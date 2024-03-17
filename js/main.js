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
    // Sélection aléatoire d'un son
    const randomSoundIndex = Math.floor(Math.random() * sounds.length);
    const soundUrl = sounds[randomSoundIndex];

    // Chargement et lecture du son
    audio.src = soundUrl;
    audio.play();

    // Sélection aléatoire d'une vidéo
    const randomVideoIndex = Math.floor(Math.random() * videos.length);
    const videoUrl = videos[randomVideoIndex];

    // Injection de la vidéo
    const iframeHtml = `
        <div id="first-video">
            <iframe
                src="${videoUrl}"
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

    playPauseButton.classList.add("playing");

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
