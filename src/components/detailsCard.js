import Card from 'react-bootstrap/Card';

const DetailsCard = ({header, title, text}) => {
  return (
    <>
      <Card
        bg="dark"
        text="white"
        style={{ width: '18rem' }}
        className="mb-2"
      >
        {header && <Card.Header>{header}</Card.Header>}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default DetailsCard;
