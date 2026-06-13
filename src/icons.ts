import {
  Menu,
  X,
  User,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Code2,
  Settings,
  Database,
  Wrench,
  Diamond,
  ExternalLink,
  Plus,
  Layers,
  Search,
  Zap,
  Users,
} from 'lucide'
import type { IconNode } from 'lucide'

function toSvgString(icon: IconNode, className = ''): string {
  const nodes = icon
    .map(([tag, attrs]) => {
      const attrStr = Object.entries(attrs)
        .map(([k, v]) => `${k}="${v}"`)
        .join(' ')
      return `<${tag} ${attrStr}/>`
    })
    .join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}">${nodes}</svg>`
}

const linkedinSvg = (cls = '') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="${cls}"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`

export const icons = {
  menu: (cls = '') => toSvgString(Menu, cls),
  close: (cls = '') => toSvgString(X, cls),
  user: (cls = '') => toSvgString(User, cls),
  chevronDown: (cls = '') => toSvgString(ChevronDown, cls),
  mail: (cls = '') => toSvgString(Mail, cls),
  phone: (cls = '') => toSvgString(Phone, cls),
  linkedin: linkedinSvg,
  mapPin: (cls = '') => toSvgString(MapPin, cls),
  code2: (cls = '') => toSvgString(Code2, cls),
  settings: (cls = '') => toSvgString(Settings, cls),
  database: (cls = '') => toSvgString(Database, cls),
  wrench: (cls = '') => toSvgString(Wrench, cls),
  diamond: (cls = '') => toSvgString(Diamond, cls),
  externalLink: (cls = '') => toSvgString(ExternalLink, cls),
  plus: (cls = '') => toSvgString(Plus, cls),
  layers: (cls = '') => toSvgString(Layers, cls),
  search: (cls = '') => toSvgString(Search, cls),
  zap: (cls = '') => toSvgString(Zap, cls),
  users: (cls = '') => toSvgString(Users, cls),
}
