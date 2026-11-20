import TopBar from './sections/TopBar.jsx'
import Hero from './sections/Hero.jsx'
import LogoStrip from './sections/LogoStrip.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Story from './sections/Story.jsx'
import Method from './sections/Method.jsx'
import Bio from './sections/Bio.jsx'
import QuizShows from './sections/QuizShows.jsx'
import FinalCta from './sections/FinalCta.jsx'

export default function App() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <LogoStrip />
        <Testimonials />
        <Story />
        <Method />
        <Bio />
        <QuizShows />
        <FinalCta />
      </main>
    </>
  )
}
