import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const titles = ['Frontend Developer', 'UI/UX Designer', 'Biomedical Engineer'];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <span className="inline-block px-6 py-2 glass rounded-full text-sm font-medium text-neon-green mb-8 animate-pulse">
              Available for Opportunities
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Abinaya S</span>
          </h1>

          <div className="h-20 mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-gray-300 transition-all duration-500">
              {titles[currentTitle]}
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about crafting beautiful, responsive interfaces that blend
            aesthetics with functionality. Transforming ideas into elegant digital experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-full font-semibold text-gray-950 hover:scale-105 transition-all duration-300 neon-glow"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-4 glass rounded-full font-semibold hover:neon-glow transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/AbinayaSenthilkumar-614a86287"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg hover:neon-glow transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg hover:neon-glow transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:sabinayabme@gmail.com"
              className="p-3 glass rounded-lg hover:neon-glow transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="block p-2 glass rounded-full">
            <ArrowDown className="w-6 h-6 text-neon-blue" />
          </a>
        </div>
      </div>
    </section>
  );
}
