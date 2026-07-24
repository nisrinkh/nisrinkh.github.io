import ThemeWrapper from './themewrapper';
/*import EmojiFace from './components/eyes/emojiface';
import { useEyeFollow } from './components/eyes/eyefollow'; */
import pickpass_image from "./components/assets/pickpass.png";
import rpg from "./components/assets/unityrpg.png";

export default function Home() {
  return (
    <main>
      <ThemeWrapper>
        
        <section id="home" className="section-container-a">
          {/* <EmojiFace /> */}
          <div className="hero-content">
            <h1>Hi There!</h1>
            <p>This is Nisr's Page. It's already been released, but it's still possible to add new things. Minimalism, I said.</p>
          </div>
        </section>

        <section id="projects" className="section-container">
          <h1>Projects</h1>
          <p>
            <img src= {pickpass_image.src} alt="Ilustrasi Pick Pass Game" className="project-image" />
            <u><a href="https://www.greenfoot.org/scenarios/35001" target="_blank">Pick Pass Game</a></u>
          </p>
          <p className="penjelasan">
            To see my Pick Pass Game, click "Pick Pass Game" above. </p>
          <p className="penjelasan">
            This game was built entirely with Java in <u><a href="https://www.greenfoot.org/" target="_blank">Greenfoot</a></u> platform with over 1000 views in the platform. I designed the characters myself with <u><a href="https://ibispaint.com" target="_blank">IbisPaint</a></u>. 
          </p>  
          <p className="penjelasan">
            This is an educational game. Players are asked to guide the main character to find trash. Once the player has collected the required amount of trash, they can move on to the next level. This game has two levels. At the end, a bus (BST) will arrive to pick up the character, and the player is declared the winner.
          </p>
          <br></br>

          <p>
            <img src= {rpg.src} alt="Ilustrasi Unity RPG Game" className="project-image" />
          </p>
          <p className="penjelasan">
            Unity 2D RPG Game
          </p>
          <p className="penjelasan">
            This game was built with Unity and C#. Top-Down, 2D RPG game. Players are asked to collect the scattered tomato seeds. For every packet of tomato seeds successfully collected, the player earns 10 points. The maximum  number of points is 120.
          </p>
        </section>

        <section id="skills" className="section-container">
          <h1>Skills & Tools
          </h1>
            <p className="penjelasan">
              Web Development: HTML, CSS, PHP, Java, JavaScript, MySQL, XAMPP, Node.js, React.
            </p>
            <p className="penjelasan">
              Game Development: Unity, C#, Greenfoot.
            </p>
            <p className="penjelasan">
              Frameworks: Laravel, Vue.js, Bootstrap, Next.js.
            </p>
            <p className="penjelasan">
              Testing: Postman, Playwright, Vitest, PHPUnit.
            </p>
            <p className="penjelasan">
              Design and Illustration: Figma, IbisPaint, Canva.
            </p>
        </section>

        <section id="findme" className="section-container">
          <h1>Find Me</h1>
          <p>Find me on GitHub: <a href="https://github.com/nisrinkh" target="_blank">https://github.com/nisrinkh</a></p>
          <p>Find me on LinkedIn: <a href="https://linkedin.com/in/nisrina-ks" target="_blank">https://linkedin.com/in/</a></p>
        </section>
      </ThemeWrapper>
    </main>
  );
}