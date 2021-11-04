import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ViewData({ weatherData = { data: undefined, isLoading: false, error: null } }) {
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
      <Container className="p-3 mx-auto">
        <Row className="text-center">
          <Col className="h3 mb-4 fw-bold">{weatherData.data?.name}</Col>
        </Row>
        <Row>
          <Col className="text-center">
            <img src={`https://openweathermap.org/img/wn/${weatherData.data?.weather[0].icon}@2x.png`} />
            <p className="my-2 text-capitalize fs-4">{weatherData.data?.weather[0].main}</p>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
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
          </Col>
        </Row>
      </Container>
    )
  }
}