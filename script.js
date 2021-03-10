const open = document.getElementById('open')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.toggle('show-nav'))
