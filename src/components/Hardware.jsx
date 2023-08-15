import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import hardwarePeripherals from "../data/hardware-peripherals.json";

const jsons = {
  hardwarePeripherals,
};

export default function Hardware({ idView }) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("idView", idView);
    setData(jsons[idView]);
  }, [idView]);

  const handleClose = () => setShow(false);

  const handleSelectItem = (e) => {
    const id = e.target.id;
    console.log(id);
    setSelected(data.find((obj) => obj.id === id));
    setShow(true);
  };

  return (
    <>
      <div className="row animate__animated animate__bounceInDown">
        {data &&
          data.map((item) => (
            <div className="col-4" key={item.id}>
              <img
                id={item.id}
                onClick={handleSelectItem}
                className="img-fluid img-thumbnail rounded"
                src={`./hardware/${item.fileImg}`}
                alt={item.alt}
              />
            </div>
          ))}
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        {selected && (
          <>
            <Modal.Header closeButton>
              <Modal.Title> {selected.title} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-8">
                  <p>{selected.caption}</p>
                  <p>                    
                    <span                     
                    className="t-1" > Cuidados para mantenerlo en buen estado: </span> {" "} {selected.care}                    
                  </p>
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid"
                    src={`./hardware/${selected.fileImg}`}
                    alt={selected.alt}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
}
