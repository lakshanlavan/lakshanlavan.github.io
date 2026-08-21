import { BASE } from '../lib/base.js'

export const profile = {
  name: 'Lakshan L.',
  // Short role used in the sidebar / nav. The full identity headline lives in
  // `titles` and is rendered as separated segments in the hero.
  role: 'Agricultural Robotics · Computer Vision · Embodied AI',
  titles: [
    'Agricultural Robotics Researcher',
    'Computer Vision Engineer',
    'Embodied AI Engineer',
  ],
  positioning:
    'Instrumentation & Automation Engineering graduate of the University of Colombo, now working in industry as an Embodied AI Engineer. My research interests are in robotics: vision-based perception, autonomous navigation and embodied AI. I build systems that bring those together on real agricultural and industrial machines.',
  interests:
    'I am actively looking for graduate research opportunities in agricultural robotics and computer vision, and for supervisors working on perception and autonomy for field robots. I am equally glad to talk about a research collaboration or an ambitious industry project. If the work here is close to what your group does, please get in touch.',
  availability: 'Seeking graduate research opportunities in agricultural robotics and computer vision',
  // Real profile photo (public/Lakshan-prof.jpeg). Falls back to the "LL"
  // monogram automatically if the image fails to load.
  photo: `${BASE}/Lakshan-prof.jpeg`,
  affiliation: 'University of Colombo, Sri Lanka',
  email: 'lakshan.l.robotics@gmail.com',
  phone: '+94 765 848 348',
  github: 'https://github.com/lakshanlavan/',
  linkedin: 'https://www.linkedin.com/in/lakshan29/',
  scholar: 'https://scholar.google.com/citations?user=9F1FAx0AAAAJ&hl=en',
  orcid: 'https://orcid.org/0009-0001-6195-2211',
  tagline:
    'Building perception, planning and control systems for autonomous robots in unstructured environments.',
  summary:
    'I am an early-stage robotics researcher who likes to take an idea all the way from a question on paper to a robot moving in the real world. My undergraduate thesis introduced the Crop Spirals framework, combining deep-learning perception, pixel-to-odometry projection and Model Predictive Control for efficient multi-robot coordination. On the industry side I design and ship end-to-end edge-AI and computer-vision systems on NVIDIA Jetson and Raspberry Pi, and build the embedded, IoT and PCB layers that make them actually run out in the field.',
}

// Quick credibility stats shown beneath the hero call-to-action.
export const heroStats = [
  { value: 'arXiv', label: 'Preprint · RA&S (under review)' },
  { value: '28–30%', label: 'Shorter robot travel path' },
  { value: '96.45%', label: 'Crop-row perception score' },
  { value: 'Edge AI', label: 'Jetson & Pi deployments' },
]

// Rotating hero showcase. Each slide tries its video first, then its image,
// then an elegant animated placeholder — so missing media never breaks the page.
// Drop real files at the listed paths to light each slide up (see assets/README).
// Single cinematic hero reel (Avishkar-style): one seamless clip that cross-fades
// through the real work — spiral & linear-field nav, low-cost drone crop mapping,
// smart-city dumping detection and edge-AI face recognition. With one slide the
// backdrop stops rotating and plays as a steady film background (see HeroBackdrop).
export const showcase = [
  {
    id: 'grid',
    category: 'Robotics · Drone AI · Computer Vision',
    caption: 'Live work across robotics, edge-AI vision, smart-city detection and drone agriculture, playing together.',
    video: `${BASE}/assets/hero-grid.mp4`,
    image: `${BASE}/assets/hero-grid.jpg`,
    accent: 'blue',
    grid: true,
  },
]

/* ── Previous 5-slide rotating hero — restore by swapping this back in ──
export const showcase = [
  { id: 'robotics',    category: 'Robotics Research',            caption: 'Autonomous spiral-field navigation in Gazebo with nonlinear MPC tracking.',                          video: `${BASE}/assets/research/spiral.mp4`,            image: `${BASE}/assets/research/crop-spirals.jpg`,      accent: 'blue' },
  { id: 'linear-field',category: 'Robotics Research',            caption: 'Baseline linear-field navigation: U-turn vs. Ω-turn headland strategies in ROS 2 / Gazebo.',        video: `${BASE}/assets/research/linear-field.mp4`,      image: `${BASE}/assets/research/Linear_field_layout.png`, accent: 'blue' },
  { id: 'vision',      category: 'Computer Vision',              caption: 'Edge AI face recognition & physical access control: real-time identity verification.',              video: `${BASE}/assets/projects/face-recognition.mp4`,  image: `${BASE}/assets/projects/face-recognition.jpg`,  accent: 'teal' },
  { id: 'dumping',     category: 'Smart-City AI · Computer Vision', caption: 'Real-time illegal-dumping detection: CCTV zone monitoring with waste triggers & VLM alerts.',    video: `${BASE}/assets/projects/illegal-dumping.mp4`,   image: `${BASE}/assets/projects/illegal-dumping.jpg`,   accent: 'violet' },
  { id: 'detection',   category: 'Drone Agriculture',            caption: 'Agrarian v1.0: RGB crop-health & water-stress mapping from a low-cost drone.',                      video: `${BASE}/assets/projects/agrarian.mp4`,          image: `${BASE}/assets/projects/agrarian.jpg`,          accent: 'violet' },
  { id: 'iot',         category: 'IoT & Embedded',               caption: 'Industrial IoT monitoring: UPS power & temperature telemetry over Modbus RTU.',                     image: `${BASE}/assets/projects/server-room.jpg`,       accent: 'blue' },
]
*/

// Core technologies — scrolled as an infinite marquee under the hero. Keep these
// short and recognisable; they signal the working stack at a glance.
// Each item is { label, icon }. `icon` is a slug into TECH_LOGOS (see
// components/TechIcons.jsx) for the items that have a real brand logo; items
// that are concepts/protocols (no logo) use `null` and fall back to a dot.
export const techMarquee = [
  { label: 'ROS 2', icon: 'ros' },
  { label: 'YOLO', icon: null },
  { label: 'NVIDIA Jetson', icon: 'nvidia' },
  { label: 'Raspberry Pi', icon: 'raspberrypi' },
  { label: 'OpenCV', icon: 'opencv' },
  { label: 'PyTorch', icon: 'pytorch' },
  { label: 'TensorRT', icon: 'nvidia' },
  { label: 'Docker', icon: 'docker' },
  { label: 'FastAPI', icon: 'fastapi' },
  { label: 'CasADi', icon: null },
  { label: 'Nonlinear MPC', icon: null },
  { label: 'Gazebo', icon: null },
  { label: 'A*/TSP', icon: null },
  { label: 'ESP32', icon: 'espressif' },
  { label: 'KiCad', icon: 'kicad' },
  { label: 'Modbus RTU', icon: null },
  { label: 'CAN bus', icon: null },
  { label: 'Python', icon: 'python' },
  { label: 'C/C++', icon: 'cplusplus' },
  { label: 'Linux', icon: 'linux' },
]

// What each capability means in one line — used in the Professional Summary band.
// `icon` is a slug into CAP_ICONS (see components/CapIcon.jsx). If a slug is
// missing/unknown, the card falls back to the gradient tile marker (.cap-dot).
export const capabilities = [
  {
    label: 'Research Experience',
    detail: 'Robotics & autonomous navigation: arXiv preprint under review at Robotics and Autonomous Systems (Elsevier).',
    accent: 'blue',
    icon: 'microscope',
  },
  {
    label: 'Industry Engineering',
    detail: 'End-to-end edge-AI products, industrial IoT, firmware and PCB design shipped to real hardware.',
    accent: 'teal',
    icon: 'factory',
  },
  {
    label: 'AI Deployment',
    detail: 'Low-latency edge inference on NVIDIA Jetson and Raspberry Pi with real-time pipelines.',
    accent: 'violet',
    icon: 'cpu',
  },
  {
    label: 'Computer Vision',
    detail: 'Detection, tracking, face recognition & analytics with YOLO, OpenCV and CNNs.',
    accent: 'blue',
    icon: 'eye',
  },
  {
    label: 'Embedded Systems',
    detail: 'ESP32 / ATmega / ARM, Modbus & CAN, custom PCBs and real-time control.',
    accent: 'teal',
    icon: 'circuit-board',
  },
]

// Industry / engineering projects. `image` falls back to a category-coloured
// placeholder if the file is missing. Projects carrying a `caseStudy` object
// also get a detail page at /projects/:id (see pages/ProjectDetail.jsx); the
// card copy stays short and the full engineering write-up lives there.
export const projects = [
  {
    id: 'cleancity',
    category: 'Edge-to-Cloud Computer Vision · Smart City',
    title: 'CleanCity: Illegal Dumping Detection AI',
    description:
      'Edge-to-cloud computer-vision system that detects illegal waste dumping from CCTV in real time. YOLO person/object detection with ByteTrack tracking and proximity-based actor–object association triggers court-ready evidence capture (before/entry/after frames + an H.264 clip), which a Qwen vision-language model confirms before a human operator makes the final decision through a React review dashboard.',
    tags: ['YOLO', 'ByteTrack', 'Qwen VLM', 'FastAPI', 'PostgreSQL', 'React'],
    video: `${BASE}/assets/projects/illegal-dumping.mp4`,
    image: `${BASE}/assets/projects/illegal-dumping.jpg`,
    imageAlt:
      'A CCTV frame from the CleanCity detector with a tracked person and waste object outlined inside the monitored zone.',
    accent: 'violet',
    detail: true,
    caseStudy: {
      subtitle:
        'Rebuilding a false-alarm-prone CCTV prototype into a person-centric, evidence-first detector running on live street cameras in Jaffna, Sri Lanka.',
      period: 'May – Aug 2026',
      role: 'Embedded AI Engineer, Digit Web Lanka (Pvt) Ltd.',
      context:
        'Jaffna, Sri Lanka: live street CCTV into an on-premise Ubuntu 22.04 server, CPU inference with GPU optional',
      evidence:
        'Written from the project’s own records: the production-readiness review submitted to the Managing Director (June 2026), the dated validation reports under validation/, the CPU benchmark and runtime-resilience result files, and annotated frames captured from the live Jaffna camera and the demonstration clips.',
      hero: {
        src: `${BASE}/assets/projects/cleancity/cleancity-proximity-suspect.webp`,
        alt: 'Live Jaffna CCTV frame with a tracked person outlined in red inside the yellow monitored zone, an orange proximity circle drawn around their feet and a detected garbage bag box beside them; the status line reads suspect=1.',
        caption:
          'The decision the whole system turns on: a tracked person has dwelled 15.1 s inside the zone and trigger-class waste has appeared inside their proximity radius, so the visit is flagged SUSPECT and queued for vision-language confirmation.',
      },
      metrics: [
        { value: '3-stage', label: 'Gate: zone session · proximity · VLM' },
        { value: '4 + clip', label: 'Evidence artefacts per incident' },
        { value: '10×', label: 'Fewer loaded models at 100 cameras' },
        { value: '36 / 36', label: 'Runtime resilience checks passed' },
      ],
      problem:
        'The proof-of-concept decided that dumping had happened by comparing each frame against a learned background picture of the scene. On the real Jaffna camera that method reacted to everything that was not dumping: shadows tracking across the road through the day, wet patches and ground marks, pre-existing roadside litter, and any passer-by who happened to be on screen when the scene changed. The monitored streets are mostly clean and genuine dumping is infrequent, so a detector that cries wolf is worse than no detector at all. An operator stops opening the queue. On top of that the system had to run on an eight-core server with no NVIDIA GPU, sampling a 768×432 H.264 sub-stream at five frames per second and getting roughly two of them through inference, and every alert it did raise had to arrive with a record strong enough to put in front of an enforcement officer.',
      solution:
        'The decision logic was rebuilt around the person instead of the picture, and the background baseline was deleted rather than tuned. A YOLO detector fine-tuned on local Jaffna and public waste imagery finds people, vehicles and the garbage and bags that matter here, with per-class confidence gates so small litter can be caught without loosening the threshold that person tracking depends on. ByteTrack gives each person a stable identity, and a zone session records their whole visit: enter, dwell, exit. Waste detected inside the zone is attributed to the nearest in-zone actor within a resolution-relative proximity radius; only a visit that actually collected such a trigger becomes suspicious. That suspicious visit is packaged as before / entry / near / after stills plus an H.264 clip cut from a rolling buffer, and only then does a Qwen2.5-VL model give a yes / no / unsure verdict. A human operator makes the final call in the dashboard. Three independent conditions have to agree before an incident is confirmed, which is precisely what the everyday false-positive scenarios cannot do.',
      architectureTitle: 'From camera to court-ready evidence',
      architecture: [
        'CCTV camera: H.264 Main, 768×432 at 10 fps, RTSP sub-stream',
        'go2rtc: exactly one upstream pull per camera, fanned out to the browser (MSE/WebRTC) and to the detector over loopback RTSP',
        'Latest-frame reader: newest frame wins, stale frames are dropped rather than queued',
        'Shared inference service: fine-tuned YOLO detection for persons, vehicles and waste classes, shared by every camera in the worker process',
        'Waste temporal memory + ByteTrack: a 1 s ghost hold across detector flicker, stable person IDs across dropped frames',
        'Zone session: foot-point polygon test, enter → dwell → 1 s exit grace → exit',
        'Proximity trigger: in-zone waste attributed to the nearest in-zone actor within 0.15 × frame width',
        'Evidence writer: before / entry / near / after JPEGs and an H.264 clip cut from a 35 s rolling buffer',
        'Qwen2.5-VL 7B: three-frame confirmation over an OpenAI-compatible endpoint, backed by a durable job journal',
        'PostgreSQL + FastAPI: event upsert, REST and a live WebSocket broadcast',
        'React dashboard: the operator confirms, rejects or skips the incident',
      ],
      architectureNote:
        'The dashboard row is created the moment the session logic flags a suspicious visit, as PENDING_QWEN, so a slow or failed VLM call can never orphan the evidence on disk. The Qwen worker later upserts the same event ID in place: NO_DUMP marks the row DISCARDED, while CONFIRMED_DUMP and UNCERTAIN both land in the human review queue. An API or parse failure resolves to UNCERTAIN rather than a silent discard, and no verdict path ever deletes evidence.',
      contributionNote:
        'Sole engineer on the detection pipeline, backend, streaming layer and dashboard integration, reporting to the Managing Director.',
      contribution: [
        'Investigated the proof-of-concept on the real Jaffna camera rather than on test clips, and traced the false alarms to the background-comparison logic, a full-frame detection zone, unstable person identities at low frame rate, and fixed pixel thresholds.',
        'Redesigned the detection architecture end to end: removed the scene-difference baseline entirely and replaced it with a person-centric zone-session decision confirmed by a vision-language model.',
        'Fine-tuned the YOLO detector on local Jaffna and public waste imagery for the garbage and bag classes, then set per-class confidence gates and a larger inference size so small litter is caught without lowering the person threshold the whole pipeline rests on.',
        'Implemented the zone-session state machine: foot-point polygon containment, minimum dwell, exit grace to absorb boundary flicker, and a true last-in-zone exit timestamp so dwell timing stays accurate.',
        'Implemented proximity-based actor–object association: each in-zone waste box is attributed to the nearest in-zone actor inside the effective radius, so waste alone and people alone can never raise an event.',
        'Made every spatial threshold resolution-relative (proximity as a fraction of frame width, minimum waste area as a fraction of frame area) with the old absolute values retained as fallbacks, so one settings file works on a sub-stream and on 1080p.',
        'Wrote the waste temporal memory that holds a detection for one second across YOLO misses, plus EMA smoothing on waste boxes, so the suspicious trigger does not flicker at two processed frames per second.',
        'Tuned ByteTrackLite for low-frame-rate CPU inference: longer track age, a centre-distance fallback alongside IoU matching, and class-group gating so a person can never inherit a vehicle’s track.',
        'Built the evidence pipeline: a 35 s JPEG-encoded rolling buffer per camera, nearest-timestamp extraction of the before / entry / near / after stills, and an H.264 clip written by a bounded worker pool off the camera thread.',
        'Integrated the Qwen2.5-VL confirmation stage over an OpenAI-compatible endpoint: three downscaled frames, a strict JSON verdict contract, verdict normalisation, and a fail-safe fallback to UNCERTAIN on any API or parse error.',
        'Replaced the process-local VLM queue with a durable job store: a local SQLite journal, PostgreSQL PENDING_QWEN rows as the authoritative recovery source, and evidence stills on disk as the payload, so pending work survives a restart and rows stop getting stuck at “analysing”.',
        'Re-architected the runtime for scale: cameras partitioned into worker processes that share one inference service, cutting loaded model instances tenfold at a hundred cameras, with two-tier recovery (thread restart inside a worker, worker restart by the supervisor) so one failure domain cannot take down the estate.',
        'Bounded every queue in the pipeline with an explicit drop policy (newest-wins for frames, drop-oldest for inference, reject-newest for evidence, never-drop for VLM jobs) and wrote the 36-check resilience suite that proves each one.',
        'Benchmarked CPU inference from 1 to 10 cameras and modelled ingest bandwidth to 100 cameras, and measured the frame-buffer JPEG mode that cut buffer RAM from 115 MB to 9.9 MB per camera.',
        'Fixed the black live view by tracing it to an HEVC sub-stream muxed into fMP4 for a browser MSE player, moved the camera to H.264 Main, and collapsed the two camera upstreams into a single go2rtc pull feeding both the dashboard and the detector, verified by ONVIF Media2 read-back and ffprobe.',
        'Built the FastAPI backend and its PostgreSQL schema (events, cameras, zones and edge nodes) with an upsert event write, a live WebSocket channel, bearer-token authentication with credential redaction, Prometheus metrics, per-camera health and a retention policy that is dry-run only until a business policy enables it.',
        'Integrated the React review dashboard: overview KPIs, the live event feed, the incident review queue with confirm / reject / skip, the evidence archive, the multi-camera wall, the camera map and the zone editor.',
        'Wrote the deployment guide and the production-readiness review for the Managing Director, including an honest residual-gap list separating remaining model-quality work from settled architecture.',
      ],
      specTitle: 'Deployment stack',
      hardware: [
        { name: 'Fixed street CCTV camera', note: 'H.264 Main, 768×432 at 10 fps sub-stream, ONVIF Media2, live deployment in Jaffna' },
        { name: 'On-premise server', note: 'Ubuntu 22.04, 8-core x86-64, 16 GB RAM: CPU inference, CUDA used automatically when a GPU is present' },
        { name: 'go2rtc media server', note: 'RTSP ingest with MSE/WebRTC fan-out; config rebuilt from the database and hot-reloaded by SIGHUP' },
        { name: 'PostgreSQL 14', note: 'Events, cameras, detection zones and edge-node telemetry, behind a pooled connection layer' },
        { name: 'Self-hosted Qwen2.5-VL 7B', note: 'Quantised vision-language model behind an OpenAI-compatible HTTPS endpoint, off-box, so the site needs no GPU' },
        { name: 'Local evidence store', note: 'One directory per event: four stills and an MP4 clip, served to the dashboard through the API' },
      ],
      firmwareTitle: 'Detection & application software',
      firmware: [
        'Fine-tuned YOLO detection: persons and vehicles alongside garbage, bags and overgrown grass, with per-class confidence gates and a larger inference size for small waste.',
        'ByteTrackLite person tracker tuned for low frame rate: high/low confidence association, IoU plus centre-distance matching, class-group gating and long track age through brief occlusion.',
        'Waste temporal memory: a one-second ghost hold with pixel-distance matching, plus exponential smoothing applied to waste boxes only.',
        'Zone-session state machine: enter, dwell, exit grace and cooldown per tracked actor, with pending sessions flushed rather than dropped on a stream reset.',
        'Rolling frame buffer: 35 s at 5 fps per camera, JPEG-encoded at quality 80 (9.9 MB against 115 MB raw), with nearest-timestamp lookup for evidence extraction.',
        'Durable VLM job store: SQLite journal plus PostgreSQL recovery plus on-disk frames, with retry backoff and stuck-job recovery on start.',
        'Bounded queues throughout with declared drop policies, plus a supervisor that restarts dead camera threads and dead worker processes with backoff.',
        'FastAPI backend: REST for events, cameras, zones, stats and nodes, a live WebSocket channel, bearer-token auth with secret redaction, Prometheus metrics and per-camera health.',
        'React 19 dashboard on TanStack Router and Query with Tailwind: overview, cameras, live feed, incidents, evidence, camera map and configuration.',
        'Split configuration: decision thresholds live in one settings file, execution tuning in a separate runtime profile, so a pilot and a hundred-camera deployment differ only in how the pipeline runs, never in what it decides.',
      ],
      challenges: [
        {
          title: 'A baseline that could not tell a shadow from a dumped bag',
          body: 'Scene-difference detection flags anything new in the frame, which on a real street means moving shadows, drying puddles and litter that was already there. Tuning its sensitivity only traded one failure for the other. The baseline was removed from the decision path entirely rather than tuned, and every event now records that fact explicitly: the scene-difference field on each row reads “disabled, no baseline”.',
        },
        {
          title: 'One person, several identities at two frames per second',
          body: 'Dwell time and proximity attribution both depend on a person keeping one identity, but CPU inference processes only about two frames per second and a walker moves a long way between them. The tracker was tuned for that regime: longer track age to survive brief occlusion, a generous centre-distance fallback alongside IoU matching, and gating that only ever matches person to person, so a track can never jump from a pedestrian onto a passing motorcycle.',
        },
        {
          title: 'Thresholds that meant something different on every camera',
          body: 'A fixed 280-pixel “near the person” radius covers a third of a 768×432 sub-stream and barely a seventh of 1080p, so the same configuration behaved like a different system per camera. Proximity became a fraction of frame width and minimum waste area a fraction of frame area, with the absolute values kept only as fallbacks. The validation overlay prints the effective radius on screen (115 px on the Jaffna stream) so the operative value can be checked at a glance instead of inferred.',
        },
        {
          title: 'Detector flicker switching the trigger on and off',
          body: 'A small bag on a low-resolution sub-stream drops out of YOLO for a frame or two at a time, which was enough to make a session flip in and out of suspicion. A temporal memory holds a waste detection for one second and re-matches it by pixel distance, and smoothing is applied to waste boxes only so person tracking stays untouched. In the regression run, 909 raw waste detections became 1,025 stable ones through 116 ghost frames without changing a single session outcome.',
        },
        {
          title: 'Boundary flicker at the edge of the zone',
          body: 'A person standing on the zone edge crossed the polygon boundary every few frames, which ended and restarted their session repeatedly and produced a stream of short, meaningless visits. An exit is now only recognised after the actor has been continuously outside for a grace period, and the recorded exit timestamp is the true last-in-zone time, so absorbing the flicker does not inflate the dwell figure the evidence depends on.',
        },
        {
          title: 'Pending VLM work vanishing on restart',
          body: 'The original in-process queue lost everything it held whenever the detector restarted, which is exactly why rows sat in the database at “analysing” forever. It was replaced with three layers of durability: a local journal holding the queue and its backoff state, PostgreSQL pending rows as the authoritative source for rebuilding lost jobs, and the evidence stills on disk as the payload, so a recovered job re-reads its frames instead of needing them to have survived in RAM.',
        },
        {
          title: 'A loaded model per camera does not reach a hundred cameras',
          body: 'A thread per camera, each loading its own copy of the detector, does not scale: model memory grew linearly with the estate, one process-level fault took every camera down at once, and a dead camera thread stayed dead because nothing restarted it. Cameras are now partitioned into worker processes of ten that share a single inference service (a tenfold cut in loaded model instances) with a dead pipeline thread restarted inside its worker and a dead worker restarted by the supervisor, so one failure domain cannot reach the others.',
        },
        {
          title: 'A live view that ffprobe called healthy and the browser rendered black',
          body: 'The dashboard video area was black while every command-line check passed. The camera was emitting HEVC, go2rtc passed it through unchanged into fMP4, and the browser player cannot decode that: the connection succeeded and the picture never appeared. The same investigation found the detector pointed at a decommissioned host through a stale field, so AI ingest for that camera had been silently dead behind a retry loop. Moving the camera to H.264 and clearing that field left exactly one upstream pull feeding both the dashboard and the detector.',
        },
      ],
      outcome:
        'The redesigned system was accepted as a production candidate in the June 2026 management review, on the proof-first sequence the Managing Director had asked for: validate on the real camera, prove the event logic, and only then invest in more data and training. On the live Jaffna camera, people who stood in the monitored area for 26 and 27 seconds with no waste near them were correctly discarded with no event, while a person beside a garbage bag was flagged and sent for confirmation, and roadside litter with nobody present produced nothing at all. Every confirmed incident carries four evidence stills and a clip, and the 36-check runtime suite passes on queue bounds, camera and worker recovery, database pool behaviour under failure, durable VLM job recovery and retention safety. What remains is deliberately not architectural: improving the detector on the waste classes, expanding the local dataset, validating across more cameras, and a long-duration soak, all recorded as open gaps in the review rather than quietly omitted.',
      stack: [
        'Python', 'PyTorch', 'Ultralytics YOLOv8', 'ByteTrack', 'OpenCV', 'Qwen2.5-VL',
        'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'WebSockets', 'go2rtc', 'FFmpeg',
        'React 19', 'TanStack Router', 'Tailwind CSS', 'Leaflet', 'Prometheus', 'Docker-free on-prem Linux',
      ],
      gallery: [
        {
          src: `${BASE}/assets/projects/cleancity/cleancity-zone-person-no-waste.webp`,
          alt: 'Live CCTV frame with one tracked person in a green box inside the yellow zone and an orange proximity circle around their feet; the status line reads waste_trig=0 suspect=0.',
          caption: 'Negative case: a tracked person has been in the zone for 9.5 s, but no trigger-class waste is inside their proximity radius, so the visit is not suspicious and no event is created.',
        },
        {
          src: `${BASE}/assets/projects/cleancity/cleancity-proximity-suspect.webp`,
          alt: 'Live CCTV frame showing a person outlined in red beside a detected garbage bag inside the zone, with the label “#1 IN 15.1s SUSPECT” above them.',
          caption: 'Positive case: trigger-class waste has appeared within the proximity radius of a tracked in-zone actor, flagging the visit as suspicious.',
        },
        {
          src: `${BASE}/assets/projects/cleancity/cleancity-sent-to-vlm.webp`,
          alt: 'Live CCTV frame with a red banner reading “SENT TO VLM EVT_112809_0001 waste=garbage dwell=21.3s”, a garbage box on the ground and the person now outlined in cyan as leaving the zone.',
          caption: 'The person has left and the waste remains: the finished session is packaged with its evidence and sent to the vision-language model for the final verdict.',
        },
        {
          src: `${BASE}/assets/projects/cleancity/cleancity-multi-person-tracking.webp`,
          alt: 'Live CCTV frame with three separately tracked people in green boxes, each with their own orange proximity circle and dwell timer, and a status line reading waste_trig=0 suspect=0.',
          caption: 'Multi-actor tracking: three concurrent sessions, each with its own identity, dwell timer and proximity radius, and none of them suspicious without waste.',
        },
        {
          src: `${BASE}/assets/projects/cleancity/cleancity-waste-ignored.webp`,
          alt: 'Live CCTV frame with a tracked person in a green box and a small grey box marking waste outside their proximity circle; the status line reads waste_trig=0.',
          caption: 'Proximity in action: litter detected outside the actor’s radius is drawn grey as “waste ignored” and never becomes a trigger.',
        },
        {
          src: `${BASE}/assets/projects/cleancity/cleancity-waste-no-person.webp`,
          alt: 'Street scene with a small red box labelled garbage_bag on the roadside and a status line reading persons=0 waste_trig=1 suspect=0.',
          caption: 'Waste without an actor: the detector picks up the bag, but with nobody tracked in the zone nothing is attributed and no event exists.',
        },
        {
          src: `${BASE}/assets/projects/cleancity/cleancity-motorcycle-zone.webp`,
          alt: 'Live CCTV frame with a motorcycle rider and a pedestrian each tracked in a green box with their own proximity circle, status line reading suspect=0.',
          caption: 'Ordinary traffic through the zone: riders and pedestrians open sessions and close them uneventfully, which is what keeps the review queue small.',
        },
        {
          src: `${BASE}/assets/projects/frontend/01_dashboard_overview.png`,
          caption: 'Overview: live system status and recent illegal-dumping incidents at a glance.',
          alt: 'CleanCity dashboard overview page showing overall system status and a feed of recent incidents.',
        },
        {
          src: `${BASE}/assets/projects/frontend/02_incidents_review.png`,
          caption: 'Incidents: the human review queue, split by Pending Qwen · Confirmed · Needs review.',
          alt: 'Incidents review page listing detected events grouped by review status with camera, risk and date filters.',
        },
        {
          src: `${BASE}/assets/projects/frontend/03_evidence_archive.png`,
          caption: 'Evidence archive: captured frames, video clips and full AI/debug detail per event.',
          alt: 'Evidence archive page showing captured before/entry/after frames and clip alongside per-event AI detail.',
        },
        {
          src: `${BASE}/assets/projects/frontend/04_live_cameras.png`,
          caption: 'Live cameras: the multi-camera wall streamed in real time via go2rtc.',
          alt: 'Live cameras page showing a grid of real-time CCTV streams relayed through go2rtc.',
        },
        {
          src: `${BASE}/assets/projects/frontend/05_camera_map.png`,
          caption: 'Camera map: a geospatial view of monitored camera locations.',
          alt: 'Camera map page plotting monitored CCTV camera locations on a map.',
        },
        {
          src: `${BASE}/assets/projects/frontend/06_configuration.png`,
          caption: 'Configuration: detection zones and system settings editor.',
          alt: 'Configuration page for editing detection zones and system settings.',
        },
      ],
    },
  },





  {
    id: 'face-recognition',
    category: 'Commercial Edge AI · Computer Vision',
    title: 'Face Recognition Gym Access Control',
    description:
      'Production access-control system running on a mini-PC at a gym door. A fine-tuned face-recognition model matches a member against enrolled identities, a membership and payment check decides the outcome, and an ESP32 relay controller releases the magnetic lock. A PyQt6 kiosk drives the 7-inch display outside the door; a login-gated web admin panel handles enrolment, plans, payments and access logs. Fully on-device: SQLite, no cloud, no internet dependency.',
    tags: ['Face Recognition', 'FastAPI', 'PyQt6', 'ESP32 Relay', 'SQLite', 'Edge AI'],
    video: `${BASE}/assets/projects/face-recognition.mp4`,
    image: `${BASE}/assets/projects/face-recognition.jpg`,
    imageAlt:
      'The access-control live view recognising an enrolled member, with an ACCESS GRANTED card showing their name and remaining membership days.',
    accent: 'teal',
    detail: true,
    caseStudy: {
      subtitle:
        'A face-recognition door system that has to be right about two different things at once: who this is, and whether they have paid.',
      period: 'Apr – Aug 2026',
      role: 'AI Engineer, CodeGloFix',
      context:
        'Ubuntu mini-PC mounted at a gym door, with a 7-inch HDMI panel outside, a USB camera, and an ESP32 relay controller driving the magnetic lock',
      evidence:
        'Written from the running system at /home/auto/Desktop/display/: the application source, the customer installation guide, the edge-migration study, the deployment and soak-test tooling, and screenshots captured from the live web interface in August 2026.',
      hero: {
        src: `${BASE}/assets/projects/face-recognition.png`,
        alt: 'The installed door unit at the gym: a 7-inch panel in a wall-mounted enclosure with a USB camera on top, showing the live recognition view with a green box locked onto the face of a member.',
        caption:
          'The enrolment screen: three face captures from different angles per member, taken on the same camera that will later have to recognise them at the door.',
      },
      metrics: [
        { value: '7-inch', label: 'Door-side kiosk display (1024×600)' },
        { value: '3', label: 'Face captures per enrolled member' },
        { value: '100% on-device', label: 'No cloud, no internet dependency' },
        { value: '~16 MB', label: 'Total on-device model footprint' },
      ],
      problem:
        'A gym door is a harder problem than face recognition alone. Recognising the member is only half the decision: the other half is whether their membership is still valid, and the two have to resolve together, in front of someone standing at a locked door waiting. The system also had to work with no internet at all: a gym cannot lose its door because a connection dropped. It had to run on cheap hardware the business could actually buy and install, be operable by gym staff who are not engineers, and fail in the safe direction: a door that refuses to open is an inconvenience, a door that opens for the wrong person is a liability.',
      solution:
        'One pass of a fine-tuned face-recognition model per frame produces the face box and its embedding together, which is then matched against the enrolled members by vectorised similarity, fast enough on a CPU to stay responsive with a thousand members on file. Before any match is trusted the frame has to clear a gate: the face must be large enough to be close to the door, centred in the region of interest, and alone, with a cooldown so one person standing there is recognised once rather than forty times. A recognised identity then goes to a separate access engine that checks the emergency lock, looks up the membership and payment record, and only then sends a single one-shot OPEN to the relay controller. Every timing decision about how long the door stays open lives in the controller firmware, not in Python. The result is written to an access log with its reason, shown on the 7-inch panel outside, and available to staff through a browser admin panel.',
      architectureTitle: 'From a face at the door to a released lock',
      architecture: [
        'USB camera: dedicated capture thread that publishes only the newest frame, so recognition never works from a stale backlog',
        'Fine-tuned face-recognition model: one pass per frame returns the face box, its embedding and the face count together',
        'Face gate: distance, centring and single-face checks, plus a cooldown so one visit is one decision',
        'Identity match: vectorised similarity against the enrolled member embeddings held on disk',
        'Access engine: emergency lock, then the membership and payment lookup, then the verdict',
        'Relay controller: a one-shot OPEN over USB serial; the ESP32 firmware owns all door timing',
        'SQLite: members, plans, payments, access logs and settings, in a single local file',
        'PyQt6 kiosk: the composited camera view and access result, full-screen on the 7-inch door panel',
        'Web admin panel: enrolment, members, payments, plans, access logs and door control, behind a login',
      ],
      architectureNote:
        'Recognition always runs on the raw 640×480 camera frame. The 1024×600 canvas that fills the 7-inch panel edge-to-edge is composited separately and never reaches the recogniser, so changing the display can never change a decision. If the relay controller is unreachable the system reports the fault and stays locked rather than assuming the door opened.',
      contributionNote:
        'Built and deployed as the engineer on the system, from the recognition pipeline through to the customer installation process.',
      contribution: [
        'Built the recognition pipeline: a single model pass per frame yielding box, embedding and face count together, so a CPU-only mini-PC does not pay for the same inference twice.',
        'Implemented the face gate that decides whether a frame is even worth matching: minimum face size for door proximity, a centre region-of-interest test, multi-face rejection, and a per-visit cooldown.',
        'Made the distance threshold resolution-relative: calibrated in pixels against a reference frame and scaled by the actual frame area, so an admin-tuned value keeps its meaning when the camera resolution changes and no site needs re-tuning.',
        'Separated identity from authorisation: a dedicated access engine performs the emergency-lock check, the membership and payment lookup, and the relay decision, so recognition code never contains business rules.',
        'Wrote the serial relay controller for the ESP32 door hardware: a four-command protocol (OPEN, LOCK, PING, TEST) with startup handshake, auto port discovery, thread safety, and a non-blocking open so the detection loop is never stalled by the door.',
        'Moved camera reading into its own producer thread that keeps only the newest frame, removing the live-view lag that built up while the single loop paused reads during recognition and JPEG encoding.',
        'Designed the SQLite schema and data layer for members, membership plans, payments, access logs and system settings: a single local file, chosen so the door keeps working with no server and no network.',
        'Built the enrolment flow: three guided captures per member (front, side, angle) through the same camera that will later recognise them, with embeddings stored locally and a remote-enrolment page for capturing from a phone.',
        'Built the admin panel: dashboard with revenue and membership health, expiry-risk buckets, member management, payment recording with plan auto-fill, plan pricing that never rewrites historical payments, filterable access logs with CSV export, and manual door control with an emergency lock.',
        'Implemented server-side session authentication that refuses to start without an admin password and session secret in the environment, with the application bound to localhost behind an nginx TLS front end.',
        'Wrote the PyQt6 full-screen kiosk for the outside display: automatic screen selection preferring the small panel, a backend health wait before loading, certificate handling and a reload watchdog, and removed the Chromium kiosk it replaced.',
        'Composited a 1024×600 kiosk canvas so the 7-inch panel fills edge-to-edge with no black bars and without cropping any camera content, while recognition continues to run on the untouched camera frame.',
        'Packaged the whole thing for customer installation: systemd units for the service, the live display, scheduled backups and health checks, log rotation, nginx configuration, an offline wheelhouse build, and scripts for clean removal, data export and re-import.',
        'Wrote the installation-time hardware validation tool that proves the camera and the relay controller before go-live, and which only fires a test pulse after explicit confirmation so the door is never opened by accident.',
        'Wrote the long-run soak monitor that samples service status, endpoint health, memory, CPU, disk and log growth, and fails if the app is not bound to localhost or if memory grows abnormally.',
        'Produced the edge-migration study that answered the question of how to make the product cheaper, measuring where the compute actually goes and recommending against the proposed rewrite in favour of moving the same verified code onto a low-cost ARM board.',
        'Wrote the customer installation and maintenance guide covering fresh install, removal of a previous install, backup, restore and the decision path between them.',
      ],
      specTitle: 'Field hardware',
      hardware: [
        { name: 'Mini-PC at the door', note: 'Ubuntu 22.04, CPU-only inference: no GPU and no internet required' },
        { name: 'USB camera', note: '640×480 capture for recognition, read by a dedicated newest-frame thread' },
        { name: '7-inch HDMI panel', note: '1024×600 outside display driven full-screen by the PyQt6 kiosk' },
        { name: 'ESP32 relay controller', note: 'USB serial at 115200 baud: OPEN / LOCK / PING / TEST, with all door timing in firmware' },
        { name: 'Magnetic door lock', note: 'Released only by the relay controller; the system stays locked if the controller is offline' },
        { name: 'Local storage only', note: 'SQLite database and member embeddings on the box: nothing leaves the site' },
      ],
      firmwareTitle: 'Application software',
      firmware: [
        'FastAPI and Uvicorn backend bound to localhost, with nginx terminating TLS in front of it.',
        'Fine-tuned face-recognition model executed through a native runtime, one pass per frame, on CPU.',
        'Vectorised similarity matching against stored member embeddings: one matrix operation, not a loop over members.',
        'Face gate with eleven explicit states: no face, too far, off centre, multiple faces, cooldown, granted, granted-but-expiring, and four distinct denial reasons.',
        'Access engine holding all business rules: emergency lock, membership validity, expiry grace and the relay decision.',
        'SQLite data layer across five tables, with CSV export for access logs and a scheduled backup timer.',
        'PyQt6 and WebEngine kiosk with screen auto-selection, health wait, certificate handling and a reload watchdog.',
        'Jinja-templated admin panel with server-side session cookies and a start-time refusal if the auth secrets are missing.',
        'systemd units and timers for the service, live display, backups and health checks, plus log rotation.',
        'Installation tooling: hardware validation, offline wheelhouse, install, clean removal, export and import scripts.',
      ],
      challenges: [
        {
          title: 'The live view lagged behind the person standing at the door',
          body: 'A single loop that read a frame, ran recognition and encoded a JPEG left the camera queueing frames behind it, so the picture on the display drifted seconds behind reality, which reads as a broken system to whoever is waiting. Camera reading moved into its own producer thread that overwrites rather than queues, publishing only the newest frame. The recogniser now always works on what the camera can see right now, and memory stays flat.',
        },
        {
          title: 'A distance threshold that silently changed meaning',
          body: 'How close a member must stand is expressed as a minimum face area in pixels, which is a different physical distance at every capture resolution. The threshold is now calibrated against a reference frame and scaled by the actual frame area, so the value an installer tuned on one site keeps meaning the same physical distance if the camera resolution ever changes, with no re-tuning and no silent behaviour change.',
        },
        {
          title: 'One person, forty decisions',
          body: 'Someone standing in front of the camera is recognised on every processed frame, which would spam the access log and re-trigger the door repeatedly. A cooldown collapses a visit into a single decision, and the gate additionally refuses to act when more than one face is present or when the face is off-centre, so a person walking past behind a member cannot influence the outcome.',
        },
        {
          title: 'The door must never open by accident',
          body: 'Every mechanism was chosen to fail locked. Python sends one OPEN and nothing else; how long the lock stays released is decided entirely by the controller firmware, so no Python bug, timer or crash can hold a door open. The relay call is non-blocking, so a slow door never stalls recognition. The installation-time hardware tool will only pulse the relay after explicit confirmation. And when the controller is unreachable the system says so plainly and stays locked, visible in the demo, where recognition succeeds and the status line reports the relay offline rather than pretending the door opened.',
        },
        {
          title: 'Recognising someone is not the same as letting them in',
          body: 'The interesting failure mode in a gym is not a stranger, it is a member whose payment lapsed last week. Identity and authorisation were kept as separate stages: the recogniser returns a name, and a distinct access engine decides using the membership and payment record. That is why the gate has separate outcomes for expired, inactive, unknown and emergency-locked, and why the admin panel is built around plans, payments and expiry risk rather than around faces.',
        },
        {
          title: 'A 4:3 camera on a 17:10 panel',
          body: 'Shown directly, the camera left black bars down both sides of the 7-inch display; cropping to fill would have thrown away part of the frame. The outside view is composited onto its own 1024×600 canvas over a softened, scaled-to-cover background, so the panel fills edge-to-edge with nothing cut. Recognition never sees that composited frame: the display layer cannot affect a decision.',
        },
        {
          title: 'A kiosk that hung on “Waiting for backend…”',
          body: 'The outside display used to stall at startup because it was routed through nginx and a self-signed certificate before the backend was even up. The wrapper now talks straight to the local backend port, waits on a health endpoint before loading the interface, and runs a watchdog that reloads on repeated failures and exits non-zero so the service restarts it. The browser-based kiosk it replaced was removed entirely rather than left as a fallback.',
        },
        {
          title: 'Being asked to rewrite it in C++',
          body: 'The proposal for making the product cheaper was to rewrite the application in C++ and compress it. Reading the code first showed why that would not have worked: the expensive work (detection, embedding and matching) already executes in native code, so rewriting roughly five thousand lines of verified Python would have bought almost no speed. The models were already edge-class at around sixteen megabytes total, while the desktop display environment was the genuinely large component. The recommendation was to move the same code to a low-cost ARM board and only then consider accelerating the two models. The cost saving was in the hardware, not the language.',
        },
      ],
      outcome:
        'The system runs in production on a customer machine and is still in active development. A member is enrolled from three captures at the door, appears immediately in the members list, and is recognised on the next approach with their remaining membership days shown on the outside panel; the access log records every granted and denied entry with its reason and exports to CSV for the gym owner. The whole installation is scripted (install, clean removal of a previous version, scheduled backup, export and re-import) with a hardware validation tool that proves the camera and relay before go-live and a soak monitor that fails loudly if the service drops, leaks memory, fills the disk, or stops being bound to localhost. Two things are honestly still open: final proof on the physical 7-inch panel, which needs the hardware in hand rather than a matching-resolution stand-in, and the port to the low-cost ARM board that the migration study recommends but which has not yet been executed.',
      stack: [
        'Python', 'FastAPI', 'Uvicorn', 'OpenCV', 'ONNX Runtime', 'NumPy', 'SQLite',
        'PyQt6', 'Jinja2', 'nginx', 'systemd', 'ESP32', 'Serial / pyserial', 'Ubuntu 22.04',
      ],
      gallery: [
        {
          src: `${BASE}/assets/projects/gym-access/gym-access-enrolment.webp`,
          alt: 'Member enrolment page with a live camera panel, three FRONT / SIDE / ANGLE capture slots, a Register Member button and a registered-members table.',
          caption: 'Enrolment: three guided captures per member through the door camera itself, with the status line reporting the recognition and door state live.',
        },
        {
          src: `${BASE}/assets/projects/gym-access/gym-access-dashboard.webp`,
          alt: 'Admin dashboard showing today and month revenue, counts for total, active, expired and expiring members, today entries, door status, a membership-health donut chart and an expiry-risk breakdown.',
          caption: 'Dashboard: revenue, membership health and expiry risk in grouped buckets, with live door status alongside.',
        },
        {
          src: `${BASE}/assets/projects/gym-access/gym-access-logs.webp`,
          alt: 'Access logs page listing timestamped entries per member with GRANTED decision badges and a reason column, above totals for entries, granted, denied and door opened.',
          caption: 'Access logs: every decision recorded with its reason, filterable by date and member, exportable to CSV for the gym owner.',
        },
        {
          src: `${BASE}/assets/projects/gym-access/gym-access-door-control.webp`,
          alt: 'Door control page showing state Locked, badges for controller offline, emergency off and system ready, relay port and baud rate, a manual Open Door button and an emergency lock panel.',
          caption: 'Door control: relay state, manual override and the emergency lock that blocks all automatic openings. Here the controller is offline, and the door correctly stays locked.',
        },
        {
          src: `${BASE}/assets/projects/gym-access/gym-access-payments.webp`,
          alt: 'Payments page with a record-payment form for member, plan, amount, method and validity dates, above a payment history table.',
          caption: 'Payments: recording a membership payment sets the validity window that the door decision later reads.',
        },
        {
          src: `${BASE}/assets/projects/gym-access/gym-access-plans.webp`,
          alt: 'Plans page listing monthly, quarterly and annual membership plans with duration in days, price and active status, above an add-new-plan form.',
          caption: 'Plans: pricing changes apply to new payments only, so historical payment records are never rewritten.',
        },
      ],
    },
  },




  {
    id: 'agrarian',
    category: 'AI / Drone Agriculture · Computer Vision',
    title: 'Agrarian v1.0: Drone Crop Health Monitoring',
    description:
      'Low-cost autonomous drone + RGB imaging system for paddy farming. Point-cloud segmentation (DBSCAN) and RGB agronomic indices (LAI, ExG, NDI) detect low-growth and water-stressed zones, producing real-time heatmaps without multispectral or satellite data.',
    tags: ['OpenCV', 'Open3D', 'DBSCAN', 'Python', 'AWS'],
    video: `${BASE}/assets/projects/agrarian.mp4`,
    image: `${BASE}/assets/projects/agrarian.jpg`,
    imageAlt:
      'Aerial RGB view of a paddy field with the crop-health heatmap overlaid on low-growth and water-stressed zones.',
    accent: 'blue',
  },



  {
    id: 'exosuit',
    category: 'Wearable Robotics Research · Mechanism Design',
    title: 'Passive Shoulder Exosuit: Overhead Work Assistance',
    description:
      'MPhil embodiment design of a fully passive shoulder exosuit for overhead work, with no motors, no batteries and no control electronics. A torso-mounted compression spring drives a barrel cam whose groove profile shapes the assistance curve, transmitted through independent Bowden cables to a fixed-radius shoulder pulley, delivering 5 / 7.5 / 10 N·m peak assistance from three matched spring-and-preload configurations on one shared cam.',
    tags: ['FreeCAD', 'Mechanism Design', 'Biomechanics', 'Cam Synthesis', 'Parametric CAD', 'Python'],
    image: `${BASE}/assets/projects/exosuit/exosuit-assembly-front.webp`,
    imageAlt:
      'CAD render of the bilateral passive shoulder exosuit: back frame, two vertical spring-and-cam modules, Bowden cables routed to both shoulder pivots and a pelvic belt.',
    accent: 'violet',
    detail: true,
    caseStudy: {
      subtitle:
        'A wearable device with no power source, where every newton-metre it delivers has to be stored, shaped and released by geometry alone.',
      period: 'Aug 2026',
      role: 'MPhil research, covering mechanism design, analysis and CAD embodiment',
      context: 'AgriTech research project: overhead occupational tasks such as drilling, painting, plastering, grinding and assembly',
      evidence:
        'Written from the project repository: the frozen concept and mechanism-selection gate documents, the physics audit, the Python analysis modules and their plots, the parametric FreeCAD build scripts, and the generated CAD validation report.',
      hero: {
        src: `${BASE}/assets/projects/exosuit/exosuit-assembly-front.webp`,
        alt: 'Three-quarter CAD render of the bilateral exosuit showing the back frame rails, two orange spring modules, black Bowden sheaths curving to each shoulder pivot, and the pelvic belt at the base.',
        caption:
          'The bilateral assembly: energy is stored in the two torso modules and delivered to each shoulder through its own Bowden route, so nothing heavy or energetic sits near the head, neck or arms.',
      },
      metrics: [
        { value: '5 / 7.5 / 10', label: 'N·m peak assistance: LOW / MED / HIGH' },
        { value: '91.2 %', label: 'Arm gravitational moment compensated at HIGH' },
        { value: '38 / 38', label: 'CAD validation checks passing, zero critical' },
        { value: 'Zero', label: 'Motors, batteries or control electronics' },
      ],
      problem:
        'Holding a tool above shoulder height loads the shoulder continuously, and the resulting fatigue and injury are among the most common occupational complaints in construction and agricultural work. A powered exoskeleton can solve it, but it brings batteries, motors, charging and maintenance into environments that tolerate none of them. The brief was therefore a fully passive device: it must supply useful assistance without any power source, follow the shape of the gravitational load rather than fighting it, avoid over-assisting when the arm is low, keep energetic components away from the head and neck, and be adjustable across users and tasks without becoming a mechanism nobody can service.',
      solution:
        'Gravity on the arm follows a sine curve with elevation angle, so the assistance was designed to follow the same shape rather than a constant force. A compression spring housed in a torso module pushes on a roller follower running in the groove of a cylindrical barrel cam; because the groove profile decides how much the spring extends per degree of shoulder rotation, the cam (not the spring) is what shapes the torque curve. A Bowden cable carries that force from the module to a fixed-radius pulley at the shoulder, so the arm carries only a pulley and a cable while all stored energy stays on the torso. Three assistance levels come from three matched spring-and-preload pairs chosen so their ratio stays constant, which means one cam profile serves all three levels exactly. Below about 30° of elevation the cam is deliberately flat, so the device does nothing while the arm hangs and engages through a smooth blend as it rises.',
      architectureTitle: 'The force path, shoulder to spring',
      architecture: [
        'Padded upper-arm cuff: a broad 220° shell spreading the link force along the arm rather than at a point',
        'Adjustable arm link: telescoping load path carrying the assistance moment, sized to the wearer',
        'Shoulder revolute: 30 mm fixed-radius pulley on a 16 mm shaft, with hard stops at 0° and 150°',
        'Two passive translation stages: ±5 mm of orthogonal travel so the pivot can follow the wearer’s joint centre',
        'Independent Bowden cable and sheath per side: force from the torso to the shoulder, left and right uncoupled',
        'Winding drum, 15 mm radius: converts 78.54 mm of cable travel into 300° of cam rotation, a 2:1 amplification',
        'Barrel cam and axial roller follower: a 35 mm centre-radius groove whose profile shapes the whole torque curve',
        'Linear compression spring: the only energy store in the device, held longitudinally in the torso module',
        'Back frame and pelvic belt: closes the reaction path and biases it toward the pelvis rather than the shoulders',
      ],
      architectureNote:
        'The governing relation is τ(θ) = η · (F₀ + k·h(θ)) · |dh/dθ|. The spring sets the force scale, but the cam’s lift gradient is what shapes the curve. That distinction is the whole design: it means one cam profile can serve three assistance levels, and it means the torque shape can be synthesised rather than approximated.',
      contributionNote:
        'Sole author of the mechanism selection, the analysis, the CAD embodiment and the validation tooling.',
      contribution: [
        'Built a quasi-static biomechanical model of the shoulder to establish what the device actually has to oppose, giving a peak gravitational moment of 10.96 N·m at 90° elevation for the arm alone, and 19.5 and 28.0 N·m with a one- and two-kilogram tool in hand.',
        'Compared four candidate assistance profiles (sine-proportional, linear ramp, smoothstep plateau and a literature-derived spring-cam curve) against that gravitational curve, and selected the sine-proportional target because it holds a constant percentage of compensation instead of over-assisting at high elevation.',
        'Ran a formal mechanism-selection gate over five candidate architectures, excluding three on hard constraints before any scoring, then scored the two survivors against pre-declared weights and documented the reasoning as an auditable record rather than a conclusion.',
        'Derived the transmission: a 30 mm shoulder pulley against a 15 mm winding drum giving a 2:1 amplification, so 150° of shoulder elevation maps onto a 300° cam sweep and 78.54 mm of cable travel.',
        'Synthesised the barrel-cam groove profile from the energy requirement rather than fitting a curve to it, with a quintic blend joining the low-angle dead zone to the active region so assistance ramps in without a torque step.',
        'Sized the three assistance levels as matched spring-and-preload configurations (stiffnesses of 3.5, 5.25 and 7.0 N/mm against preloads of 30, 45 and 60 N) chosen so the preload-to-stiffness ratio stays constant and a single cam profile scales exactly across all three.',
        'Audited the stage-two physics and found the governing equation was wrong: the original relation double-counted the profile element and ran the energy flow backwards, leaving the design short by roughly a factor of five. Rederived it, proved conservation across the corrected model, and rebuilt every downstream number from it.',
        'Repackaged the mechanism from a polar disc cam to a cylindrical barrel cam with an axial follower after the disc form failed its packaging gate, which brought the maximum working pressure angle down from 33.5° to 12.4°.',
        'Modelled the Bowden transmission including its efficiency losses and bend-radius sensitivity, and routed both sheaths to hold a minimum bend radius of 106.9 mm so the predicted efficiency is achievable rather than assumed.',
        'Designed the shoulder to tolerate the fact that the device pivot and the wearer’s joint centre never coincide, using two compact orthogonal translation stages so misalignment is absorbed by the mechanism instead of by the wearer’s soft tissue.',
        'Built the entire CAD embodiment parametrically in FreeCAD as scripted parts: frame, pelvic interface, shoulder mechanism, arm link, cuff, both spring modules, Bowden routing and the bilateral assembly, so the whole model rebuilds from source rather than being hand-edited.',
        'Wrote an automated validation suite that reads the built model back and checks it: mirror symmetry of every bilateral pair, pivot alignment, clearance across all moving pairs, interface continuity along the force path, spring fit inside its module, transmission ratios, range of motion and export integrity.',
        'Ran a pre-submission audit that found six defects the validator could not see, including a pulley buried inside its housing, a broken force path with gaps up to 173 mm, a spring that did not physically fit its module and mirrored parts that were not true mirrors, corrected all six in the CAD and extended the validator from 28 to 38 checks so each one is caught automatically from then on.',
        'Carried out an FMEA of the stored-energy hazard and designed the safety system around capturing energy rather than dumping it: containment, hard stops, covers, capture-and-lock release and quick disconnects, ordered so energy is captured first, assistance isolated second and the wearer freed third.',
        'Classified every subsystem as prior art, adapted principle or original embodiment decision, with sources recorded, so the contribution claim is explicit about what is new and what is not.',
      ],
      specTitle: 'Mechanism & structure',
      hardware: [
        { name: 'Barrel cam and axial roller follower', note: '35 mm centre radius, 300° working groove: the element that shapes the assistance curve' },
        { name: 'Linear compression spring', note: 'Three matched configurations at 3.5 / 5.25 / 7.0 N/mm with 30 / 45 / 60 N preload; the only energy store' },
        { name: 'Winding drum and shoulder pulley', note: '15 mm and 30 mm radii giving a 2:1 amplification across 78.54 mm of cable travel' },
        { name: 'Bowden cable and PTFE sheath', note: 'Independent left and right routes, minimum bend radius held at 106.9 mm' },
        { name: 'Shoulder revolute with translation stages', note: '16 mm shaft, hard stops at 0° and 150°, plus ±5 mm of passive orthogonal self-alignment' },
        { name: 'Padded upper-arm cuff', note: '220° shell over a 96 mm contact length, with straps and a quick release' },
        { name: 'Back frame and pelvic interface', note: 'Twin rails and cross-members with no hard central spinal rail, biasing reaction load into the pelvis' },
        { name: 'Safety system', note: 'Containment, stops, covers, capture-and-lock release and quick disconnects around a 25.7 J stored-energy hazard' },
      ],
      firmwareTitle: 'Analysis & CAD toolchain',
      firmware: [
        'Python biomechanical model of the quasi-static gravitational shoulder moment, with and without a hand-held tool.',
        'Assistance-profile comparison across four candidate curves, plotted against the gravitational load.',
        'Cam synthesis from the energy requirement, with a quintic C² blend joining the dead zone to the active region.',
        'Bowden transmission model including efficiency and bend-radius sensitivity analysis.',
        'Physics audit script that re-derives the governing relation and proves energy conservation across the corrected model.',
        'Parametric FreeCAD build scripts: every part generated from source, ten files rebuilding to a 265-solid bilateral assembly.',
        'Automated CAD validator, extended from 28 to 38 checks, covering symmetry, clearance, force-path continuity, spring fit, ratios, range of motion and export integrity.',
        'Scripted presentation build that regenerates every render and figure from the current model, so no figure can drift from the CAD.',
      ],
      challenges: [
        {
          title: 'The governing equation was wrong, and everything downstream was built on it',
          body: 'A stage-two audit found the relation used to size the spring and cam double-counted the profile element and ran the energy flow in the wrong direction: the spring was modelled as absorbing energy while the arm rose, when it must release it. The design was short by roughly a factor of five and was not physically possible. The correct relation makes the cam’s lift gradient the profile shaper and the pulley radius merely a force scale. Every number after it was rebuilt from the corrected model, with a conservation proof recorded as evidence rather than a claim.',
        },
        {
          title: 'A cam that worked on paper and would not fit on a body',
          body: 'The original polar disc cam satisfied the torque requirement and failed its packaging gate: the working pressure angle reached 33.5°, which loads the follower sideways instead of along its travel. Moving to a cylindrical barrel cam with an axial follower unrolled the same profile along a longer path, bringing the maximum pressure angle down to 12.4° and letting the spring lie longitudinally in a slim torso module instead of radially in a wide disc.',
        },
        {
          title: 'Assisting the arm without fighting it near the bottom',
          body: 'A device that pushes the arm upward while it hangs is worse than no device: it has to be resisted all day. The cam is deliberately flat below roughly 30° of elevation, so the mechanism is inert through the resting range, and a quintic blend ramps engagement across a narrow band above it so assistance arrives without a step. Matching the sine shape of gravity itself then keeps the compensation percentage constant instead of peaking where the arm needs it least.',
        },
        {
          title: 'The wearer’s shoulder is not where the device thinks it is',
          body: 'A shoulder is not a fixed hinge, and no strapped-on pivot lines up with a joint centre that migrates as the arm rises. Left rigid, the mismatch is absorbed by the cuff pressing into the arm. Two compact passive translation stages give the pivot ±5 mm of orthogonal travel driven by the wearer’s own motion, so the mechanism yields instead of the tissue.',
        },
        {
          title: 'A validator that passed a model with a pulley buried inside its housing',
          body: 'The CAD passed 28 automated checks and a pre-submission audit still found six defects: a pulley intersecting its own housing, a drum fouling its bearing, a force path with gaps up to 173 mm, a spring needing 149.6 mm of space in an 84 mm module, doubled solids in every export, and mirrored parts differing by three percent in volume. Each was fixed in the model, and each became a new automated check. The lesson recorded was that a passing validator only proves the absence of the failures it already knows about.',
        },
        {
          title: 'Storing 25 joules against somebody’s back',
          body: 'A passive device is only passive while it is assembled: a spring under preload holds real energy, and releasing it is the hazard. The safety design rules out an intentional energy dump entirely: emergency release captures and locks the energy rather than freeing it, with containment, hard stops and covers around it, and quick disconnects ordered so the energy is secured before the wearer is released.',
        },
      ],
      outcome:
        'The design is frozen and the full bilateral CAD embodiment is built, exported and validated: ten parametric source files rebuilding to a 265-solid assembly that passes all 38 automated checks with three warnings and no critical failures. At the HIGH setting it compensates 91.2 % of the arm’s gravitational moment at 90° elevation, delivering 17.3 J of the 25.7 J stored, with a peak cable force of 463 N and a minimum structural factor of safety of 4.6. The contribution is stated honestly: passive shoulder assistance, remote spring storage and Bowden transmission are known principles, and what is claimed as original is the embodiment (the transmission ratio, the spring family, the dead-zone blend and the barrel-cam packaging) with prior art credited subsystem by subsystem. What does not exist is equally clearly recorded: there is no physical prototype, and no torque, EMG, comfort or fatigue testing has been performed, so nothing here is validated on a human being.',
      stack: ['FreeCAD', 'Parametric CAD', 'Python', 'NumPy', 'Matplotlib', 'Cam Synthesis', 'Biomechanics', 'Bowden Transmission', 'FMEA', 'Design Provenance'],
      gallery: [
        {
          src: `${BASE}/assets/projects/exosuit/exosuit-assembly-rear.webp`,
          alt: 'Rear three-quarter CAD render showing the back frame rails, two vertical orange spring modules mounted on the torso, Bowden sheaths routed up to each shoulder, and the pelvic belt.',
          caption: 'From behind: both energy modules sit vertically on the torso, and each drives its own shoulder through an independent Bowden route.',
        },
        {
          src: `${BASE}/assets/projects/exosuit/exosuit-module-internals.webp`,
          alt: 'Exploded CAD view of one torso module showing a compression spring above a cylindrical barrel cam on a shared shaft, with guide rods, bearings and an adjustment screw.',
          caption: 'Inside a module: the compression spring above, the barrel cam and winding drum coaxial below it, and the preload screw that trims cable tension without changing the assistance level.',
        },
        {
          src: `${BASE}/assets/projects/exosuit/exosuit-shoulder-internals.webp`,
          alt: 'Close CAD view of the shoulder mechanism showing the fixed-radius pulley between bearing housings on a shaft within a structural bracket.',
          caption: 'The shoulder: a fixed-radius pulley between paired bearings with hard stops. The arm carries only this and the cable; nothing stores energy here.',
        },
        {
          src: `${BASE}/assets/projects/exosuit/exosuit-assistance-profiles.webp`,
          alt: 'Three side-by-side plots of torque against shoulder elevation angle comparing four assistance-profile candidates against the gravitational torque curve, for no tool, a one-kilogram tool and a two-kilogram tool.',
          caption: 'Choosing the profile: four candidate assistance curves against the gravitational load. The sine-proportional curve tracks the shape of gravity, so the percentage compensated stays constant instead of peaking where the arm needs it least.',
        },
        {
          src: `${BASE}/assets/projects/exosuit/exosuit-cam-profile.webp`,
          alt: 'Plot of delivered torque against shoulder elevation angle alongside the cam lift and cam surface radius curves, with a shaded dead zone below thirty degrees.',
          caption: 'The corrected cam: delivered torque against the sine target, with the cam lift falling as the arm rises because the spring releases into the motion. The shaded band is the deliberate dead zone at low elevation.',
        },
        {
          src: `${BASE}/assets/projects/exosuit/exosuit-barrel-cam.webp`,
          alt: 'Three-dimensional plot of the barrel-cam groove path traced around a cylinder, with the axial lift plotted on the vertical axis.',
          caption: 'The synthesised groove: the assistance curve unrolled onto a cylinder as an axial lift path, which is what the roller follower physically traces.',
        },
      ],
    },
  },





  /* ── Server-room monitoring: reconstructed from the NAITA industrial-training
     diary kept at UTECH Technologies (Feb–Jul 2024). Every claim below maps to a
     dated diary entry; images are the original diary photographs/screenshots. ── */
  {
    id: 'server-room',
    category: 'Industrial IoT · Embedded Systems',
    title: 'Server Room UPS Power & Temperature Monitoring',
    description:
      'Embedded data-acquisition firmware using dual ADS1115 ADCs to monitor UPS and mains power availability plus rack temperature and humidity across a bank’s data centre, network and PABX rooms. Measurements are scaled, thresholded and exposed over Modbus RTU (RS-485) to BlackBox Lite gateways and the central monitoring portal.',
    tags: ['Firmware', 'ADS1115', 'Modbus RTU', 'RS-485', 'ESP32', 'ProfiCAD'],
    image: `${BASE}/assets/projects/server-room/server-room-ups-panel-1.webp`,
    imageAlt:
      'Opened data-centre monitoring panel showing breakers, a DIN power supply, the RSU controller board and two AC-to-DC conversion cards.',
    accent: 'violet',
    detail: true,
    caseStudy: {
      subtitle: 'Power, environment and safety monitoring for a bank’s critical rooms at Central Finance, Colombo.',
      period: 'Apr – Jun 2024',
      role: 'Assistant Embedded Engineer, UTECH Technologies (Pvt) Ltd.',
      context: 'Colombo Central Finance: Primary Data Centre, Network Room and PABX Room',
      evidence:
        'Reconstructed from the dated NAITA industrial-training diary (training weeks 8–19, 1 Apr – 20 Jun 2024). All photographs, screenshots and diagrams below are the original diary records.',
      hero: {
        src: `${BASE}/assets/projects/server-room/server-room-ups-architecture.webp`,
        alt: 'System architecture sketch showing smoke and water-leak sensors and two UPS units feeding RSU controller boards, which pass measurements over Modbus RTU to two wireless UTECH gateways alongside a CEB metering panel.',
        caption:
          'System architecture: UPS and CEB supplies plus environmental sensors are acquired by the RSU controller boards and carried over Modbus RTU to the UTECH BlackBox Lite gateways, which publish to the monitoring portal.',
      },
      metrics: [
        { value: '8', label: 'Analog channels: 2 × ADS1115' },
        { value: '4', label: 'Panels across 3 monitored rooms' },
        { value: '2 + 2', label: 'UPS systems and CEB feeds' },
        { value: '9600 8N1', label: 'Modbus RTU over RS-485' },
      ],
      problem:
        'The site’s critical rooms depended on two UPS systems backed by the CEB mains supply, but there was no continuous remote visibility of what those supplies were actually doing. The scope agreed with the client at the opening site meeting covered UPS power availability and input/output, environmental conditions (water leak, smoke, temperature, humidity), energy consumption, door access and generator status, all of which had to reach a central dashboard rather than being read locally, and all of which had to be derived from live 240 V AC lines without exposing the monitoring electronics to mains.',
      solution:
        'The monitoring chain was built around the UTECH RSU controller board, whose ESP32 microcontroller reads eight analog channels through two ADS1115 16-bit ADCs. Optocoupler-isolated AC-to-DC conversion cards (and, in the network room, signal relays) turn each 240 V AC UPS or CEB phase into a safe low-voltage DC signal. The firmware digitises those signals, applies a per-panel availability threshold, maps the results into a Modbus holding-register array, and serves them over RS-485 as a Modbus RTU slave. UTECH BlackBox Lite gateways act as Modbus masters, poll the RSU boards and the CEB energy meters, and push everything to the UTECH web portal.',
      contribution: [
        'Developed the RSU board acquisition firmware in the Arduino IDE: ADS1115 configuration words for channels AIN0–AIN3 (0xC1/0xD1/0xE1/0xF1), MSB/LSB assembly, negative-reading clamping and conversion of raw counts to scaled voltages.',
        'Resolved the dual-ADC bus configuration: strapped ADDR to VCC and GND to obtain I²C addresses 0x48 and 0x49, then implemented a per-chip scan loop that stores all eight channel voltages in a single array.',
        'Implemented the Modbus RTU slave layer (9600 baud, 8N1, slave ID 1) converting scaled voltages to uint16 register values and writing 1/0 power-availability states into a 16-register Modbus array against a 2.5 V threshold.',
        'Verified the register map on the bench with QModMaster over an RS-485-to-USB converter, reading holding registers with function code 03 from start address 0.',
        'Wrote the environmental firmware for two AM2305 temperature and humidity sensors on the RSU digital inputs, alternating reads every 2 s and publishing averaged values into Modbus registers as slave ID 2.',
        'Studied and hand-assembled the UTECH AC-to-DC conversion cards (240 V AC in, 5 V DC out): through-hole soldering of the optocouplers, high-current resistors and rectifier diodes, followed by visual inspection and continuity testing.',
        'Wired data-centre panel 1: two UPS systems into six breakers, both neutrals onto a common neutral bar, a 240 V-to-12 V transformer feeding the RSU board and both AC-to-DC cards, and the card DC outputs back into the RSU analog inputs.',
        'Wired data-centre panel 2: mounted two BlackBox Lite gateways, linked the panel-1 RSU board (slave 1) and AM2305 sensor board (slave 2) into the first gateway, and brought the CEB1 and CEB2 Modbus energy meters into the second.',
        'Built the network-room panel: relay sets converting three CEB and six UPS phase lines to 12 V DC signals into the RSU analog inputs, with the remaining line and the smoke sensor wired directly to the gateway’s analog inputs.',
        'Retuned the firmware threshold to 6 V for the network room to match the relay signal level, keeping the data-centre firmware structure unchanged, then simulated inputs to confirm the Modbus states tracked the thresholds correctly.',
        'Set up the PABX-room panel: single-phase UPS through a breaker, AC-to-DC card powering the gateway, and temperature/humidity plus smoke sensors wired to it.',
        'Integrated the RSU board and AM2305 sensors into an IP65 enclosure with cable glands and external Modbus A/B and power terminations.',
        'Produced the as-built ProfiCAD wiring diagrams for panel 1, panel 2, the network room, the PABX room and the generator fuel-sensor connection, with labels, annotations and a symbol legend.',
        'Commissioned the dashboards: configured the BlackBox Lite units with the UTECH Configuration Tool, set up the graphical widgets, and verified real-time data for both data-centre panels, the network room and the PABX room against manual readings.',
      ],
      hardware: [
        { name: 'UTECH RSU custom controller board', note: 'ESP32 microcontroller, analog and digital I/O, Modbus interface, 12 V supply' },
        { name: '2 × ADS1115 16-bit ADC', note: 'I²C addresses 0x48 (ADDR→VCC) and 0x49 (ADDR→GND), 8 analog channels' },
        { name: 'UTECH AC-to-DC conversion cards', note: '240 V AC phase input to 5 V DC signal, optocoupler-isolated' },
        { name: 'UTECH BlackBox Lite IoT gateway', note: 'Modbus master with analog/digital inputs, Wi-Fi and SIM connectivity' },
        { name: '2 × AM2305 sensors', note: 'Digital temperature and humidity measurement in the data-centre room' },
        { name: 'Smoke, water-leak and door sensors', note: 'Threshold-detected on analog inputs; 4 V output when triggered' },
        { name: 'Signal relays', note: '240 V AC to 12 V DC conversion for the network-room CEB and UPS phases' },
        { name: 'Panel electrics', note: 'MCB breakers, neutral bars, 240 V-to-12 V transformer, IP65 enclosures' },
        { name: 'CEB1 / CEB2 Modbus energy meters', note: 'Per-phase current, voltage, power, energy and frequency' },
        { name: 'RS-485 to USB converter', note: 'Bench verification of the Modbus register map' },
      ],
      firmware: [
        'Arduino IDE / C++ firmware targeting the RSU board’s ESP32.',
        'ADS1115 I²C driver: per-channel configuration registers, 16-bit sample assembly and raw-count-to-voltage scaling.',
        'Eight-channel acquisition loop across both ADCs, indexed by chip so one array holds the full scan.',
        'Availability logic: 2.5 V threshold in the data centre, 6 V in the network room, written as 1/0 states.',
        'Modbus RTU slave stack with a 16-register array polled by the gateway; a serial-print debug path when Modbus is disabled.',
        'AM2305 driver with alternating 2 s reads and a 50-sample rolling average to suppress intermittent error readings.',
        'QModMaster used as the Modbus master for bench verification of function code 03 reads.',
        'UTECH Configuration Tool for gateway provisioning, analog/Modbus read mapping, event logic and dashboard widgets.',
        'ProfiCAD for the as-built electrical documentation of every panel.',
      ],
      architecture: [
        'UPS 1 · UPS 2 · CEB phases (240 V AC)',
        'AC-to-DC conversion cards / signal relays: optocoupler-isolated low-voltage DC',
        'UTECH RSU board: 2 × ADS1115 (0x48 / 0x49), 8 analog channels',
        'ESP32 firmware: scaling, threshold detection, register mapping',
        'Modbus RTU over RS-485: 9600 8N1, slave IDs 1 and 2',
        'BlackBox Lite gateway: Modbus master, Wi-Fi / SIM uplink',
        'UTECH monitoring portal: dashboards, indicators and alerts',
      ],
      architectureNote:
        'AM2305 temperature and humidity sensors join the same chain through the RSU board’s digital inputs; smoke, water-leak and door sensors are threshold-detected on analog or digital inputs, and the CEB energy meters connect to the gateway as separate Modbus slaves.',
      challenges: [
        {
          title: 'Two ADS1115s on one I²C bus',
          body: 'Both converters ship with the same default address. Strapping the ADDR pin of the first chip to VCC and the second to GND gave 0x48 and 0x49, and the read loop selects the device before each conversion so all eight channels resolve without contention.',
        },
        {
          title: 'Intermittent AM2305 readings in a dual-sensor setup',
          body: 'A single sensor read cleanly, but with both connected an error reading appeared roughly every two minutes. Alternating the reads on a 2 s cycle and averaging the last 50 samples per sensor smoothed the anomalies out of the published values.',
        },
        {
          title: 'Different signal levels per panel',
          body: 'The data-centre AC-to-DC cards and the network-room relays produced different DC levels for the same “power available” condition. Rather than fork the firmware, the threshold was made the single point of change: 2.5 V in the data centre, 6 V in the network room.',
        },
        {
          title: 'Proving the register map before site integration',
          body: 'The board was read with QModMaster over an RS-485-to-USB converter before it went anywhere near the panel. An early bench read showed only six of eight channels active, which traced back to two analog inputs being left unconnected rather than a firmware fault.',
        },
        {
          title: 'Keeping 240 V away from the controller',
          body: 'Every mains line reaches the controller through an optocoupler-isolated AC-to-DC card or a relay, with breakers on each incoming phase and a common neutral bar, so the acquisition electronics only ever see low-voltage DC.',
        },
        {
          title: 'Handover and maintainability',
          body: 'The client asked for documentation they could maintain against. Each panel was drawn in ProfiCAD with labelled power and Modbus runs, per-component annotations and a symbol legend.',
        },
      ],
      outcome:
        'All four panels were wired, commissioned and verified on site. UPS and CEB power availability per phase, the CEB meters’ electrical parameters, rack temperature and humidity, and smoke, water-leak and door status were published in real time to the UTECH portal and cross-checked against manual readings and system logs before sign-off. The as-built ProfiCAD drawing set was handed over with the installation.',
      stack: ['ESP32', 'Arduino / C++', 'ADS1115', 'I²C', 'Modbus RTU', 'RS-485', 'AM2305', 'QModMaster', 'ProfiCAD'],
      gallery: [
        {
          src: `${BASE}/assets/projects/server-room/server-room-ups-rsu-boards.webp`,
          alt: 'Four UTECH RSU controller boards laid out on a workbench, each with green screw-terminal blocks for analog and digital inputs and the Modbus interface.',
          caption: 'UTECH RSU controller boards: the ESP32-based acquisition units carrying the dual ADS1115 ADCs, digital I/O and the Modbus interface.',
        },
        {
          src: `${BASE}/assets/projects/server-room/server-room-ups-adc-firmware.webp`,
          alt: 'Arduino IDE showing the dual-ADS1115 read loop next to a serial monitor printing eight analog voltage channels.',
          caption: 'Acquisition firmware: the per-chip read loop and the serial monitor confirming all eight scaled channel voltages across both ADS1115 devices.',
        },
        {
          src: `${BASE}/assets/projects/server-room/server-room-ups-modbus-verify.webp`,
          alt: 'QModMaster window configured for Modbus RTU at 9600 baud, slave address 1, reading eight holding registers that return a value of 1 each.',
          caption: 'Bench verification: QModMaster reading eight holding registers (function code 03) from the RSU board over an RS-485-to-USB converter.',
        },
        {
          src: `${BASE}/assets/projects/server-room/server-room-ups-acdc-card.webp`,
          alt: 'Close-up of the UTECH AC-to-DC conversion card showing rows of optocouplers, resistors and diodes with screw-terminal inputs and outputs.',
          caption: 'UTECH AC-to-DC conversion card: optocoupler-isolated conversion of each 240 V AC phase into a low-voltage DC signal for the controller.',
        },
        {
          src: `${BASE}/assets/projects/server-room/server-room-ups-enclosure.webp`,
          alt: 'RSU controller board mounted inside an opened IP65 plastic enclosure with cable glands and coloured sensor and power wiring.',
          caption: 'RSU board and AM2305 sensors integrated into an IP65 enclosure, with cable glands and external Modbus A/B and power terminations.',
        },
        {
          src: `${BASE}/assets/projects/server-room/server-room-ups-th-sensor.webp`,
          alt: 'AM2305 temperature and humidity probe mounted on a wall with its cable in flexible conduit.',
          caption: 'An AM2305 temperature and humidity sensor installed in the data-centre room and wired back to the RSU board’s digital inputs.',
        },
        {
          src: `${BASE}/assets/projects/server-room/server-room-ups-panel-1.webp`,
          alt: 'Opened wall-mounted control panel showing breakers, a DIN power supply, the RSU controller board and two AC-to-DC cards with red and yellow wiring.',
          caption: 'Data-centre panel 1: UPS feeds through breakers to the AC-to-DC cards, with the 240 V-to-12 V transformer supplying the RSU board.',
        },
        {
          src: `${BASE}/assets/projects/server-room/server-room-ups-panel-2.webp`,
          alt: 'Second control panel containing two BlackBox Lite gateway units, a transformer, a DIN power supply and terminal blocks.',
          caption: 'Data-centre panel 2: the two BlackBox Lite gateways collecting the RSU boards and the CEB Modbus energy meters.',
        },
        {
          src: `${BASE}/assets/projects/server-room/server-room-ups-network-room-panel.webp`,
          alt: 'Network-room panel with a row of signal relays, breakers and dense yellow and red wiring on a mounting plate.',
          caption: 'Network-room panel: relay sets converting the CEB and UPS phase lines into 12 V DC signals for the RSU analog inputs.',
        },
        {
          src: `${BASE}/assets/projects/server-room/server-room-ups-wiring-diagram.webp`,
          alt: 'ProfiCAD electrical drawing of panel 1 showing the RSU board, two AC-to-DC cards, sensor signal inputs and UPS phase connections with a title block.',
          caption: 'As-built ProfiCAD drawing for data-centre panel 1: RSU inputs, AC-to-DC cards, sensor signals and the UPS common power supply.',
        },
        {
          src: `${BASE}/assets/projects/server-room/server-room-ups-network-room-diagram.webp`,
          alt: 'ProfiCAD electrical drawing of the network-room panel showing relay contacts feeding a BlackBox gateway alongside a temperature and humidity sensor.',
          caption: 'As-built ProfiCAD drawing for the network-room panel: relay-converted phase signals, the gateway inputs and the sensor jack.',
        },
        {
          src: `${BASE}/assets/projects/server-room/server-room-ups-dashboard-environment.webp`,
          alt: 'Monitoring portal dashboard showing rack temperature and humidity values alongside indicator tiles for door status, CEB phase status, UPS phase availability, fire alarms and water detection.',
          caption: 'Commissioned dashboard: rack temperature and humidity with live indicators for door status, CEB and UPS phase availability, fire alarm and water detection.',
        },
        {
          src: `${BASE}/assets/projects/server-room/server-room-ups-dashboard-power.webp`,
          alt: 'Monitoring portal dashboard tiles listing per-phase current, voltage, active and reactive power, energy, power factor and frequency for both UPS systems.',
          caption: 'Electrical parameters read from the CEB Modbus energy meters: per-phase current, voltage, power, energy, power factor and frequency for both UPS feeds.',
        },
      ],
    },
  },





  {
    id: 'marine-link',
    category: 'Industrial IoT · Marine Telematics',
    title: 'Marine Link: Vessel Engine Telemetry Unit',
    description:
      'Telemetry controller monitoring twin-engine RPM, battery, coolant temperature and oil pressure alongside a Modbus fuel-flow meter, with SD-card store-and-forward when the Wi-Fi uplink drops. I tested the engine on/off and connectivity-loss behaviour, configured the dashboard parameters, and built the 16-unit delivery batch.',
    tags: ['Modbus', 'GSM/GPS', 'SD Logging', 'Testing', 'Production'],
    image: `${BASE}/assets/projects/marine-link/marine-link-assembly.webp`,
    imageAlt:
      'Opened Marine Link enclosure with the controller on its DIN rail beside the GSM and SD-card modules, wired out to the cable glands.',
    accent: 'blue',
    detail: true,
    caseStudy: {
      subtitle: 'Engine telemetry for marine vessels: testing, dashboard configuration and a 16-unit production build.',
      period: 'Jun – Jul 2024',
      role: 'Assistant Embedded Engineer, UTECH Technologies (Pvt) Ltd.',
      context: 'UTECH Marine Link product line',
      evidence:
        'Reconstructed from the NAITA industrial-training diary, training weeks 20–21 (24 Jun – 5 Jul 2024). Photographs are the original diary records.',
      hero: {
        src: `${BASE}/assets/projects/marine-link/marine-link-assembly.webp`,
        alt: 'Opened Marine Link enclosure showing the DIN-rail controller on the right, the GSM and SD-card modules on the left, and yellow, black and red wiring running down to the cable glands.',
        caption: 'Internal assembly: the controller, GSM and SD-card modules mounted and wired inside the prepared enclosure, as built for every unit in the delivery batch.',
      },
      metrics: [
        { value: '16', label: 'Units assembled, tested & shipped' },
        { value: '9', label: 'Engine parameters monitored' },
        { value: '8 AI / 4 DI', label: 'Controller I/O channels' },
        { value: 'SD card', label: 'Store-and-forward on link loss' },
      ],
      problem:
        'Vessel operators need engine condition data off the boat, but a marine installation cannot assume a connection is always there. The Marine Link controller therefore had to log every monitored parameter continuously, keep working through connectivity loss, and present the result in a form an operator can read at a glance.',
      solution:
        'The unit is built on the UTECH Global controller board (eight analog inputs, four digital inputs, a 24 V supply with 5 V and 3.3 V rails, and a Modbus interface) reading twin-engine RPM, battery voltage, coolant temperature and oil pressure directly, and fuel consumption from a Modbus fuel-flow meter. A GSM module carries the uplink and an SD card module holds a local backup that the firmware falls back to whenever Wi-Fi drops, so no data is lost while the vessel is out of range.',
      contribution: [
        'Worked through the controller architecture with the project engineer: I/O map, power rails, Modbus interface and the full monitored-parameter list.',
        'Simulated engine start and stop scenarios on the bench and verified that every monitored parameter was logged correctly across the transitions.',
        'Tested the uplink by cycling Wi-Fi on and off, confirming the unit switched into backup mode and wrote the readings to the SD card instead of dropping them.',
        'Configured the graphical representation of RPM, battery level, coolant temperature, oil pressure and fuel flow in the UTECH Configuration Tool, then ran a full end-to-end verification of the configuration, SD backup and dashboard.',
        'Built the 16-unit delivery batch: enclosure preparation and connector drilling, board mounting, internal wiring, GSM and SD-card module integration and SMD soldering.',
        'Inspected every board under magnification, ran the final functional test, applied product labelling and packed each unit in anti-static and foam packaging with its manual and delivery documentation.',
      ],
      hardware: [
        { name: 'UTECH Global controller board', note: '8 analog inputs, 4 digital inputs, 24 V input, 5 V / 3.3 V outputs, Modbus interface' },
        { name: 'GSM module', note: 'Cellular uplink for telemetry off the vessel' },
        { name: 'SD card module', note: 'Local backup logging when the Wi-Fi uplink is unavailable' },
        { name: 'Modbus fuel-flow meter', note: 'Fuel consumption measurement over the Modbus interface' },
        { name: 'Engine sensor inputs', note: 'RPM ×2, battery ×2, coolant temperature ×2, oil pressure ×2' },
      ],
      firmware: [
        'Parameter logging validated across simulated engine start/stop transitions.',
        'Backup-mode behaviour validated by cycling the Wi-Fi uplink and confirming SD-card writes.',
        'UTECH Configuration Tool used to define the graphical parameters and real-time indicators for the monitoring dashboard.',
        'Final system verification covering configuration, SD-card backup and dashboard rendering before release.',
      ],
      specTitle: 'Hardware, testing & configuration',
      firmwareTitle: 'Testing & configuration',
      architecture: [
        'Engine sensors: RPM, battery, coolant temperature, oil pressure',
        'Modbus fuel-flow meter',
        'UTECH Global controller: 8 analog / 4 digital inputs, 24 V supply',
        'Local SD-card log: store-and-forward when the uplink is down',
        'GSM / Wi-Fi uplink',
        'UTECH monitoring dashboard: real-time graphs and indicators',
      ],
      challenges: [
        {
          title: 'Surviving connectivity loss',
          body: 'A vessel spends much of its time without a usable uplink. Testing focused on the handover into backup mode: cycling Wi-Fi off and confirming the SD-card log picked up cleanly rather than leaving a gap in the record.',
        },
        {
          title: 'Verifying behaviour without a real engine',
          body: 'Engine start and stop scenarios were simulated on a bench rig so the logging path could be exercised repeatedly and the parameter values checked at each transition before the units left the workshop.',
        },
        {
          title: 'Consistency across a production batch',
          body: 'Sixteen units had to behave identically. Internal wiring, GSM and SD module integration and SMD soldering were done to a fixed sequence, with magnified inspection and a functional test on every board before packing.',
        },
      ],
      outcome:
        'The Marine Link system was confirmed to log correctly through engine on/off transitions and to fall back to SD-card storage on connectivity loss, with the dashboard parameters configured and verified. All 16 units passed final checks and were labelled, packed with manuals and documentation, and prepared for client delivery.',
      stack: ['Modbus', 'GSM', 'SD Logging', 'Sensor Instrumentation', 'SMD Assembly', 'Product Testing'],
      gallery: [
        {
          src: `${BASE}/assets/projects/marine-link/marine-link-controller-board.webp`,
          alt: 'UTECH Global controller board resting in a black enclosure base, with rows of green screw terminals for analog and digital inputs and a ribbon of coloured test leads attached.',
          caption: 'The UTECH Global controller board: eight analog and four digital inputs, 24 V supply and the Modbus interface used for the fuel-flow meter.',
        },
        {
          src: `${BASE}/assets/projects/marine-link/marine-link-test-bench.webp`,
          alt: 'Bench test setup on a workbench with a prototype board, a USB-to-serial adapter and coloured jumper wiring to breakout modules.',
          caption: 'Bench rig used to simulate engine start/stop scenarios and to exercise the logging path and Wi-Fi backup behaviour.',
        },
        {
          src: `${BASE}/assets/projects/marine-link/marine-link-reflow.webp`,
          alt: 'Four small green modules on the tray of a reflow oven with its temperature-profile control panel above.',
          caption: 'Modules passing through the reflow oven during the production run for the batch.',
        },
      ],
    },
  },





  {
    id: 'bline-cane',
    category: 'Assistive Embedded Systems · Sensing',
    title: 'BLine Cane: Obstacle Detection Upgrade',
    description:
      'Replaced a smart cane’s ultrasonic rangefinder with a TFLC02 time-of-flight sensor to remove false triggers indoors and interference from vibration. Integrated the sensor with the ESP32/SIM868 cane controller, tuned detection to 1.5 m over an 18° beam, and validated the haptic feedback in doorways and narrow corridors.',
    tags: ['ESP32', 'Time-of-Flight', 'UART/I²C', 'Sensor Tuning', 'Field Testing'],
    image: `${BASE}/assets/projects/bline-cane/bline-cane-controller-board.webp`,
    imageAlt:
      'Narrow green cane controller PCB carrying a SIM868 cellular module and an ESP32 module with edge connectors.',
    accent: 'teal',
    detail: true,
    caseStudy: {
      subtitle: 'Fixing indoor obstacle detection on an assistive cane by moving from ultrasonic ranging to time-of-flight.',
      period: 'Jul 2024',
      role: 'Assistant Embedded Engineer, UTECH Technologies (Pvt) Ltd.',
      context: 'UTECH BLine Cane, an assistive mobility device',
      evidence: 'Reconstructed from the NAITA industrial-training diary, training week 22 (8 – 12 Jul 2024).',
      hero: {
        src: `${BASE}/assets/projects/bline-cane/bline-cane-controller-board.webp`,
        alt: 'Long narrow green UTECH controller PCB carrying a SIM868 cellular module and an ESP32 module, with side connectors, a battery terminal and a USB port.',
        caption: 'The BLine Cane controller board: an ESP32 alongside a SIM868 module, with I/O connectors, battery terminal, USB port and programming header.',
      },
      metrics: [
        { value: '1.5 m', label: 'Obstacle detection range' },
        { value: '18°', label: 'Sensor beam angle' },
        { value: 'ToF', label: 'Replaced ultrasonic ranging' },
      ],
      problem:
        'The cane’s existing ultrasonic rangefinder performed poorly indoors. Its wide beam picked up surfaces the user was not walking into, it behaved inconsistently around doors, and it was disturbed by vibration, including the cane’s own haptic feedback. The result was unreliable detection and feedback the user could not trust in exactly the confined spaces where the cane matters most.',
      solution:
        'The ultrasonic sensor was replaced with a TFLC02 time-of-flight module. Its narrower 18° beam looks where the user is actually heading rather than sampling the whole corridor, and being optical it is not disturbed by the vibration that upset the ultrasonic reading. The sensor was integrated with the cane’s ESP32-based controller and the detection logic re-tuned around a 1.5 m working range.',
      contribution: [
        'Analysed the reported failures of the existing ultrasonic sensor: poor indoor detection, inconsistent behaviour at doorways and interference from vibration.',
        'Evaluated the TFLC02 against those failure modes and confirmed its narrower 18° beam and lower vibration sensitivity suited confined indoor spaces.',
        'Integrated the TFLC02 with the cane’s microcontroller in place of the ultrasonic sensor, following the sensor’s serial/I²C interface and pull-up arrangement.',
        'Wrote and tested the object-detection firmware for a 1.5 m working range, and calibrated it to cut false positives while keeping genuine obstacles reliably detected.',
        'Adjusted the vibration-feedback timing so the alert arrives early enough to be useful without firing continuously in tight spaces.',
        'Field-tested the cane indoors, in narrow spaces and at doorways, and fine-tuned sensitivity and feedback timing from the observed behaviour.',
      ],
      hardware: [
        { name: 'TFLC02 time-of-flight sensor', note: '18° effective detection angle, configured for a 1.5 m working range' },
        { name: 'ESP32-based cane controller board', note: 'With SIM868 module, battery connector, USB port and ICSP programming header' },
        { name: 'Haptic feedback actuator', note: 'Vibration alert whose timing was re-tuned around the new sensor' },
      ],
      firmware: [
        'Sensor driver reading the TFLC02 over its serial interface in place of the previous ultrasonic timing code.',
        'Range gating at 1.5 m with calibration aimed at reducing false positives in cluttered indoor scenes.',
        'Vibration-feedback timing tuned against real-world walking tests rather than bench values.',
      ],
      architectureTitle: 'Signal path',
      architecture: [
        'TFLC02 time-of-flight sensor: 18° beam',
        'ESP32 cane controller: range gating and detection logic',
        'Haptic feedback to the user',
      ],
      challenges: [
        {
          title: 'Vibration coupling into the sensor',
          body: 'The previous ultrasonic sensor was disturbed by vibration, including the cane’s own feedback actuator. Moving to an optical time-of-flight measurement removed that coupling entirely.',
        },
        {
          title: 'Doorways and narrow spaces',
          body: 'A wide ultrasonic beam sees the door frame as an obstacle. The TFLC02’s 18° beam was chosen precisely so the cane reports what is ahead of the user rather than what is beside them, and this was checked by walking real doorways.',
        },
        {
          title: 'Trading sensitivity against false alarms',
          body: 'Detection had to be sensitive enough to give useful warning at 1.5 m without firing constantly. Sensitivity and feedback timing were adjusted iteratively from indoor and narrow-corridor testing.',
        },
      ],
      outcome:
        'The TFLC02-based detection worked reliably in the indoor and doorway scenarios where the ultrasonic sensor had failed, and the sensitivity and haptic timing were tuned from real-world testing before the change was signed off.',
      stack: ['ESP32', 'TFLC02 ToF', 'Embedded C', 'Sensor Calibration', 'Field Testing'],
      gallery: [
        {
          src: `${BASE}/assets/projects/bline-cane/bline-cane-tof-sensor.webp`,
          alt: 'Small black TFLC02 time-of-flight sensor module mounted on the white body of the cane, held with blue masking tape and connected by a white plug.',
          caption: 'The TFLC02 time-of-flight module fitted to the cane body in place of the original ultrasonic sensor.',
        },
        {
          src: `${BASE}/assets/projects/bline-cane/bline-cane-field-test.webp`,
          alt: 'Hand holding the cane handle with the sensor wiring exposed during an indoor walking test on a carpeted floor.',
          caption: 'Indoor field testing: checking detection and haptic feedback while walking through narrow spaces and doorways.',
        },
      ],
    },
  },



  /* Hardware design work kept as a short combined mention rather than full case
     studies — the boards support the AI and research work above, they are not
     the headline. */
  {
    id: 'pcb-design',
    category: 'PCB Design · Supporting Hardware',
    title: 'PCB Designs: ESP32 Controller & WiFiBridge Boards',
    description:
      'Two KiCad boards designed alongside the embedded work. The ESP32 IoT Controller is an 80 × 80 mm four-layer board with I²C environmental sensing, USB-UART programming, a QWIIC expansion port, level-shifted LED-strip drive on fused terminals and an isolated relay. WiFiBridge V1 is a two-layer battery-powered network bridge: a Wi-Fi and Ethernet module behind a full single-cell lithium chain with USB-C charging, protection and a regulated rail. Both were taken to manufacturing-ready outputs with BOM and pick-and-place exports.',
    tags: ['KiCad', '4-Layer PCB', 'ESP32', 'Li-ion Charging', 'DFM'],
    image: `${BASE}/assets/projects/iot-controller/iot-controller-3d.webp`,
    imageAlt:
      'Three-dimensional render of a square four-layer PCB carrying an ESP32-WROOM module, a relay, screw terminals and a USB connector.',
    accent: 'teal',
  },
]

export const education = [
  {
    degree: 'Bachelor of Engineering Technology (Hons.) in Instrumentation & Automation',
    institution: 'University of Colombo',
    location: 'Colombo, Sri Lanka',
    period: 'Jan 2021 – Aug 2025',
    gpa: '',
    note: 'Thesis: “Design of a Spiral Crop Field Layout for Vision-Based Multi-Robot Navigation in Future Agricultural Robotics,” supervised by Dr. Rajitha de Silva, Postdoctoral Research Associate, Lincoln Centre for Autonomous Systems, University of Lincoln, UK.',
  },
  {
    degree: 'GCE Advanced Level – Engineering Technology',
    institution: 'Skandavarodaya College',
    location: 'Jaffna, Sri Lanka',
    period: 'Apr 2011 – Aug 2019',
    gpa: 'Z-Score: 1.901',
    note: '',
  },
]

export const researchInterests = [
  'Agricultural robotics and field-layout intelligence',
  'Computer vision for autonomous systems',
  'Robot perception and vision-based navigation',
  'Motion planning, MPC, and multi-robot coordination',
  'Embedded AI and low-latency edge inference',
  'IoT, firmware, and industrial monitoring',
]

export const skills = [
  { category: 'Robotics & Control', items: 'ROS 2, Gazebo, Path Planning (A*/TSP), Nonlinear MPC (CasADi), Trajectory Tracking, Multi-Robot Systems' },
  { category: 'Computer Vision & AI', items: 'OpenCV, YOLO, CNNs, ResNet, PyTorch, TensorFlow, Scikit-learn, TensorRT, Image Processing' },
  { category: 'Embedded Systems', items: 'ESP32, ATmega, ARM, PCB Design (KiCad), Modbus RTU, CAN, UART, I2C, SPI' },
  { category: 'Programming', items: 'Python (NumPy, Pandas, OpenCV), MATLAB, C/C++, Verilog, VHDL, Linux' },
  { category: 'Frameworks & Tools', items: 'CasADi, Open3D, DBSCAN, FastAPI, SQLite, Docker, AWS, Raspberry Pi, Git' },
]

export const publications = [
  {
    title: 'Crop Spirals: A Robot-Centric Field Layout for Autonomous Robot Navigation in Agriculture',
    authors: 'L. Lakshan, L. Thiyagarasa, U. Muthugala, and R. de Silva',
    venue: 'Robotics and Autonomous Systems, Elsevier: Under Review',
    year: '2026',
    note: 'Manuscript ID: ROBOT-D-26-00705 · Preprint: arXiv:2509.25091 [cs.RO], DOI: 10.48550/arXiv.2509.25091',
    arxiv: 'https://arxiv.org/abs/2509.25091',
    doi: 'https://doi.org/10.48550/arXiv.2509.25091',
  },
]

export const experiences = [
  {
    role: 'Embedded AI Engineer',
    org: 'Digit Web Lanka (Pvt) Ltd.',
    location: 'Sri Lanka',
    period: 'Mar 2026 – Present',
    points: [
      'Designing and delivering end-to-end edge-AI and computer-vision systems for commercial, industrial, security, agricultural and assistive applications.',
      'Building production vision pipelines for object detection, classification, tracking, face recognition, activity monitoring, anomaly detection and automated alerting.',
      'Deploying and optimizing deep-learning models on NVIDIA Jetson and Raspberry Pi using Python, OpenCV, PyTorch, TensorRT and Docker.',
      'Integrating AI inference with cameras, embedded hardware, databases, web dashboards, notification services and cloud storage to ship complete operational systems.',
      'Owning the full product lifecycle: data preparation, model training, evaluation, deployment, hardware integration, testing and production maintenance.',
    ],
  },
  {
    role: 'Assistant Embedded Engineer',
    org: 'UTECH Technologies (Pvt) Ltd.',
    location: 'Wattala, Sri Lanka',
    period: 'Feb 2024 – Aug 2024',
    points: [
      'Developed and debugged embedded systems using ESP32 and ATmega microcontrollers.',
      'Integrated Modbus and CAN bus communication for real-time industrial IoT applications.',
      'Designed and tested custom PCBs for reliable operation in industrial environments.',
      'Delivered the Colombo Central Finance server-room monitoring project: IoT data acquisition and control for environmental safety.',
      'Contributed to Utech MarineLink device testing and data analysis under real-world operating conditions.',
    ],
  },
  {
    role: 'Embedded Firmware Development Intern',
    org: 'Pantech Solutions',
    location: 'Chennai, India (Remote)',
    period: 'Jan 2020 – Dec 2020',
    points: [
      'Developed firmware for ESP32 and ARM-based microcontrollers for real-time data acquisition and device control.',
      'Implemented AI-based edge-computing modules for IoT applications, including sensor fusion and anomaly detection.',
      'Designed and tested UART, I2C, SPI and Modbus communication for reliable industrial IoT integration.',
      'Built smart-automation prototypes combining embedded control with machine-learning models.',
    ],
  },
]

export const awards = [
  { year: '2025', text: 'Undergraduate Research Recognition: Final Year Project on Crop Spirals highlighted as a novel contribution in robotic agriculture, University of Colombo.' },
  { year: '2024', text: 'Secretary, Innovation Nation Sri Lanka 2024 (INSL 2024): a national-level student innovation initiative and project evaluation.' },
  { year: '2022', text: 'Finalist: HackCx 2022, ranked among the top 12 teams nationally for a low-cost AI-based crop monitoring solution.' },
]

export const volunteering = [
  { year: '2025', text: 'Instructor, Robotics and Innovation Workshop: All Island School Robotics Competition, Sri Lanka.' },
  { year: '2024', text: 'Secretary, Innovation Nation Sri Lanka 2024 (INSL 2024).' },
  { year: '2022', text: 'Outgoing Global Volunteer, AIESEC Global Volunteer Program, Sri Lanka.' },
]

export const references = [
  {
    name: 'Dr. Rajitha de Silva',
    title: 'Postdoctoral Research Associate, Lincoln Centre for Autonomous Systems (L-CAS), University of Lincoln, UK',
    email: 'odesilva@lincoln.ac.uk',
  },
  {
    name: 'Dr. U. S. Muthugala',
    title: 'Senior Lecturer, Department of Instrumentation & Automation Technology, University of Colombo, Sri Lanka',
    email: 'mutugalau@iat.cmb.ac.lk',
  },
]

export const research = [
  {
    id: 'crop-spirals',
    tag: 'Final Year Research Project',
    title: 'Crop Spirals: Re-thinking the Field Layout for Future Robotic Agriculture',
    period: 'Feb 2025 – Aug 2025',
    status: 'Under Review: Robotics and Autonomous Systems, Elsevier (2026)',
    description:
      'Proposed a novel square-spiral crop field layout with a central tramline designed to overcome the inefficiencies of conventional linear crop fields: tight turns, perceptual aliasing, and soil compaction.',
    details: [
      'Integrated DH-ResNet18 perception (from prior work) with pixel-to-odometry projection, A*/TSP path planning, and nonlinear MPC trajectory tracking for real-time autonomous navigation in ROS 2 and Gazebo.',
      'Demonstrated 28–30% shorter travel distance, 25% lower travel time, and 10–15% energy savings compared to baseline linear fields.',
      'Achieved sub-decimetre accuracy (0.38 m APE) in Gazebo trials at 8–12 Hz on mid-tier hardware.',
      'Multi-robot coordination experiments: decentralized Greedy allocator achieved 33–37% lower batch completion time versus Hungarian method while maintaining workload fairness.',
      'Ablation studies confirmed predictable scaling and optimal efficiency with three-robot deployments.',
      'Released an open-source spiral crops toolkit supporting visualization, 2D-to-1D transformations, and large-scale simulation.',
    ],
    metrics: [
      { value: '28–30%', label: 'Shorter travel distance' },
      { value: '0.38 m', label: 'APE (Gazebo)' },
      { value: '25%', label: 'Lower travel time' },
      { value: '8–12 Hz', label: 'Real-time runtime' },
    ],
    stack: ['ROS 2', 'Gazebo', 'CasADi', 'Python', 'MPC', 'A*/TSP', 'Multi-Robot'],
    media: {
      figures: [
        {
          image: `${BASE}/assets/research/linear-vs-spiral.png`,
          imageAlt: 'Side-by-side comparison of a conventional linear crop field and the proposed square-spiral layout, illustrating how the spiral eliminates repeated headland U-turns.',
          caption: 'Fig. 1a. Motivation: conventional linear crop rows (left) force frequent tight headland turns, perceptual aliasing and soil compaction, whereas the proposed square-spiral layout (right) enables continuous robot-centric traversal.',
        },
        {
          image: `${BASE}/assets/research/system-overview.png`,
          imageAlt: 'System overview diagram of the spiral-navigation pipeline linking perception, pixel-to-odometry projection, A*/TSP planning and nonlinear MPC control.',
          caption: 'Fig. 1b. System overview: the end-to-end spiral-navigation pipeline integrating DH-ResNet18 perception, pixel-to-odometry projection, A*/TSP path planning and nonlinear MPC trajectory tracking.',
        },
      ],
      image: `${BASE}/assets/research/spiral-gazebo-python.svg`,
      imageAlt: 'Square-spiral crop field layout with a central tramline, shown alongside its Gazebo simulation environment and Python-generated spiral geometry for robot-centric autonomous navigation.',
      caption: 'Fig. 1. Square-spiral field layout with central tramline, designed for robot-centric autonomous navigation.',
      video: `${BASE}/assets/research/spiral.mp4`,
      videoCaption: 'Gazebo simulation: autonomous spiral-field navigation with nonlinear MPC trajectory tracking.',
    },
  },
  {
    id: 'crop-detection',
    tag: 'Computer Vision',
    title: 'Crop Detection and Metric Analysis for Vision-Based Navigation',
    period: 'Jan 2025 – Feb 2025',
    status: 'Supporting work for Crop Spirals',
    description:
      'Developed a Dual-Head ResNet-18 (DH-ResNet18) for multi-task perception, simultaneously performing waypoint regression and scene classification (straight vs. bend) for crop-row navigation.',
    details: [
      'Introduced a metric-based evaluation framework using angular deviation (Δθ) and lateral displacement (ΔLx) to benchmark crop-row detection accuracy.',
      'Achieved 96.45% crop-row score, reducing angular error to 0.87° and lateral error to 8.26 px, a 50% improvement over the Triangle Scan baseline.',
      'Validated generalization across both linear and spiral crop rows, forming the perception foundation for the spiral navigation system.',
    ],
    metrics: [
      { value: '96.45%', label: 'Crop-row score' },
      { value: '0.87°', label: 'Angular error' },
      { value: '8.26 px', label: 'Lateral error' },
      { value: '50%', label: 'Improvement vs. baseline' },
    ],
    stack: ['Deep Learning', 'ResNet-18', 'OpenCV', 'Python', 'Data Annotation'],
    media: {
      figures: [
        {
          image: `${BASE}/assets/research/model-architecture.png`,
          imageAlt: 'Architecture diagram of the Dual-Head ResNet-18 (DH-ResNet18) network, showing the shared ResNet-18 backbone branching into a waypoint-regression head and a straight/bend classification head.',
          caption: 'Fig. 2a. Model architecture: the Dual-Head ResNet-18 (DH-ResNet18) shares a ResNet-18 backbone across a waypoint-regression head and a straight/bend scene-classification head.',
        },
        {
          image: `${BASE}/assets/research/prediction.svg`,
          imageAlt: 'Model prediction visualization comparing the Triangle Scan baseline (a) with DH-ResNet18 predicted navigation waypoints (b), overlaid on crop-row imagery for both straight and bend segments.',
          caption: 'Fig. 2b. Model predictions: the Triangle Scan baseline (a) versus DH-ResNet18 predicted navigation waypoints (b), overlaid on crop-row imagery across straight and bend segments, a 50% reduction in angular and lateral error over the baseline.',
        },
      ],
    },
  },
  {
    id: 'linear-nav',
    tag: 'Baseline Study',
    title: 'Autonomous Navigation in Linear Crop Fields',
    period: 'Sep 2024 – Jan 2025',
    status: 'Baseline reference for Crop Spirals',
    description:
      'Systematic investigation of conventional linear crop-field navigation to measure row-end turning inefficiency, trajectory deviation, travel distance, and travel time.',
    details: [
      'Implemented and compared U-turn and Ω-turn strategies for differential-drive robot navigation in ROS 2 / Gazebo.',
      'U-turns reduced travel distance to 201.9 m and time to 15.1 min, with trajectory accuracy of 0.43 m APE.',
      'Results established the quantitative baseline for validating the spiral crop-field layout.',
    ],
    metrics: [
      { value: '201.9 m', label: 'Travel distance' },
      { value: '15.1 min', label: 'Navigation time' },
      { value: '0.43 m', label: 'APE' },
    ],
    stack: ['ROS 2', 'Gazebo', 'Python', 'Trajectory Tracking', 'Control'],
    media: {
      figures: [
        {
          image: `${BASE}/assets/research/Linear_field_layout.png`,
          imageAlt: 'Layout of a conventional linear crop field showing parallel crop rows and the headland turning zones where the robot performs U-turn and Ω-turn manoeuvres.',
          caption: 'Fig. 3. Linear field layout: conventional parallel crop rows with headland turning zones, used as the baseline for the navigation experiments.',
        },
      ],
      video: `${BASE}/assets/research/linear-field.mp4`,
      videoPoster: `${BASE}/assets/research/linear-field-poster.jpg`,
      videoCaption: 'Gazebo simulation: baseline linear-field navigation comparing U-turn and Ω-turn headland strategies.',
    },
  },
]
