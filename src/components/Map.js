import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';
import './style.scss';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 842,
    height: 949,
    latitude: 33.56410448598663,
    longitude: -7.611969562464388,
    zoom: 11.52193067112324
  });

  console.log(viewport);

  return (
    <div className="mapBackground">
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken="pk.eyJ1IjoieW91c3NlZnNhbWloIiwiYSI6ImNrNjBpNDN5NjA3cXkzZm54bDB4cThlOWcifQ.OtmhIiTMHdI8zQHxBiZeIA"
        width="100vw"
        height="calc(100vh)"
        mapStyle="mapbox://styles/mapbox/streets-v9"
        // onViewportChange={newViewport => setViewport(newViewport)}
      />
    </div>
  )
}

export default Map;