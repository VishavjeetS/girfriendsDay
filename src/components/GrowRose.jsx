import { useState } from 'react'

const stages = [
  { name: 'seed', emoji: '🌱', label: 'A tiny seed…' },
  { name: 'sprout', emoji: '🌿', label: 'A sprout appears!' },
  { name: 'bud', emoji: '🌷', label: 'A bud is forming…' },
  { name: 'bloom', emoji: '🌹', label: 'Full bloom! 🎉' },
  { name: 'note', emoji: '💌', label: '' },
]

export default function GrowRose() {
  const [stage, setStage] = useState(0)
  const [waterCount, setWaterCount] = useState(0)

  const water = () => {
    if (stage >= 3) return
    const newWater = waterCount + 1
    setWaterCount(newWater)
    if (newWater >= 3) {
      setStage((s) => Math.min(s + 1, 4))
      setWaterCount(0)
    }
  }

  const reset = () => {
    setStage(0)
    setWaterCount(0)
  }

  const progress = stage <= 2 ? (waterCount / 3) * 100 : 100

  return (
    <section id="rose" className="py-16 md:py-24 px-4 bg-gradient-to-b from-blush to-rose-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-quicksand text-2xl md:text-3xl font-semibold text-rose-400 mb-2">
          🌹 Grow a Rose
        </h2>
        <p className="font-quicksand text-rose-300/70 mb-8">
          Water it with love and watch it bloom
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-rose-100">
          <div className="text-7xl md:text-8xl mb-4 min-h-[8rem] flex items-center justify-center animate-fadeInUp" key={stage}>
            {stage === 0 && (
              <div className="flex flex-col items-center">
                <span className="text-6xl">🌱</span>
                <div className="w-20 h-16 bg-amber-700 rounded-b-full mt-2 relative">
                  <div className="absolute -top-2 left-0 right-0 h-3 bg-amber-600 rounded-full" />
                </div>
              </div>
            )}
            {stage === 1 && (
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-1.5 h-14 bg-green-500 mx-auto rounded-full origin-bottom animate-sway" />
                  <div className="absolute top-4 -left-4 w-5 h-3 bg-green-400 rounded-bl-full rounded-br-full" />
                  <div className="absolute top-8 -right-4 w-5 h-3 bg-green-400 rounded-bl-full rounded-br-full" />
                </div>
                <div className="w-20 h-14 bg-amber-700 rounded-b-full mt-1 relative">
                  <div className="absolute -top-2 left-0 right-0 h-3 bg-amber-600 rounded-full" />
                </div>
              </div>
            )}
            {stage === 2 && (
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-1.5 h-16 bg-green-500 mx-auto rounded-full origin-bottom animate-sway" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-6 bg-rose-300 rounded-full shadow-sm" />
                </div>
                <div className="w-20 h-14 bg-amber-700 rounded-b-full mt-1 relative">
                  <div className="absolute -top-2 left-0 right-0 h-3 bg-amber-600 rounded-full" />
                </div>
              </div>
            )}
            {stage === 3 && (
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-1.5 h-16 bg-green-500 mx-auto rounded-full origin-bottom animate-sway" />
                  {[0, 72, 144, 216, 288].map((angle) => (
                    <div
                      key={angle}
                      className="absolute w-6 h-8 bg-rose-300 rounded-full origin-bottom"
                      style={{
                        transform: `rotate(${angle}deg)`,
                        top: -24,
                        left: -12,
                        transformOrigin: 'bottom center',
                      }}
                    />
                  ))}
                  {[36, 108, 180, 252, 324].map((angle) => (
                    <div
                      key={angle}
                      className="absolute w-4 h-6 bg-rose-200 rounded-full origin-bottom"
                      style={{
                        transform: `rotate(${angle}deg)`,
                        top: -20,
                        left: -10,
                        transformOrigin: 'bottom center',
                      }}
                    />
                  ))}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-300 rounded-full" />
                </div>
                <div className="w-20 h-14 bg-amber-700 rounded-b-full mt-1 relative">
                  <div className="absolute -top-2 left-0 right-0 h-3 bg-amber-600 rounded-full" />
                </div>
              </div>
            )}
            {stage === 4 && (
              <div className="flex flex-col items-center animate-fadeInUp">
                <span className="text-6xl mb-4">💌</span>
                <p className="font-quicksand text-xl text-rose-400 font-semibold">
                  Like this rose, my love for you grows every single day.
                </p>
                <p className="font-quicksand text-rose-300/70 mt-2">
                  Thank you for watering it with your love 💕
                </p>
              </div>
            )}
          </div>

          {stage <= 2 && (
            <>
              <div className="w-full bg-rose-100 rounded-full h-2 mb-4">
                <div
                  className="bg-rose-300 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <button
                onClick={water}
                className="px-8 py-3 bg-rose-200 hover:bg-rose-300 text-white font-quicksand font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-lg"
              >
                💧 Water {waterCount}/3
              </button>
            </>
          )}

          {stage === 3 && (
            <button
              onClick={() => setStage(4)}
              className="px-8 py-3 bg-rose-200 hover:bg-rose-300 text-white font-quicksand font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-lg"
            >
              💌 Read the Note
            </button>
          )}

          {stage === 4 && (
            <button
              onClick={reset}
              className="px-6 py-3 bg-rose-200 hover:bg-rose-300 text-white font-quicksand font-semibold rounded-xl shadow-md transition-all duration-300 cursor-pointer"
            >
              🌱 Grow Again
            </button>
          )}

          <p className="font-quicksand text-sm text-rose-300/50 mt-4">
            {stages[Math.min(stage, 3)].label}
          </p>
        </div>
      </div>
    </section>
  )
}
