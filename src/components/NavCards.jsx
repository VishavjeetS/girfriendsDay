const experiences = [
  { id: 'letter', emoji: '💌', label: 'Love Letter', desc: 'A message just for you' },
  { id: 'hearts', emoji: '💘', label: 'Heart Catcher', desc: 'Catch all the love' },
  { id: 'petals', emoji: '🌷', label: 'Petal Picker', desc: 'Loves me… loves me not' },
  { id: 'quiz', emoji: '🧠', label: 'Love Quiz', desc: 'How well do you know us?' },
  { id: 'rose', emoji: '🌹', label: 'Grow a Rose', desc: 'Watch love bloom' },
  { id: 'compliments', emoji: '✨', label: 'Compliments', desc: 'You deserve every word' },
  { id: 'pledge', emoji: '💝', label: 'My Promise', desc: 'Sealed with love' },
]

export default function NavCards() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-12 md:py-16 px-4 bg-cream">
      <h2 className="text-center font-quicksand text-2xl md:text-3xl font-semibold text-rose-400 mb-2">
        Pick an Experience 💫
      </h2>
      <p className="text-center font-quicksand text-rose-300/70 mb-8">
        Tap one to begin
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
        {experiences.map((exp) => (
          <button
            key={exp.id}
            onClick={() => scrollTo(exp.id)}
            className="flex flex-col items-center gap-2 p-4 md:p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-rose-100 shadow-sm hover:shadow-lg hover:border-rose-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform">
              {exp.emoji}
            </span>
            <span className="font-quicksand font-semibold text-sm text-rose-400">
              {exp.label}
            </span>
            <span className="font-quicksand text-[10px] md:text-xs text-rose-300/60 leading-tight text-center">
              {exp.desc}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
