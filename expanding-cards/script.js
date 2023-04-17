const picture = document.querySelectorAll('.picture');
let lastActive = document.querySelectorAll('.picture')[0];

picture.forEach(card => {
  card.addEventListener('click', () => {
    if(card === lastActive) {
      return;
    }

    lastActive.classList.remove('active')
    card.classList.add('active')
    lastActive = card
  })
})
