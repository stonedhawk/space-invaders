import test from 'node:test';
import assert from 'node:assert';
import { GameState } from './logic.js';

test('GameState - Drop threshold triggers every 8 kills', () => {
    const game = new GameState();
    assert.strictEqual(game.alienKills, 0);
    assert.strictEqual(game.pendingDrops, 0);

    // Kills 1 through 7
    for (let i = 0; i < 7; i++) game.recordAlienKill();
    assert.strictEqual(game.alienKills, 7);
    assert.strictEqual(game.pendingDrops, 0);

    // 8th kill triggers drop
    game.recordAlienKill();
    assert.strictEqual(game.alienKills, 8);
    assert.strictEqual(game.pendingDrops, 1);

    // After 17 kills, we should have 2 total drops
    for (let i = 0; i < 9; i++) game.recordAlienKill();
    assert.strictEqual(game.pendingDrops, 2);
});

test('GameState - Power-up queues limit to 3 strictly with FIFO rules', () => {
    const game = new GameState();
    
    // Setup 1: empty queue
    assert.deepStrictEqual(game.activePowers, []);

    // Setup 2: pushing valid combinations
    game.addPowerUp('faster_shooting');
    assert.deepStrictEqual(game.activePowers, ['faster_shooting']);

    game.addPowerUp('bigger_bullets');
    game.addPowerUp('two_bullets');
    assert.deepStrictEqual(game.activePowers, ['faster_shooting', 'bigger_bullets', 'two_bullets']);

    // Setup 3: overflowing 3 pushes oldest out (faster_shooting is lost)
    game.addPowerUp('laser');
    assert.deepStrictEqual(game.activePowers, ['bigger_bullets', 'two_bullets', 'laser']);
});

test('GameState - Wave progression sets Boss mode on 10th wave', () => {
    const game = new GameState();
    assert.strictEqual(game.wave, 1);
    assert.strictEqual(game.isBossWave, false);

    // Advance 8 times to reach wave 9
    for (let i = 1; i < 9; i++) game.advanceWave();
    
    assert.strictEqual(game.wave, 9);
    assert.strictEqual(game.isBossWave, false);

    // Advancing once more enters Wave 10 Boss
    game.advanceWave();
    assert.strictEqual(game.wave, 10);
    assert.strictEqual(game.isBossWave, true);
});
