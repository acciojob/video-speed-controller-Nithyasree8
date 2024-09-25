const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressFilled = document.getElementById('progress-filled');
const volumeInput = document.getElementById('volume');
const playbackSpeedInput = document.getElementById('playbackSpeed');
const rewindBtn = document.getElementById('rewind-btn');
const forwardBtn = document.getElementById('forward-btn');

// Update progress bar
video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${progress}%`;
});

// Toggle play/pause
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '❚ ❚';
    } else {
        video.pause();
        playPauseBtn.textContent = '►';
    }
});

// Update volume
volumeInput.addEventListener('input', () => {
    video.volume = volumeInput.value;
});

// Update playback speed
playbackSpeedInput.addEventListener('input', () => {
    video.playbackRate = playbackSpeedInput.value;
});

// Rewind 10 seconds
rewindBtn.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Forward 25 seconds
forwardBtn.addEventListener('click', () => {
    video.currentTime += 25;
});



      

     