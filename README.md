# retro_site

retro_site is a web project that aims to recreate a nostalgic UI look and feel by drawing inspiration from retro operating systems such as Windows 95 and 98. 

## Under the hood

The tech stack has been kept barebones and simple intentionally - this was meant to be a single page, static personal website. The reason for this is that I intended to be able to host this site in an AWS S3 bucket and utilize that sweet AWS free usage tier! This project utilizes the the following:

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

Done! The watcher will look for changes in any of the Any changes that you make to the index.html, input.css, etc. will be built by the tailwind CSS executable, and processed appropriately.

## Running the project
Simply open the index.html file in any modern web browser to watch retro_site in action. Being a static website, it doesn't require a production server.

## Tailwind executable
Tailwind CSS is written in JavaScript and usually distributed as an NPM package. The traditional TailWind distributions make it unsuitable for a project like this, that aims to be barebones and avoid dependencies as much as possible. Thus, a standalone TailWind CLI executable has been used here. This executable was created using pkg, a Vercel project that packages a Node.js project and all its dependencies into a singular executable file: https://github.com/vercel/pkg

## Documentation
* https://tailwindcss.com/docs/

## Future improvements
* Make window movable.
* Spawn multiple windows on the screen at once and seamlessly close transtion between them.
* Show open windows on the taskbar.

## Acknowledgement
* Favicon used from this beautiful origami pack: https://www.flaticon.com/free-icons/origami
* Retro icons taken from: https://aconfuseddragon.itch.io/windows-95-plus-1