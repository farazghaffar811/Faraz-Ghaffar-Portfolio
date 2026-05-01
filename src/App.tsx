import { motion, useSpring, useMotionValue } from 'motion/react';
import { useEffect } from 'react';
import RobotBackground from './components/RobotBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        left: cursorX,
        top: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="fixed inset-0 z-[9999] pointer-events-none hidden lg:block"
    >
      <div className="w-8 h-8 border border-ai-cyan rounded-full flex items-center justify-center">
        <div className="w-1 h-1 bg-ai-cyan rounded-full animate-ping" />
      </div>
      <div className="absolute top-1/2 left-1/2 w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2 bg-ai-cyan/10 rounded-full blur-2xl" />
    </motion.div>
  );
}

function ProfileSection() {
  return (
    <section id="profile" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group order-2 lg:order-1">
           <div className="absolute -inset-4 bg-ai-cyan/20 blur-3xl rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
           <div className="relative aspect-square md:aspect-[4/3] bg-ai-gray border border-white/10 rounded-[40px] overflow-hidden shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-white opacity-10" />
              <div className="relative z-10 p-12 text-center">
                 <motion.div 
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="inline-block p-6 rounded-full bg-ai-black/60 border border-ai-cyan/30 mb-8"
                 >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ai-cyan to-ai-purple animate-pulse" />
                 </motion.div>
                 <h3 className="text-4xl font-bold mb-4 tracking-tighter">DATA.OVERVIEW</h3>
                 <div className="space-y-3 font-mono text-xs text-white/40 max-w-xs mx-auto">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                       <span>IDENTITY:</span>
                       <span className="text-white">FARAZ_GHAFFAR</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                       <span>ROLE:</span>
                       <span className="text-white">FULL_STACK_ENG</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                       <span>EXP_LEVEL:</span>
                       <span className="text-white">ADVANCED</span>
                    </div>
                    <div className="flex justify-between">
                       <span>LOCATION:</span>
                       <span className="text-white">PK_BAHAWALPUR</span>
                    </div>
                 </div>
              </div>
              
              {/* Circuit Decorative Elements */}
              <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-ai-cyan/30" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-ai-cyan/30" />
           </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="inline-block px-3 py-1 bg-ai-cyan/10 border border-ai-cyan/30 rounded text-[10px] font-mono text-ai-cyan mb-6 tracking-widest uppercase">
             Core_Directives
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none italic">MISSION_CONTROL</h2>
          <div className="space-y-6 text-white/50 text-lg leading-relaxed">
            <p>
              I am an innovative Full Stack Web Developer with a focus on crafting 
              <span className="text-white font-medium"> ultra-performant, responsive digital solutions.</span> My methodology combines modern UI frameworks with robust scalable backends.
            </p>
            <p>
              Proficient in <span className="text-ai-cyan">React.js, Next.js, and TypeScript</span> for front-end architecture, 
              leveraging <span className="text-ai-purple">Firebase, Supabase, and Node.js</span> for real-time data orchestration and secure authentication.
            </p>
            <p>
              Committed to continuous integration and high-standard architecture. I build systems that are not just functional, but <span className="text-white">digitally superior.</span>
            </p>
          </div>
          
          <div className="mt-12 flex gap-12">
            <div>
               <div className="text-4xl font-bold text-white mb-2 leading-none">02+</div>
               <div className="text-[10px] font-mono text-ai-cyan uppercase tracking-tighter">YEARS_IN_SERVICE</div>
            </div>
            <div>
               <div className="text-4xl font-bold text-white mb-2 leading-none">15+</div>
               <div className="text-[10px] font-mono text-ai-cyan uppercase tracking-tighter">DEPLOYS_SUCCESSFUL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-ai-black/60 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
           <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-ai-cyan rounded flex items-center justify-center">
                    <span className="font-bold text-ai-black text-xs">FG</span>
                 </div>
                 <span className="font-mono font-bold text-xl tracking-tighter">SYSTEM.ARC</span>
              </div>
              <p className="text-white/30 text-xs max-w-xs text-center md:text-left">
                Architecting the future of web interfaces with precision and robotic efficiency.
              </p>
           </div>
           
           <nav className="flex flex-wrap justify-center gap-8 text-[10px] font-mono text-white/40 uppercase tracking-widest">
              <a href="#profile" className="hover:text-ai-cyan transition-colors">PROFILE</a>
              <a href="#experience" className="hover:text-ai-cyan transition-colors">HISTORY</a>
              <a href="#projects" className="hover:text-ai-cyan transition-colors">ASSETS</a>
              <a href="#skills" className="hover:text-ai-cyan transition-colors">MODULES</a>
              <a href="#contact" className="hover:text-ai-cyan transition-colors">SECURE_LINE</a>
           </nav>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/20">
          <p>© 2026 FARAZ GHAFFAR. ALL PROTOCOLS RESERVED.</p>
          <div className="flex gap-4">
             <span>LOCAL_COORD: 30.0163° N, 73.5413° E</span>
             <span>BUILD: v1.2-ALPHA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-ai-cyan selection:text-ai-black">
      <CustomCursor />
      <RobotBackground />
      <Navbar />
      
      <main className="relative z-10 transition-all duration-500">
        <Hero />
        <ProfileSection />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
