

const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');
const volumeInput = document.getElementById('volume');
const playbackSpeedInput = document.getElementById('playbackSpeed');
const progressFilled = document.getElementById('progress-filled');

// Play/Pause functionality
playPauseButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseButton.textContent = '❚ ❚';
    } else {
        video.pause();
        playPauseButton.textContent = '►';
    }
});

// Rewind functionality
rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Forward functionality
forwardButton.addEventListener('click', () => {
    video.currentTime += 25;
});

// Volume control functionality
volumeInput.addEventListener('input', () => {
    video.volume = volumeInput.value;
});

// Playback speed control functionality
playbackSpeedInput.addEventListener('input', () => {
    video.playbackRate = playbackSpeedInput.value;
});

// Progress bar functionality
video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${progress}%`;
});
