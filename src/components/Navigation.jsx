import { useRef } from "react";

import Accordion from "react-bootstrap/Accordion";
import views from "../data/views.json";
import { Fragment } from "react";

export default function Navigation(props) {
  const refBtn = useRef([]);

  const handleSelect = (e) => {
    const idCurrent = e.currentTarget.id;
    const name = e.currentTarget.attributes.name.value;    
    props.onClick(idCurrent, name );
    //console.log(refBtn.current);
    //const selectedIndex = refBtn.current.findIndex(ref => ref.id === e.target.id);
    //console.log(selectedIndex);

    refBtn.current.forEach((btn) => {
      //console.log(btn.id);
      //console.log("idCurrent", idCurrent);
      //console.log("btn.id",btn.id);
      if (btn) {
        if (btn.id === idCurrent) {
          //console.log("btn", btn);
          btn.classList.add("btn-selected");
        }
      }
    });
  };

  return (
    <Accordion defaultActiveKey="0">
      {views.map((view, i) => (
        <Accordion.Item eventKey={i} key={"cat" + i}>
          <Accordion.Header> ⭐ {view.cat} </Accordion.Header>
          <Accordion.Body>
            {view.sections.map((section) => (
              <Fragment key={section.id}>
                <span
                  id={section.id}
                  name={section.name}
                  onClick={handleSelect}
                  role="button"
                  className="badge text-bg-dark mb-2 btn-nav"
                  ref={(ref) => refBtn.current.push(ref)}
                >
                  <h6>🔅 {section.title}</h6>
                </span>
                <br />
              </Fragment>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
