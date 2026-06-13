import type { Project, SkillCategory, ContactInfo, NavItem } from './types'
import { icons } from './icons'

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
]

export const projects: Project[] = [
  {
    id: 'bomberil-nosara',
    title: 'Proyecto Bomberil Nosara',
    description:
      'Sistema de gestión organizacional para la estación de bomberos de Nosara. Resuelve problemas de gestión interna, permite transparencia y agiliza procesos operativos.',
    details: [
      'Módulo de voluntariado para usuarios voluntarios (backend y frontend)',
      'Landing page dinámica con contenido editable',
      'Implementación full-stack: API REST y desarrollo de interfaz',
    ],
    technologies: ['React', 'NestJS', 'TypeORM', 'MySQL'],
    url: 'https://bomberosnosara.cloud/',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Lenguajes',
    icon: icons.code2('w-6 h-6'),
    items: ['HTML', 'C#', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Java'],
  },
  {
    category: 'Frameworks',
    icon: icons.settings('w-6 h-6'),
    items: ['.NET', 'ASP.NET', 'NestJS', 'Node.js', 'React + Vite'],
  },
  {
    category: 'Bases de datos',
    icon: icons.database('w-6 h-6'),
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'Herramientas',
    icon: icons.wrench('w-6 h-6'),
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Swagger', 'VS Code', 'AI Assisted Development'],
  },
  {
    category: 'Otros conocimientos',
    icon: icons.diamond('w-6 h-6'),
    items: ['REST APIs', 'Arquitectura por capas', 'TypeORM', 'Entity Framework'],
  },
]

export const contactInfo: ContactInfo = {
  email: 'ocamposjason993@gmail.com',
  phone: '+506 8851 1941',
  location: 'Upala, Alajuela, Costa Rica',
  linkedin: 'https://www.linkedin.com/in/jason-reyes-580154299',
}
