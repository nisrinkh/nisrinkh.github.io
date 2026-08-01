import ThemeWrapper from './themewrapper';
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
import ProjectCard from "./components/ui/card";
import imgporto from "./components/assets/imgporto.png";

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
            <p className="penjelasan"></p>
            <div className="projects-grid">
              {projectsData.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                tags={project.tags}
                link={project.link}
              />
            ))}
            </div>
        </section>

        <section id="skills" className="section-container">
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

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "This website, exactly. Built using Next.js, TypeScript, and CSS.",
    tags: ["Next.js", "TypeScript", "CSS"],
    link: "https://nisrinkh.github.io"
  },
  {
    id: 2,
    title: "Admin Dashboard for Project-Based Learning",
    description: "Collaborated on the development of an admin dashboard for Project-Based Learning in my 4th semester. This project was built using Laravel, Vue.js, and MySQL. The dashboard was connected to a chatbot database. I built the frontend and designed the UI/UX prototype. In addition, I conducted various tests using Postman for API Testing, Playwright and Vitest for automation flow testing and integration testing to ensure assesibility and performance, with overall score of 90% on Google Lighthouse.",
    imageSrc: dashboardimg.src,
    tags: ["Laravel", "Vue.js", "MySQL", "RESTful API", "Postman", "Playwright", "Vtest", "Google Lighthouse"],
    link: "https://github.com/arthasrgh/pbl-chatbot"
  },
  {
    id: 3,
    title: "E-Commerce Website for Spare Parts",
    description: "Collaborated on the development of an e-commerce website for auto parts, featuring over 25 products. The website was built using Laravel, Vue.js, and MySQL. I built the frontend, designed the UI/UX prototype, and built a dynamic shopping cart and checkout feature using Laravel RESTful API, with state management handled by Pinia. The shopping cart is directly linked to the logged-in user's account.",
    imageSrc: landingpg.src,
    tags: ["Laravel", "Vue.js", "MySQL", "RESTful API", "Pinia"],
  },
  {
    id: 4,
    title: "Game 2D - Pick Pass",
    description: "This game was built entirely using Java in Greenfoot platform with over 1000 views in the platform. I designed the characters myself with IbisPaint. This is an educational game. Players are asked to guide the main character to find trash. Once the player has collected the required amount of trash, they can move on to the next level. This game has two levels. At the end, a bus (BST) will arrive to pick up the character, and the player is declared the winner.",
    imageSrc: pickpass_image.src,
    tags: ["Java", "Greenfoot", "Game Design"],
    link: "https://www.greenfoot.org/scenarios/35001"
  },
  { 
    id: 5,
    title: "2D Top-Down RPG Game - Farm Fun",
    description: (
      <>
      This game was built using Unity and C#. Top-Down, 2D RPG game. Players are asked to collect the scattered tomato seeds. For every packet of tomato seeds successfully collected, the player earns 10 points. The maximum number of points is 120. Shoutout to {" "}
      <a
        href="https://youtube.com/@gamedevwithjacquelynnehei465?si=MtA4jA9qkzNjvmb3"
        target="_blank"
        rel="noopener noreferrer"
      >
        Game Dev with JacquelynneHei
      </a>
      ,for providing a comprehensive tutorial on how to build this game. The tutorial is in this YouTube playlist Farming RPG.",
      </>
    ),
    imageSrc: rpg.src,
    tags: ["Unity", "C#", "Game Development"],
    link: "https://github.com/nisrinkh/farm-fun-rpg-old-assignment",
  },
  {
    id: 6,
    title: "Children Book Illustration",
    description: "Creating illustrations for a children's book. Drawn entirely using Krita.",
    imageSrc: illust.src,
    tags: ["Krita", "Digital Art"],
  }
];
