import { motion } from 'motion/react';

export default function Experience() {
  const experiences = [
    {
      company: 'Code Cradle Technologies (Pvt) Ltd',
      role: 'Full Stack Web Developer',
      period: 'Jan 2024 - Feb 2026',
      desc: 'Engineered high-performance web solutions, focusing on scalability and modern UI/UX patterns.',
    },
    {
      company: 'Code Cubic\'s',
      role: 'Full Stack Web Developer',
      period: 'July 2023 - Jan 2024',
      desc: 'Developed multiple full-stack projects including trading platforms and biometric systems.',
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 border-y border-white/5 bg-ai-black/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center">CHRONO_TRACK</h2>
        
        <div className="relative space-y-12 before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-[1px] before:bg-white/10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center gap-12 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-ai-cyan border-4 border-ai-black z-10" />
              
              <div className="w-full md:w-1/2 p-8 bg-ai-gray border border-white/5 rounded-3xl group hover:border-ai-cyan/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-ai-cyan transition-colors">{exp.company}</h3>
                  <span className="text-[10px] font-mono text-white/30">{exp.period}</span>
                </div>
                <p className="text-ai-cyan text-sm font-mono mb-4">{exp.role.toUpperCase()}</p>
                <p className="text-white/50 text-sm leading-relaxed">{exp.desc}</p>
              </div>
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
