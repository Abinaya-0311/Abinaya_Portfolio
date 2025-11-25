export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute top-60 right-20 w-96 h-96 bg-neon-green/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black opacity-80" />

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </>
  );
}
