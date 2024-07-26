function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

function setBackgroundImage(imageUrl) {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}

function setLoveLetterContent(content) {
    const loveLetter = document.getElementById('love-letter');
    if (loveLetter) {
        loveLetter.innerText = content;
    }
}