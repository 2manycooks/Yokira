import React, { useState, useEffect } from "react";
import samurai from "../images/samurai.gif"
import LevelUpModal from "./modals/LevelUpModal"


function PlayerArea(props) {
 
    
    return(
        <>
            <div id="player-area">
                <img id="player-image" src= { samurai } />
            </div>
            <LevelUpModal
                level = {props.level}
                exp={props.exp}
                hp={props.hp}
                mp={props.mp}
                playerMinAtk={props.playerMinAtk}
                playerMaxAtk={props.playerMaxAtk}
                playerMinDef={props.playerMinDef}
                playerMaxDef={props.playerMaxDef}
                showLevelUp={props.showLevelUp}
                handleCloseLevelUp={props.handleCloseLevelUp}
            />
        </>
    )
}

export default PlayerArea;