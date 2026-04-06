# Space Invaders Clone

![Gameplay Screenshot](./screenshot-placeholder.png)

A retro arcade Space Invaders clone built from scratch using pure vanilla JavaScript and the HTML5 Canvas API. Zero dependencies, all contained in a single file!

## Features

- **Classic Gameplay**: Navigate your ship and defend against endless waves of invading aliens.
- **Wave Progression**: Clear the board to advance. Aliens start lower, move faster, and shoot more frequently each wave up until Boss encounter.
- **Wave 10 Boss**: A gigantic, heavily armed purple UFO descends upon you on Wave 10. Dodge its sweeping bursts to save the galaxy!
- **Dynamic Entities**: Small, medium, and large aliens with varied point values. A mystery glowing UFO occasionally graces the top of the canvas.
- **Power-Ups Stack**: Every 8 alien kills drops a power capsule. Collect up to 3 weapons simultaneously (FIFO system pushes the oldest out):
  - 🟡 *Faster Shooting* (Common)
  - 🔵 *Bigger Bullets* (Common)
  - 🟣 *Two Bullets Wide* (Uncommon)
  - 🟠 *Three Bullets Spread* (Rare)
  - ⚪ *Piercing Laser Beam* (Ultra Rare)
  - 🔴 *Extra Life* (Recovers HP up to max 5)
- **Pixel Shields**: Take cover behind destructible classic shields that degenerate naturally as they get hit by bullets.
- **Retro Visuals**: Interlaced scanline CRT effects, blocky pixel shapes, smooth interpolating particle explosions, falling bullet trails, and a drifting star field.
- **Web Audio FX**: Pure synthesized code-driven arcade audio using `window.AudioContext`! Authentic oscillating square and sawtooth blips!
- **High Score System**: Your top score is persisted automatically in `localStorage`.

## How to Play

Navigate your ship horizontally and shoot down the aliens before they reach the bottom of the screen. Dodge enemy fire, utilize shields strategically, and aggressively chase power-ups for maximum destruction!

### Controls

| Action | Key |
|---|---|
| Move Left | `Left Arrow` / `A` |
| Move Right | `Right Arrow` / `D` |
| Fire | `Spacebar` (Hold for auto-fire) |
| Pause / Resume | `P` / `Escape` |
| Mute Audio | `M` |

## Tech Stack

- HTML5 Canvas API
- Vanilla JavaScript (ES6) (TDD driven logic!)
- CSS3 (scanline gradient overlays)
- Web Audio API (oscillators for zero-asset sound generation)

## Play Now

[Play the Live Demo!](https://stonedhawk.github.io/space-invaders)
