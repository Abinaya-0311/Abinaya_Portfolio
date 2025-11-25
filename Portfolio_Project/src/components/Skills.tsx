import { useEffect, useState } from 'react';
import { Code2, Palette, GitBranch, MessageSquare, Lightbulb, Clock, Users2, Zap } from 'lucide-react';

export default function Skills() {
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const technicalSkills = [
    { name: 'HTML', level: 95, icon: Code2, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', level: 90, icon: Palette, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, icon: Code2, color: 'from-yellow-500 to-amber-500' },
    { name: 'React.js', level: 88, icon: Code2, color: 'from-cyan-500 to-blue-500' },
    { name: 'Tailwind CSS', level: 92, icon: Palette, color: 'from-teal-500 to-cyan-500' },
    { name: 'Bootstrap', level: 85, icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'Git & GitHub', level: 80, icon: GitBranch, color: 'from-gray-500 to-gray-700' },
  ];

  const softSkills = [
    { name: 'Communication', icon: MessageSquare, description: 'Clear and effective collaboration' },
    { name: 'Problem Solving', icon: Lightbulb, description: 'Analytical thinking and solutions' },
    { name: 'Adaptability', icon: Zap, description: 'Quick learning and flexibility' },
    { name: 'Time Management', icon: Clock, description: 'Efficient task prioritization' },
    { name: 'Team Collaboration', icon: Users2, description: 'Working effectively in teams' },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-display font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="glass rounded-3xl p-8 hover:neon-glow transition-all duration-300">
              <h3 className="text-2xl font-display font-bold mb-8 text-neon-blue">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-semibold text-gray-200">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass rounded-3xl p-8 hover:neon-glow-green transition-all duration-300 mb-4">
                <h3 className="text-2xl font-display font-bold mb-8 text-neon-green">Soft Skills</h3>
              </div>
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="glass rounded-2xl p-6 hover:neon-glow-green transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-neon-green to-emerald-500 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-gray-950" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{skill.name}</h4>
                        <p className="text-sm text-gray-400">{skill.description}</p>
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
