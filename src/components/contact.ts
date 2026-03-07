import { contactInfo } from '../data'

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
          Estoy buscando oportunidades como Backend Developer Junior.
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
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <p class="text-gray-500 text-xs uppercase tracking-widest mb-1">LinkedIn</p>
              <p class="text-white text-sm font-medium">jason-reyes-580154299</p>
            </div>
          </a>

          <div class="bg-dark-100 border border-white/5 rounded-2xl p-6 flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
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
