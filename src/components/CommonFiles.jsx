import { useState } from "react";
import commonFiles from "../data/common-files.json";

export default function CommonFiles() {
  const [itemStates, setItemStates] = useState({});

  const toggleCaption = (itemId) => {
    setItemStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

  return (
    <div className="row animate__animated animate__fadeInLeft">
      {commonFiles.map((item) => (
        <div className="col-6" key={item.id}>
          <div className="card mt-2">
            <div
              role="button"
              className="card-header bg-danger"
              onClick={() => toggleCaption(item.id)}
            >
              <h4> {item.title} </h4>
            </div>

            {itemStates[item.id] && (
              <>
                <div className="card-body animate__animated animate__fadeInDown">
                  <p>{item.caption}</p>
                </div>

                <div className="card-footer text-center animate__animated  animate__zoomIn">
                  <img
                    className="img-m"
                    src={`./files/${item.fileImg}`}
                    alt="img"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
