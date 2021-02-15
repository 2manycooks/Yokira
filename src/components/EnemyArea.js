import React, { useEffect, useState } from "react";


function EnemyArea(props) {

    
    return(
        <div id="enemy-area">
            <img id="enemy-image" src= { props.enemy_images[props.enemyType] } />
        </div>
    )
}

export default EnemyArea;