import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import hardwarePeripherals from "../data/hardware-peripherals.json";

export default function Hardware() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row animate__animated animate__bounceInDown">
        {hardwarePeripherals.map((item) => (
          <div className="col-4" key={item.id}>
            <img
              id={item.id}
              onClick={handleShow}
              className="img-fluid img-thumbnail rounded"
              src={`./hardware/${item.fileImg}`}
              alt={item.alt}
            />
          </div>
        ))}
      </div>

      <Modal 
      size="lg"
      show={show} 
      onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>


        </Modal.Footer>
      </Modal>
    </>
  );
}
