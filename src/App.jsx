import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Computer from "./components/Computer";
import Bienvenidos from "./components/Bienvenidos";

export default function App() {
  const [current, setCurrent] = useState(null);

  const comps = {
    intro: <Computer />,
    datos: <h6>Datos</h6>,
  };

  const handleLoadView = (e) => {
    const id = e.target.id;
    console.log(id);
    setCurrent(comps[id]);
  };

  const handleHome = () => {
    setCurrent(<Bienvenidos />);
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-4">
          <h4 role="button" onClick={handleHome}>
            {" "}
            🏠 Navegación:
          </h4>
          <Navigation onClick={handleLoadView} />
        </div>
        <div className="col-8">{current ? current : <Bienvenidos />}</div>
      </div>
    </div>
  );
}
