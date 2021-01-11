// highlight the link for the current section 

const containerDiv = document.querySelector('.container')

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

const activeDiv

const getActiveDiv = () => {
    
}

containerDiv.addEventListener('scroll', () => {
    if (aboutMe.getBoundingClientRect().top > 0) {
        homeLink.classList.add('current')
        aboutMeLink.classList.remove('current')
    } else if (aboutMe.getBoundingClientRect().top <= 0 && skills.getBoundingClientRect().top > 0) {
        homeLink.classList.remove('current')
        aboutMeLink.classList.add('current')
        skillsLink.classList.remove('current')
    } else if (skills.getBoundingClientRect().top <= 0 && projects.getBoundingClientRect().top > 0) {
        aboutMeLink.classList.remove('current')
        skillsLink.classList.add('current')
        projectsLink.classList.remove('current')
    } else if (projects.getBoundingClientRect().top <= 0 && resume.getBoundingClientRect().top > 0) {
        skillsLink.classList.remove('current')
        projectsLink.classList.add('current')
        resumeLink.classList.remove('current')
    } else if (resume.getBoundingClientRect().top <= 0) {
        projectsLink.classList.remove('current')
        resumeLink.classList.add('current')
    }
})