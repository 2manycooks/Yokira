import React from "react";
import Modal from 'react-bootstrap/Modal';

function ItemsMenuModal(props) {
/* === Modal Handling Logic === */

    const potion = () => {
        props.setHp(100)
    }

  return (
   <>
      <Modal show={ props.showItems } onHide={ props.handleCloseItems }>
      <Modal.Header closebutton>
                <Modal.Title> Backpack </Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <div className="nes-table-repsonsive">
                        <table className="nes-table is-bordered is-centered">
                        <tbody>
                            <tr>
                                <td onClick={potion}> Hi Potion</td>
                                <td> Slot 2</td>
                                <td> Slot 3</td>
                            </tr>
                            <tr>
                                <td> Slot 4</td>
                                <td> Slot 5</td>
                                <td> Slot 6</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </Modal.Body>
      </Modal>
   </>
  );
};



export default ItemsMenuModal;