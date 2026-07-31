import { useState, useRef, useCallback, useEffect } from 'react'

const CATCH_TARGET = 12

let heartId = 0

export default function HeartCatcher() {
  const [hearts, setHearts] = useState([])
  const [score, setScore] = useState(0)
  const [gameState, setGameState] = useState('idle')
  const areaRef = useRef(null)
  const intervalRef = useRef(null)

  const addHeart = useCallback(() => {
    setHearts((prev) => [
      ...prev,
      {
        id: ++heartId,
        x: 5 + Math.random() * 85,
        delay: Math.random() * 0.5,
        caught: false,
      },
    ])
  }, [])

  const startGame = () => {
    setScore(0)
    setHearts([])
    setGameState('playing')
    heartId = 0
  }

  useEffect(() => {
    if (gameState !== 'playing') return
    intervalRef.current = setInterval(() => {
      addHeart()
    }, 600)
    return () => clearInterval(intervalRef.current)
  }, [gameState, addHeart])

  const catchHeart = (id) => {
    setHearts((prev) => prev.filter((h) => h.id !== id))
    setScore((s) => {
      const newScore = s + 1
      if (newScore >= CATCH_TARGET) {
        setGameState('won')
        clearInterval(intervalRef.current)
      }
      return newScore
    })
  }

  const removeHeart = (id) => {
    setHearts((prev) => prev.filter((h) => h.id !== id))
  }

  return (
    <section id="hearts" className="py-16 md:py-24 px-4 bg-gradient-to-b from-rose-50 to-blush">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-quicksand text-2xl md:text-3xl font-semibold text-rose-400 mb-2">
          💖 Heart Catcher
        </h2>
        <p className="font-quicksand text-rose-300/70 mb-6">
          Catch {CATCH_TARGET} hearts to win!
        </p>

        {gameState === 'idle' && (
          <button
            onClick={startGame}
            className="px-8 py-4 bg-rose-200 hover:bg-rose-300 text-white font-quicksand font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-lg"
          >
            💕 Start Catching!
          </button>
        )}

        {gameState === 'playing' && (
          <>
            <div className="text-rose-400 font-quicksand font-semibold text-lg mb-4">
              Score: {score} / {CATCH_TARGET}
            </div>
            <div
              ref={areaRef}
              className="relative w-full h-[400px] bg-gradient-to-b from-rose-50/50 to-rose-100/50 rounded-3xl border-2 border-dashed border-rose-200 overflow-hidden"
            >
              {hearts.map((h) => (
                <button
                  key={h.id}
                  onClick={() => catchHeart(h.id)}
                  onAnimationEnd={() => removeHeart(h.id)}
                  className="absolute text-2xl cursor-pointer hover:scale-125 transition-transform"
                  style={{
                    left: `${h.x}%`,
                    top: '-40px',
                    animation: `fall ${2 + h.delay}s linear forwards`,
                    animationDelay: `${h.delay}s`,
                  }}
                >
                  ❤️
                </button>
              ))}

              {score === 0 && hearts.length === 0 && (
                <p className="absolute inset-0 flex items-center justify-center font-quicksand text-rose-300/50 text-lg">
                  Hearts are coming! Tap them!
                </p>
              )}
            </div>
          </>
        )}

        {gameState === 'won' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-100 animate-fadeInUp">
            <span className="text-5xl block mb-4">🎉</span>
            <h3 className="font-quicksand text-2xl font-bold text-rose-400 mb-2">
              You caught them all!
            </h3>
            <p className="font-quicksand text-rose-300/80 mb-6">
              Just like you caught my heart — all {CATCH_TARGET} of them ❤️
            </p>
            <button
              onClick={startGame}
              className="px-6 py-3 bg-rose-200 hover:bg-rose-300 text-white font-quicksand font-semibold rounded-xl shadow-md transition-all duration-300 cursor-pointer"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
