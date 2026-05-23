/**
 * Represents the core state of a Space Invaders game session.
 * Manages stats such as alien kills, active weapon power-ups, waves, and boss state.
 */
export class GameState {
    constructor() {
        /** @type {number} Total number of aliens defeated in this game session. */
        this.alienKills = 0;
        /** @type {number} Pending power-up drops available to be generated. */
        this.pendingDrops = 0;
        /** @type {string[]} Queue of currently active weapon power-ups (max 3, FIFO). */
        this.activePowers = [];
        /** @type {number} Current wave number. */
        this.wave = 1;
        /** @type {boolean} Flag indicating if the current wave is the boss wave (Wave 10+). */
        this.isBossWave = false;
    }

    /**
     * Records an alien kill and increments the drop counter every 8 kills.
     */
    recordAlienKill() {
        this.alienKills++;
        if (this.alienKills % 8 === 0) {
            this.pendingDrops++;
        }
    }

    /**
     * Grabs a falling power up item and applies it to the active combination state array.
     * Uses a First-In, First-Out (FIFO) queue structure limited to 3 items.
     * @param {string} power - The power-up type (e.g. "faster_shooting", "bigger_bullets", "two_bullets", "three_bullets", "laser", "extra_life")
     */
    addPowerUp(power) {
        if (typeof power !== 'string' || !power) return;
        
        this.activePowers.push(power);
        if (this.activePowers.length > 3) {
            this.activePowers.shift(); // First-In, First-Out drop policy
        }
    }

    /**
     * Advances the wave counter and triggers the Boss state when Wave 10 is reached.
     */
    advanceWave() {
        this.wave++;
        if (this.wave >= 10) {
            this.isBossWave = true;
        }
    }
}

