import * as Phaser from 'phaser';
import { Plugins } from '@capacitor/core';
import '@openforge/capacitor-game-services';
import { GameServicesPlugin } from '@openforge/capacitor-game-services';
const GameServices = Plugins.GameServices as GameServicesPlugin;

type ScoreAchievementState = {
  locked: boolean;
  achievementId: string;
  score: number;
};

export const gameServicesConstants: {
  defaultLeaderboard: { leaderboardId: string },
  scoreAchievements: Pick<ScoreAchievementState, 'achievementId' | 'score'>[];
} = {
  scoreAchievements: [
    {
      achievementId: 'CgkIkbvdu8ASEAIQAg',
      score: 1_000,
    },
    {
      achievementId: 'CgkIkbvdu8ASEAIQAw',
      score: 2_000,
    },
    {
      achievementId: 'CgkIkbvdu8ASEAIQBA',
      score: 4_000,
    },
    {
      achievementId: 'CgkIkbvdu8ASEAIQBQ',
      score: 6_000,
    },
    {
      achievementId: 'CgkIkbvdu8ASEAIQBg',
      score: 8_000,
    },
    {
      achievementId: 'CgkIkbvdu8ASEAIQBw',
      score: 10_000,
    },
    {
      achievementId: 'CgkIkbvdu8ASEAIQCA',
      score: 20_000,
    }
  ],

  defaultLeaderboard: {
    leaderboardId: 'CgkIkbvdu8ASEAIQCQ'
  },


};

export class AchievementsPlugin extends Phaser.Plugins.BasePlugin {
  private scoreAchievementsState = gameServicesConstants.scoreAchievements
    .map(achievementData => ({ ...achievementData, locked: true }));

  public checkScoreAchievementsState(scoreToCheck: number) {
    this.scoreAchievementsState
      .filter(allowLockedAndReachedScores(scoreToCheck))
      .forEach(unlockScoreAchievement());
  }

  constructor(pluginManager: Phaser.Plugins.PluginManager) {
    super(pluginManager);
  }
}

export const AchievementsGlobalPlugin: Phaser.Types.Plugins.GlobalPlugin = {
  key: AchievementsPlugin.name,
  plugin: AchievementsPlugin,
  active: true,
  mapping: 'achievements',
} as const;

const allowLockedAndReachedScores =
  (scoreToCheck: number) =>
    (scoreAchievement: ScoreAchievementState) =>
      scoreAchievement.score <= scoreToCheck
      && scoreAchievement.locked;

const unlockScoreAchievement =
  () =>
    (scoreAchievement: ScoreAchievementState) => {
      const { achievementId } = scoreAchievement;
      GameServices.unlockAchievement({ achievementId });
      scoreAchievement.locked = false;
    };
