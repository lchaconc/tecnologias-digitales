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
    <div key={item.id} className="row">
      <div
        role="button"
        onClick={() => toggleCaption(item.id)}
        className={`col-12 alert ${item.className}`}
      >
        <strong>
          <h4> {item.title} </h4>
        </strong>
        {itemStates[item.id] &&
          item.caption.map((p, i) => <p key={"p" + i}> {p} </p>)}
      </div>
    </div>
  ));
}
