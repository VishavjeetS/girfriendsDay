import { useState, useEffect } from "react";

const petals = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 4,
  size: 12 + Math.random() * 16,
  duration: 3 + Math.random() * 4,
}));

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50 via-blush to-rose-100 px-4"
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 mx-auto flex  -translate-y-1/2 items-center justify-between overflow-hidden px-4 sm:px-10 md:px-20 opacity-20">
        <img
          src="/images/mtallo2.jpg"
          className="h-[150px] w-[150px] rounded-full object-cover sm:h-[190px] sm:w-[190px] md:h-[300px] md:w-[300px] xl:h-[700px] xl:w-[700px]"
          alt=""
        />

        <img
          src="/images/mtallo1.jpg"
          className="h-[150px] w-[150px] rounded-full object-cover sm:h-[190px] sm:w-[190px]  md:h-[300px] md:w-[300px] xl:h-[700px] xl:w-[700px]"
          alt=""
        />
      </div>

      {petals.map((p) => (
        <div
          key={"petal1" + p.id}
          className="absolute w-full rounded-full opacity-60 pointer-events-none z-20"
          style={{
            left: `${p.left}%`,
            top: "20%",
            width: p.size,
            height: p.size,
            background:
              p.id % 2 === 0
                ? "radial-gradient(circle, #FFB3C6, #FF8FAB)"
                : "radial-gradient(circle, #FFD6E0, #FFB3C6)",
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {petals.map((p) => (
        <div
          key={"petal2" + p.id}
          className="absolute w-full rounded-full opacity-60 pointer-events-none z-20"
          style={{
            left: `${p.left}%`,
            top: "80%",
            width: p.size,
            height: p.size,
            background:
              p.id % 2 === 0
                ? "radial-gradient(circle, #FFB3C6, #FF8FAB)"
                : "radial-gradient(circle, #FFD6E0, #FFB3C6)",
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <div className="relative mb-8 group">
        <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-rose-200 via-rose-100 to-rose-300 mix-blend-multiply shadow-xl shadow-rose-200/50" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-rose-100/60 via-transparent to-rose-50/40">
          <img
            src="/images/mtallo.jpg"
            className="object-cover h-full w-full flex justify-center mix-blend-multiply rounded-full"
            alt=""
          />
        </div>
        <div className="absolute inset-2 rounded-full border-2 border-white/40" />
        <div className="absolute -top-2 -right-2 text-3xl animate-sway">🌸</div>
        <div
          className="absolute -bottom-1 -left-3 text-2xl animate-sway"
          style={{ animationDelay: "1s" }}
        >
          💕
        </div>
      </div>

      <h1 className="font-quicksand text-4xl md:text-6xl lg:text-7xl font-bold text-rose-400 mb-4 text-balance">
        For You <span className="text-rose-300">💕</span>
      </h1>

      <p className="font-quicksand text-lg md:text-xl text-rose-300/90 max-w-md text-center leading-relaxed">
        I made this little corner of the internet just for you — because you
        deserve to smile. Explore, play, and remember how much you're loved.
      </p>

      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-rose-300/60">
        <span className="text-sm font-quicksand">scroll down</span>
        <span className="text-2xl animate-bounce">↓</span>
      </div>
    </section>
  );
}
