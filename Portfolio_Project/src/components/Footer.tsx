import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-display font-bold text-gradient mb-2">Abinaya S</h3>
            <p className="text-gray-400">Frontend Developer | UI/UX Designer</p>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>and</span>
            <Code2 className="w-4 h-4 text-neon-blue" />
            <span>by Abinaya S</span>
          </div>

          <div className="text-sm text-gray-500">
            <p>&copy; {currentYear} Abinaya S. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
