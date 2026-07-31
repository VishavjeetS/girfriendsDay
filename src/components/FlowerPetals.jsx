import { useState } from 'react'

const TOTAL_PETALS = 8
const PETAL_COLORS = ['#FFB3C6', '#FF8FAB', '#FFD6E0', '#FFB3C6', '#FF8FAB', '#FFD6E0', '#FFB3C6', '#FF8FAB']

export default function FlowerPetals() {
  const [petals, setPetals] = useState(Array.from({ length: TOTAL_PETALS }, (_, i) => i))
  const [message, setMessage] = useState('')
  const [pluckedIndex, setPluckedIndex] = useState(0)
  const [done, setDone] = useState(false)

  const pluckPetal = (index) => {
    if (done) return

    const actualIndex = petals[index]
    const newPetals = petals.filter((_, i) => i !== index)
    setPetals(newPetals)

    const isLove = pluckedIndex % 2 === 0
    setMessage(isLove ? '💕 Loves me…' : '💔 Loves me not…')
    setPluckedIndex((p) => p + 1)

    if (newPetals.length === 0) {
      setDone(true)
      setMessage('🌹 She loves me! Forever and always! 💕')
    }
  }

  const reset = () => {
    setPetals(Array.from({ length: TOTAL_PETALS }, (_, i) => i))
    setMessage('')
    setPluckedIndex(0)
    setDone(false)
  }

  return (
    <section id="petals" className="py-16 md:py-24 px-4 bg-gradient-to-b from-blush to-rose-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-quicksand text-2xl md:text-3xl font-semibold text-rose-400 mb-2">
          🌷 Petal Picker
        </h2>
        <p className="font-quicksand text-rose-300/70 mb-6">
          Tap a petal to find out…
        </p>

        {message && (
          <p className="font-quicksand text-lg font-semibold text-rose-400 mb-6 animate-fadeInUp min-h-[2rem]">
            {message}
          </p>
        )}

        {!done && petals.length > 0 && (
          <div className="relative w-64 h-64 mx-auto mb-6">
            {petals.map((petalIdx, i) => {
              const angle = (petalIdx / TOTAL_PETALS) * 360
              const color = PETAL_COLORS[petalIdx]
              return (
                <div
                  key={petalIdx}
                  className="absolute inset-0 flex items-start justify-center cursor-pointer"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div
                    onClick={() => pluckPetal(i)}
                    className="w-10 h-20 md:w-12 md:h-24 -mt-3 rounded-full origin-bottom transition-all duration-300 hover:scale-110 hover:opacity-80 shadow-sm"
                    style={{ background: `linear-gradient(to bottom, ${color}, ${color}dd)` }}
                  />
                </div>
              )
            })}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-yellow-200 rounded-full shadow-inner border-2 border-yellow-300/50 flex items-center justify-center">
              <span className="text-yellow-500 text-lg">✿</span>
            </div>
          </div>
        )}

        {done && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-100 animate-fadeInUp">
            <span className="text-5xl block mb-4">🌹</span>
            <p className="font-quicksand text-rose-400/80 mb-6">
              The answer is clear — she loves you!
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-rose-200 hover:bg-rose-300 text-white font-quicksand font-semibold rounded-xl shadow-md transition-all duration-300 cursor-pointer"
            >
              🌸 Try Again
            </button>
          </div>
        )}

        {petals.length === TOTAL_PETALS && !message && (
          <p className="font-quicksand text-rose-300/50 mt-6">
            Go ahead, pluck a petal…
          </p>
        )}
      </div>
    </section>
  )
}
