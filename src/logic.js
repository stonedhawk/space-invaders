export class GameState {
    constructor() {
        this.alienKills = 0;
        this.pendingDrops = 0;
        this.activePowers = [];
        this.wave = 1;
        this.isBossWave = false;
    }

    recordAlienKill() {
        this.alienKills++;
        if (this.alienKills % 8 === 0) {
            this.pendingDrops++;
        }
    }

    /**
     * Grabs a falling power up item and applies it to the active combination state array.
     * @param {string} power - e.g. "faster_shooting", "laser"
     */
    addPowerUp(power) {
        this.activePowers.push(power);
        if (this.activePowers.length > 3) {
            this.activePowers.shift(); // First-In, First-Out drop policy
        }
    }

    advanceWave() {
        this.wave++;
        if (this.wave >= 10) {
            this.isBossWave = true;
        }
    }
}
