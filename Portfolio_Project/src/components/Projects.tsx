import { useEffect, useState } from 'react';
import { ExternalLink, Award, Globe, Camera, Sparkles, Building2 } from 'lucide-react';

export default function Projects() {
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

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      title: 'Intelligent Anesthesia Management System',
      category: 'AI Project',
      description: 'AI-based real-time anesthesia monitoring system with machine learning models to dynamically adjust patient vitals.',
      tags: ['AI/ML', 'Real-time Monitoring', 'Healthcare', 'UI Design'],
      icon: Award,
      gradient: 'from-cyan-500 to-blue-500',
      patent: 'Patent Applied: 202541036271',
      highlights: ['Machine Learning', 'Data Visualization', 'System Flow Design'],
    },
    {
      title: 'AVGM Real Estate Website',
      category: 'Client Project',
      description: 'Premium corporate-style responsive real estate website with modern UI/UX and smooth interactions.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      icon: Building2,
      gradient: 'from-emerald-500 to-teal-500',
      highlights: ['Corporate Design', 'Mobile-First', 'SEO Optimized'],
    },
    {
      title: 'Aarumugas Wedding & Photoshoots',
      category: 'Portfolio Website',
      description: 'Elegant gallery layouts with dark and gold luxury theme for wedding photography showcase.',
      tags: ['Gallery Design', 'Dark Theme', 'Animation'],
      icon: Camera,
      gradient: 'from-amber-500 to-yellow-500',
      highlights: ['Luxury UI', 'Image Optimization', 'Smooth Animations'],
    },
    {
      title: 'Sasti Laser Clinic Website',
      category: 'Healthcare',
      description: 'Clean, luxury UI with smooth animations and Tailwind design for modern medical clinic.',
      tags: ['Tailwind CSS', 'Healthcare', 'Modern Design'],
      icon: Sparkles,
      gradient: 'from-pink-500 to-rose-500',
      highlights: ['Premium Design', 'Fast Loading', 'Accessible'],
    },
    {
      title: 'Gurukulam Academy',
      category: 'Education Platform',
      description: 'Complete front-end development for educational institute with mobile-friendly design.',
      tags: ['React', 'Responsive', 'Education'],
      icon: Globe,
      gradient: 'from-violet-500 to-purple-500',
      highlights: ['Student Portal', 'Course Management', 'Interactive UI'],
    },
    {
      title: 'Shivam Events & Sri Elumalayan Interiors',
      category: 'Business Websites',
      description: 'Client-ready designs with complete front-end development and modern aesthetics.',
      tags: ['HTML/CSS/JS', 'Bootstrap', 'Business'],
      icon: Building2,
      gradient: 'from-orange-500 to-red-500',
      highlights: ['Multi-page', 'Contact Forms', 'Image Galleries'],
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A collection of my work showcasing technical skills and creative design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="group glass rounded-3xl p-6 hover:neon-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.patent && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-lg border border-yellow-500/20">
                      <p className="text-xs font-semibold text-yellow-400 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {project.patent}
                      </p>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-md bg-gray-800/50 text-gray-300 border border-gray-700"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full glass text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full mt-4 py-2 glass rounded-lg font-medium text-sm hover:neon-glow transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-green group-hover:text-gray-950">
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
