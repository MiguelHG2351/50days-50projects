const btns = document.querySelectorAll('.btn-icon')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('click')
  })
})
