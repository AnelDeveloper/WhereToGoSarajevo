import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import useStyles from './styles.js';

const GMap = () => {
  const isMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const cordinates = { lat: 0 , lng: 0 };


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCEnfefOrAZ0Z2q9NW-pAhmf0pofyog5jU'}}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >
      </GoogleMapReact>
    </div>
  );
};

export default GMap;