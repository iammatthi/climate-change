import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    document.title = "Meteo"
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={8} style={{ minHeight: "500px", marginTop: "50px"  }} className="justify-content-center">
          <Map onClickMarker={handleClickMarker} />
        </Col>
        <Col lg={4} style={{ marginTop: "50px" }} className="d-flex align-items-center justify-content-center">
          <ViewData city={city} weatherData={weatherData} />
        </Col>
      </Row>
      {city.graphs.map((graph) => {
        return (
          <Row style={{ marginTop: "50px" }} key={graph}>
            <Col>
              <h2 style={{ paddingBottom: "10px" }}>Graphs</h2>
              <TableEmbed url={graph} />
            </Col>
          </Row>
        )
      })}
    </Container>
  );
}
