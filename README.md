# Jason Reyes | Portfolio Personal

Portafolio profesional de Jason Reyes Ocampos, Backend Developer Junior especializado en .NET, NestJS y arquitectura de software.

## Tecnologías

- **TypeScript** — lenguaje principal
- **Vite** — bundler y servidor de desarrollo
- **Tailwind CSS** — estilos
- **Vanilla TS** — sin frameworks de UI, componentes construidos con el DOM nativo

## Estructura del proyecto

```
portfolio/
├── src/
│   ├── components/       # Componentes de cada sección
│   │   ├── navbar.ts
│   │   ├── hero.ts
│   │   ├── about.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── contact.ts
│   ├── data.ts           # Contenido editable (proyectos, skills, contacto)
│   ├── types.ts          # Interfaces TypeScript
│   ├── main.ts           # Punto de entrada
│   └── index.css         # Estilos globales con Tailwind
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD para GitHub Pages
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview del build
npm run preview
```

## Despliegue

El proyecto se despliega automáticamente en **GitHub Pages** mediante GitHub Actions cada vez que se hace push a la rama `Main`.

Para activarlo por primera vez:
1. Ir a **Settings → Pages** en el repositorio
2. Seleccionar **GitHub Actions** como fuente

## Personalización

Para actualizar el contenido del portafolio edita el archivo `src/data.ts`, donde se encuentran los proyectos, habilidades y datos de contacto.
