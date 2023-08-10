import Accordion from "react-bootstrap/Accordion";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import views from "../data/views.json";

export default function Navigation() {
  return (
    <Accordion defaultActiveKey="0">
      {views.map((view, i) => (
        <Accordion.Item eventKey={i} key={"cat" + i}>
          <Accordion.Header> {view.cat} </Accordion.Header>
          <Accordion.Body>            
              {view.sections.map((section) => (                
                <Navbar className="bg-body-tertiary" key={section.id} >
                <Container>
                  <Navbar.Brand href="#">
                  {section.title}
                  </Navbar.Brand>
                </Container>
              </Navbar>

              ))}            
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
