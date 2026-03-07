export function createAbout(): HTMLElement {
  const section = document.createElement('section')
  section.id = 'about'
  section.className = 'py-24 bg-dark-100'

  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div class="reveal">
          <span class="section-label mb-4">Sobre mi</span>
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            Desarrollador backend con vision arquitectonica
          </h2>
          <div class="space-y-4 text-gray-400 leading-relaxed text-base">
            <p>
              Soy estudiante de ultimo anio de Ingenieria en Sistemas de Informacion en
              la Universidad Nacional de Costa Rica (graduacion estimada 2026).
              Mi enfoque principal es el desarrollo backend, donde combino conocimientos
              tecnicos solidos con una comprension profunda de la arquitectura de software.
            </p>
            <p>
              Lo que me distingue es mi interes en la arquitectura de sistemas y la
              investigacion aplicada, lo que me permite disenar soluciones escalables
              y mantenibles desde el inicio del desarrollo.
            </p>
            <p>
              Estoy dispuesto a trabajo remoto e internacional, buscando oportunidades
              donde pueda crecer profesionalmente y aportar valor real desde el primer dia.
            </p>
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <span class="bg-brand/10 text-brand border border-brand/20 px-4 py-2 rounded-full text-sm font-medium">
              UNA Costa Rica
            </span>
            <span class="bg-brand/10 text-brand border border-brand/20 px-4 py-2 rounded-full text-sm font-medium">
              Alajuela, CR
            </span>
            <span class="bg-brand/10 text-brand border border-brand/20 px-4 py-2 rounded-full text-sm font-medium">
              Remote-friendly
            </span>
            <span class="bg-brand/10 text-brand border border-brand/20 px-4 py-2 rounded-full text-sm font-medium">
              Scrum Certified
            </span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 reveal" style="transition-delay:0.2s">
          <div class="bg-dark-200 border border-white/5 rounded-2xl p-6 hover:border-brand/30 transition-colors duration-300">
            <div class="text-brand text-3xl font-mono mb-3">{ }</div>
            <h3 class="text-white font-semibold mb-2">Arquitectura</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Diseno de sistemas por capas y patrones de arquitectura limpios y escalables.
            </p>
          </div>

          <div class="bg-dark-200 border border-white/5 rounded-2xl p-6 hover:border-brand/30 transition-colors duration-300 mt-6">
            <div class="text-brand text-3xl mb-3">&#128269;</div>
            <h3 class="text-white font-semibold mb-2">Investigacion</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Capacidad de analisis profundo y resolucion de problemas complejos.
            </p>
          </div>

          <div class="bg-dark-200 border border-white/5 rounded-2xl p-6 hover:border-brand/30 transition-colors duration-300">
            <div class="text-brand text-3xl mb-3">&#9889;</div>
            <h3 class="text-white font-semibold mb-2">Backend First</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Especializacion en .NET, NestJS, APIs REST y bases de datos relacionales.
            </p>
          </div>

          <div class="bg-dark-200 border border-white/5 rounded-2xl p-6 hover:border-brand/30 transition-colors duration-300 mt-6">
            <div class="text-brand text-3xl mb-3">&#129309;</div>
            <h3 class="text-white font-semibold mb-2">Trabajo en equipo</h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              Experiencia colaborando en proyectos reales con metodologias agiles.
            </p>
          </div>
        </div>

      </div>
    </div>
  `

  return section
}
