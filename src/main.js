import './style.css'

import { updateDateTime, toggleShow } from './scripts/utilityFunctions.js'
import { portfolioTextRead } from './scripts/portfolioTextRead.js'

// Update clock value every second
setInterval(updateDateTime, 1000);

// Load constants
const resumeURL = import.meta.env.VITE_RESUME_URL;
const linkedinURL = import.meta.env.VITE_LINKEDIN_URL;
const githubURL = import.meta.env.VITE_GITHUB_URL;

// Portfolio API read
const portfolioText = await portfolioTextRead();
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
          <div><a href="#" id="windowToggle" onClick=javascript:toggleShow()><img src="src/assets/computer.png"></a></div>
          <div><a href=${resumeURL} target="_blank" rel="noopener noreferrer" title="resume"><img src="src/assets/resume.png"></a></div>
          <div><a href=${githubURL} target="_blank" rel="noopener noreferrer" title="GitHub"><img src="src/assets/github.png"></a></div>
        </div>

      </div>
      
      <!-- Window section, which contains padding and then a window at the center-->
      <div class="flex basis-5/6 py-5 px-2">

        <div class="w-full h-full border-8 overflow-y-auto bg-black" id="mainDiv">
          <div class="sticky top-0 bg-black">
            <div class="grid grid-cols-2 px-1 bg-black">
              <div class="place-content-center"><p>About me</p></div>
              <div class="place-self-end"><img src="src/assets/right_icon.png"></div>
            </div>
            <hr class="border-4">
          </div>

          <div class="p-6">
            <img src="src/assets/suit.png" class="object-scale-down float-left lg:pr-8 md:pr-3 sm:pr-2">
            <article class="text-pretty">
              ${portfolioText}
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
      <div class="col-span-2 place-self-end"><span id="datetime"></span></div>
    </div>
  </footer>
</div>
`
// Render the combined portfolio text in the app div
document.querySelector('#app').innerHTML = combinedPortfolioText;

// Window toggle functionality
const toggle = document.querySelector('#windowToggle');
toggle.addEventListener('click', function(event) {
  toggleShow();
});








