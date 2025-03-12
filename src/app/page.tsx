import styles from "./page.module.css";
import { Header } from "./components/Header";
import { Welcome } from "./components/Welcome";
import { Aboutme } from "./components/Aboutme";
import { Skills } from "./components/Skills";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Welcome />
        <Aboutme />
        <Skills />
      </main>
    </div>
  );
}
