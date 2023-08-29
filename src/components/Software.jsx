import { Fragment, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import software from "../data/software.json";

export default function Software() {
  const [itemStates, setItemStates] = useState({});

  const toggleCaption = (itemId) => {
    setItemStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

  return (
    <div className="row animate__animated  animate__bounceInUp">
      <Carousel interval={null}>
        {software.map((item) => (
          <Carousel.Item key={item.id}>          
                
              <div className="card col-md-8 offset-md-2 mt-4 mb-5">
                <div className="card-header">
                  <h3>{item.title} </h3>
                </div>
                <div className="card-body">
                  <p> {item.caption} </p>
                <p className="text-center" >
                <button
                    className="btn btn-outline-info"
                    onClick={() => toggleCaption(item.id)}
                  >
                    👁️
                  </button>
                </p>
                </div>
                {itemStates[item.id] && (
                  <div className="card-footer">
                    <strong>Ejemplos:</strong>
                    <ul>
                      {item.examples.map((example, i) => (
                        <li key={i}> {example} </li>
                      ))}
                    </ul>
                    <strong>Consejos:</strong> {item.usageTips}
                    <hr />
                    <img 
                    className="img-fluid"
                    src={`./software/${item.fileImg}`} alt="miniatura"/>

                  </div>
                  
                )}
              </div>
            
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
