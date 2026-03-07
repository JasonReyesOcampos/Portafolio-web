export function createHero(): HTMLElement {
  const section = document.createElement('section')
  section.id = 'home'
  section.className = 'min-h-screen flex items-center relative overflow-hidden'

  section.innerHTML = `
    <div class="absolute inset-0 bg-gradient-to-br from-dark-base via-dark-100/50 to-dark-base pointer-events-none"></div>
    <div class="absolute top-1/4 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-1/4 left-0 w-72 h-72 bg-brand/3 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      <div class="relative flex justify-center lg:justify-start order-2 lg:order-1 reveal">
        <div class="relative w-72 h-80 lg:w-80 lg:h-96">
          <div class="absolute inset-0 rounded-2xl border border-brand/25 translate-x-3 translate-y-3"></div>
          <div
            id="hero-photo"
            class="relative w-full h-full rounded-2xl bg-dark-200 border border-white/8 flex items-center justify-center overflow-hidden"
          >
            <div class="text-center text-gray-600 select-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p class="text-sm font-medium">Foto próxima</p>
            </div>
          </div>
          <div class="absolute -bottom-6 -right-6 w-36 h-36 bg-brand/8 rounded-full blur-2xl pointer-events-none"></div>
        </div>
      </div>

      <div class="order-1 lg:order-2 reveal" style="transition-delay:0.15s">
        <span class="section-label mb-5">Full Stack Developer</span>
        <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
          Construyendo soluciones
          <span class="text-brand"> completas</span>
          con código limpio
        </h1>
        <p class="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
          Estudiante de último año en Ingeniería en Sistemas de Información (UNA).
          Desarrollo full stack con .NET, NestJS, Node.js y React.
          Abierto a trabajo remoto e internacional.
        </p>

        <div class="flex flex-wrap gap-4 mb-12">
          <a href="#projects" class="btn-primary">Ver proyectos &rarr;</a>
          <a href="#contact" class="btn-secondary">Contactar</a>
        </div>

        <div class="flex gap-8 border-t border-white/5 pt-8">
          <div>
            <p class="text-2xl font-bold text-white">6+</p>
            <p class="text-gray-500 text-sm mt-1">Lenguajes</p>
          </div>
          <div class="border-l border-white/10 pl-8">
            <p class="text-2xl font-bold text-white">5+</p>
            <p class="text-gray-500 text-sm mt-1">Frameworks</p>
          </div>
          <div class="border-l border-white/10 pl-8">
            <p class="text-2xl font-bold text-white">1+</p>
            <p class="text-gray-500 text-sm mt-1">Proyecto real</p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  `

  return section
}
