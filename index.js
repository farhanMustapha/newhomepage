let navMenu = document.querySelector('.nav-menu')
let hamberger=document.querySelector('.hamburger')
let navLink=document.querySelector('.nav-link')

hamberger.addEventListener('click', function handleClick() {
  hamberger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

navLink.forEach(n=>n.addEventListener("click", function closeMenu() {
  hamberger.classList.remove('active')
  navMenu.classList.remove('active')
}))