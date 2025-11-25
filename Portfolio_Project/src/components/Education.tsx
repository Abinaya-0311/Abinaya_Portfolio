import { useEffect, useState } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
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

    const element = document.getElementById('education');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const education = [
    {
      degree: 'B.E Biomedical Engineering',
      institution: 'VSB Engineering College, Karur',
      period: '2021 - 2025',
      grade: 'CGPA: 8.45',
      icon: GraduationCap,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: "St. Theresa's Girls Higher Secondary School, Karur",
      period: '2020 - 2021',
      grade: 'Percentage: 88.62%',
      icon: BookOpen,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: "St. Theresa's Girls Higher Secondary School, Karur",
      period: '2018 - 2019',
      grade: 'Percentage: 78%',
      icon: BookOpen,
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  const certifications = [
    {
      title: 'Front-End Development Course',
      provider: 'Great Learning',
      icon: Award,
    },
    {
      title: 'HTML, CSS & JavaScript for Beginners',
      provider: 'Udemy',
      icon: Award,
    },
    {
      title: 'JavaScript',
      provider: 'GUVI',
      icon: Award,
    },
    {
      title: 'Python Zero to Hero',
      provider: 'GUVI',
      icon: Award,
    },
    {
      title: 'Fullstack Development',
      provider: 'GUVI',
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-display font-bold mb-4">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full" />
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold mb-8 text-center text-neon-blue">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="glass rounded-3xl p-8 hover:neon-glow transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-display font-bold mb-2">{item.degree}</h4>
                        <p className="text-gray-300 mb-2">{item.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-green/20 border border-neon-blue/30">
                            {item.period}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-neon-green/20 to-emerald-500/20 border border-neon-green/30 font-semibold">
                            {item.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-display font-bold mb-8 text-center text-neon-green">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 hover:neon-glow-green transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-neon-green to-emerald-500">
                        <Icon className="w-6 h-6 text-gray-950" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{cert.title}</h4>
                        <p className="text-sm text-gray-400">{cert.provider}</p>
                      </div>
                    </div>
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
