import React, { useState, useEffect } from 'react';
import TableEmbed from '../components/TableauEmbed';
import { Container, Row, Col } from 'react-bootstrap';

export default function ClimateChange() {

  useEffect(() => {
    document.title = "Our world is changing"
  }, []);

  return (
    <Container className="fs-6">
      <Row>
        <Col>
          <p>
            Climate Change was really made to raise awareness and this page is a brief presentation of the data we collected, it's especially important for people who have not looked into the subject matter, we hope it will be thought provoking.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <p>
            The first graph we would like to show you is about the swiss median temperature and how even here in the alps, using the most robust measurement, we can clearly see an increase in temperature.
          </p>
          <TableEmbed url={"https://public.tableau.com/views/MedianTemperature_16360444545410/SwissMedianTemperature?:language=en-US"} />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <p>
            This map presents the change in median temperature around the world, as you can see the world is heating up.
          </p>
          <TableEmbed url={"https://public.tableau.com/views/WorldTemperaturesHeatmap/WorldTemperaturesHeatmap?:language=en-US"} />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <p>
            If you'd rather see the same kind of visualization as the first one we showed you, here is the same graph for the world median temperature, we also included the uncertainty of the measurements and a forecast range of where we are headed.
          </p>
          <TableEmbed url={"https://public.tableau.com/views/WorldTemperatureTrend/WorldTemperatureTrend?:language=en-US"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Finally, being a bit thought provoking, we present to you the increase in co2 in the atmosphere, the objective of this page is not to argue for a causation between the two measurements, we would be happy if, after visiting our page, you look into it and decide for yourselves.
          </p>
          <TableEmbed url={"https://public.tableau.com/views/TemperaturevsCo2/TemperatureandCo2SidebySide_?:language=en-US"} />
        </Col>
      </Row>
    </Container>
  );
}
