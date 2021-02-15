import React, { useReducer, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'




function LevelUpModal(props) {
    const [statPoint, setStatPoint] = useState(0)

    

    return(
        <Modal show={props.showLevelUp} onHide={props.handleCloseLevelUp}>
            <Modal.Header>
                <Modal.Title> Stat Points: {statPoint}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <h1 onClick={props.addMinAtk}>ATK  +</h1>
               <h1>DEF  +</h1>
               <h1>HP   +</h1>
            </Modal.Body>
            <Modal.Footer>
                <span>Level {props.level}</span>
            </Modal.Footer>
        </Modal>
    )
}

export default LevelUpModal;