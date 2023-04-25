const btns = document.querySelectorAll('.btn-icon span')
const btnMenu = document.querySelector('.btn-menu')
const $main = document.querySelector('main')
const sidenav = document.querySelector('.sidenav')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btnMenu.classList.toggle('active')
    $main.classList.toggle('active')
    sidenav.classList.toggle('active')
  })
})
