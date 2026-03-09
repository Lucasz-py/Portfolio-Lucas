import { motion } from 'framer-motion';
import { LiquidChrome } from './LiquidChrome';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* FONDO LÍQUIDO */}
      <div className="absolute inset-0 z-0">
        <LiquidChrome
          baseColor={[0.9, 0.25, 0.0]}
          speed={0.18}
          amplitude={0.42}
          frequencyX={1.8}
          frequencyY={1.6}
          interactive={false}
        />
      </div>

      {/* VIÑETA OSCURA */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 110% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.60) 100%)',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center pointer-events-none">

        {/* Píldora de estado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/50 border border-white/10 backdrop-blur-md mb-8 shadow-2xl pointer-events-auto"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]"></span>
          </span>
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-gray-200 uppercase">Available for work</span>
        </motion.div>

        {/* TÍTULO ELEGANTE Y MODERNO (Tipografía más delgada) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 drop-shadow-2xl flex flex-col items-center gap-2"
        >
          {/* font-extralight le da ese aspecto premium súper delgado */}
          <span className="text-7xl sm:text-9xl md:text-[10rem] font-extralight tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            FULL STACK
          </span>
          {/* font-light con tracking-widest para separar las letras y darle un respiro profesional */}
          <span className="text-5xl sm:text-7xl md:text-8xl font-light tracking-[0.1em] md:tracking-[0.2em] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            DEVELOPER
          </span>
        </motion.h1>

        {/* DESCRIPCIÓN */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl text-lg sm:text-xl text-gray-300 font-light mb-12 leading-relaxed bg-black/40 p-6 rounded-2xl backdrop-blur-sm border border-white/5"
        >
          Transformando lógica compleja en experiencias digitales elegantes, rápidas y escalables. Obsesionado con el rendimiento y el diseño pixel-perfect.
        </motion.p>

        {/* BOTONES INTERACTIVOS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
        >
          {/* Botón Primario: Brillo Naranja en Hover */}
          <button
            className="hover-target px-10 py-5 rounded-full bg-orange-600/30 border border-orange-500/50 text-white font-bold tracking-wide shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:bg-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:border-orange-400 hover:scale-105 transition-all duration-300 backdrop-blur-md"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Proyectos
          </button>
          
          {/* Botón Secundario: Brillo Azul en Hover */}
          <button
            className="hover-target px-10 py-5 rounded-full bg-black/40 border border-white/20 text-gray-300 font-semibold hover:text-white hover:bg-blue-600/30 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300 backdrop-blur-md"
            onClick={() => window.location.href = 'mailto:tu@email.com'}
          >
            Contacto
          </button>
        </motion.div>

      </div>
    </section>
  );
}