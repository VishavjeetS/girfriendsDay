import { useState } from "react";

const compliments = [
  "Meri mtallo ke tiddies",
  "Tumhari aakhe, oh may gawdddddd",
  "Meri mtallo ka jalwa is on top",
  "Tere aane se meri dunia rangeen",
  "Mai sadke java meri pyaari mtallo de",
  "Sbse pyari meri mtallo baaki sab thu thu",
  "Teri godi mera ghar",
  "Tu, mai or hmaara chotu sa miffy",
  "I fall in love with you a little more every day",
  "Meri mtallo sbse stronggggg",
  "Mtallo is the savage biyaaaatchhhhhh",
  "Mtallo ke tiddies againnnnn",
  "Teri nasheeli aakhe, kya hi bolu",
  "Tu meri jaan, mai tera pyaar",
  "Meri dunia hi badl di teri pyaar ne",
  "Meri pyaari si mtallo deserves every bit of loveeeeeeeeeeeeeeeee",
  "I love you so muchhhhh meri coootiiii pooootiiiiii",
];

export default function ComplimentGen() {
  const [compliment, setCompliment] = useState("");
  const [sparkles, setSparkles] = useState([]);

  const generate = () => {
    const c = compliments[Math.floor(Math.random() * compliments.length)];
    setCompliment(c);

    const newSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: 20 + Math.random() * 60,
      y: 10 + Math.random() * 80,
      size: 8 + Math.random() * 12,
      delay: Math.random() * 0.3,
    }));
    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 1000);
  };

  return (
    <section
      id="compliments"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-rose-50 to-blush"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-quicksand text-2xl md:text-3xl font-semibold text-rose-400 mb-2">
          ✨ Compliments for You
        </h2>
        <p className="font-quicksand text-rose-300/70 mb-8">
          Because you deserve to hear it every day
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-rose-100 relative">
          {sparkles.map((s) => (
            <span
              key={s.id}
              className="absolute pointer-events-none animate-sparkle"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                fontSize: s.size,
                animationDelay: `${s.delay}s`,
              }}
            >
              ✨
            </span>
          ))}

          {compliment ? (
            <p className="font-quicksand text-xl md:text-2xl text-rose-400 font-semibold leading-relaxed min-h-[4rem] flex items-center justify-center animate-fadeInUp">
              {compliment}
            </p>
          ) : (
            <p className="font-quicksand text-lg text-rose-300/50 min-h-[4rem] flex items-center justify-center">
              Tap below for a little love 💕
            </p>
          )}

          <button
            onClick={generate}
            className="mt-6 px-8 py-4 bg-rose-200 hover:bg-rose-300 text-white font-quicksand font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-lg"
          >
            ✨ Give Me Love
          </button>
        </div>
      </div>
    </section>
  );
}
