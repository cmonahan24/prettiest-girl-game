import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        <div className="mb-12">
          <h1 className="text-8xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x" 
              style={{ fontFamily: "'Fredoka', sans-serif" }}>
            Prettiest Girl
          </h1>
          <h2 className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"
              style={{ fontFamily: "'Fredoka', sans-serif" }}>
            In The World
          </h2>
          <p className="text-3xl mt-8 text-purple-700 font-semibold" style={{ fontFamily: "'Nunito', sans-serif" }}>
            The Ultimate Beauty Quiz ✨
          </p>
        </div>

        <button
          onClick={() => navigate('/game')}
          className="group relative px-16 py-6 text-3xl font-black text-white rounded-full overflow-hidden transform transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
          
          {/* Button glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-white blur-xl opacity-25"></div>
          </div>
          
          <span className="relative z-10 flex items-center gap-3">
            PLAY NOW
            <span className="text-4xl">💖</span>
          </span>
        </button>

        <div className="mt-12 flex gap-4 justify-center text-5xl">
          <span className="animate-bounce">💕</span>
          <span className="animate-bounce animation-delay-200">✨</span>
          <span className="animate-bounce animation-delay-400">🌟</span>
          <span className="animate-bounce animation-delay-600">💝</span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@700&family=Nunito:wght@600;700&display=swap');
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Home;
