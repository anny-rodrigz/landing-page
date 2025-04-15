import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Aboutme from "./components/Aboutme"


export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Contacts />   
    </main>
  );
}