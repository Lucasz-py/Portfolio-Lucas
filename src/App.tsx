import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoAmI from './components/WhoAmI';
import TechStack from './components/TechStack';
import SelectedWorks from './components/SelectedWorks';
import Footer from './components/Footer';
import { AnimationProvider } from './context/AnimationContext'; // <-- Importamos el Contexto

function App() {
  return (
    // Envolvemos todo en el AnimationProvider
    <AnimationProvider>
      <div className="relative min-h-screen bg-black">
        <CustomCursor />
        
        <Header />

        <main>
          <Hero />
          <WhoAmI />
          <TechStack />
          <SelectedWorks />
        </main>

        <Footer />
      </div>
    </AnimationProvider>
  );
}

export default App;