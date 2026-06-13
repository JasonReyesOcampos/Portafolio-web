import { contactInfo } from '../data'
import { icons } from '../icons'

export function createContact(): HTMLElement {
  const section = document.createElement('section')
  section.id = 'contact'
  section.className = 'py-24 bg-dark-base'

  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <span class="section-label mb-4">Contacto</span>
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          Hablemos
        </h2>
        <p class="text-gray-400 max-w-xl mx-auto">
          Estoy buscando oportunidades como Full Stack Developer.
          No dudes en escribirme.
        </p>
      </div>

      <div class="max-w-2xl mx-auto reveal" style="transition-delay:0.15s">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

          <a
            href="mailto:${contactInfo.email}"
            class="group bg-dark-100 border border-white/5 hover:border-brand/30 rounded-2xl p-6 flex items-center gap-4 transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors duration-300">
              ${icons.mail('w-5 h-5 text-brand')}
            </div>
            <div class="min-w-0">
              <p class="text-gray-500 text-xs uppercase tracking-widest mb-1">Email</p>
              <p class="text-white text-sm font-medium truncate">${contactInfo.email}</p>
            </div>
          </a>

          <a
            href="tel:${contactInfo.phone.replace(/\s/g, '')}"
            class="group bg-dark-100 border border-white/5 hover:border-brand/30 rounded-2xl p-6 flex items-center gap-4 transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors duration-300">
              ${icons.phone('w-5 h-5 text-brand')}
            </div>
            <div>
              <p class="text-gray-500 text-xs uppercase tracking-widest mb-1">Teléfono</p>
              <p class="text-white text-sm font-medium">${contactInfo.phone}</p>
            </div>
          </a>

          <a
            href="${contactInfo.linkedin}"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-dark-100 border border-white/5 hover:border-brand/30 rounded-2xl p-6 flex items-center gap-4 transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors duration-300">
              ${icons.linkedin('w-5 h-5 text-brand')}
            </div>
            <div>
              <p class="text-gray-500 text-xs uppercase tracking-widest mb-1">LinkedIn</p>
              <p class="text-white text-sm font-medium">jason-reyes-580154299</p>
            </div>
          </a>

          <div class="bg-dark-100 border border-white/5 rounded-2xl p-6 flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
              ${icons.mapPin('w-5 h-5 text-brand')}
            </div>
            <div>
              <p class="text-gray-500 text-xs uppercase tracking-widest mb-1">Ubicación</p>
              <p class="text-white text-sm font-medium">${contactInfo.location}</p>
            </div>
          </div>

        </div>

        <div class="text-center">
          <a href="mailto:${contactInfo.email}" class="btn-primary">
            Enviar mensaje &rarr;
          </a>
        </div>
      </div>
    </div>

    <footer class="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-gray-600 text-sm">
        &copy; 2025 Jason Reyes Ocampos. Todos los derechos reservados.
      </p>
      <p class="text-gray-700 text-sm">
        Construido con TypeScript + Tailwind CSS
      </p>
    </footer>
  `

  return section
}
