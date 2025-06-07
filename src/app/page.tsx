import { Aboutme } from "./components/Aboutme"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Welcome } from "./components/Welcome"

export default function App() {
  return (
    <div className="">
      <Welcome />
      <Aboutme />
      <Skills />
      <Projects />
    </div>
  )
}
