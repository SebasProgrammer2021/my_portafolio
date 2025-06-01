import { Aboutme } from "./components/Aboutme"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Welcome } from "./components/Welcome"

export default function App() {
  return (
    <div className="p-5 lg:pt-20">
      <Header />
      <Welcome />
      <Aboutme />
      <Skills />
      <Projects />
    </div>
  )
}
