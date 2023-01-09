import React from "react";
import "./Map.css";

export const Map = () => {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="map"
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
