import React, { useState, useEffect, useReducer } from "react";
import Modal from 'react-bootstrap/Modal';

function ProfileModal(props) {
    /* === Modal Logic Handling */

    return (
        <>
           <Modal show={ props.showProfile } onHide={ props.handleCloseProfile }>
           <Modal.Header closebutton>
                     <Modal.Title> {props.username} </Modal.Title>
                     </Modal.Header>
                     <Modal.Body> 
                        <div className="nes-field">
                            <label for="name_field">Change name here</label>
                            <input
                            type="text"
                            name="username"
                            className="nes-input"
                            value={props.username}
                            onChange={(e) => props.setUsername(e.target.value)}
                            />
                            You must re-enter your login information.
                        </div>
                     </Modal.Body>
                     <Modal.Footer>
                     <button type="button" className="nes-btn is-warning" onClick={props.handle_edit}>Edit Username</button>    
                     <button type="button" className="nes-btn is-error" onClick={props.handle_delete}>Delete Account</button>
                     </Modal.Footer>
           </Modal>
        </>
       );
};
     
export default ProfileModal;
