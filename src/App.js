import React from 'react';
import './App.css';
import Map from './components/Map';

export default function App() {
  const handleClickNewPosition = (latlng) => {
    console.log(latlng);
  }

  return <Map onClickPosition={handleClickNewPosition} />;
}
