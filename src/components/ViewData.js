import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function ViewData({ city = {}, weatherData = { data: undefined, isLoading: false, error: null } }) {
  if (weatherData.error) {
    return (
      <Container className="p-3 mx-auto">
        <Row className="text-center">
          <Col className="h3 mb-2 fw-bold">An error occured</Col>
        </Row>
      </Container>
    );
  } else if (weatherData.isLoading) {
    return (
      <Container className="p-3 mx-auto">
        <Row className="text-center">
          <Col className="h3 mb-2 fw-bold">Loading...</Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Card style={{ width: '18rem' , height: '100%'}}>
        <Card.Header as="h3">{city?.name}</Card.Header>
        <Card.Body className="text-center d-flex flex-column align-items-center justify-content-center">
          <Card.Img variant="top" style={{ width: "50%" }} src={`https://openweathermap.org/img/wn/${weatherData.data?.weather[0].icon}@2x.png`} />
          <Card.Text>
            <p className="mb-4 text-capitalize text-center fs-4">{weatherData.data?.weather[0].main}</p>
            <div className="ml-sm-3 ml-md-3 ml-lg-3">
              <div className="my-1">
                <p className="mb-2"><span className="fw-bold">Temperature:</span> {Math.floor(weatherData.data?.main.temp || 0)} °C</p>
              </div>
              <div className="my-1">
                <p className="mb-2"><span className="fw-bold">Air pressure:</span> {weatherData.data?.main.pressure || 0} hPa</p>
              </div>
              <div className="my-1">
                <p className="mb-2"><span className="fw-bold">Humidity:</span> {weatherData.data?.main.humidity || 0} %</p>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}