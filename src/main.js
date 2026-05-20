import './style.css'

import { updateDateTime, toggleShow } from './scripts/utilityFunctions.js'
import { portfolioTextRead } from './scripts/portfolioTextRead.js'

// Update clock value every second
setInterval(updateDateTime, 1000);

// Portfolio API read
  const portfolioText = await portfolioTextRead();
  console.log("Portfolio API response:");
  console.log(portfolioText);




document.querySelector('#app').innerHTML = `
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
          <div><a href="#" id="myLink" onClick=javascript:toggleShow()><img src="src/assets/computer.png"></a></div>
          <div><a href="src/assets/web_resume.pdf" target="_blank" rel="noopener noreferrer" title="CV"><img src="src/assets/resume.png"></a></div>
          <div><a href="https://github.com/srahman-057" target="_blank" rel="noopener noreferrer" title="GitHub"><img src="src/assets/github.png"></a></div>
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








