import type { Project, SkillCategory, ContactInfo, NavItem } from './types'

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mi', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
]

export const projects: Project[] = [
  {
    id: 'bomberil-nosara',
    title: 'Proyecto Bomberil Nosara',
    description:
      'Sistema de gestion organizacional para la estacion de bomberos de Nosara. Resuelve problemas de gestion interna, permite transparencia y agiliza procesos operativos.',
    details: [
      'Modulo de voluntariado para usuarios voluntarios (backend y frontend)',
      'Landing page dinamica con contenido editable',
      'Implementacion full-stack: API REST y desarrollo de interfaz',
    ],
    technologies: ['React', 'NestJS', 'TypeORM', 'MySQL'],
    url: 'https://bomberosnosara.cloud/',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Lenguajes',
    icon: '{ }',
    items: ['C#', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Java'],
  },
  {
    category: 'Frameworks',
    icon: '&#9881;',
    items: ['.NET', 'ASP.NET', 'NestJS', 'Node.js', 'React + Vite'],
  },
  {
    category: 'Bases de datos',
    icon: '&#128451;',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'Herramientas',
    icon: '&#128296;',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Swagger', 'VS Code'],
  },
  {
    category: 'Otros conocimientos',
    icon: '&#9670;',
    items: ['REST APIs', 'Arquitectura por capas', 'TypeORM', 'Entity Framework'],
  },
]

export const contactInfo: ContactInfo = {
  email: 'reyesjason992@gmail.com',
  phone: '+506 8851 1941',
  location: 'Alajuela, Costa Rica',
  linkedin: 'https://www.linkedin.com/in/jason-reyes-580154299',
}
