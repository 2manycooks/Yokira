/* React Basics */
import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
/* Styling */
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "nes.css/css/nes.min.css";
 /* Base UI Components */
 import GameArea from './components/GameArea'
 import NavBar from './components/NavBar';
 import BottomMenu from './components/BottomMenu';
 /* Forms */
 import LoginForm from './components/forms/LoginForm';
 import SignupForm from './components/forms/SignupForm';
 import ProfileEditForm from './components/forms/ProfileEditForm';
/* Modal Components */
import ItemsMenuModal from './components/modals/ItemsMenuModal';
import ProfileModal from './components/modals/ProfileModal';
import LevelUpModal from './components/modals/LevelUpModal';
import PlayerDiedModal from './components/modals/PlayerDied'
/* Enemy Images */
import kitsune from "./images/kitsune.png";
import kappa from "./images/kappa.png";
import oni from "./images/oni.png";
import tengu from "./images/tengu.png";
import tanuki from "./images/tanuki.png"
function App() {
  /* === User CRUD States === */
  const [displayed_form,setDisplayedForm] = useState('');
  const [username, setUsername] = useState('');
  /* === Modal States === */
  const [showItems, setShowItems] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showLevelUp, setShowLevelUp] = useState(false)
  const [showPlayerDied, setShowPlayerDied] = useState(false)
  
  /* === Navbar  Functionality === */

    /* === Modal Functionality === */
    const handleCloseItems = () => setShowItems(false);
    const handleShowItems = () => setShowItems(true);
    const handleCloseProfile = () => setShowProfile(false);
    const handleShowProfile = () => setShowProfile(true);
    const handleCloseLevelUp = () => setShowLevelUp(false);
    const handleShowLevelUp = () => setShowLevelUp(true);
    const handleClosePlayerDied = () => setShowPlayerDied(false);
    const handleShowPlayerDied = () => setShowPlayerDied(true)
    

    /* === PLAYER LOGIC ======================================    */
    const [level,setLevel] = useState(1)
    const [exp, setExp] = useState(0)
    const [hp, setHp] = useState(100)
    const [mp,setMp] = useState(50)
    const [playerMinAtk, setMinAtk] = useState(5)
    const [playerMaxAtk, setMaxAtk] = useState(10)
    const [playerMinDef, setMinDef] = useState(5)
    const [playerMaxDef, setMaxDef] = useState(10)

    /* === Fetching and assigning initial/saved player data */

    const fetchPlayer = () => {
        fetch('http://localhost:8000/player_info', {
        method: 'GET',
        })
        .then(res => res.json())
        .then(json => {
        console.log(json)
        setLevel(json.level)
        setHp(json.hp );
        setMp(json.mp);
        })
      }

    /* === Fetching Equipment inside Backpack === */
    const fetchEquipment = () => {
        fetch('http://localhost:8000/backpack', {
            method: 'GET',
        })
        .then(res=> res.json())
        .then(json => {
            console.log(json)
            if(json.is_equipped ) {
                setMinAtk((playerMinAtk + json.minAtk) + (level * 0.25))
                setMaxAtk((playerMaxAtk + json.maxAtk) + (level * 0.25))
                setMinDef((playerMinDef + json.minDef) + (level * 0.25))
                setMaxDef((playerMaxDef + json.maxDef) + (level * 0.25))
            }
        })
    }

   

    /* =======  ENEMY LOGIC ============================================ */

    const enemy_images = {
      kitsune,
      kappa,
      oni,
      tengu,
      tanuki
  }


  const [enemyLevel,setEnemyLevel] = useState(1)
  const [enemyHp, setEnemyHp] = useState(100)
  const [enemyMinAtk, setEnemyMinAtk] = useState(5)
  const [enemyMaxAtk, setEnemyMaxAtk] = useState(10)
  const [enemyMinDef, setEnemyMinDef] = useState(5)
  const [enemyMaxDef, setEnemyMaxDef] = useState(10)
  const [enemyType, setEnemyType] = useState(null)
  const [enemyDefeated, setEnemyDefeated] = useState(false)



    /* === Combat/Level Up logic === */

    
  const playerAttackDamage = (Math.floor(Math.random() * (playerMaxAtk) + playerMinAtk ))
  const enemyAttackDamage = (Math.floor(Math.random() * (enemyMaxAtk) + enemyMinAtk ))
     

  const attackEnemy = () => {
    console.log("enemy takes " + playerAttackDamage + " damage!")
    setEnemyHp(enemyHp - playerAttackDamage)
  }

  const attackPlayer = () => {
    console.log("enemy attacks player for " + enemyAttackDamage + " damage!")
    setHp(hp - enemyAttackDamage)
  }

  const combatRound = () => {
    attackEnemy()
    attackPlayer()
  }

  useEffect(() => {
      setLevel(level + 1)
      setExp(0)
  }, [exp === 100])

  useEffect(() => {
      setMinAtk((playerMinAtk) + (level * 0.25));
      setMaxAtk((playerMaxAtk) + (level * 0.25));
      setMinDef((playerMinDef) + (level * 0.25));
      setMaxDef((playerMaxDef) + (level * 0.25));
  }, [])

  

  const GameAreaActive = (
    <>
        <NavBar 
            setDisplayedForm={setDisplayedForm}
            handleShowProfile={handleShowProfile}
        />
        <GameArea 
          level = {level}
          setLevel={setLevel}
          exp={exp}
          setExp={setExp}
          hp={hp}
          mp={mp}
          setMp={setMp}
          playerMinAtk={playerMinAtk}
          setMinAtk={setMinAtk}
          playerMaxAtk={playerMaxAtk}
          setMaxAtk={setMaxAtk}
          playerMinDef={playerMinDef}
          setMinDef={setMinDef}
          playerMaxDef={playerMaxDef}
          setMaxDef={setMaxDef}
          showLevelUp={showLevelUp}
          handleCloseLevelUp={handleCloseLevelUp}
          handleShowItems={handleShowItems}
          handleShowLevelUp={handleShowLevelUp}
          showLevelUp={showLevelUp}
          handleCloseLevelUp={handleCloseLevelUp}
          enemyLevel={enemyLevel}
          setEnemyLevel={setEnemyLevel}
          enemyHp={enemyHp}
          setEnemyHp={setEnemyHp}
          enemyMinAtk={enemyMinAtk}
          setEnemyMinAtk={setEnemyMinAtk}
          enemyMaxAtk={enemyMaxAtk}
          setEnemyMaxAtk={setEnemyMaxAtk}
          enemyMinDef={enemyMinDef}
          setEnemyMinDef={setEnemyMinDef}
          enemyMaxDef={enemyMaxDef}
          setEnemyMaxDef={setEnemyMaxDef}
          enemy_images={enemy_images}
          enemyType={enemyType}
          setEnemyType={setEnemyType}
          enemyDefeated={enemyDefeated}
          setEnemyDefeated={setEnemyDefeated}
        />
        <BottomMenu
          level = {level}
          exp={exp}
          hp={hp}
          setHp={setHp}
          mp={mp}
          setMp={setMp}
          playerMinAtk={playerMinAtk}
          playerMaxAtk={playerMaxAtk}
          playerMinDef={playerMinDef}
          playerMaxDef={playerMaxDef}
          showLevelUp={showLevelUp}
          handleCloseLevelUp={handleCloseLevelUp}
          handleShowItems={handleShowItems}
          handleShowLevelUp={handleShowLevelUp}
          playerAttackDamage={playerAttackDamage}
          combatRound={combatRound}
        />
        <ItemsMenuModal
          showItems={showItems}
          handleCloseItems={handleCloseItems}
          setHp={setHp}
        />
        <ProfileModal 
          showProfile={showProfile}
          handleCloseProfile={handleCloseProfile}
          setUsername={setUsername}
          username={username}
        />
        <PlayerDiedModal
          hp={hp}
          setHp={setHp}
          showPlayerDied={showPlayerDied}
          setShowPlayerDied={setShowPlayerDied}
          handleShowPlayerDied={handleShowPlayerDied}
          handleClosePlayerDied={handleClosePlayerDied}
        />
      </>
  )

  const GameAreaInactive = (
    <>
      <NavBar 
            setDisplayedForm={setDisplayedForm}
            handleShowProfile={handleShowProfile}
        />
        <div className="nes-container is-rounded is-dark" id="game-area-inactive">
          <p id="yokira-text">Yokira</p>
          <p id="get-started-text">Log in to begin your journey</p>
        </div>
    </>
  )
  
    /* === App Proper === */

    return (
      <>
        { GameAreaActive }
        
      </>
    );
  }

export default App;








/* APP RENDER BACKUP CODE */

 /* <NavBar 
            logged_in={logged_in}
            setDisplayedForm={setDisplayedForm}
            handle_logout={handle_logout}
            handleShowProfile={handleShowProfile}
            handle_edit={handle_edit}
        />
        {form}
        <GameArea 
          level = {level}
          setLevel={setLevel}
          exp={exp}
          setExp={setExp}
          hp={hp}
          mp={mp}
          playerMinAtk={playerMinAtk}
          setMinAtk={setMinAtk}
          playerMaxAtk={playerMaxAtk}
          setMaxAtk={setMaxAtk}
          playerMinDef={playerMinDef}
          setMinDef={setMinDef}
          playerMaxDef={playerMaxDef}
          setMaxDef={setMaxDef}
          showLevelUp={showLevelUp}
          handleCloseLevelUp={handleCloseLevelUp}
          handleShowItems={handleShowItems}
          handleShowLevelUp={handleShowLevelUp}
          showLevelUp={showLevelUp}
          handleCloseLevelUp={handleCloseLevelUp}
          enemyLevel={enemyLevel}
          enemyHp={enemyHp}
          setEnemyHp={setEnemyHp}
          enemyMinAtk={enemyMinAtk}
          enemyMaxAtk={enemyMaxAtk}
          enemyMinDef={enemyMinDef}
          enemyMaxDef={enemyMaxDef}
          enemy_images={enemy_images}
          enemyType={enemyType}
          enemyDefeated={enemyDefeated}
        />
        <BottomMenu
          level = {level}
          exp={exp}
          hp={hp}
          mp={mp}
          playerMinAtk={playerMinAtk}
          playerMaxAtk={playerMaxAtk}
          playerMinDef={playerMinDef}
          playerMaxDef={playerMaxDef}
          showLevelUp={showLevelUp}
          handleCloseLevelUp={handleCloseLevelUp}
          handleShowItems={handleShowItems}
          handleShowLevelUp={handleShowLevelUp}
          playerAttackDamage={playerAttackDamage}
          combatRound={combatRound}
        />
        <ItemsMenuModal
          showItems={showItems}
          handleCloseItems={handleCloseItems}
        />
        <ProfileModal 
          showProfile={showProfile}
          handleCloseProfile={handleCloseProfile}
          setUsername={setUsername}
          username={username}
          handle_delete={handle_delete}
          handle_edit={handle_edit}
        /> */ 