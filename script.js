const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainGif = document.getElementById('main-gif');
const question = document.getElementById('question');

let yesSize = 1;

noBtn.addEventListener('mouseover', () => {
    // Calculate random position within the container
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    // Make the Yes button slightly bigger and harder to miss
    yesSize += 0.2;
    yesBtn.style.transform = `scale(${yesSize})`;
});

yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yay! See you on the 14th! ❤️";
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHpueGZ3bmZqZzR4eXh6ZzR4eXh6ZzR4eXh6ZzR4eXh6ZzR4eXh6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/T86p66L05p368/giphy.gif"; // Happy cat
    noBtn.style.display = 'none';
});
