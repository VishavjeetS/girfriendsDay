import Hero from './components/Hero'
import NavCards from './components/NavCards'
import LoveLetter from './components/LoveLetter'
import HeartCatcher from './components/HeartCatcher'
import FlowerPetals from './components/FlowerPetals'
import LoveQuiz from './components/LoveQuiz'
import GrowRose from './components/GrowRose'
import ComplimentGen from './components/ComplimentGen'
import Pledge from './components/Pledge'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <NavCards />
      <LoveLetter />
      <HeartCatcher />
      <FlowerPetals />
      <LoveQuiz />
      <GrowRose />
      <ComplimentGen />
      <Pledge />
      <footer className="py-8 text-center font-quicksand text-rose-300/50 text-sm bg-rose-50">
        Made with 💕 just for you
      </footer>
    </div>
  )
}

export default App
