import React, {useState} from 'react';
import ReactMapGL, {setRTLTextPlugin, Marker} from 'react-map-gl';
import './style.scss';
import PinIcon from './PinIcon';

setRTLTextPlugin(
  'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
  null,
  true
);

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 842,
    height: 949,
    latitude: 33.56410448598663,
    longitude: -7.611969562464388,
    zoom: 11.52193067112324
  });

  // console.log(viewport);
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
      >
        <Marker
          latitude={33.56091663226703}
          longitude={-7.508397137253849}
          offsetLeft={-19}
          offsetTop={-37}
        >
          <PinIcon size={75} color="#FB1172" />
        </Marker>
      </ReactMapGL>
    </div>
  )
}

export default Map;