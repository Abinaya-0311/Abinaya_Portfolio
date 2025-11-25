import { useEffect, useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
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

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const experience = {
    role: 'Frontend Developer Intern',
    company: 'Bixcel Institute of Private Limited',
    location: 'Karur',
    duration: '21 July 2025 – 21 October 2025',
    description: 'Gained hands-on experience in frontend development through real-time client projects, building responsive and interactive websites.',
    responsibilities: [
      'Built responsive and interactive websites using HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap',
      'Collaborated with developers and designers to enhance UI/UX and website performance',
      'Delivered multiple client projects with modern design principles',
      'Implemented best practices for code quality and maintainability',
    ],
    projects: [
      'AVGM Real Estate',
      'Aarumugas Wedding & Photoshoots',
      'Sasti Laser Clinic',
      'Gurukulam Academy',
      'Shivam Events',
      'Sri Elumalayan Interiors',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Responsive Design', 'UI/UX'],
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-display font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 hover:neon-glow transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-green">
                    <Briefcase className="w-8 h-8 text-gray-950" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-neon-blue mb-2">
                      {experience.role}
                    </h3>
                    <p className="text-xl font-semibold text-gray-300 mb-2">{experience.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {experience.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">{experience.description}</p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-neon-green mb-4">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-neon-blue mb-4">Key Projects</h4>
                <div className="flex flex-wrap gap-3">
                  {experience.projects.map((project, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 glass rounded-lg text-sm font-medium hover:neon-glow transition-all duration-300"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-green/20 border border-neon-blue/30 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
