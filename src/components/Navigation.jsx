import Accordion from "react-bootstrap/Accordion";
import views from "../data/views.json";
import { Fragment } from "react";

export default function Navigation(props) {
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
                  onClick={props.onClick}
                  role="button"                  
                  className="badge text-bg-dark mb-2 btn-nav"
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
