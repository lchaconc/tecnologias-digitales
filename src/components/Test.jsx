import { Fragment } from "react";
import testHardware from "../data/test-hardware.json";

export default function Test() {
  return (
    <>
      <div className="row mt-2">
        <div className="col-12">
          <h1>Prueba tu conocimiento</h1>
          <p className="alert alert-success">
            A continuación se te presentan 10 preguntas de selección única, en
            las cuales hay tres opciones incorrectas y una correcta. Debe
            selecionar la opción que considere correcta.
            <br />
            <strong> Este test NO tiene valor para la nota. El fin es para determinar los aprendizajes. </strong>
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12">
          {testHardware.map((item, i ) => (
            <Fragment key={item.id}>
              <p> 
                <strong> {i + 1} - </strong>
                {item.pregunta}</p>                
                    <ul>
                        {item.opciones.map( (opcion, index ) => (
                            <li key={index} > {opcion} </li>
                        ) ) }
                    </ul>                
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
