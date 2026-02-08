import React from 'react';
import logo from '../assets/logo.png'; // Asegúrate de que la ruta sea correcta

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[150] bg-black border-b-4 border-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo y Nombre */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <img 
            src={logo} 
            alt="Logo El Rock de Todos los Días" 
            className="h-12 w-auto grayscale invert hover:grayscale-0 transition-all"
          />
          <h1 className="text-white font-syne font-black uppercase text-xl md:text-2xl leading-none tracking-tighter">
            El Rock <br /> <span className="text-red-600">de todos los días</span>
          </h1>
        </div>

        {/* Menú o info extra (puedes dejarlo vacío por ahora) */}
        <div className="hidden md:block">
           <span className="mono text-xs text-zinc-500 font-bold uppercase tracking-widest">
             Est. 2024 // Fanzine Digital
           </span>
        </div>
      </div>
    </header>
  );
};

export default Header;