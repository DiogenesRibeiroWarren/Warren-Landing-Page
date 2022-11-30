const botaoParaExpandirOMenu = document.getElementById('openMenu')
const botaoParaFecharOMenu = document.getElementById('closeMenu')

botaoParaExpandirOMenu.addEventListener('click', () => {
    document.body.classList.add('menu-expanded')
})

botaoParaFecharOMenu.addEventListener('click', () => {
    document.body.classList.remove('menu-expanded')
})