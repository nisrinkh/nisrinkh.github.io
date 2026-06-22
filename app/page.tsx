import ThemeWrapper from './themewrapper';
import EmojiFace from './components/eyes/emojiface';
import { useEyeFollow } from './components/eyes/eyefollow';

export default function Home() {
  return (
    <main>
      <ThemeWrapper>
        
        <section id="home" className="section-container-a">
          <EmojiFace /> 
          <div className="hero-content">
            <h1>Hi There!</h1>
          </div>
        </section>

        <section id="projects" className="section-container">
          <h1>Projects</h1>
          <p>Ini adalah daftar project saya...</p>
        </section>

        <section id="skills" className="section-container">
          <h1>Skills & Tools</h1>
          <p>Saya bisa menggunakan React, Next.js, dll.</p>
        </section>

        <section id="findme" className="section-container">
          <h1>Find Me</h1>
          <p>Hubungi saya di email: ...</p>
        </section>
      </ThemeWrapper>
    </main>
  );
}