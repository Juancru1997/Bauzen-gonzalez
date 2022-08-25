
import carousel from "./carousel.css";

function Carousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" href="../asest/botellasgolden.jpg" alt="Golden"/>
        <Carousel.Caption>
          <h3>Golden</h3>
          <p>
            Es una cerveza que nos brinda mucha frescura y suavidad a nuestro
            paladar
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../asest/IPA.jpg"
          alt="IPA"
        />

        <Carousel.Caption>
          <h3>IPA</h3>
          <p>Indian Pale Ale es una cerveza rubia amarga con fuertes tenores del lupulo cascade, dejando un leve sabor frutado en nuestro paladar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../asest/scotish.jpg"
          alt="Scottish"
        />

        <Carousel.Caption>
          <h3>Scottish</h3>
          <p>
            Scottish es una cerveza roja con leves aspectos a caramelo y cafe, es una cerveza suave y facil de tomar.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel;
