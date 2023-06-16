import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";

const markers = [
  { markerOffset: 1, name: "Brasil - Recife, PE", coordinates: [-34.8813, -8.05428] }
];

export const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [40, 10, 180],
        scale: 1000
      }}
      style={{width: '100%', height: "100%"}}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#da4ea2"
              stroke="#8f1a60"
              filter="drop-shadow(0 0 15px #d1007d) drop-shadow(0 0 50px #d1007d) contrast(2) brightness(2)"

            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="#fff"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            {/* <circle cx="12" cy="10" r="3" /> */}
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={20}
            style={{ fontFamily: "monospace", fontSize: 30, fontWeight: "bold", fill: "#ffffff" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default Map;
