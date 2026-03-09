# Public Assets

Files placed here are served **as-is** at the root URL by Vite.
No import needed — just reference them with a leading `/`.

## Structure

```
public/
├── images/
│   ├── projects/       ← Project screenshots/thumbnails (jpg, png, webp)
│   └── profile.jpg     ← Your profile/avatar photo
├── resume.pdf          ← Your CV — linked from the Resume page
└── README.md           ← This file
```

## Usage examples

| File location                        | URL in code              |
|--------------------------------------|--------------------------|
| `public/resume.pdf`                  | `"/resume.pdf"`          |
| `public/images/profile.jpg`          | `"/images/profile.jpg"`  |
| `public/images/projects/game-of-life.png` | `"/images/projects/game-of-life.png"` |

## Project image filenames expected by `data.ts`

| Project                          | Expected file                                        |
|----------------------------------|------------------------------------------------------|
| Conway's Game of Life            | `public/images/projects/game-of-life.png`            |
| N-Body Gravitational Simulator   | `public/images/projects/nbody-simulator.png`         |
| OpenClaw Telegram Bot            | `public/images/projects/openclaw-telegram.png`       |
| Quantum CLI Toolkit              | `public/images/projects/quantum-cli.png`             |
| QHO Eigenstate Visualiser        | `public/images/projects/qho-visualizer.png`          |

> Until you add the real images, the site will fall back to a dark placeholder.
