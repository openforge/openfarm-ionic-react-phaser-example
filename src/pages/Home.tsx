import { IonPage } from '@ionic/react';
import React from 'react';
import './Home.css';
import { gameInstanceInit } from '../phaser/GameInstance';
import { useEffect } from 'react';
import '@openforge/capacitor-game-services';
import { GameServicesPlugin } from '@openforge/capacitor-game-services';
import { Plugins } from '@capacitor/core';
const GameServices = Plugins.GameServices as GameServicesPlugin;

const Home: React.FC = () => {

  let gameInstance: Phaser.Game | null = null;

  useEffect(() => {
    window.addEventListener('load', () => {
      if(window.innerWidth > 0 && !gameInstance) {
        gameInstance = gameInstanceInit();
        GameServices.signIn();
      }
    });
  });

  return (
    <IonPage>
      <div id="game-main">
      </div>
    </IonPage>
  );
};

export default Home;
