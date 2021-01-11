// highlight the link for the current section 

const containerDiv = document.querySelector('.container')
const navLinks = document.querySelectorAll('.nav-links')

const home = document.querySelector('.home')
const aboutMe = document.querySelector('.about-me')
const skills = document.querySelector('.skills')
const projects = document.querySelector('.projects')
const resume = document.querySelector('.resume')

const homeLink = document.querySelector('[href="#home"]')
const aboutMeLink = document.querySelector('[href="#about-me"]')
const skillsLink = document.querySelector('[href="#skills"]')
const projectsLink = document.querySelector('[href="#projects"]')
const resumeLink = document.querySelector('[href="#resume"]')

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
    } else if (projects.getBoundingClientRect().top <= 2 && resume.getBoundingClientRect().top > 2) {
        activeDiv = 'projects'
    } else if (resume.getBoundingClientRect().top <= 2) {
        activeDiv = 'resume'
    }
}

const removeCurrentClass = () => {
    homeLink.classList.remove('current')
    aboutMeLink.classList.remove('current')
    skillsLink.classList.remove('current')
    projectsLink.classList.remove('current')
    resumeLink.classList.remove('current')
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
        case 'resume':
            resumeLink.classList.add('current')
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