import { useEffect, useState } from 'react';
import { Sparkles, Award, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const highlights = [
    {
      icon: Sparkles,
      title: 'Creative Design',
      description: 'Crafting pixel-perfect interfaces with modern aesthetics',
    },
    {
      icon: Award,
      title: 'Quality Driven',
      description: 'Committed to delivering production-ready solutions',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Strong collaboration and communication skills',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Analytical mindset with creative solutions',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-display font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="glass rounded-3xl p-8 hover:neon-glow transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a <span className="text-neon-green font-semibold">Biomedical Engineering graduate (2025)</span> with
                a deep passion for frontend development and UI/UX design. My unique background allows me to approach
                web development with both technical precision and creative innovation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I specialize in building <span className="text-neon-blue font-semibold">responsive, modern interfaces</span> using
                cutting-edge frameworks and technologies. Every project is an opportunity to create something beautiful,
                functional, and user-centric.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With strong <span className="text-neon-green font-semibold">communication skills</span> and a
                creative problem-solving approach, I enjoy collaborating with teams to bring ideas to life.
                I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 hover:neon-glow transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-blue to-neon-green flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-gray-950" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
