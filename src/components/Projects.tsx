import { motion } from 'motion/react';
import { ExternalLink, Github, Globe } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Zidan Cooling',
      type: 'E-commerce Shop',
      desc: 'An online platform specializing in cooling solutions and appliances with a seamless shopping experience.',
      tags: ['Next.js', 'E-commerce', 'Tailwind'],
      status: 'Live',
      link: 'https://www.zidancooling.shop/',
      image: 'https://images.unsplash.com/photo-1517056213459-39074092b724?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Saad Maintenance',
      type: 'Service Portal',
      desc: 'Professional maintenance services booking platform for home and industrial repairs.',
      tags: ['React', 'Service UI', 'Booking'],
      status: 'Live',
      link: 'https://www.saadmaintenance.store/',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Euros Hub',
      type: 'Business Platform',
      desc: 'A comprehensive hub for European market services and business networking.',
      tags: ['Full Stack', 'Enterprise', 'Responsive'],
      status: 'Live',
      link: 'https://www.euroshub.com/',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Olympia Properties',
      type: 'Real Estate Platform',
      desc: 'High-end real estate listing and management system with interactive property views.',
      tags: ['Next.js', 'Real Estate', 'UI/UX'],
      status: 'Live',
      link: 'https://olympiaproperties.com/',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'The Fresh Rinse',
      type: 'Local Service',
      desc: 'Service-based website for The Fresh Rinse Oroville, focused on conversion and local SEO.',
      tags: ['React', 'Local Business', 'Portfolio'],
      status: 'Live',
      link: 'https://thefreshrinseoroville.com/',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Super Coin',
      type: 'Trading Platform',
      desc: 'A full-stack web app for secure and effortless crypto trading with real-time API integrations.',
      tags: ['Next.js', 'Firebase', 'Binance API'],
      status: 'Live',
      link: '#',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="text-4xl font-bold tracking-tighter mb-4 flex items-center gap-4">
             <span className="w-12 h-[1px] bg-white/20"></span>
             DEPLOYED_ASSETS
          </h2>
          <p className="text-white/40 font-mono text-sm">TOTAL_RESOURCES: {projects.length}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-ai-gray border border-white/5 rounded-3xl overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-[16/9] bg-ai-black/40 relative overflow-hidden group/img">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110 grayscale group-hover/img:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ai-black via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-grid-white opacity-5" />
                
                <div className="absolute inset-0 bg-ai-cyan/80 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] flex items-center justify-center">
                   <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-6 py-3 bg-ai-black text-ai-cyan rounded-xl border border-ai-cyan/50 hover:bg-ai-cyan hover:text-ai-black transition-all flex items-center gap-2 font-bold text-sm tracking-widest shadow-[0_0_20px_rgba(0,242,255,0.3)]"
                   >
                      <ExternalLink className="w-5 h-5" />
                      CONNECT_NODE
                   </a>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-ai-cyan transition-colors">{project.title}</h3>
                    <p className="text-ai-cyan text-[10px] font-mono tracking-widest">{project.type.toUpperCase()}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-tighter">
                      STABLE
                    </span>
                  </div>
                </div>
                
                <p className="text-white/50 text-sm mb-6 leading-relaxed flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-white/30 uppercase">[{tag}]</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
