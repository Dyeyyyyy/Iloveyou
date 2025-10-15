const heart = document.getElementById('heart');
    const cat = document.querySelector('.cat');
    const letter = document.getElementById('letter');

    heart.addEventListener('click', () => {
      heart.parentElement.classList.add('move-down');
      cat.classList.add('move-up');
      letter.classList.add('show-letter');
    });