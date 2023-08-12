import Carousel from "react-bootstrap/Carousel";
import computer from "../data/computer.json";

export default function Computer() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>¿Qué es una computadora?</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          Un aparato o dispositivo que procesa información y datos.
        </div>
      </div>
      <div className="row">
        <div className="col-12 animate__animated animate__fadeInLeft">
          <Carousel >
            {computer.map((item) => (
              <Carousel.Item key={item.id} className="text-center" >
                <img
                  className="img-fluid"
                  src= {`./computer/${item.fileImg}`} 
                  alt={item.title}
                />
                <Carousel.Caption className="dark-caption" >
                  <h2> {item.title} </h2>
                  <p> {item.caption} </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
