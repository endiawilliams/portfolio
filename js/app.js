const mobileNav = document.getElementById('mobile-nav-btn')

const closeMobileNav = () => {
    mobileNav.classList.remove('fa-times')
    mobileNav.classList.add('fa-solid', 'fa-bars')
    mobileNav.parentElement.setAttribute('onclick', 'openMobileNav()')
}

const openMobileNav = () => {
    mobileNav.classList.add('fa-times')
    mobileNav.classList.remove('fa-solid', 'fa-bars')
    mobileNav.parentElement.setAttribute('onclick', 'closeMobileNav()')
}