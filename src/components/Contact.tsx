import { motion } from 'motion/react';
import { Send, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '923036440007';
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ai-purple/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic">
              ESTABLISH <br />
              <span className="text-ai-cyan">CONNECTION</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              System ready to receive incoming transmissions. Whether it's a project inquiry or a 
              strategic collaboration, my interface is open.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-ai-gray border border-white/5 flex items-center justify-center group-hover:border-ai-cyan transition-colors">
                  <MessageCircle className="w-6 h-6 text-ai-cyan" />
                </div>
                <div>
                   <p className="text-xs font-mono text-white/30">DIRECT_LINE</p>
                   <p className="text-white font-medium">+92 303 6440007</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-ai-gray border border-white/5 flex items-center justify-center group-hover:border-ai-cyan transition-colors">
                  <Send className="w-6 h-6 text-ai-cyan" />
                </div>
                <div>
                   <p className="text-xs font-mono text-white/30">EMAIL_PROTOCOL</p>
                   <p className="text-white font-medium">farazghaffar811@mail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-ai-gray border border-white/10 rounded-[40px] shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 p-8">
               <div className="text-[10px] font-mono text-white/20">FORM_VERSION: 2.1</div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-ai-cyan uppercase px-1">Source_Identity</label>
                <input 
                  required
                  type="text" 
                  placeholder="NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-ai-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-ai-cyan transition-colors placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-ai-cyan uppercase px-1">Contact_Node</label>
                <input 
                  required
                  type="email" 
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-ai-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-ai-cyan transition-colors placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-ai-cyan uppercase px-1">Transmission_Content</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-ai-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-ai-cyan transition-colors placeholder:text-white/10 resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-ai-cyan text-ai-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all group"
              >
                INITIALIZE_TRANSMISSION
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
