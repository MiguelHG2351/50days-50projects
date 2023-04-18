const $numbers = document.querySelectorAll('.number')
const $container = document.querySelector('.container')

$numbers.forEach($number => {
  $number.addEventListener('click', () => {
    const value = $container.style.getPropertyValue('--count').trim() - 0
    const position = Array.prototype.findIndex.call($numbers, (number) => number === $number)
    console.log(`Position: ${position}, currentValue: ${value}`)
    $container.style.setProperty('--count', position)
  })
})
