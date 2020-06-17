  

import Phaser from 'phaser';
import { MainScene } from './MainScene';

export let score = 0;
export let level = 1;
export let levelChangeScore = 1000;
export let currentActiveTileTypes = 4;
export let bombPowerUps = 3;

export function gameInstanceInit() {
    console.log(window.innerHeight);
    return new Phaser.Game({
    plugins: {
        global: [
        // AchievementsGlobalPlugin,
        ]
    },
    width: window.screen.availWidth,
    height: window.screen.availHeight,
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    parent: 'game-main',
    scene: [MainScene],
    fps: {
        forceSetTimeOut: true
    }
    });
}

export function restartGame() {

}

export function decreasePowerup() {
    bombPowerUps--;
}

export function incrementScore(amount: number) {
    score += amount;
}

export function incrementLevel() {
    level++;
}

export function incrementCurrenActiveTileTypes() {
    currentActiveTileTypes++;
}