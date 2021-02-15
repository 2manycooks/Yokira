import React, { useState, useEffect } from 'react';
import PlayerArea from './PlayerArea'
import EnemyArea from './EnemyArea'


function GameArea(props) {   

    /* === Fetching and assigning initial/saved player data */
    const fetchEnemy = (data) => {
        
        fetch('http://localhost:8000/enemy_info/', {
        method: 'GET',
        headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json.body)
            const randomIndex = Math.floor(Math.random() * json.length)
            const randomMonster = json[randomIndex]
            console.log(randomMonster);
            props.setEnemyLevel(props.level);
            props.setEnemyHp(props.enemyHp + (props.enemyLevel * 0.25));
            props.setEnemyMinAtk(props.enemyMinAtk + (props.enemyLevel * 0.25));
            props.setEnemyMaxAtk(props.enemyMaxAtk + (props.enemyLevel * 0.25));
            props.setEnemyMinDef(props.enemyMinDef + (props.enemyLevel * 0.25));
            props.setEnemyMaxDef(props.enemyMaxDef + (props.enemyLevel * 0.25));
            props.setEnemyType(randomMonster.enemy_name.toLowerCase())
            props.setEnemyDefeated(false);
        })
      }

      if (props.enemyHp <= 0) {
        props.setEnemyDefeated(true)
        props.setEnemyHp(100)
      }

      useEffect(() => {
          fetchEnemy()
          console.log("Enemy defeated! You have gained 10 exp!")
          props.setExp(props.exp + 5)
          props.setMp(100)
          console.log("getting new enemy")
      }, [props.enemyDefeated === true])
    
    
        /* === WIP: Level Up Mechanics  === */

        /* const addMinAtk = () => {
            props.setMinAtk((props.playerMinAtk) + 1);
        }

        const addMaxAtk = () => {
            props.setMaxAtk((props.playerMaxAtk) + 1);
        } */

    const playerDied = () => {
        <div className="nes-container is-rounded is-dark" id="player-died-screen">
          <p id="you-died-text">You died.</p>
          <p id="player-died-text">Try again?</p>
          <button type="button" className="nes-btn is-primary">Primary</button>
        </div>
    }

    return(
        <>
         
            <div id="game-area">
                <PlayerArea 
                    level={props.level}
                    exp={props.exp}
                    hp={props.hp}
                    mp={props.mp}
                    playerMinAtk={props.playerMinAtk}
                    playerMaxAtk={props.playerMaxAtk}
                    playerMinDef={props.playerMinDef}
                    playerMaxDef={props.playerMaxDef}
                    addMinAtk={props.addMinAtk}
                    addMaxAtk={props.addMaxAtk}
                    showLevelUp={props.showLevelUp}
                    handleCloseLevelUp={props.handleCloseLevelUp}
                />
                <EnemyArea
                    enemy_images={props.enemy_images}
                    enemyType={props.enemyType} 
                />
            </div>
        
        </>
        
    )
    
        

}

export default GameArea;



/* === backup game area */

{/* <div id="game-area">
          <NavBar 
            logged_in={logged_in}
            setDisplayedForm={setDisplayedForm}
            handle_logout={handle_logout}
            handleShowProfile={handleShowProfile}
            handle_edit={handle_edit}
          />
          {form}
          <PlayerArea 
            showLevelUp={showLevelUp}
            handleCloseLevelUp={handleCloseLevelUp}
          />
          <EnemyArea />

        </div> */}