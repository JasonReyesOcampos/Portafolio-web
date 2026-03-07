import './index.css'
import { createNavbar, initNavbarScroll } from './components/navbar'
import { createHero } from './components/hero'
import { createAbout } from './components/about'
import { createProjects } from './components/projects'
import { createSkills } from './components/skills'
import { createContact } from './components/contact'

function initScrollReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>('.reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
  )

  elements.forEach((el) => observer.observe(el))
}

function init(): void {
  const app = document.getElementById('app')
  if (!app) return

  app.appendChild(createNavbar())
  app.appendChild(createHero())
  app.appendChild(createAbout())
  app.appendChild(createProjects())
  app.appendChild(createSkills())
  app.appendChild(createContact())

  requestAnimationFrame(() => {
    initScrollReveal()
    initNavbarScroll()
  })
}

init()
