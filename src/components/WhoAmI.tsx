import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';

import personImg from '../assets/person.webp';
import grainImg from '../assets/grain.webp';

const WhoAmI: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white py-24 md:py-32 overflow-hidden flex items-center"
    >
      {/* --- FONDOS Y LUCES ANIMADAS MÁS INTENSAS --- */}
      {/* Luz Azul (Izquierda Arriba) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.4, 0.6, 0.4] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] -left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-600/40 rounded-full mix-blend-screen filter blur-[100px] md:blur-[130px] pointer-events-none"
      />
      
      {/* Luz Naranja (Derecha Abajo) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[5%] -right-[10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-orange-600/30 rounded-full mix-blend-screen filter blur-[100px] md:blur-[140px] pointer-events-none"
      />
      
      {/* Luz Púrpura Extra (Centro Abajo) para fusionar ambos tonos suavemente */}
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-[20%] left-[30%] w-[600px] h-[400px] bg-purple-700/30 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* --- COLUMNA IZQUIERDA: PROFILE CARD --- */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[380px] hover-target">
              {/* LOS PARÁMETROS ORIGINALES EXACTOS DE TU CÓDIGO */}
              <ProfileCard
                avatarUrl={personImg}
                grainUrl={grainImg}
                name="Escobar Lucas"
                title="Lic. En Sistemas"
                handle="Lucasz"
                status="Available for work"
                contactText="Contact"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                mobileTiltSensitivity={5}
                behindGlowEnabled={true}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                behindGlowSize="50%"
                onContactClick={() => {
                  window.location.href = 'mailto:tu@email.com';
                }}
              />
            </div>
          </motion.div>

          {/* --- COLUMNA DERECHA: TEXTO Y CONTENIDO --- */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            {/* Etiqueta superior */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 font-mono text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                / About Me
              </span>
            </motion.div>

            {/* Título Principal */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-8 leading-tight">
              Diseño con <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">precisión</span>, <br />
              desarrollo con <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">lógica</span>.
            </h2>

            {/* Párrafos de descripción */}
            <div className="space-y-6 text-gray-400 font-light text-lg sm:text-xl leading-relaxed mb-10">
              <p>
                Soy un desarrollador apasionado por crear experiencias digitales que no solo funcionen a la perfección, sino que también dejen una impresión visual duradera. 
              </p>
              <p>
                Actualmente estudiante de <strong className="text-white font-medium">Licenciatura en Sistemas de Información</strong>, combinando los fundamentos de la ingeniería de software con las últimas tecnologías del desarrollo web moderno.
              </p>
            </div>

            {/* Badges de Información Rápida */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="flex flex-wrap gap-4"
            >
              {[
                { label: "📍 Ubicación", value: "Argentina" },
                { label: "🎓 Formación", value: "Sistemas" },
                { label: "⚡ Enfoque", value: "Full Stack" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] transition-colors"
                >
                  <span className="block text-xs text-gray-500 font-mono uppercase tracking-wider mb-1">{item.label}</span>
                  <span className="block text-sm text-gray-200 font-semibold">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;