const playPauseButton = document.getElementById("play-btn");
const iframeContainer = document.getElementById("video-container");
const audio = document.querySelector("audio");

const medias = [
    { type: "video", src: "https://player.vimeo.com/video/922973382?h=84d2736be5&amp;background=1&amp;loop=1" },
    { type: "video", src: "https://player.vimeo.com/video/49804013&amp;background=1&amp;loop=1" },
    { type: "image", src: "images/white.jpg" },
];

const sounds = [
    "sounds/evolution_arm.mp3",
    "sounds/test-sound_2.mp3",
    "sounds/zelda.mp3",
];

let currentIndex = 0;
let isSoundPlaying = false;

playPauseButton.addEventListener("click", function() {

    if (isSoundPlaying) return;

    const soundUrl = sounds[currentIndex];
    const media = medias[currentIndex];
    const mediaType = media.type;
    const mediaUrl = media.src;

    audio.src = soundUrl;
    audio.play();

    if (mediaType === "video") {
        const iframeHtml = `
            <iframe
                src="${mediaUrl}"
                frameborder="0"
            ></iframe>
        `;
        iframeContainer.innerHTML = iframeHtml;
    } else if (mediaType === "image") {
        const imageHtml = `<div><img src="${mediaUrl}" alt="Image"/></div>`;
        iframeContainer.innerHTML = imageHtml;
    }

    playPauseButton.classList.add("playing");

    iframeContainer.classList.add('fade-in');
    setTimeout(() => {
        iframeContainer.classList.add('show-video');
        isSoundPlaying = false;
    }, 500);

    iframeContainer.classList.remove("hide-video");
    iframeContainer.classList.remove("fade-out");

    currentIndex = (currentIndex + 1) % sounds.length; // Réinitialiser à 0 une fois qu'on atteint la fin du tableau
    isSoundPlaying = true;
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

console.log("Let it happen");
