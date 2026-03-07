import type { NavItem } from '../types'
import { navItems } from '../data'

export function createNavbar(): HTMLElement {
  const nav = document.createElement('nav')
  nav.className =
    'fixed top-0 left-0 right-0 z-50 bg-dark-base/90 backdrop-blur-md border-b border-white/5'

  nav.innerHTML = `
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

      <a href="#home" class="text-brand font-bold text-xl tracking-tight hover:text-brand-dark transition-colors duration-200">
        Jason Reyes
      </a>

      <div class="hidden md:flex items-center gap-8">
        ${navItems
          .map(
            (item: NavItem) => `
          <a
            href="${item.href}"
            data-href="${item.href}"
            class="nav-link text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            ${item.label}
          </a>
        `,
          )
          .join('')}
      </div>

      <div class="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
        <span class="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
        <span class="text-sm text-white/80 whitespace-nowrap">Disponible para trabajar</span>
      </div>

      <button
        id="menu-btn"
        class="md:hidden text-gray-400 hover:text-white transition-colors duration-200"
        aria-label="Abrir menu"
      >
        <svg id="icon-menu" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg id="icon-close" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div id="mobile-menu" class="hidden md:hidden bg-dark-100 border-t border-white/5">
      <div class="px-6 py-4 flex flex-col gap-4">
        ${navItems
          .map(
            (item: NavItem) => `
          <a
            href="${item.href}"
            class="mobile-nav-link text-gray-400 hover:text-brand text-base font-medium transition-colors duration-200"
          >
            ${item.label}
          </a>
        `,
          )
          .join('')}
        <div class="flex items-center gap-2 pt-2 border-t border-white/5">
          <span class="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
          <span class="text-sm text-white/70">Disponible para trabajar</span>
        </div>
      </div>
    </div>
  `

  const menuBtn = nav.querySelector('#menu-btn') as HTMLButtonElement
  const mobileMenu = nav.querySelector('#mobile-menu') as HTMLDivElement
  const iconMenu = nav.querySelector('#icon-menu') as SVGElement
  const iconClose = nav.querySelector('#icon-close') as SVGElement

  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden')
    mobileMenu.classList.toggle('hidden')
    iconMenu.classList.toggle('hidden', !isOpen)
    iconClose.classList.toggle('hidden', isOpen)
  })

  const mobileLinks = nav.querySelectorAll('.mobile-nav-link')
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden')
      iconMenu.classList.remove('hidden')
      iconClose.classList.add('hidden')
    })
  })

  return nav
}

export function initNavbarScroll(): void {
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link')
  const sections = document.querySelectorAll<HTMLElement>('section[id]')

  const setActive = (id: string): void => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('data-href') === `#${id}`
      link.classList.toggle('text-brand', isActive)
      link.classList.toggle('text-gray-400', !isActive)
    })
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.getAttribute('id') ?? '')
        }
      })
    },
    { threshold: 0.4 },
  )

  sections.forEach((section) => observer.observe(section))
}
