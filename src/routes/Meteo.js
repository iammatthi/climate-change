import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useWeatherApi from '../hooks/useWeatherApi'
import Map from '../components/Map';
import ViewData from '../components/ViewData';

import cities from "../data/cities";
import TableEmbed from '../components/TableauEmbed';



export default function Meteo() {
  const [weatherData, setWeatherData] = useWeatherApi()
  const [city, setCity] = useState(cities[0])

  const handleClickMarker = (newCity) => {
    setCity(newCity);

    if (!weatherData.isLoading)
      setWeatherData({ ...weatherData, latlng: newCity.position })
  }

  return (
    <Container>
      <Row style={{ minHeight: "75vh" }}>
        <Col lg={8} className="justify-content-center">
          <Map onClickMarker={handleClickMarker} />
        </Col>
        <Col lg={4} className="justify-content-center">
          <ViewData city={city} weatherData={weatherData} />
        </Col>
      </Row>
      {city.graphs.map((graph) => {
        return (
          <Row key={graph}>
            <Col>
              <TableEmbed url={graph}/>
            </Col>
          </Row>
        )
      })}
    </Container>
  );
}
