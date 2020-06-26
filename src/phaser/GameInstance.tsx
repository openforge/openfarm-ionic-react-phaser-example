  

import Phaser from 'phaser';
import { MainScene } from './MainScene';
import { AchievementsGlobalPlugin } from './AchievementsPlugin';
import { GameServicesPlugin } from '@openforge/capacitor-game-services';
import { Plugins } from '@capacitor/core';
const GameServices = Plugins.GameServices as GameServicesPlugin;

export const leaderboardId = 'CgkIkbvdu8ASEAIQCQ'; 
export let score = 0;
export let level = 1;
export let levelChangeScore = 1000;
export let currentActiveTileTypes = 4;
export let bombPowerUps = 3;

export function gameInstanceInit() {
    return new Phaser.Game({
        plugins: {
            global: [
                AchievementsGlobalPlugin,
            ]
        },
        width: window.innerWidth,
        height: window.innerHeight,
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

export function restartStats() {
    submitScore();
    score = 0;
    level = 1;
    currentActiveTileTypes = 4;
    bombPowerUps = 3;
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

export function submitScore(): void {
    if (score === 0) {
    console.warn('cannot submit score of 0, make sure to call this method before resetting the score property');
    return;
    }
    GameServices.submitScore({ leaderboardId, score, });
    return;
}

export function showLeaderboard(): void {
    GameServices.showLeaderboard({ leaderboardId });
}