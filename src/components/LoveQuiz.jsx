import { useState } from "react";

const questions = [
  {
    q: "Favourite food after sex?",
    options: ["Burger", "Ice Cream", "Another round"],
    answer: 0,
  },
  {
    q: "Favorite place to settle in?",
    options: ["Germany", "Japan", "Iceland"],
    answer: 1,
  },
  {
    q: "Why do you like me?",
    options: ["Im clumsy asf", "I like mtallo tiddies", "I am handsome asf"],
    answer: 1,
  },
  {
    q: "What makes you happiest?",
    options: ["Watching movies", "Seeing me smile", "Sleeping in"],
    answer: 1,
  },
  {
    q: "If you could go anywhere with me, where would it be?",
    options: ["A quiet beach", "A busy city", "The mountains"],
    answer: 0,
  },
];

export default function LoveQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === questions[current].answer) {
      setScore((s) => s + 1);
    }
  };

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  const roses = score <= 1 ? "🌹" : score <= 3 ? "🌹🌹🌹" : "🌹🌹🌹🌹🌹";

  return (
    <section
      id="quiz"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-rose-50 to-blush"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-quicksand text-2xl md:text-3xl font-semibold text-rose-400 mb-2">
          🧠 Love Quiz
        </h2>
        <p className="font-quicksand text-rose-300/70 mb-8">
          Let's see what do you like?
        </p>

        {!finished ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-rose-100">
            <p className="font-quicksand text-sm text-rose-300/60 mb-4">
              Question {current + 1} of {questions.length}
            </p>
            <h3 className="font-quicksand text-xl font-semibold text-rose-400 mb-6">
              {questions[current].q}
            </h3>
            <div className="space-y-3">
              {questions[current].options.map((opt, i) => {
                const isCorrect = i === questions[current].answer;
                const isSelected = selected === i;
                let btnClass =
                  "w-full px-4 py-3 rounded-xl font-quicksand text-rose-400 bg-rose-50 border border-rose-100 transition-all duration-300 cursor-pointer";
                if (isSelected) {
                  btnClass += isCorrect
                    ? " bg-green-100 border-green-300 text-green-600"
                    : " bg-red-100 border-red-300 text-red-500";
                } else if (selected !== null && isCorrect) {
                  btnClass += " bg-green-100 border-green-300 text-green-600";
                } else {
                  btnClass += " hover:bg-rose-100 hover:border-rose-200";
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={btnClass}
                    disabled={selected !== null}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {selected !== null && (
              <button
                onClick={next}
                className="mt-6 px-6 py-3 bg-rose-200 hover:bg-rose-300 text-white font-quicksand font-semibold rounded-xl shadow-md transition-all duration-300 cursor-pointer"
              >
                {current < questions.length - 1 ? "Next →" : "See Results"}
              </button>
            )}
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-100 animate-fadeInUp">
            <span className="text-5xl block mb-4">{roses}</span>
            <h3 className="font-quicksand text-2xl font-bold text-rose-400 mb-2">
              You scored {score}/{questions.length}!
            </h3>
            <p className="font-quicksand text-rose-300/80 mb-6">
              {score === questions.length
                ? "Perfect score! You know me inside out! 💕"
                : score >= 3
                  ? "Pretty good! But there is more to discover about me 😉"
                  : "We should spend more time together! 💕"}
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-rose-200 hover:bg-rose-300 text-white font-quicksand font-semibold rounded-xl shadow-md transition-all duration-300 cursor-pointer"
            >
              🔄 Try Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
