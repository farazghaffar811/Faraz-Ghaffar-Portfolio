import { motion } from 'motion/react';
import { Layers, Database, Workflow, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Frontend',
      icon: <Layers className="w-6 h-6 text-ai-cyan" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Motion', 'Shadcn UI', 'Chakra UI', 'Redux'],
    },
    {
      title: 'Backend',
      icon: <Database className="w-6 h-6 text-ai-purple" />,
      skills: ['Node.js', 'Prisma', 'MongoDB', 'PostgreSQL', 'Firebase', 'Supabase', 'REST APIs'],
    },
    {
      title: 'Process',
      icon: <Workflow className="w-6 h-6 text-white" />,
      skills: ['Agile', 'Sprint Planning', 'Code Review', 'Git', 'Technical Documentation'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-ai-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-4 flex items-center gap-3">
              <span className="w-12 h-[1px] bg-ai-cyan hidden sm:block"></span>
              CORE_MODULES
            </h2>
            <p className="text-white/50 max-w-lg">
              Optimized set of technologies used to build scalable, high-performance web applications.
            </p>
          </div>
          <div className="font-mono text-xs text-ai-cyan p-2 bg-ai-cyan/5 border border-ai-cyan/20 rounded">
            STATUS: 100%_OPERATIONAL
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-2xl bg-ai-gray border border-white/5 hover:border-ai-cyan/30 transition-colors relative overflow-hidden"
            >
              {/* Robotic Accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-ai-cyan/0 group-hover:bg-ai-cyan transition-colors" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-ai-black rounded-xl border border-white/5">
                  {cat.icon}
                </div>
                <span className="text-[10px] font-mono text-white/30 uppercase">ID_{idx + 1}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-6">{cat.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="group/item flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-md transition-all hover:border-ai-cyan/30"
                  >
                    <CheckCircle2 className="w-3 h-3 text-ai-cyan opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    <span className="text-xs font-medium text-white/70 group-hover/item:text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
