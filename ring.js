$(document).ready(function () {

    var timerId = null;
    var ringMillis = 1000;
    var bellWrapper = $('.bell-wrapper');
    var bellImage = $('.bell-img');
    var negativeAngle = 1;
    var angle = 30;
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'bell.mp3');
    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);
    bellWrapper.click(onBellClick);

    function onBellClick() {
        if (timerId) {
            bellImage.css('opacity', '0');
            window.clearTimeout(timerId);
            timerId = null;
        } else {
            bellImage.css('opacity', '1');
            timerId = window.setInterval(ring, ringMillis);
        }
    }

    function ring() {
        var newAngle = negativeAngle * angle;
        bellWrapper.css('transform', 'rotate(' + newAngle + 'deg)');
        negativeAngle = negativeAngle * -1;
        if (audioElement.play) {
            audioElement.play();
        } else {
            audioElement.Play();
        }
    }
});
