const imageButtons = document.querySelectorAll('.button-like');

imageButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});
