import React, {useState} from 'react';
import ReactMapGL, {setRTLTextPlugin, Marker} from 'react-map-gl';
import './style.scss';
import PinIcon from './PinIcon';

setRTLTextPlugin(
  'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
  null,
  true
);

const Map = props => {
  const [viewport, setViewport] = useState({
    width: 842,
    height: 949,
    latitude: 33.56410448598663,
    longitude: -7.611969562464388,
    zoom: 11.52193067112324
  });

  const offsetLeft = () => {
    if(props.breakpoint === 'lg' || props.breakpoint === 'xs'){
      return -500
    }
    if(props.breakpoint === 768){
      return -500
    }
    else {
      return -19
    }
  }

  const offsetTop = () => {
    if(props.breakpoint === 'lg'){
      return 300;
    }
    if(props.breakpoint === 768 ){
      return 200;
    }
    if(props.breakpoint === 'xs'){
      return 100;
    }
    else {
      return -37
    }
  }

  console.log(props.breakpoint)

  return (
    <div className="mapBackground" style={{ height: props.backgroundHeight + 20 }}>
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
          offsetLeft={offsetLeft()}
          offsetTop={offsetTop()}
        >
          <PinIcon size={75} color="#FB1172" />
        </Marker>
      </ReactMapGL>
    </div>
  )
}

export default Map;