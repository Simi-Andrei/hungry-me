import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Locations } from "../../helpers/Locations";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import classes from "./About.module.css";

const About = () => {
  const [viewport, setViewport] = useState({
    latitude: 44.4307,
    longitude: 26.0279,
    width: "40vw",
    height: "40vh",
    zoom: 13,
  });
  return (
    <div>
      <h4 className={classes.title}>Despre noi</h4>
      <h4 className={classes.subtitle}>
        Mai jos poți afla unde și la ce ora ne gasești
      </h4>
      <div className={classes.page}>
        <div className={classes.left}>
          <h4 className={classes.infoTitle}>Locații:</h4>
          <div className={classes.info}>
            <p>
              <span>Adresa:</span> Șoseaua Virtuții, nr.1, Sector 6, București
            </p>
            <p>Program: L-V: 10:00 - 23:00 S-D: 12:00 - 22:00</p>
          </div>
          <div className={classes.info}>
            <p>
              <span>Adresa:</span> Bd. Timișoara, nr. 26, Sector 6, București
            </p>
            <p>Program: L-V: 10:00 - 23:00 S-D: 12:00 - 22:00</p>
          </div>
          <div className={classes.info}>
            <p>
              <span>Adresa:</span> Bd. Iuliu Maniu, nr. 140, Sector 6, București
            </p>
            <p>Program: L-V: 10:00 - 23:00 S-D: 12:00 - 20:00</p>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.map}>
            <ReactMapGL
              {...viewport}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              onViewportChange={(viewport) => {
                setViewport(viewport);
              }}
            >
              {Locations.map((location) => (
                <Marker
                  key={location.id}
                  latitude={location.latitude}
                  longitude={location.longitude}
                >
                  <div>
                    <LocationOnIcon className={classes.marker} />
                  </div>
                </Marker>
              ))}
            </ReactMapGL>
          </div>
        </div>
      </div>
      <div>
        <p className={classes.about}>
          Cu o vastă experiență în domeniul culinar și o dorință de a satisface
          toți clienții noștri, pregătim dar și gătim cu drag și cu ingrediente
          proaspete toate produsele și ți le livrăm în cel mai rapid timp
          posibil pentru a nu se pierde din aromă și savoare!
        </p>
      </div>
    </div>
  );
};

export default About;
