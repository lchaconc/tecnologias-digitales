import Accordion from "react-bootstrap/Accordion";
import views from "../data/views.json";


export default function Navigation(props) {
  return (
    <Accordion defaultActiveKey="0">
      {views.map((view, i) => (
        <Accordion.Item eventKey={i} key={"cat" + i}>
          <Accordion.Header> {view.cat} </Accordion.Header>
          <Accordion.Body>
            {view.sections.map((section) => (

              <p 
              id={section.id}
              onClick={props.onClick}
              role="button" 
              key={section.id} 
              className="badge text-bg-info">
                 🔅 {section.title}
              </p >
            ))}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
