import './style.css'
import computerIcon from './assets/computer.png'
import resumeIcon from './assets/resume.png'
import githubIcon from './assets/github.png'
import suitImage from './assets/suit.png'
import windowDecorationIcon from './assets/right_icon.png'

import { updateDateTime, toggleShow } from './scripts/utilityFunctions.js'
import { portfolioTextRead } from './scripts/portfolioTextRead.js'

// Seed clock with dateTime data
const now = new Date();
const currentDateTime = now.toLocaleTimeString();

// Load constants
const resumeURL = import.meta.env.VITE_RESUME_URL;
const linkedinURL = import.meta.env.VITE_LINKEDIN_URL;
const githubURL = import.meta.env.VITE_GITHUB_URL;

// Portfolio API read
try{
  const portfolioJSON = await portfolioTextRead();
  if(!portfolioJSON){
    throw new Error("Portfolio API response is empty or undefined.");
  }
  const parsedPortfolioText = portfolioJSON.data;
}
catch(error){
    console.error("Error reading portfolio API:");
    console.error(error);
} 

if(!parsedPortfolioText){
  console.error("Parsed portfolio text is empty or undefined. Making it empty.");
  parsedPortfolioText = "";
}

const staticPortfolioText = `
            <h1 class="text-indigo-500"><u>Intro</u></h1>
            <p>Hi, I'm Sohel! Like many people in tech, I grew up as an avid gamer. The seeds of a future career in IT were planted when I started tinkering with the media files in Grand Theft Auto - San Andreas, located the texture files, and realized that I could edit them to make my in-game character wear t-shirts with my own designs! It created a lasting interest in me regarding tech. I write about these things and many more on my blog: <u><a href="https://www.pothochari.com/" target="_blank" rel="noopener noreferrer" class="text-green-700">www.pothochari.com</a></u></p><br>
            
            <h1 class="text-rose-400"><u>Coding</u></h1>
            <p>My coding journey began when I randomly bought the book "Teach Yourself C" by Herbert Schildt. I read the first few chapters, did the exercises, and was having so much fun that I finished the whole book! Over the years, during my personal time as well as during my undergradate and graduate degrees in Computer Science, I picked up a number of different skills and gained the ability to quickly become familiar with new tech stacks as needed.</p><br>

            <h1 class="text-sky-600"><u>Skills</u></h1>
            <p>I have worked with/have familiarity with the following:</p>
              <ul class="list-disc pl-10">
                <li>Java, Python, Typescript</li>
                <li>Spring, React, Node</li>
                <li>Redis, PostgreSQL</li>
                <li>AWS, Docker, Kubernetes</li>
                <li>......and <a href="media/web_resume.pdf"><u>many more</u></li>
              </ul>
            <br>

            
            <h1 class="text-amber-600"><u>Projects</u></h1>
              <ul class="list-disc pl-10">
                <li><u><a href="https://github.com/srahman-057/genetic-arcade" target="_blank" rel="noopener noreferrer" class="text-green-700">genetic-arcade</a></u>: Intelligent game agents that teach themselves to navigate a variety of visual environments.​</li>
                <li><u><a href="https://github.com/srahman-057/retro_site" target="_blank" rel="noopener noreferrer" class="text-green-700">retro_site</a></u>: Retro web UI on a minimal cloud budget. Inspired by Windows 95 and 98.​</li>
                <li><u><a href="https://github.com/srahman-057/?tab=repositories" target="_blank" rel="noopener noreferrer" class="text-green-700">github</a></u>: other projects.</li>
              </ul>
`

const combinedPortfolioText = `
<div class="flex flex-col h-full">
  <header class="py-2 bg-gray-800 text-white text-center">
    Sohel Mozid Rahman
  </header>


  <main class="flex-1 overflow-y-hidden">
    <!-- Main content -->
    <div class="flex flex-row h-full text-white">
      <!-- Sidebar, which contains folder icons -->
      <div class="flex py-5 px-2 basis-1/6">
        
        <div class="flex flex-col gap-8">
          <div><a href="#" id="windowToggle" onClick=javascript:toggleShow()><img src=${computerIcon}></a></div>
          <div><a href=${resumeURL} target="_blank" rel="noopener noreferrer" title="resume"><img src=${resumeIcon}></a></div>
          <div><a href=${githubURL} target="_blank" rel="noopener noreferrer" title="GitHub"><img src=${githubIcon}></a></div>
        </div>

      </div>
      
      <!-- Window section, which contains padding and then a window at the center-->
      <div class="flex basis-5/6 py-5 px-2">

        <div class="w-full h-full border-8 overflow-y-auto bg-black" id="mainDiv">
          <div class="sticky top-0 bg-black">
            <div class="grid grid-cols-2 px-1 bg-black">
              <div class="place-content-center"><p>About me</p></div>
              <div class="place-self-end"><img src=${windowDecorationIcon}></div>
            </div>
            <hr class="border-4">
          </div>

          <div class="p-6">
            <img src=${suitImage} class="object-scale-down float-left lg:pr-8 md:pr-3 sm:pr-2">
            <article class="text-pretty">

            ${parsedPortfolioText}

            </article>
          </div>
        </div>
      </div>
    </div>

  </main>


  <footer class="py-2 px-1 bg-gray-800 text-white">
    <!-- The footer has a grid with three columns, with two columns combined together-->
    <div class="grid grid-cols-3">
      <div class="">Start</div>
      <div class="col-span-2 place-self-end"><span id="datetime">${currentDateTime}</span></div>
    </div>
  </footer>
</div>
`
// Update clock value every second
setInterval(updateDateTime, 1000);

// Render the combined portfolio text in the app div
document.querySelector('#app').innerHTML = combinedPortfolioText;

// Window toggle functionality
const toggle = document.querySelector('#windowToggle');
toggle.addEventListener('click', function(event) {
  toggleShow();
});









