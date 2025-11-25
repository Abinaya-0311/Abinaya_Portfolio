import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 99437 68981',
      link: 'tel:+919943768981',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'sabinayabme@gmail.com',
      link: 'mailto:sabinayabme@gmail.com',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Karur, Tamil Nadu',
      link: '#',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/AbinayaSenthilkumar-614a86287',
      gradient: 'from-blue-600 to-blue-500',
    },
    {
      icon: Github,
      name: 'GitHub',
      link: 'https://github.com',
      gradient: 'from-gray-700 to-gray-600',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-display font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="glass rounded-3xl p-8 mb-8 hover:neon-glow transition-all duration-300">
                <h3 className="text-2xl font-display font-bold mb-6 text-neon-blue">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.link}
                        className="flex items-start gap-4 p-4 glass rounded-2xl hover:neon-glow transition-all duration-300 hover:scale-105 group"
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${item.gradient} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">{item.title}</p>
                          <p className="font-semibold text-gray-200">{item.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="glass rounded-3xl p-8 hover:neon-glow-green transition-all duration-300">
                <h3 className="text-2xl font-display font-bold mb-6 text-neon-green">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-6 glass rounded-2xl hover:neon-glow transition-all duration-300 hover:scale-105 group"
                      >
                        <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-center font-semibold">{social.name}</p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 hover:neon-glow transition-all duration-300">
              <h3 className="text-2xl font-display font-bold mb-6 text-neon-green">Send a Message</h3>
              <form onSubmit={handleSubmit} action="https://formsubmit.co/sabinayabme@gmail.com" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg focus:neon-glow outline-none transition-all duration-300 text-gray-100 placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg focus:neon-glow outline-none transition-all duration-300 text-gray-100 placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg focus:neon-glow outline-none transition-all duration-300 text-gray-100 placeholder-gray-500"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass rounded-lg focus:neon-glow outline-none transition-all duration-300 text-gray-100 placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg font-semibold text-gray-950 hover:scale-105 transition-all duration-300 neon-glow flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
