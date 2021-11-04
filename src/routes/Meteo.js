import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useWeatherApi from '../hooks/useWeatherApi'
import Map from '../components/Map';
import TableEmbed from '../components/TableauEmbed';
import ViewData from '../components/ViewData';

export default function Meteo() {
  const [weatherData, setWeatherData] = useWeatherApi()

  const handleClickMarker = (city) => {
    console.log(city);

    if (!weatherData.isLoading)
      setWeatherData({ ...weatherData, latlng: city.position })
  }

  return (
    <Container>
      <Row style={{ minHeight: "75vh" }}>
        <Col lg={8} className="justify-content-center">
          <Map onClickMarker={handleClickMarker} />
        </Col>
        <Col lg={4} className="justify-content-center">
          <ViewData weatherData={weatherData} />
        </Col>
      </Row>
      <Row>
        <TableEmbed />
      </Row>
    </Container>
  );
}
