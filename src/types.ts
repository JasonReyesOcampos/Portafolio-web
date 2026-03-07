export interface Project {
  id: string
  title: string
  description: string
  details: string[]
  technologies: string[]
  url?: string
  github?: string
}

export interface SkillCategory {
  category: string
  icon: string
  items: string[]
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  linkedin: string
}

export interface NavItem {
  label: string
  href: string
}
