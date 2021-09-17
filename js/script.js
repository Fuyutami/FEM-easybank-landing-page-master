'use strict'

const mobileMenu = document.querySelector('.mobile-navigation')
const btnMobileMenu = document.querySelector('.header__mobile-menu')
const iconMobileMenu = document.querySelector('.header__mobile-menu-icon')




btnMobileMenu.addEventListener('click', function () {

    if(mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden')
        iconMobileMenu.src =  'images/icon-close.svg'
    }
    else {
        mobileMenu.classList.add('hidden')
        iconMobileMenu.src =  'images/icon-hamburger.svg'
    }
})

window.addEventListener('resize', function () {
    if (window.innerWidth > 900 && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden')
        iconMobileMenu.src =  'images/icon-hamburger.svg'
    }
})