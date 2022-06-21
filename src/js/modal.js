const modal = document.querySelector('.header__modal')
const btn = document.querySelector('.header__phone-button')
const overlay = document.querySelector('.header__modal-overlay')
const closeBtn = document.querySelector('.header__modal-close')

btn.addEventListener('click', () => {
  modal.classList.add('active')
  overlay.classList.add('active')
})

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active')
  overlay.classList.remove('active')
})

overlay.addEventListener('click', (e) => {
  if (e.target == overlay) {
    overlay.classList.remove('active')
  }
})
