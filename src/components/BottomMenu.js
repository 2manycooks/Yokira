import React from "react";

function BottomMenu(props) {

    const Heal = () => {
        props.setHp(props.hp +15)
        props.setMp(props.mp - 10)
    }
    /* ===  App Proper === */

    return(
        <footer id="bottom-menu">
            <section id="button-area">
                <div className="nes-btn" id="attack-btn" onClick={props.combatRound}>
                    <a>Attack</a>
                    <progress className="nes-progress is-success" value={`${props.hp}`}max="100"></progress>
                </div>
                <div className="nes-btn" id="abilities-btn" onClick={Heal}>
                    <a>Heal</a>
                    <progress className="nes-progress is-primary" value={`${props.mp}`} max="100"></progress>
                </div>
                <div className="nes-btn" id="level-btn" onClick={props.handleShowLevelUp}>
                    <a>Level</a>
                    <progress className="nes-progress is-warning" value={`${props.exp}`} max="100"></progress>
                </div>
                <div className="nes-btn" id="items-btn" onClick={props.handleShowItems}>
                    <a>Items</a>
                </div>
            </section>
        </footer>
    )
}

export default BottomMenu;