import type { Project } from '../types'
import { projects } from '../data'
import { icons } from '../icons'

function createProjectCard(project: Project): string {
  const linksHtml = project.url
    ? `
      <a
        href="${project.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-brand hover:text-brand-dark text-sm font-medium transition-colors duration-200"
        aria-label="Ver demo de ${project.title}"
      >
        Ver demo
        ${icons.externalLink('w-4 h-4')}
      </a>
    `
    : ''

  return `
    <div class="bg-dark-100 border border-white/5 rounded-2xl overflow-hidden hover:border-brand/30 transition-all duration-300 group flex flex-col">
      <div class="h-44 bg-dark-200 flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent"></div>
        <span class="text-5xl font-mono text-brand/40 select-none z-10">{ }</span>
        <div class="absolute top-4 right-4">
          ${
            project.url
              ? `
            <a
              href="${project.url}"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-white/5 hover:bg-brand/20 border border-white/10 hover:border-brand/50 text-white hover:text-brand rounded-full p-2 flex transition-all duration-200"
              aria-label="Abrir ${project.title}"
            >
              ${icons.externalLink('w-4 h-4')}
            </a>
          `
              : ''
          }
        </div>
      </div>

      <div class="p-6 flex flex-col flex-1">
        <h3 class="text-white font-bold text-lg mb-3 group-hover:text-brand transition-colors duration-200">
          ${project.title}
        </h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          ${project.description}
        </p>

        <ul class="space-y-1.5 mb-5">
          ${project.details
            .map(
              (detail) => `
            <li class="flex items-start gap-2 text-gray-500 text-sm">
              <span class="text-brand mt-0.5 shrink-0">&#9658;</span>
              ${detail}
            </li>
          `,
            )
            .join('')}
        </ul>

        <div class="flex flex-wrap gap-2 mt-auto">
          ${project.technologies
            .map(
              (tech) => `
            <span class="bg-brand/5 text-brand/80 border border-brand/20 px-3 py-1 rounded-full text-xs font-medium">
              ${tech}
            </span>
          `,
            )
            .join('')}
        </div>

        ${linksHtml ? `<div class="mt-5 pt-4 border-t border-white/5">${linksHtml}</div>` : ''}
      </div>
    </div>
  `
}

export function createProjects(): HTMLElement {
  const section = document.createElement('section')
  section.id = 'projects'
  section.className = 'py-24 bg-dark-base'

  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <span class="section-label mb-4">Proyectos</span>
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          Trabajo real, soluciones reales
        </h2>
        <p class="text-gray-400 max-w-xl mx-auto">
          Proyectos donde apliqué mis conocimientos técnicos para resolver problemas concretos.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal" style="transition-delay:0.15s">
        ${projects.map((project) => createProjectCard(project)).join('')}

        <div class="bg-dark-100 border border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-64">
          <div class="w-12 h-12 rounded-full bg-dark-200 flex items-center justify-center mb-4">
            ${icons.plus('w-6 h-6 text-gray-600')}
          </div>
          <p class="text-gray-500 font-medium">Más proyectos próximamente</p>
          <p class="text-gray-700 text-sm mt-1">En construccion...</p>
        </div>
      </div>
    </div>
  `

  return section
}
