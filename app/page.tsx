import ThemeWrapper from './themewrapper';
/*import EmojiFace from './components/eyes/emojiface';
import { useEyeFollow } from './components/eyes/eyefollow'; */
import pickpass_image from "./components/assets/pickpass.png";
import rpg from "./components/assets/unityrpg.png";
import figma from "./components/assets/figma.png";
import canva from "./components/assets/canva.png";
import krita from "./components/assets/kritalogo.png";
import ibispaint from "./components/assets/ibis-paint-x.png";
import greenfoot from "./components/assets/Greenfoot_Logo.png";
import unity from "./components/assets/unity-logo.png";
import csharp from "./components/assets/Csharp_Logo.png";
import nextjs from "./components/assets/nextjs-logo.png";
import laravel from "./components/assets/laravel-logo.png";
import vuejs from "./components/assets/vue-logo.png";
import bootstrap from "./components/assets/bootstrap-logo.png";
import postman from "./components/assets/postman-logo.png";
import vitest from "./components/assets/vitest-logo-1.png";
import playwright from "./components/assets/playwright.png";
import phpunit from "./components/assets/phpunit-logo.svg";
import html from "./components/assets/html5-1.png";
import csslogo from "./components/assets/css-logo.png";
import javalogo from "./components/assets/java-logo.png";
import phplogo from "./components/assets/php-logo.png";
import mysqllogo from "./components/assets/mysql-logo.png";
import xampplogo from "./components/assets/xampp-logo.png";
import nodejslogo from "./components/assets/nodejs-logo.png";
import typescriptlogo from "./components/assets/ts-logo.png";
import reactlogo from "./components/assets/react-logo.png";
import jslogo from "./components/assets/js-logo.png";

import dashboardimg from "./components/assets/dashboard.png";
import dashbo from "./components/assets/dashboard-sudah-login.png";
import illust from "./components/assets/illust.png";
import landingpg from "./components/assets/landing-page-berkah.png";
import catalog from "./components/assets/catalog2.png";

import githublogo from "./components/assets/github-logo.png";
import linkedinlogo from "./components/assets/linkedin-logo.png";

export default function Home() {
  return (
    <main>
      <ThemeWrapper>
        
        <section id="home" className="section-container-a">
          {/* <EmojiFace /> */}
          <div className="hero-content">
            <div className="big-title">Hi There!</div>
            <p className="subtitle">This is Nisr's Page.</p>
            <p className="sub-subtitle">Just a uni student majoring in Informatics Engineering.</p>
            <p className='sub-subtitle'>Slowly but surely, I'm gaining experience through various projects. See you on the next project!</p>
            <p className='sub-sub-subtitle'>Junior Software Developer • Web Developer • Designer • Illustrator</p>
          </div>
        </section>

        <section id="projects" className="section-container">
          <h1>Projects</h1>

          <section id="webdev" className="section-container">
            <h2>Web Development</h2>
            <p className="penjelasan">
              <img src= {dashboardimg.src} alt="Dashboard Admin Login Page" className="project-image" />
              <img src= {dashbo.src} alt="Dashboard Admin After Log In" className="project-image" />
              <u><a href="https://github.com/arthasrgh/pbl-chatbot" target="_blank">Admin Dashboard on GitHub</a></u>
            </p>
            <p className="penjelasan">Collaborated on the development of an admin dashboard for Project-Based Learning in my 4th semester. This project was built using Laravel, Vue.js, and MySQL. 
              The dashboard was connected to a chatbot database.</p>
            <p className="penjelasan">I built the frontend and designed the UI/UX prototype. In addition, I conducted various tests using Postman for API Testing, Playwright and Vitest for automation flow testing and integration testing to ensure assesibility and performance, with overall score of 90% on <u><a href="https://developer.chrome.com/docs/lighthouse" target= "_blank">Google Lighthouse</a></u>.</p>

            <p className="penjelasan">
              <img src= {landingpg.src} alt="Landing Page Website Berkah Onderdil (Spare Parts E-Commerce)" className="project-image" />
              <img src= {catalog.src} alt="Catalog Page Website Berkah Onderdil (Spare Parts E-Commerce)" className="project-image" />
            </p>
            <p className="penjelasan">
              <em>Private GitHub repository, the link cannot be included here.</em>
            </p>
            <p className="penjelasan">
              Collaborated on the development of an e-commerce website for auto parts, featuring over 25 products. The website was built using Laravel, Vue.js, and MySQL.
            </p>
            <p className="penjelasan">
            I built the frontend, designed the UI/UX prototype, and built a dynamic shopping cart and checkout feature using Laravel RESTful API, with state management handled by Pinia. 
            The shopping cart is directly linked to the logged-in user's account.
            </p>
          </section>

          <section id="gamedev" className="section-container">
            <h2>a little bit of Game Development...</h2>
            <p className="penjelasan">
              <img src= {pickpass_image.src} alt="Pick Pass Game Welcome Page" className="project-image" />
              <u><a href="https://www.greenfoot.org/scenarios/35001" target="_blank">Pick Pass Game</a></u>
            </p>
            <p className="penjelasan">
              To see my Pick Pass Game, click "Pick Pass Game" above. </p>
            <p className="penjelasan">
              This game was built entirely using <u><a href="https://www.java.com/en/" target="_blank">Java</a></u> in <u><a href="https://www.greenfoot.org/" target="_blank">Greenfoot</a></u> platform with over 1000 views in the platform. I designed the characters myself with <u><a href="https://ibispaint.com" target="_blank">IbisPaint</a></u>. 
            </p>  
            <p className="penjelasan">
              This is an educational game. Players are asked to guide the main character to find trash. Once the player has collected the required amount of trash, they can move on to the next level. This game has two levels. At the end, a bus (BST) will arrive to pick up the character, and the player is declared the winner.
            </p>
            <br></br>

            <p>
              <img src= {rpg.src} alt="Unity RPG Game Farm Fun, by me" className="project-image" />
            </p>
            <p className="penjelasan">
              <u><a href="https://github.com/nisrinkh/farm-fun-rpg-old-assignment" target="_blank">Farm Fun Game on GitHub</a></u>
            </p>
            <p className="penjelasan">
              This game was built using <u><a href="https://unity.com/" target="_blank">Unity</a></u> and C#. Top-Down, 2D RPG game. Players are asked to collect the scattered tomato seeds. For every packet of tomato seeds successfully collected, the player earns 10 points. The maximum  number of points is 120.
            </p>
            <p className="penjelasan">Shoutout to <u><a href="https://youtube.com/@gamedevwithjacquelynnehei465?si=MtA4jA9qkzNjvmb3" target="_blank">Game Dev with JacquelynneHei</a></u> for providing a comprehensive tutorial on how to build this game. The tutorial is in this YouTube playlist <u><a href="https://youtube.com/playlist?list=PL4PNgDjMajPN51E5WzEi7cXzJ16BCHZXl&si=Z7gm9YJIeJ6MC7KT" target="_blank">Farming RPG</a></u>.</p>
          </section>
        </section>

        <section id="illust" className="section-container">
            <h2>Illustration</h2>
            <p className="penjelasan">
              <img src= {illust.src} alt="My illustration for a children book" className="project-image" />
            </p>
            <p className="penjelasan">Creating illustrations for a children's book. Drawn entirely using <u><a href="https://krita.org/en/" target="_blank">Krita</a></u>.</p>
          </section>

        <section id="skills" className="section-container">
          <h1>Skills & Tools</h1>
          <h2>Web Development</h2>
          <div className="section-logo">
            <p className="penjelasan">
              <a href="https://html.spec.whatwg.org/multipage/introduction.html" target="_blank">
              <img src= {html.src} alt="Logo HTML" className="logo-app-mod-html" />
              </a>
              <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
              <img src= {csslogo.src} alt="Logo CSS" className="logo-app-mod-css" />
              </a>
              <a href="https://www.java.com/en/" target="_blank">
              <img src= {javalogo.src} alt="Logo Java" className="logo-app-mod" />
              </a>
              <a href="https://www.php.net/" target="_blank">
              <img src= {phplogo.src} alt="Logo PHP" className="logo-app" />
              </a>
              <a href="https://ecma-international.org/publications-and-standards/standards/ecma-262/" target="_blank">
              <img src= {jslogo.src} alt="Logo JavaScript" className="logo-app-mod-css" />
              </a>
              <a href="https://www.typescriptlang.org/" target="_blank">
              <img src= {typescriptlogo.src} alt="Logo TypeScript" className="logo-app" />
              </a>
              <a href="https://www.mysql.com/" target="_blank">
              <img src= {mysqllogo.src} alt="Logo MySQL" className="logo-app-mod" />
              </a>
              <a href="https://www.apachefriends.org/" target="_blank">
              <img src= {xampplogo.src} alt="Logo XAMPP" className="logo-app-mod-xampp" />
              </a>
              <a href="https://nodejs.org/en" target="_blank">
              <img src= {nodejslogo.src} alt="Logo Node.js" className="logo-app-mod-nodejs" />
              </a>
            </p>
          </div>

            <h2>Game Development</h2>
            <div className="section-logo">
              <p className="penjelasan">
                <a href="https://unity.com/" target="_blank">
                <img src= {unity.src} alt="Logo Unity" className="logo-app-mod" />
                </a>
                <a href="https://dotnet.microsoft.com/en-us/languages/csharp" target="_blank">
                <img src= {csharp.src} alt="Logo C#" className="logo-app-mod-csharp-greenfoot" />
                </a>
                <a href="https://www.greenfoot.org/" target="_blank">
                <img src= {greenfoot.src} alt="Logo Greenfoot" className="logo-app-mod-csharp-greenfoot" />
                </a>
              </p>
            </div>

            <h2>Frameworks</h2>
            <div className="section-logo">
              <p className="penjelasan">
                <a href="https://laravel.com/" target="_blank">
                <img src= {laravel.src} alt="Logo Laravel" className="logo-app" />
                </a>
                <a href="https://vuejs.org/" target="_blank">
                <img src= {vuejs.src} alt="Logo Vue.js" className="logo-app" />
                </a>
                <a href="https://getbootstrap.com/" target="_blank">
                <img src= {bootstrap.src} alt="Logo Bootstrap" className="logo-app" />
                </a>
                <a href="https://react.dev/" target="_blank">
                <img src= {reactlogo.src} alt="Logo React" className="logo-app" />
                </a>
                <a href="https://nextjs.org/" target="_blank">
                <img src= {nextjs.src} alt="Logo Next.js" className="logo-app-mod" />
                </a>
              </p>
            </div>

            <h2>Testing</h2>
            <div className="section-logo">
              <p className="penjelasan">
                <a href="https://www.postman.com/" target="_blank">
                <img src= {postman.src} alt="Logo Postman" className="logo-app-mod" />
                </a>
                <a href="https://playwright.dev/" target="_blank">
                <img src= {playwright.src} alt="Logo Playwright" className="logo-app-1" />
                </a>
                <a href="https://vitest.dev/" target="_blank">
                <img src= {vitest.src} alt="Logo Vitest" className="logo-app-mod" />
                </a>
                <a href="https://phpunit.de/index.html" target="_blank">
                <img src= {phpunit.src} alt="Logo PHPUnit" className="logo-app-mod" />
                </a>
              </p>
            </div>

            <h2>Design and Illustration</h2>
              <div className="section-logo">
                  <p className="penjelasan">
                    <a href="https://www.figma.com/" target="_blank">
                      <img src= {figma.src} alt="Logo Figma" className="logo-app" />
                    </a>
                    <a href="https://krita.org/en/" target="_blank">
                      <img src= {krita.src} alt="Logo Krita" className="logo-app" />
                    </a>
                    <a href="https://ibispaint.com/" target="_blank">
                      <img src= {ibispaint.src} alt="Logo Ibis Paint" className="logo-app" />
                    </a>
                    <a href="https://www.canva.com/" target="_blank">
                      <img src= {canva.src} alt="Logo Canva" className="logo-app" />
                    </a>
                  </p>
              </div>
        </section>

        <section id="findme" className="section-container">
          <h1>Find Me</h1>
          <div className="section-logo">
            <a href="https://github.com/nisrinkh" target="_blank">
            <img src= {githublogo.src} alt="click to see my github account" className="logo-app-mod-gh-li" /> </a>
            <a href="https://linkedin.com/in/nisrina-ks" target="_blank"> 
            <img src= {linkedinlogo.src} alt="click to see my linkedin account" className="logo-app-mod-gh-li" /></a>
          </div>
        </section>
      </ThemeWrapper>
    </main>
  );
}