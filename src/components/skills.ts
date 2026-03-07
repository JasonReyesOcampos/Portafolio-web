import type { SkillCategory } from '../types'
import { skillCategories } from '../data'

function createSkillCard(category: SkillCategory, delay: number): string {
  return `
    <div
      class="bg-dark-200 border border-white/5 rounded-2xl p-6 hover:border-brand/30 transition-all duration-300 reveal"
      style="transition-delay:${delay}ms"
    >
      <div class="flex items-center gap-3 mb-5">
        <span class="text-brand text-2xl font-mono">${category.icon}</span>
        <h3 class="text-white font-semibold text-base">${category.category}</h3>
      </div>
      <div class="flex flex-wrap gap-2">
        ${category.items
          .map(
            (item) => `
          <span class="bg-dark-100 text-gray-300 border border-white/5 hover:border-brand/30 hover:text-brand px-3 py-1.5 rounded-lg text-sm transition-colors duration-200 cursor-default">
            ${item}
          </span>
        `,
          )
          .join('')}
      </div>
    </div>
  `
}

export function createSkills(): HTMLElement {
  const section = document.createElement('section')
  section.id = 'skills'
  section.className = 'py-24 bg-dark-100'

  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <span class="section-label mb-4">Habilidades</span>
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          Stack técnico
        </h2>
        <p class="text-gray-400 max-w-xl mx-auto">
          Tecnologías y herramientas que domino para construir soluciones full stack robustas.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${skillCategories.map((cat, i) => createSkillCard(cat, i * 80)).join('')}
      </div>
    </div>
  `

  return section
}
