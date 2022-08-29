import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Projects = () => {
  return(
    <Card style={{ width: '18rem' }} className="card-center">
      <Card.Body>
        <Card.Title>Proyectos creados</Card.Title>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <a href="https://github.com/MilyR/portfolio-react" target="_blank" >portfolio</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://github.com/MilyR/weather-app" target="_blank" >weather-app</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://github.com/MilyR/react-tutorial" target="_blank" >Tic Tac Toe game</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://github.com/MilyR/calculator" target="_blank" >calculadora</a>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default Projects;