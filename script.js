const video = document.getElementById('video');
const playButton = document.getElementById('player__button');
const rewindButton = document.getElementById('rewind');
const fastForwardButton = document.getElementById('fastforward');
const volumeSlider = document.getElementById('volume');
const playbackSpeedSlider = document.getElementById('playbackSpeed');
const progressFilled = document.getElementById('progress__filled');

playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
rewindButton.addEventListener('click', () => video.currentTime -= 10);
fastForwardButton.addEventListener('click', () => video.currentTime += 25);
volumeSlider.addEventListener('input', updateVolume);
playbackSpeedSlider.addEventListener('input', updatePlaybackSpeed);

function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚'; // Change to pause icon
    } else {
        video.pause();
        playButton.textContent = '►'; // Change to play icon
    }
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

function updateVolume() {
    video.volume = volumeSlider.value;
}

function updatePlaybackSpeed() {
    video.playbackRate = playbackSpeedSlider.value;
}




      

     