// JavaScript for opening and closing the resume overlay
document.addEventListener('DOMContentLoaded', function () {
    const viewResumeButton = document.querySelector('.view-resume');
    const overlay = document.querySelector('.overlay');
    const resumeOverlay = document.querySelector('.resume-overlay');
    const closeButton = document.querySelector('.close-button');

    viewResumeButton.addEventListener('click', function () {
        overlay.style.display = 'block';
        resumeOverlay.src = 'images/Official_Resume.png';
    });

    closeButton.addEventListener('click', function () {
        overlay.style.display = 'block';
    });
});
