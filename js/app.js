const navBar = document.querySelector('nav')
const navHeaders = ['home', 'about-me', 'skills', 'projects', 'contact']
const navHeadersCap = ['Home', 'About Me', 'Skills', 'Projects', 'Contact']

const addDesktopNav = () => {
    for (let i = 0; i < navHeaders.length; i++) {
        const navLink = document.createElement('a')
        navBar.appendChild(navLink)
        navLink.setAttribute('href', `#${navHeaders[i]}`)
        navLink.classList.add('nav-links')
        navLink.setAttribute('id', `${navHeaders[i]}-nav`)
        navLink.textContent = `${navHeadersCap[i]}`
    }
}

const addMobileNav = () => {
    const hamburgerMenu = document.createElement('i')
    navBar.appendChild(hamburgerMenu)
    hamburgerMenu.classList.add('fas', 'fa-bars', 'fa-2x')
    hamburgerMenu.setAttribute('onclick', 'openMobileNav()')
}

const removeNav = () => {
    while (navBar.firstChild) {
        navBar.removeChild(navBar.firstChild)
    }
}

if (window.innerWidth < 644) {
    removeNav()
    addMobileNav()
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 644) {
        removeNav()
        addMobileNav()
        defineNavEls()
    }

    if (window.innerWidth >= 644) {
        removeNav()
        addDesktopNav()
        defineNavEls()

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                scrollListenerActive = false
                removeCurrentClass()
                e.target.classList.add('current')
                lastNavLink = e.target.id.slice(0, -4)
            })
        })
    }
})

const openMobileNav = () => {
    document.querySelector('.mobile-nav-menu').style.display = 'block'
}

const closeMobileNav = () => {
    document.querySelector('.mobile-nav-menu').style.display = 'none'
}

// highlight the link for the current section 
const containerDiv = document.querySelector('.container')

let navLinks, home, aboutMe, skills, projects, contact, homeLink, aboutMeLink, skillsLink, projectsLink, contactLink 

const defineNavEls = () => {
    navLinks = document.querySelectorAll('.nav-links')

    home = document.querySelector('.home')
    aboutMe = document.querySelector('.about-me')
    skills = document.querySelector('.skills')
    projects = document.querySelector('.projects')
    contact = document.querySelector('.contact')
    
    homeLink = document.getElementById('home-nav')
    aboutMeLink = document.getElementById('about-me-nav')
    skillsLink = document.getElementById('skills-nav')
    projectsLink = document.getElementById('projects-nav')
    contactLink = document.getElementById('contact-nav')
}

defineNavEls()

let activeDiv
let lastDiv = 'home'

let scrollListenerActive = true

let lastNavLink

const getActiveDiv = () => {
    if (aboutMe.getBoundingClientRect().top > 2) {
        activeDiv = 'home'
    } else if (aboutMe.getBoundingClientRect().top <= 2 && skills.getBoundingClientRect().top > 2) {
        activeDiv = 'about-me'
    } else if (skills.getBoundingClientRect().top <= 2 && projects.getBoundingClientRect().top > 2) {
        activeDiv = 'skills'
    } else if (projects.getBoundingClientRect().top <= 2 && contact.getBoundingClientRect().top > 2) {
        activeDiv = 'projects'
    } else if (contact.getBoundingClientRect().top <= 2) {
        activeDiv = 'contact'
    }
}

const removeCurrentClass = () => {
    homeLink.classList.remove('current')
    aboutMeLink.classList.remove('current')
    skillsLink.classList.remove('current')
    projectsLink.classList.remove('current')
    contactLink.classList.remove('current')
}

const assignCurrentClass = () => {
    switch(activeDiv) {
        case 'home':
            homeLink.classList.add('current')
            break
        case 'about-me':
            aboutMeLink.classList.add('current')
            break
        case 'skills':
            skillsLink.classList.add('current')
            break
        case 'projects':
            projectsLink.classList.add('current')
            break
        case 'contact':
            contactLink.classList.add('current')
            break
    }
}

containerDiv.addEventListener('scroll', () => {
    getActiveDiv()

    if (activeDiv == lastNavLink) {
        scrollListenerActive = true;
    }

    if (!scrollListenerActive) return

    if (activeDiv !== lastDiv) {
        lastDiv = activeDiv
        removeCurrentClass()
        assignCurrentClass()
    }
})

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        scrollListenerActive = false
        removeCurrentClass()
        e.target.classList.add('current')
        lastNavLink = e.target.id.slice(0, -4)
    })
})