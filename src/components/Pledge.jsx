import { useState } from "react";

const promises = [
  "Listen to you with my full heart",
  "Show up for you, every single day",
  "Choose patience when it is hard",
  "Remind you how much you are loved",
  "Grow alongside you, always",
  "Always be there for you",
  "Never stop loving you",
  "Always gonna hug you like theres no tomorrow",
];

export default function Pledge() {
  const [sealed, setSealed] = useState(false);
  const [hearts, setHearts] = useState([]);

  const sealPledge = () => {
    setSealed(true);
    const burst = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      dx: -50 + Math.random() * 100,
      dy: -50 + Math.random() * 100,
      size: 14 + Math.random() * 20,
      delay: Math.random() * 0.5,
    }));
    setHearts(burst);
    setTimeout(() => setHearts([]), 2000);
  };

  return (
    <section
      id="pledge"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-blush to-rose-100 relative overflow-hidden"
    >
      <div className="max-w-xl mx-auto text-center relative z-10">
        <h2 className="font-quicksand text-2xl md:text-3xl font-semibold text-rose-400 mb-2">
          💝 My Promise to You
        </h2>
        <p className="font-quicksand text-rose-300/70 mb-8">
          Sealed with all my love
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-100">
          {!sealed ? (
            <>
              <p className="font-quicksand text-rose-400/80 mb-6">
                I promise to…
              </p>
              <ul className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                {promises.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-quicksand text-rose-400/70"
                  >
                    <span className="text-rose-300 mt-0.5">💕</span>
                    {p}
                  </li>
                ))}
              </ul>
              <button
                onClick={sealPledge}
                className="px-8 py-4 bg-rose-300 hover:bg-rose-400 text-white font-quicksand font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-lg"
              >
                💖 Seal the Pledge
              </button>
            </>
          ) : (
            <div className="animate-fadeInUp">
              <span className="text-6xl block mb-4">💖</span>
              <h3 className="font-quicksand text-2xl font-bold text-rose-400 mb-2">
                Sealed with a kiss!
              </h3>
              <p className="font-quicksand text-rose-300/80 mb-6">
                Every word is from my heart to yours.
                <br />I love you, always and forever.
              </p>
              <button
                onClick={() => setSealed(false)}
                className="px-6 py-3 bg-rose-200 hover:bg-rose-300 text-white font-quicksand font-semibold rounded-xl shadow-md transition-all duration-300 cursor-pointer"
              >
                💕 Read Again
              </button>
            </div>
          )}
        </div>
      </div>

      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute pointer-events-none animate-heartBurst"
          style={{
            left: `${h.x}%`,
            top: `${h.y}%`,
            fontSize: h.size,
            animationDelay: `${h.delay}s`,
            "--dx": `${h.dx}px`,
            "--dy": `${h.dy}px`,
          }}
        >
          ❤️
        </div>
      ))}

      <h2 className="font-quicksand text-5xl md:text-3xl font-bold text-center text-rose-400 mt-20">
        💝 Happy Girlfriends Day 🎉 My Love 💝💝
      </h2>
    </section>
  );
}
