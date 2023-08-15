import { Fragment, useState } from "react";
import testHardware from "../data/test-hardware.json";



export default function Test() {
    const [answers, setAnswers] = useState({});
    const [hasVerified, setHasVerified] = useState(false);
    const [grade, setGrade] = useState(0);


  const handleSelect = (e) => {
    const opt = e.target.dataset.opt;
    const itemId = e.target.name;
    //console.log(itemId, opt);
    const selected = testHardware.find((obj) => obj.id === itemId);
    //console.log(selected);
    let isCorrect = selected.correct === parseInt(opt);

    setAnswers((prev) => ({
        ...prev,
        [itemId]: isCorrect,
    }));

  
  };


  const handleValidate =()=> {
    setHasVerified(true);
    console.log(answers);
    const points = Object.values(answers).reduce((count, isCorrect) => isCorrect ? count + 1 : count, 0);   
    console.log(points);
    setGrade ( points * 10 )
  }

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
            Una vez seleccionadas las opciones, debe orpimeir el botón
            "Verificar" para que la aplicación le indique cuáles debe corregir y
            le dará un puntaje.
            <br />
            Puede repetir la prueba todas las veces que desee.
            <br />
            <strong>
              Este test NO tiene valor para la nota. El fin es para determinar
              los aprendizajes.{" "}
            </strong>
          </p>
        </div>
      </div>

      <div className="row mt-3 alert alert-secondary">
        {
            grade > 0 && 
            <>
            <strong> Nota obtenida: {grade} </strong>
            {
                grade > 79 ? <span className="text-success"> ¡Felicidades! Tienes una muy buena nota.  </span>  : 
                <span className="text-warning"> ¡Puedes intentarlo de nuevo y mejorar tu nota! </span>
             }
            </>
        }
      </div>

      <div className="row mt-3">
        <div className="col-12">
          {testHardware.map((item, i) => (
            <Fragment key={item.id}>              
              <p className={`mt-4 ${hasVerified ? (answers[item.id] === true ? 'text-success' : 'text-danger') : ''}`}>
                <strong> {i + 1} - </strong>
                {item.pregunta}
              </p>

              {item.opciones.map((opt, index) => (
                <div className="input-group" key={index} data-opt={index}>
                  <div className="input-group-text">
                    <input
                      className="form-check-input mt-0"
                      name={item.id}
                      data-opt={index}
                      onClick={handleSelect}
                      type="radio"
                    />
                  </div>
                  <span className="form-control"> {opt} </span>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 text-end">
          <button className="btn btn-success"
          onClick={handleValidate}
          > Verificar </button>
        </div>
      </div>
    </>
  );
}
