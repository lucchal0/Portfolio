# Alessandro Lucchesi — Portfolio

Bilingual personal portfolio built with React, Vite, Three.js and React Three Fiber. The editorial design features a responsive interactive 3D digital sculpture with restrained cyan, violet and orange accents. The name uses a pixel inspired display font.

## Requirements

- Node.js 18 or newer
- npm

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Create a production build with `npm run build`; preview it with `npm run preview`.

## Replace the temporary photo

The portrait is defined by the `avatar` constant in `src/main.jsx`. Replace its GitHub URL with a local path such as `/portrait.jpg`, then put the image in `public/`. The page crops it vertically and applies a grayscale treatment.

## Content and language

Edit the Italian and English labels and copy in the `copy` object in `src/main.jsx`. The language control switches between the two versions. Skills are listed in the `skills` array. The 3D sculpture is in `src/HeroScene.jsx`; its colors and geometry can be adjusted there. The name uses the Silkscreen typeface imported in `src/style.css`.

## Spotify project note

The Spotify API project card describes the integration without credentials. Do not commit a Spotify client secret; authentication credentials should be configured locally via environment variables if the project is later extended.

## Privacy

The portfolio includes only the public email address, LinkedIn and GitHub links supplied for this site. It does not include a phone number, street address, or the CV file. Nothing is published by this project.

## Project preview images

The three project cards use optimized local WebP images in `public/projects/`. Their preview frames use a 4:3 aspect ratio and contain the full supplied image. Replace the corresponding image files to update a project preview.
