$(document).ready(function () {

    var timerId = null;
    var ringMillis = 500;
    var bell = $('.fa-bell');
    var negativeAngle = 1;
    var angle = 30;
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'bell.mp3');
    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);
    bell.click(onBellClick);

    function onBellClick() {
        if (timerId) {
            window.clearTimeout(timerId);
            timerId = null;
        } else {
            timerId = window.setInterval(ring, ringMillis);
        }
    }

    function ring() {
        var newAngle = negativeAngle * angle;
        bell.css('transform', 'rotate(' + newAngle + 'deg)');
        negativeAngle = negativeAngle * -1;
        if (audioElement.play) {
            audioElement.play();
        } else {
            audioElement.Play();
        }
    }
});
