import { IonPage, IonItem, useIonViewDidEnter } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import Phaser from 'phaser';
import './Home.css';
import { gameInstanceInit } from '../phaser/GameInstance';

const Home: React.FC = () => {

  let [gameInstance, setGameInstace] = useState(null);

  useIonViewDidEnter(() => {
    setGameInstace(gameInstanceInit());
  });

  // useEffect(()=>setGameInstace(gameInstanceInit()), [])

  return (
    <IonPage>
      <div id="game-main">
      </div>
    </IonPage>
  );
};

export default Home;
