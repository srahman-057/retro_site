# retro_site

retro_site is a web project that aims to recreate a nostalgic UI look and feel by drawing inspiration from retro operating systems such as Windows 95 and 98. Screenshot from deployment at https://www.srahman.io/: 

<img width="998" height="687" alt="image" src="https://github.com/user-attachments/assets/1d6fe412-a48f-4cda-80f9-cb36ac44f948" />

## Under the hood

The tech stack has been kept barebones and simple intentionally - this was meant to be a single page, static personal website. The reason being that I intended to host it in an AWS S3 bucket and utilize that sweet free usage tier! This project utilizes the following:

* HTML
* Vanilla JavaScript
* TailWindCSS
* Vite 

## Running the project
Use npm run dev to run the project.

Prior to that, make sure you have the environment variables accessible. Create a .env file in the root of the folder and store the following values in it:
* VITE_RESUME_URL = "Direct URL of the resume file"
* VITE_RESUME_API = "REST API that serves a dynamic URL for the resume file. Utilized for testing purposes."
* VITE_PORTFOLIO_API = "Link to portfolio website"
* VITE_GITHUB_URL = "Self explanatory"
* VITE_LINKEDIN_URL = "Self explanatory"

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
