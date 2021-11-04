import React, {useState, useEffect} from 'react';
import TableEmbed from '../components/TableauEmbed';
import { Container, Row, Col } from 'react-bootstrap';

export default function ClimateChange() {

  useEffect(() => {
    document.title = "World is changing"
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={8} className="justify-content-center">
          Hi
        </Col>
      </Row>
      <Row>
        <TableEmbed url={"https://public.tableau.com/views/WorldTemperaturesHeatmap/WorldTemperaturesHeatmap"}/>
      </Row>
    </Container>
  );
}
