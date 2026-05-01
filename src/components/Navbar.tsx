import { motion } from 'motion/react';
import { Cpu, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'Profile', href: '#profile' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.1s.493-1.1 1.1-1.1 1.1.496 1.1 1.1-.493 1.1-1.1 1.1zm9 6.891h-1.99v-3.146c0-.75-.014-1.716-1.047-1.716-1.048 0-1.208.818-1.208 1.662v3.2h-1.99v-6h1.91v.82h.027c.265-.502.913-1.031 1.877-1.031 2.008 0 2.381 1.321 2.381 3.039v3.172z"/>
        </svg>
      ), 
      href: 'https://www.linkedin.com/in/faraz-ghaffar-a467082a0/',
      name: 'LinkedIn'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ), 
      href: 'https://github.com/farazghaffar811',
      name: 'GitHub'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 8.24h-3.41c-.48 0-.87.39-.87.87v1.85h3.41v2.54h-3.41v6.94h-2.54v-6.94h-1.6v-2.54h1.6v-1.85c0-1.88 1.53-3.41 3.41-3.41H19v2.54zM6.9 14.5c0 .66-.54 1.2-1.2 1.2s-1.2-.54-1.2-1.2.54-1.2 1.2-1.2 1.2.54 1.2 1.2zM8.5 14.5c0-1.55-1.26-2.81-2.81-2.81-1.55 0-2.81 1.26-2.81 2.81s1.26 2.81 2.81 2.81c1.55 0 2.81-1.26 2.81-2.81z"/>
        </svg>
      ), 
      href: 'https://www.fiverr.com/s/8zL6LwZ',
      name: 'Fiverr'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.561 3.322c-2.542 0-4.162 1.441-4.734 3.893-1.095-1.628-1.922-3.447-2.426-4.93H9.002V12.1c0 1.882-1.526 3.413-3.042 3.413-.913 0-1.748-.415-2.316-1.164-.526-.693-.722-1.543-.722-2.731V2.285H0v10.019c0 2.455.704 4.542 2.036 6.04 1.517 1.704 3.655 2.564 5.923 2.564 3.738 0 6.44-2.136 6.44-5.31V10.15c.343.832.842 1.71 1.45 2.54l1.378 5.617h2.8s-.361-5.617-.435-6.685c.184.055.372.083.56.083 2.441 0 4.296-2.124 4.296-4.526.01-2.115-1.396-3.867-4.444-3.867zm0 6.643c-.42 0-.825-.138-1.155-.394-.367-.282-.574-.683-.574-1.118 0-.435.207-.836.574-1.117.33-.257.734-.395 1.155-.395 1.741 0 1.956 1.057 1.956 1.512 0 .455-.215 1.512-1.956 1.512z"/>
        </svg>
      ), 
      href: 'https://www.upwork.com/freelancers/~0104372f2d47d22baf?mp_source=share',
      name: 'Upwork'
    },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-md bg-ai-black/50 border border-white/10 rounded-full px-6 py-2">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-1.5 bg-ai-cyan rounded-lg group-hover:rotate-12 transition-transform">
            <Cpu className="w-5 h-5 text-ai-black" />
          </div>
          <span className="font-mono font-bold tracking-tighter text-xl hidden sm:inline">FG.SYSTEM</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-ai-cyan transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-2 border-r border-white/10 pr-2 sm:pr-4">
            {socialLinks.map((link, i) => (
              <a 
                key={i}
                href={link.href} 
                target="_blank" 
                rel="noreferrer"
                className="p-1.5 text-white/50 hover:text-ai-cyan transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <a 
            href="#contact" 
            className="px-4 py-1.5 bg-ai-cyan text-ai-black text-xs sm:text-sm font-bold rounded-full hover:shadow-[0_0_15px_rgba(0,242,255,0.5)] transition-all"
          >
            CONTACT
          </a>
        </div>
      </div>
    </motion.header>
  );
}
