# 🛸 SPACE INVADERS - PREMIUM RETRO ARCADE

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/javascript-ES6%2B-yellow.svg)](index.html)
[![Web Audio API](https://img.shields.io/badge/audio-Web%20Audio%20API-orange.svg)](index.html)
[![No Dependencies](https://img.shields.io/badge/dependencies-none-blue.svg)](package.json)
[![Node Tests](https://img.shields.io/badge/tests-Node%20--test-brightgreen.svg)](src/logic.test.js)

A high-fidelity retro arcade **Space Invaders** clone built completely from scratch using **pure Vanilla JavaScript** and the **HTML5 Canvas API**. Features zero heavy third-party engine dependencies, modern architectural best practices, and a beautiful premium retro-arcade cabinet cabinet simulation interface.

---

## 🌟 Interactive Cabinet Simulator

This is not just a centered canvas on a black screen. The game is wrapped in a **custom-designed virtual arcade cabinet** that makes you feel like you are standing right in front of a retro cabinet in the 80s:

*   **Tactile Responsive Console**: The joystick physically tilts, and the neon buttons depress in real-time as you press keys on your keyboard (or click/touch them directly)!
*   **CRT Bezel & Scanline Simulator**: Embedded CRT curved glass bezel, custom scanlines, and high-frequency pixel flickers for authentic retro aesthetics.
*   **Touch-Friendly Console**: Fully functional virtual buttons allow seamless play on mobile devices, tablets, and desktops alike.

---

## 🎮 How to Play

### Objectives
Defend the galaxy against endless waves of invading alien space fleets! As you clear waves, the aliens descend lower, move faster, and fire projectiles more rapidly. Watch out for **Wave 10**—where a massive, heavily armored boss UFO descends to challenge your survival!

### Controls

| Action | Keyboard Key | Virtual Arcade Button |
| :--- | :--- | :--- |
| **Move Left** | `A` or `Left Arrow` | `◀ A` Button (Green) |
| **Move Right** | `D` or `Right Arrow` | `D ▶` Button (Green) |
| **Fire Laser** | `Spacebar` (Hold for auto-fire) | `WEAPON TRIGGER` (Red) |
| **Pause Game** | `P` or `Escape` | `PAUSE (P)` Button (Yellow) |
| **Mute SFX** | `M` | `MUTE (M)` Button (Blue) |

---

## ⚡ Tactical Power-Up Directory

Every **8 alien kills** triggers a random power-up capsule drop. You can collect and stack up to **3 weapon powers simultaneously** under a strict **First-In, First-Out (FIFO)** inventory queue:

| Capsule | Power-Up Name | Tactical Effect | Rarity |
| :---: | :--- | :--- | :--- |
| 🟡 | **Faster Shooting** | Increases weapon recycle rate / cuts firing delay. | Common (40%) |
| 🔵 | **Bigger Bullets** | Amplifies laser size and projectile impact. | Common (40%) |
| 🟣 | **Two Bullets Wide** | Fires dual parallel laser streams for linear control. | Uncommon (12%) |
| 🟠 | **Three Spread** | Fires sweeping diagonal three-directional projectile bursts. | Rare (6%) |
| ⚪ | **Laser Beam** | Sweeps a high-intensity piercing plasma laser through enemies. | Ultra-Rare (2%) |
| 🔴 | **Extra Life** | Instantly repairs 1 hull shielding point (max limit of 5). | Vital (10%) |

---

## 🛠️ Code Architecture

The project is architected with a strict separation of concerns, ensuring high performance, clean structures, and full automated test coverage:

```
├── index.html          # Core Graphic Loop, Web Audio FX Engine, and Cabinet Interface
├── package.json        # Project metadata and test orchestrator scripts
├── LICENSE             # MIT Open Source License
└── src
    ├── logic.js        # Core pure-logic GameState engine (ES Modules)
    └── logic.test.js   # Automated unit tests covering core state modifications
```

### 1. The Core Engine (`index.html`)
Handles all user events, renders highly efficient 2D Canvas shapes, simulates starfield physics, generates particles, and manages game loop ticks via `requestAnimationFrame`.

### 2. Synthesized Web Audio FX
Zero static audio files are loaded! Sound effects are fully synthesized in real-time using native browser `window.AudioContext` and oscillators (`square`, `sawtooth`, `sine`), generating authentic 8-bit sound effects.

### 3. TDD-Backed Game Logic (`src/logic.js`)
All core state mutations—drop rates, inventory limits, and wave progression milestones—are isolated in a standalone ES module class. This logic is fully verified using automated unit tests run on Node.js's native test runner.

---

## 🚀 Quick Start Guide

Want to play or test the game locally? Follow these quick steps:

### 1. Clone & Run Locally
Since the project is built with **native ES Modules**, you can run it using any simple local static web server or open `index.html` directly in any modern browser!

To run via a lightweight local server (e.g., Python's built-in server):
```bash
# Start a simple HTTP server in the project directory
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### 2. Run the Unit Test Suite
To verify the engine's core mechanics and run the test suite, ensure you have [Node.js](https://nodejs.org) installed, then execute:

```bash
# Run the automated native Node.js unit tests
npm test
```

Expected output:
```text
✔ GameState - Drop threshold triggers every 8 kills (0.6ms)
✔ GameState - Power-up queues limit to 3 strictly with FIFO rules (0.6ms)
✔ GameState - Wave progression sets Boss mode on 10th wave (0.05ms)
ℹ tests 3
ℹ suites 0
ℹ pass 3
```

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
