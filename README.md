# Forever Solar Solutions Website
This repository contains the source code for the "Forever Solar Solutions" company website, a modern and responsive static site built with 11ty (Eleventy). The project is designed for efficient content management and fast loading times, integrating various front-end technologies for a dynamic user experience.

## Technologies 
* Used11ty (Eleventy): A simpler static site generator for building the website.
* HTML5 & CSS3: Core web technologies for structure and styling.
* Bootstrap 5: A popular framework for responsive design and UI components.
* Slick Carousel: A responsive carousel/slider library for displaying multiple images horizontally with infinite loop and single-item scrolling.
* JavaScript & jQuery: For interactive elements and dynamic content (including the service explanation and smooth scrolling).
* Netlify: Automated deployment and hosting of the static website.

## Key Features
* Responsive Design: Built with Bootstrap 5 to ensure optimal viewing across various devices (desktops, tablets, mobile phones).
* Dynamic Service Explanation: A section where users can click on different service titles to view detailed explanations dynamically without page reloads.
* Slick Image Carousel: A projects gallery showcasing multiple images horizontally, supporting single-image scrolling and infinite looping.
* Smooth Scrolling Navigation
* Modular Content with 11ty: Content and site-wide variables are managed in separate data files, making updates and maintenance straightforward.
* Transparent & Blurred Navbar: A visually appealing sticky navigation bar that slightly blurs the content behind it.

## Local Development Setup
To run this project locally, you'll need Node.js and npm (or yarn) installed.
### 1. Clone the repository:
```
git clone git@github.com:raviswaroop-98/forever-solar.git
cd forever-solar
```
### 2. Install 11ty and other dependencies:
```
npm install
# or if you use yarn
# yarn install
```
### 3. Run 11ty in development mode:
This command will build the site, start a local server, and watch for file changes.
```
npx @11ty/eleventy --serve
```
You can then access the website at `http://localhost:8080/` (or another port specified by 11ty).

### 4. Build for production (optional):
To generate the static site files for deployment:
```
npx @11ty/eleventy
```
The generated static files will be located in the `_site` directory.

## Deployment
This project is set up for continuous deployment using Netlify.
1. Connect to GitHub: Link your GitHub repository to Netlify.
2. Build Command: Configure Netlify to use npx @11ty/eleventy as the build command.
3. Publish Directory: Set _site as the publish directory.
Upon every push to the connected Git branch (e.g., main), Netlify will automatically fetch the latest code, run the 11ty build process, and deploy the updated static website.

<!-- ## Contributing
Feel free to fork this repository, make changes, and submit pull requests. For major changes, please open an issue first to discuss what you would like to change. -->