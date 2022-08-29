import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Contact = () => {
  return (
    <Card style={{ width: '18rem' }} className="card-center">
      <Card.Body>
        <Card.Title>Informacion de contacto</Card.Title>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <a href="https://www.linkedin.com/in/vane-rodriguez-775026141/" target="_blank" >Linkedin</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://github.com/MilyR" target="_blank" >Github</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Telefono: <a href="tel:+5493813601112">+54 9 3813-601112</a></p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Email: <a href = "mailto: aresrodriguez17@gmail.com">aresrodriguez17@gmail.com</a></p>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Contact;
