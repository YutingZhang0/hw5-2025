var video;

window.addEventListener("load", function () {
    console.log("Good job opening the window");
    video = document.querySelector(".video");
    video.autoplay = false;
    video.loop = false;

    // Play
    document.querySelector("#play").addEventListener("click", function () {
        video.play();
        updateVolumeInfo();
        console.log("Play Video");
    });

    // Pause
    document.querySelector("#pause").addEventListener("click", function () {
        video.pause();
        console.log("Pause Video");
    });

    // Slow Down
    document.querySelector("#slower").addEventListener("click", function () {
        video.playbackRate *= 0.9;
        console.log("New speed: " + video.playbackRate.toFixed(5));
    });

    // Speed Up
    document.querySelector("#faster").addEventListener("click", function () {
        video.playbackRate /= 0.9;
        console.log("New speed: " + video.playbackRate.toFixed(5));
    });

    // Skip Ahead
    document.querySelector("#skip").addEventListener("click", function () {
        video.currentTime += 10;
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
        console.log("Current video time: " + video.currentTime.toFixed(2));
    });

    // Mute
    document.querySelector("#mute").addEventListener("click", function () {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
        console.log(video.muted ? "Muted" : "Unmuted");
    });

    // Volume Slider
    document.querySelector("#slider").addEventListener("input", function () {
        video.volume = this.value / 100;
        updateVolumeInfo();
    });

    // Old School
    document.querySelector("#vintage").addEventListener("click", function () {
        video.classList.add("oldSchool");
        console.log("Old School style applied");
    });

    // Original Style
    document.querySelector("#orig").addEventListener("click", function () {
        video.classList.remove("oldSchool");
        console.log("Original style applied");
    });
});

// Update the volume information
function updateVolumeInfo() {
    const volumeInfo = document.querySelector("#volume");
    volumeInfo.textContent = Math.round(video.volume * 100) + "%";
}
