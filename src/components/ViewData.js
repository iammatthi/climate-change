import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ViewData({ weatherData = { data: undefined, isLoading: false, error: null } }) {
  console.log(weatherData.data);
  if (weatherData.error) {
    return (
      <Container className="p-3 mx-auto text-center">
        <Row>
          <Col className="h3 mb-2 font-weight-bold">An error occured</Col>
        </Row>
      </Container>
    );
  } else if (weatherData.isLoading) {
    return (
      <Container className="p-3 mx-auto text-center">
        <Row>
          <Col className="h3 mb-2 font-weight-bold">Loading...</Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="p-3 mx-auto text-center">
        <Row>
          <Col className="h3 mb-2 font-weight-bold">{weatherData.data?.name}</Col>
        </Row>
        <Row>
          <Col>
            <img src={`https://openweathermap.org/img/wn/${weatherData.data?.weather[0].icon}@2x.png`} />
            <p className="my-2 text-center text-capitalize larger-font">{weatherData.data?.weather[0].main}</p>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <p className="my-2">
              <span className="h3">{Math.floor(weatherData.data?.main.temp || 0)} °C</span>
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}