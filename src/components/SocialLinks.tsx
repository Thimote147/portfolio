import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/Thimote147',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thimot%C3%A9-f%C3%A9tu/',
    icon: FaLinkedin,
  }
]

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">{link.name}</span>
          <link.icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  )
}