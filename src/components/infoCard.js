import Card from 'react-bootstrap/Card';
import img from '../img/vane.png';

const InfoCard = () => {
  return (
    <Card className="infoCard">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Vanesa Rodriguez</Card.Title>
        <Card.Text>
          Soy una programadora que esta dando sus primeros pasos en el mundo del desarrollo web, pero ya tengo algunos proyectos creados
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default InfoCard;
