import { useState, useEffect } from 'react'

const letter = [
  "My love,",
  "",
  "Sometimes words aren't enough, but I'll try anyway.",
  "You are the sunlight that makes everything in my world grow.",
  "I'm sorry for the moments I let you down —",
  "you deserve nothing but the best version of me.",
  "",
  "This little place is my promise to always try harder,",
  "to love deeper, and to cherish every single moment with you.",
  "",
  "You're my favorite hello and my hardest goodbye.",
  "Every love song, every sunset, every beautiful thing —",
  "they all remind me of you.",
  "",
  "Forever yours,",
  "❤️"
]

export default function LoveLetter() {
  const [revealed, setRevealed] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (!revealed) return
    if (visibleLines < letter.length) {
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), 200)
      return () => clearTimeout(timer)
    }
  }, [revealed, visibleLines])

  return (
    <section id="letter" className="py-16 md:py-24 px-4 bg-gradient-to-b from-blush to-rose-50">
      <div className="max-w-xl mx-auto">
        <h2 className="text-center font-quicksand text-2xl md:text-3xl font-semibold text-rose-400 mb-8">
          💌 A Letter for You
        </h2>

        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="block mx-auto px-8 py-4 bg-rose-200 hover:bg-rose-300 text-white font-quicksand font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            💕 Open this letter
          </button>
        ) : (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-lg border border-rose-100">
            {letter.slice(0, visibleLines).map((line, i) => (
              <p
                key={i}
                className={`font-quicksand text-base md:text-lg leading-relaxed animate-fadeInUp ${
                  line === letter[0] || line === 'Forever yours,'
                    ? 'font-semibold text-rose-400'
                    : line === '❤️'
                    ? 'text-rose-300 text-2xl'
                    : line === ''
                    ? 'h-4'
                    : 'text-rose-400/80'
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {line}
              </p>
            ))}
            {visibleLines >= letter.length && (
              <div className="mt-6 flex justify-center">
                <span className="text-3xl animate-heartBurst">💕</span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
