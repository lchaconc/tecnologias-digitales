import { useState } from "react";
import commonFiles from "../data/common-files.json";

export default function CommonFiles() {
  return (
    <div className="row animate__animated animate__fadeInLeft">
      {commonFiles.map((item) => (
        <div className="col-6"  key={item.id}>
          <div className="card mt-2">
          <div className="card-header bg-danger">
            <h4> {item.title} </h4>
          </div>
          <div className="card-body">
            <p>{item.caption}</p>            
          </div>
          <div className="card-footer text-center">
          <img className="img-m" src={`./files/${item.fileImg}`} alt="img" />
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}
