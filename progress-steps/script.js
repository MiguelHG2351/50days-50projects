const $numbers = document.querySelectorAll('.number')
const $container = document.querySelector('.container')

const $prevBtn = document.querySelector('#prevBtn')
const $nextBtn = document.querySelector('#nextBtn')

$nextBtn.addEventListener('click', function() {
  let position = $container.style.getPropertyValue('--count').trim() - 0
  if (position === 3) {
    return
  }
  console.log(`currentValue: ${position}`)
  position+=1;
  $container.style.setProperty('--count', position)

  if (position > 0) {
    $prevBtn.removeAttribute('disabled')
  }
  if (position === 3) {
    this.setAttribute('disabled', true)
  }

  $numbers.forEach((_$number, index) => {
    if ( index <= position) {
      return _$number.classList.add('active')
    }
    return _$number.classList.remove('active')
  })
})

$prevBtn.addEventListener('click', function() {
  let position = $container.style.getPropertyValue('--count').trim() - 0
  if (position === 0) {
    return
  }
  console.log(`currentValue: ${position}`)
  position-=1;
  $container.style.setProperty('--count', position)

  if (position > 0) {
    $nextBtn.removeAttribute('disabled')
  }
  if (position === 0) {
    this.setAttribute('disabled', true)
    $nextBtn.removeAttribute('disabled')
  }


  $numbers.forEach((_$number, index) => {
    if ( index <= position) {
      return _$number.classList.add('active')
    }
    return _$number.classList.remove('active')
  })
})

$numbers.forEach($number => {
  $number.addEventListener('click', () => {
    const value = $container.style.getPropertyValue('--count').trim() - 0
    const position = Array.prototype.findIndex.call($numbers, (number) => number === $number)
    console.log(`Position: ${position}, currentValue: ${value}`)
    $container.style.setProperty('--count', position)

    $numbers.forEach((_$number, index) => {
      if ( index <= position) {
        return _$number.classList.add('active')
      }
      return _$number.classList.remove('active')
    })
  })
})
