document.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('dragstart', e => e.preventDefault());

document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('video').forEach(video => {
        video.setAttribute('controlsList', 'nodownload');
    });
});