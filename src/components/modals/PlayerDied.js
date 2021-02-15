import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';

function PlayerDiedModal(props) {
    const [playerDied, setPlayerDied] = useState(false)

    
    /* if(props.hp <=0) {
        props.setHp(100)
        setPlayerDied(true)
    }
    useEffect(() => {
        props.setHp(100)
        setPlayerDied(true)
    }, [props.hp <=0])

    useEffect(() => {
        props.setShowPlayerDied(true)
    }, [playerDied == true]) */


    const resetGame = () => {
        props.setHp(100)
        props.handleClosePlayerDied()
    }

    return(
        <Modal show={props.showPlayerDied} onHide={props.handleClosePlayerDied}>
            <Modal.Title> You Died.</Modal.Title>
            <Modal.Body>
                <h1>Try Again?</h1>
                <button type="button" class="nes-btn is-primary" onClick={resetGame}>Yes</button>
            </Modal.Body>
        </Modal>
    )
}

export default PlayerDiedModal;