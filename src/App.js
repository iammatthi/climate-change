import React from 'react';
import useWeatherApi from './hooks/useWeatherApi'
import Map from './components/Map';
import ViewData from './components/ViewData';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [weatherData, setWeatherData] = useWeatherApi()

  const handleClickMarker = (latlng) => {
    console.log(latlng);

    if (!weatherData.isLoading)
      setWeatherData({ ...weatherData, latlng })
  }

  return <>
    <Container>
      <Row>
        <Col lg={8} className="justify-content-center">
          <Map onClickMarker={handleClickMarker} />
        </Col>
        <Col lg={4} className="justify-content-center">
          <ViewData weatherData={weatherData} />
        </Col>
      </Row>
    </Container>
  </>;
}
