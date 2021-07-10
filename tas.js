document.documentElement.addEventListener('touchmove', function (event) {
    event.preventDefault();
}, false);
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});