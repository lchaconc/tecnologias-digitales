import { Fragment } from "react";
import software from "../data/software.json";

export default function Software() {
  return (
    <div className="row animate__animated  animate__bounceInUp">
      {software.map((item) => (
        <Fragment>
          <div className="col-6">
            <div className="card mt-2">
                <div className="card-header">
                <h3>{item.title} </h3>
           
                </div>
                <div className="card-body">
                <p> {item.caption} </p>
                </div>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
