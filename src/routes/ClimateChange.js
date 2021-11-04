import React, { useState, useEffect } from 'react';
import TableEmbed from '../components/TableauEmbed';
import { Container, Row, Col } from 'react-bootstrap';

export default function ClimateChange() {

  useEffect(() => {
    document.title = "World is changing"
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <TableEmbed url={"https://public.tableau.com/views/WorldTemperaturesHeatmap/WorldTemperaturesHeatmap"} />
        </Col>
      </Row>
    </Container>
  );
}
