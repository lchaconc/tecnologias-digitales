import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Computer from "./components/Computer";
import DataTypes from "./components/DataTypes";
import CommonFiles from "./components/CommonFiles";
import Bienvenidos from "./components/Bienvenidos";
import Hardware from "./components/Hardware";


export default function App() {
  const [current, setCurrent] = useState(null);

  const comps = {
    intro: <Computer />,
    dataTypes: <DataTypes/>,
    commonFiles: <CommonFiles />,
    hardware: <Hardware />
  };

  const handleLoadView = (id, name ) => {    
    console.log("id", id);
    console.log("name", name);
    setCurrent(comps[name]);
  };

  const handleHome = () => {
    setCurrent(<Bienvenidos />);
  };


  return (
    <div className="container">     

      <div className="row mt-4">
        <div className="col-4">
          <h4 role="button" onClick={handleHome}>
            🏠 Navegación:
          </h4>
          <Navigation onClick={handleLoadView} />
        </div>
        <div className="col-8">{current ? current : <Bienvenidos />}</div>
      </div>
    </div>
  );
}
