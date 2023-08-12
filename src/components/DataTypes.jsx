import { useState } from "react";
import dataTypes from "../data/data-types.json";

export default function DataTypes() {
  const [itemStates, setItemStates] = useState({});

  const toggleCaption = (itemId) => {
    setItemStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

  return dataTypes.map((item) => (
    <div key={item.id} className= {`row alert ${item.className} animate__animated animate__fadeInLeft`} >
      <div
        role="button"
        onClick={() => toggleCaption(item.id)}
        className={`col-8`}
      >
        <strong>
          <h4> {item.title} </h4>
        </strong>
        {itemStates[item.id] &&
          item.caption.map((p, i) => <p key={"p" + i}> {p} </p>)}

     
      </div>
      <div className="col-4 mt-5">
      {itemStates[item.id] && <img 
        className="img-fluid"
        src={`./files/${item.fileImg}`} 
        alt="imagen decriptiva del tema"
        />}
      </div>
    </div>
  ));
}
