import React from 'react';
import './App.css';
import Map from './components/Map';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const handleClickNewPosition = (latlng) => {
    console.log(latlng);
  }

  return <>
      <div>
        <div className="col-8">
          <Map onClickPosition={handleClickNewPosition} />
        </div>
        <div className="col-4 text-center">
          <h1 className="pt-5">Nome città</h1>
        </div>
      </div>
  </>;
}
