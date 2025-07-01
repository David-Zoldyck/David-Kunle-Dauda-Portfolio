export const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-primary overflow-hidden">
      {/* Glowing core orb */}
      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 animate-pulse shadow-[0_0_60px_#c084fc] mb-6" />

      {/* Animated star particles (fake but fancy) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white opacity-60 animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Cosmic text */}
      <p className="text-2xl font-semibold text-primary animate-pulse">
        Loading universe...
      </p>
    </div>
  );
};
