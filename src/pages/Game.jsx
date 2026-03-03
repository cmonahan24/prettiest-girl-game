import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import PhotoCard from '../components/PhotoCard';
import { celebrities, girlfriendPhotos, winnerPhoto } from '../data/photos';

function Game() {
  const navigate = useNavigate();
  const [round, setRound] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [currentGirlfriendPhoto, setCurrentGirlfriendPhoto] = useState(0);

  const currentCelebrity = celebrities[round];

  const handleGirlfriendClick = () => {
    if (round < 6) {
      // Move to next round
      setRound(round + 1);
      setCurrentGirlfriendPhoto((currentGirlfriendPhoto + 1) % girlfriendPhotos.length);
    } else {
      // Game won!
      setGameWon(true);
    }
  };

  const handleCelebrityClick = () => {
    // This won't actually be clickable due to dodging, but just in case
    console.log('Nice try! 😊');
  };

  if (gameWon) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-yellow-300 relative overflow-hidden">
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={true}
          numberOfPieces={300}
        />

        <div className="text-center z-10 px-8">
          <h1 className="text-8xl font-black mb-8 text-white drop-shadow-2xl animate-bounce"
            style={{ fontFamily: "'Fredoka', sans-serif" }}>
            WINNER! ✨
          </h1>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
            {/* Show girlfriend's WINNER photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-yellow-300">
                <img
                  src={winnerPhoto}
                  alt="Winner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 right-4 text-center">
                  <span className="text-5xl animate-pulse">👑</span>
                </div>
              </div>
            </div>

            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 mb-8 leading-relaxed"
              style={{ fontFamily: "'Nunito', sans-serif" }}>
              As if there was ever any doubt - you're the prettiest person on earth!
            </p>

            <div className="flex gap-4 justify-center text-6xl mb-8">
              <span className="animate-pulse">💖</span>
              <span className="animate-pulse animation-delay-200">👑</span>
              <span className="animate-pulse animation-delay-400">✨</span>
              <span className="animate-pulse animation-delay-600">🌟</span>
              <span className="animate-pulse animation-delay-800">💝</span>
            </div>

            <button
              onClick={() => {
                setRound(0);
                setGameWon(false);
                setCurrentGirlfriendPhoto(0);
              }}
              className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-2xl font-black rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 active:scale-95"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              Play Again! 💕
            </button>
          </div>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@700&family=Nunito:wght@600;700;800&display=swap');
          
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-600 { animation-delay: 0.6s; }
          .animation-delay-800 { animation-delay: 0.8s; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-8 pb-4 text-center">
        <h1 className="text-6xl font-black text-white drop-shadow-lg mb-4" style={{ fontFamily: "'Fredoka', sans-serif" }}>
          Who is Prettier? 💕
        </h1>
        <p className="text-2xl font-bold text-purple-700" style={{ fontFamily: "'Nunito', sans-serif" }}>
          Round {round + 1} of 7
        </p>

        {/* Progress bar */}
        <div className="max-w-md mx-auto mt-4 h-4 bg-white/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 ease-out"
            style={{ width: `${((round + 1) / 7) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Game area */}
      <div className="flex-1 flex items-center justify-center px-8 pb-12">
        <div className="w-full max-w-6xl flex gap-12 items-center justify-center">
          {/* Girlfriend's photo - clickable */}
          <PhotoCard
            image={girlfriendPhotos[currentGirlfriendPhoto]}
            name="Addison Robertson 👑"
            isDodging={false}
            onSelect={handleGirlfriendClick}
            isGirlfriend={true}
          />

          {/* VS text */}
          <div className="text-center">
            <div className="text-8xl font-black text-white drop-shadow-2xl" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              VS
            </div>
          </div>

          {/* Celebrity photo - dodges cursor */}
          <PhotoCard
            key={round} // This forces component to reset when round changes
            image={currentCelebrity.image}
            name={currentCelebrity.name}
            isDodging={true}
            onSelect={handleCelebrityClick}
            isGirlfriend={false}
          />
        </div>
      </div>

      {/* Hint text */}
      <div className="relative z-10 text-center pb-8">
        <p className="text-xl text-purple-700 font-semibold animate-pulse" style={{ fontFamily: "'Nunito', sans-serif" }}>
          Click on the prettier one! ✨
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@700&family=Nunito:wght@600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default Game;
