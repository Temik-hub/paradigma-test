const button = document.querySelector(".hero__aside-button-wrapper")
const aside = document.querySelector(".hero__aside")
const tip = document.querySelector(".hero__aside-tip")

button.addEventListener('click', () => {
  aside.classList.toggle('active')
  tip.classList.toggle('active')
})
