import InfoCard from "../components/infoCard";
import DetailsCard from "../components/detailsCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <div className="card-center home">
      <InfoCard />

      <Container>
        <Row>
          <Col>
            <DetailsCard
              title="Proyectos realizados"
              text="Una calculadora, un juego de ta te ti, una aplicacion que muestra el clima y por supuesto esta app que muestra mi portfolio"
            />
          </Col>
          <Col>
            <DetailsCard
              title="Tecnologías que manejo"
              text="Html CSS Javascript y React con Boostrap React router dom y algunos pluguines más"
            />
          </Col>
          <Col>
            <DetailsCard
              title="Cursos realizados"
              text="Estoy finalizando Argentina programa, un curso de Egg, varios cursos de Udemy y un curso de oracle"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
