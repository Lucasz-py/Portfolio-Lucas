import { motion, type Variants } from 'framer-motion';
import LogoLoop from './LogoLoop';
import SplashCursor from './SplashCursor';
import { 
  SiDocker, 
  SiSupabase, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiVercel,
  SiNodedotjs,
  SiGit,
  SiMercadopago
} from 'react-icons/si';

// Definimos la paleta de colores con estados BASE y HOVER
const colors = {
  blue: { 
    text: 'text-blue-500', glow: 'rgba(59,130,246,0.6)', 
    baseBg: 'bg-blue-950/20', baseBorder: 'border-blue-500/20', 
    bgHover: 'hover:bg-blue-900/40', borderHover: 'hover:border-blue-400/60', 
    shadowHover: 'hover:shadow-[inset_0_0_50px_rgba(59,130,246,0.2),0_0_20px_rgba(59,130,246,0.4)]' 
  },
  orange: { 
    text: 'text-orange-500', glow: 'rgba(249,115,22,0.6)', 
    baseBg: 'bg-orange-950/20', baseBorder: 'border-orange-500/20', 
    bgHover: 'hover:bg-orange-900/40', borderHover: 'hover:border-orange-400/60', 
    shadowHover: 'hover:shadow-[inset_0_0_50px_rgba(249,115,22,0.2),0_0_20px_rgba(249,115,22,0.4)]' 
  },
  purple: { 
    text: 'text-purple-500', glow: 'rgba(168,85,247,0.6)', 
    baseBg: 'bg-purple-950/20', baseBorder: 'border-purple-500/20', 
    bgHover: 'hover:bg-purple-900/40', borderHover: 'hover:border-purple-400/60', 
    shadowHover: 'hover:shadow-[inset_0_0_50px_rgba(168,85,247,0.2),0_0_20px_rgba(168,85,247,0.4)]' 
  },
};

const stack = [
  { category: 'LIBRARY', name: 'REACT', color: 'blue' },
  { category: 'LANGUAGE', name: 'TYPESCRIPT', color: 'blue' },
  { category: 'TOOL', name: 'VITE', color: 'purple' },
  { category: 'BACKEND', name: 'NODE.JS', color: 'orange' },
  { category: 'STYLING', name: 'TAILWIND', color: 'blue' },
  { category: 'DATABASE', name: 'SUPABASE', color: 'orange' },
  { category: 'VERSION', name: 'GIT', color: 'orange' },
  { category: 'API', name: 'MERCADO PAGO', color: 'purple' },
];

const iconSize = "text-[45px]";

const techLogos = [
  { node: <SiReact className={`${iconSize} ${colors.blue.text} drop-shadow-[0_0_15px_${colors.blue.glow}] hover:scale-110 transition-transform`} />, title: "React" },
  { node: <SiNextdotjs className={`${iconSize} text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-110 transition-transform`} />, title: "Next.js" },
  { node: <SiTypescript className={`${iconSize} ${colors.blue.text} drop-shadow-[0_0_15px_${colors.blue.glow}] hover:scale-110 transition-transform`} />, title: "TypeScript" },
  { node: <SiTailwindcss className={`${iconSize} ${colors.blue.text} drop-shadow-[0_0_15px_${colors.blue.glow}] hover:scale-110 transition-transform`} />, title: "Tailwind CSS" },
  { node: <SiNodedotjs className={`${iconSize} ${colors.orange.text} drop-shadow-[0_0_15px_${colors.orange.glow}] hover:scale-110 transition-transform`} />, title: "Node.js" },
  { node: <SiSupabase className={`${iconSize} ${colors.orange.text} drop-shadow-[0_0_15px_${colors.orange.glow}] hover:scale-110 transition-transform`} />, title: "Supabase" },
  { node: <SiMercadopago className={`${iconSize} ${colors.blue.text} drop-shadow-[0_0_15px_${colors.blue.glow}] hover:scale-110 transition-transform`} />, title: "Mercado Pago" },
  { node: <SiDocker className={`${iconSize} ${colors.blue.text} drop-shadow-[0_0_15px_${colors.blue.glow}] hover:scale-110 transition-transform`} />, title: "Docker" },
  { node: <SiGit className={`${iconSize} ${colors.orange.text} drop-shadow-[0_0_15px_${colors.orange.glow}] hover:scale-110 transition-transform`} />, title: "Git" },
  { node: <SiVercel className={`${iconSize} text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-110 transition-transform`} />, title: "Vercel" },
];

export default function TechStack() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring" } },
  };

  return (
    <section id="skills" className="relative bg-black text-white pb-32 overflow-hidden min-h-screen flex flex-col justify-start">
      
      {/* --- LUCES AMBIENTALES NEÓN --- */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-orange-600/20 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none z-0"
      />

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      {/* --- FLUIDO INTERACTIVO --- */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <SplashCursor SPLAT_RADIUS={0.3} SPLAT_FORCE={4000} DENSITY_DISSIPATION={2} VELOCITY_DISSIPATION={0.5} />
      </div>
      
      {/* --- EL LOGOLOOP --- */}
      <div className="absolute top-0 left-0 w-full z-30 bg-black/40 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-4">
        {/* LÍNEA LÁSER SUPERIOR NARANJA */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent shadow-[0_0_15px_rgba(249,115,22,0.8)]"></div>
        {/* LÍNEA LÁSER INFERIOR AZUL */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        
        <LogoLoop
          logos={techLogos}
          speed={40} direction="left" logoHeight={50} gap={60} hoverSpeed={0} scaleOnHover={true}
          fadeOut={true} fadeOutColor="#000000" ariaLabel="Technology partners" className="relative z-10 pointer-events-auto"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full pt-44 relative z-20 pointer-events-none">
        
        {/* --- ENCABEZADO --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6 mb-12 pointer-events-none"
        >
          <div>
            <span className="text-orange-400 font-mono text-xs font-bold tracking-[0.2em] uppercase mb-3 block drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">
              / Conocimientos
            </span>
            <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter drop-shadow-lg">
              TECH_<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">STACK</span>
            </h2>
          </div>
          <span className="font-mono text-xs text-gray-400 hidden md:flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]"></span>
            </span>
            SYSTEM_OPTIMIZED
          </span>
        </motion.div>

        {/* --- GRILLA HOLOGRÁFICA --- */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_40px_rgba(0,0,0,0.5)] pointer-events-none">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 bg-black/60 rounded-2xl overflow-hidden backdrop-blur-md"
          >
            {stack.map((tech, index) => {
              const colorTheme = colors[tech.color as keyof typeof colors];
              
              return (
                <motion.div 
                  key={index} 
                  variants={cardVariants}
                  className={`
                    pointer-events-auto hover-target group border-r border-b p-8 flex flex-col justify-center items-center aspect-[2/1] md:aspect-auto md:h-48 transition-all duration-500 relative overflow-hidden cursor-pointer
                    ${colorTheme.baseBg} ${colorTheme.baseBorder} ${colorTheme.bgHover} ${colorTheme.borderHover} ${colorTheme.shadowHover}
                  `}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${colorTheme.glow.replace('0.6', '0.15')} 0%, transparent 70%)` }}></div>
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>

                  <span className="font-mono text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 mb-3 transition-colors z-10 uppercase tracking-widest">
                    <span className={`${colorTheme.text} drop-shadow-[0_0_5px_${colorTheme.glow}]`}>{'>_'}</span> {tech.category}
                  </span>
                  <span className="font-bold text-xl md:text-2xl tracking-tight text-gray-300 group-hover:text-white transition-colors z-10 drop-shadow-md">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}