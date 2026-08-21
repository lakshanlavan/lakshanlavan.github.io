# Media assets — drop real files here

Every file below is referenced by the site using a **fixed filename**. The page
shows an elegant placeholder until the real file exists, so you can replace any
item by simply dropping a file with the exact name — **no code changes needed**.

## Homepage hero & profile

| Put the real file at                          | Used for                                   | Recommended spec                          |
| --------------------------------------------- | ------------------------------------------ | ----------------------------------------- |
| `public/assets/profile.jpg`                   | Profile photo (hero avatar + sidebar)      | Square, ≥ 600×600px, JPG                  |
| `public/assets/hero-demo.mp4`                 | Hero showcase — slide 1 (Robotics)         | MP4 (H.264), muted, looping, ≤ ~6 MB, 8–20 s, ~4:3 or 16:9 |
| `public/assets/og-image.jpg`                  | Social share preview (LinkedIn…)           | 1200×630px JPG/PNG                        |

The hero showcase auto-rotates through four slides. Each slide tries its video
first, then its image, then an animated gradient placeholder:

| Slide | Tries video            | Then image                                    |
| ----- | ---------------------- | --------------------------------------------- |
| 1 — Robotics Research      | `assets/hero-demo.mp4` | `assets/research/crop-spirals.jpg`     |
| 2 — Computer Vision        | `assets/projects/face-recognition.mp4` | `assets/projects/face-recognition.jpg` |
| 3 — Smart-City AI          | `assets/projects/illegal-dumping.mp4` | `assets/projects/illegal-dumping.jpg` |
| 4 — Drone Agriculture      | `assets/projects/agrarian.mp4` | `assets/projects/agrarian.jpg` |
| 5 — IoT & Embedded         | —                      | `assets/projects/server-room.jpg`      |

## Industry project cards (`/` and `/projects`)

| Put the real file at                            | Project card                                  | Recommended spec        |
| ----------------------------------------------- | --------------------------------------------- | ----------------------- |
| `public/assets/projects/face-recognition.mp4` (+ `.jpg` poster) | Edge AI Face Recognition & Access Control | looping muted detection clip; jpg poster ~1024×764 |
| `public/assets/projects/agrarian.mp4` (+ `.jpg` poster) | Agrarian v1.0 — Drone Crop Health Monitoring  | looping muted drone clip; jpg poster ~1024×768 |
| `public/assets/projects/server-room/…`          | Server Room UPS Power & Temp. Monitoring      | in place — see “Case-study images” below |
| `public/assets/projects/wifibridge.jpg`         | WiFiBridge V1 — ESP32 IoT Bridge              | ~1600×1000px, JPG/PNG   |

## Research figures (`/research`)

| Put the real file at                             | Used for                          | Recommended spec                  |
| ------------------------------------------------ | --------------------------------- | --------------------------------- |
| `public/assets/research/crop-spirals.jpg`        | Crop Spirals figure               | ~1600px wide, JPG/PNG             |
| `public/assets/research/crop-spirals-demo.mp4`   | Crop Spirals Gazebo demo video    | MP4 (H.264), ≤ ~10 MB, 10–30 s    |
| `public/assets/research/crop-detection.jpg`      | DH-ResNet18 detection figure      | ~1600px wide, JPG/PNG            |
| `public/assets/research/linear-nav.jpg`          | Linear-field baseline figure      | ~1600px wide, JPG/PNG            |

## Notes
- **Profile photo:** until `profile.jpg` exists, the hero/sidebar shows the "LL" monogram. Add the file and the photo appears automatically.
- **Project cards:** until an image exists, each card shows a clean category-coloured gradient with the project's initial — the grid always looks finished.
- **Hero / figures / video:** until a file exists, an animated gradient or "forthcoming" placeholder is shown. Drop the file in to replace it.
- **Animated GIF instead of MP4?** Name it `hero-demo.mp4` won't load a GIF — instead point a slide's `image` field (in `src/data/profile.js`) at an optimized `.gif`; it renders in the `<img>` slot and animates.
- **OG image:** an SVG placeholder (`og-image.svg`) ships now. For best compatibility on LinkedIn/WhatsApp, add a raster `og-image.jpg` (1200×630).
- Filenames are **case-sensitive**. Match them exactly.

## Case-study images (`/projects/:id`)

Projects flagged `detail: true` in `src/data/profile.js` have a long-form case
study at `/projects/<id>`, with its hero and gallery images listed under
`caseStudy`. These folders hold the originals extracted from the NAITA
industrial-training diary (`Daily Dairy UOC-ET-2024 (1).docx`) — real project
photographs, firmware screenshots, dashboards and ProfiCAD drawings, converted
to WebP at their native aspect ratio. **Do not replace these with stock or
generated imagery.**

| Folder                                        | Case study                                    |
| --------------------------------------------- | --------------------------------------------- |
| `public/assets/projects/server-room/`         | Server Room UPS Power & Temperature Monitoring |
| `public/assets/projects/marine-link/`         | Marine Link — Vessel Engine Telemetry Unit     |
| `public/assets/projects/bline-cane/`          | BLine Cane — Obstacle Detection Upgrade        |
| `public/assets/projects/iot-controller/`      | ESP32 IoT Controller — 4-Layer PCB             |
| `public/assets/projects/forklift-horn/`       | Forklift Reverse Warning Horn Circuit          |

Dashboard screenshots were cropped to remove browser chrome and the desktop
taskbar before publishing; the configuration-tool screens that showed device
API tokens and Wi-Fi credentials were deliberately left out.
