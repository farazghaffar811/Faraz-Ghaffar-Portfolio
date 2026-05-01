import { motion } from 'motion/react';
import { Terminal, ChevronRight, ShoppingBag, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-gray border border-ai-cyan/30 text-ai-cyan text-[10px] font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ai-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ai-cyan"></span>
            </span>
            SYSTEM_STATUS: PEAK_PERFORMANCE
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-8 relative group">
            <motion.span 
              whileHover={{ x: [0, -2, 2, 0] }}
              transition={{ duration: 0.2, repeat: Infinity }}
              className="block"
            >
              FARAZ
            </motion.span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-cyan via-white to-ai-purple block relative">
              GHAFFAR
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
                className="absolute inset-0 text-ai-cyan opacity-50 blur-[2px] hidden group-hover:block"
              >
                GHAFFAR
              </motion.span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 max-w-lg mb-10 font-light leading-relaxed">
            Full Stack Engineer architecting intelligent digital ecosystems. 
            Transforming complex requirements into <span className="text-ai-cyan font-medium italic">high-velocity interfaces.</span>
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-ai-cyan text-ai-black font-bold rounded-xl flex items-center gap-2 group shadow-[0_0_20px_rgba(0,242,255,0.3)]"
            >
              PROJECT_DATABASE
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="https://github.com/farazghaffar811"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 hover:border-ai-cyan/50 backdrop-blur-sm text-white font-bold rounded-xl flex items-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              GIT_REPOSITORY
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-6 border-t border-white/5 pt-8">
             <a 
              href="https://www.fiverr.com/s/8zL6LwZ" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-[#1dbf73]/10 border border-[#1dbf73]/30 rounded-xl flex items-center gap-3 text-[#1dbf73] hover:bg-[#1dbf73] hover:text-white transition-all group"
             >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 8.24h-3.41c-.48 0-.87.39-.87.87v1.85h3.41v2.54h-3.41v6.94h-2.54v-6.94h-1.6v-2.54h1.6v-1.85c0-1.88 1.53-3.41 3.41-3.41H19v2.54zM6.9 14.5c0 .66-.54 1.2-1.2 1.2s-1.2-.54-1.2-1.2.54-1.2 1.2-1.2 1.2.54 1.2 1.2zM8.5 14.5c0-1.55-1.26-2.81-2.81-2.81-1.55 0-2.81 1.26-2.81 2.81s1.26 2.81 2.81 2.81c1.55 0 2.81-1.26 2.81-2.81z"/>
                </svg>
                <span className="font-bold tracking-tight">FIVERR_PRO</span>
             </a>
             <a 
              href="https://www.upwork.com/freelancers/~0104372f2d47d22baf?mp_source=share" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-[#14a800]/10 border border-[#14a800]/30 rounded-xl flex items-center gap-3 text-[#14a800] hover:bg-[#14a800] hover:text-white transition-all group"
             >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.561 3.322c-2.542 0-4.162 1.441-4.734 3.893-1.095-1.628-1.922-3.447-2.426-4.93H9.002V12.1c0 1.882-1.526 3.413-3.042 3.413-.913 0-1.748-.415-2.316-1.164-.526-.693-.722-1.543-.722-2.731V2.285H0v10.019c0 2.455.704 4.542 2.036 6.04 1.517 1.704 3.655 2.564 5.923 2.564 3.738 0 6.44-2.136 6.44-5.31V10.15c.343.832.842 1.71 1.45 2.54l1.378 5.617h2.8s-.361-5.617-.435-6.685c.184.055.372.083.56.083 2.441 0 4.296-2.124 4.296-4.526.01-2.115-1.396-3.867-4.444-3.867zm0 6.643c-.42 0-.825-.138-1.155-.394-.367-.282-.574-.683-.574-1.118 0-.435.207-.836.574-1.117.33-.257.734-.395 1.155-.395 1.741 0 1.956 1.057 1.956 1.512 0 .455-.215 1.512-1.956 1.512z"/>
                </svg>
                <span className="font-bold tracking-tight">UPWORK_NETWORK</span>
             </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[550px] mx-auto">
            {/* High-Level Orbital Animations */}
            {[20, 30, 40].map((duration, i) => (
              <motion.div
                key={i}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration, repeat: Infinity, ease: 'linear' }}
                className={`absolute inset-[${i * 5}%] border border-dashed border-ai-cyan/${20 - i * 5} rounded-full`}
              />
            ))}
            
            <div className="absolute inset-[15%] bg-gradient-to-br from-ai-cyan/5 to-ai-purple/5 rounded-full blur-[100px]" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%]">
              {/* Profile Picture Frame */}
              <div className="relative w-full aspect-square p-2 border border-white/10 rounded-[60px] bg-ai-gray/30 backdrop-blur-md overflow-hidden group">
                 {/* Internal Scanning UI */}
                 <div className="absolute inset-0 bg-grid-white opacity-5" />
                 
                 {/* This represents where the profile picture goes */}
                 <div className="absolute inset-4 rounded-[45px] overflow-hidden bg-ai-black/40 border border-white/5">
                     <img 
                       src="https://res.cloudinary.com/dwnt025iw/image/upload/v1777678214/my_profile_tl6y35.jpg" 
                       alt="Faraz Ghaffar"
                       className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                       onError={(e) => {
                         e.currentTarget.src = "/profile.jpg";
                       }}
                     />
                    
                    {/* Scanning Line Effect */}
                    <motion.div 
                      animate={{ top: ['-10%', '110%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                      className="absolute left-0 right-0 h-4 bg-gradient-to-b from-transparent via-ai-cyan/50 to-transparent z-10"
                    />
                 </div>

                 {/* Decorative robotic corners */}
                 <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-ai-cyan/30 rounded-tr-[60px]" />
                 <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-ai-cyan/30 rounded-bl-[60px]" />
                 
                 {/* Floating UI Elements */}
                 <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-20 -right-4 p-3 bg-ai-gray border border-white/10 rounded-xl backdrop-blur-xl z-20 shadow-2xl"
                 >
                    <div className="flex flex-col gap-1">
                       <span className="text-[8px] font-mono text-ai-cyan uppercase">BIO_METRIC</span>
                       <span className="text-[10px] font-bold text-white tracking-widest">VERIFIED</span>
                    </div>
                 </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
