# retro_site

retro_site is a web project that aims to recreate a nostalgic UI look and feel by drawing inspiration from retro operating systems such as Windows 95 and 98. 

## Under the hood

The tech stack has been kept barebones and simple intentionally - this was meant to be a single page, static personal website. The reason being that I intended to host it in an AWS S3 bucket and utilize that sweet free usage tier! This project utilizes the following:

* HTML
* JavaScript
* TailWindCSS

## Building the CSS

First, make the standalone Tailwind CLI file, and the watcher executable:
  ```sh
chmod +x tailwind_exec
chmod +x watcher.sh
  ```
Start the watcher:
  ```sh
sudo ./watcher.sh
  ```

Done! The watcher will monitor file changes; any changes that you make to the index.html, input.css, etc. will be processed appropriately by the tailwind CSS executable and reflected in the output.css file.

## Running the project
Simply open the index.html file in any modern web browser to watch retro_site in action. Being a static website, it doesn't require a production server.

## Tailwind executable
Tailwind CSS is written in JavaScript and usually distributed as an NPM package. The traditional TailWind distribution makes it unsuitable for a project like this - one which aims to be barebones and avoid dependencies as much as possible. Thus, a standalone TailWind CLI executable has been used here. This executable was created using pkg, a Vercel project that can package a Node.js project and all its dependencies into a singular executable file: https://github.com/vercel/pkg

## Documentation
* https://tailwindcss.com/docs/

## Future improvements
* Make windows movable, resizable, minimizable and closable.
* Be able to spawn multiple windows on the screen at once and seamlessly manage transtion between them.
* Show open windows on the taskbar.
* Make the 'Start' button at bottom interactive.

## Acknowledgement
* Favicon used from this beautiful origami pack: https://www.flaticon.com/free-icons/origami
* Retro icons taken from: https://aconfuseddragon.itch.io/windows-95-plus-1