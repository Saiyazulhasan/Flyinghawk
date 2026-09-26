import { useEffect } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  Circle,
  Polyline,
  Tooltip,
  ZoomControl,
  LayersControl,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "./MineMap.css";


// ===============================
// ICONS
// ===============================

const sensorIcon = L.divIcon({
  className: "custom-map-marker",
  html: `
    <div class="sensor-marker">
      <span></span>
    </div>
  `,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

const gatewayIcon = L.divIcon({
  className: "custom-map-marker",
  html: `
    <div class="gateway-marker">
      G
    </div>
  `,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});


// ===============================
// MAP CENTER
// ===============================

const center = [22.345, 82.675];


// ===============================
// MINE BOUNDARY
// ===============================

const mineBoundary = [
  [22.360, 82.658],
  [22.365, 82.670],
  [22.363, 82.688],
  [22.356, 82.697],
  [22.342, 82.698],
  [22.331, 82.689],
  [22.329, 82.671],
  [22.338, 82.658],
  [22.350, 82.653],
];


// ===============================
// MINE PANELS
// ===============================

const panels = [
  {
    id: "B-05",
    name: "Panel B-05",
    risk: "low",
    positions: [
      [22.350, 82.660],
      [22.357, 82.664],
      [22.354, 82.670],
      [22.347, 82.667],
    ],
  },

  {
    id: "B-06",
    name: "Panel B-06",
    risk: "medium",
    positions: [
      [22.354, 82.671],
      [22.360, 82.676],
      [22.357, 82.683],
      [22.351, 82.679],
    ],
  },

  {
    id: "B-07",
    name: "Panel B-07",
    risk: "high",
    positions: [
      [22.348, 82.676],
      [22.353, 82.681],
      [22.349, 82.688],
      [22.342, 82.684],
      [22.341, 82.678],
    ],
  },

  {
    id: "B-08",
    name: "Panel B-08",
    risk: "low",
    positions: [
      [22.342, 82.663],
      [22.348, 82.669],
      [22.344, 82.675],
      [22.338, 82.670],
    ],
  },

  {
    id: "B-09",
    name: "Panel B-09",
    risk: "low",
    positions: [
      [22.340, 82.687],
      [22.347, 82.692],
      [22.343, 82.696],
      [22.336, 82.691],
    ],
  },
];


// ===============================
// SENSOR NODES
// ===============================

const sensorNodes = [
  {
    id: "S-017",
    position: [22.353, 82.666],
  },
  {
    id: "S-018",
    position: [22.357, 82.674],
  },
  {
    id: "S-019",
    position: [22.350, 82.679],
  },
  {
    id: "S-020",
    position: [22.346, 82.684],
  },
  {
    id: "S-021",
    position: [22.342, 82.672],
  },
  {
    id: "S-022",
    position: [22.339, 82.688],
  },
  {
    id: "S-023",
    position: [22.348, 82.690],
  },
];


// ===============================
// GATEWAYS
// ===============================

const gateways = [
  {
    id: "GW-01",
    position: [22.356, 82.681],
  },
  {
    id: "GW-02",
    position: [22.343, 82.676],
  },
];


// ===============================
// WORKER / VEHICLE ROUTES
// ===============================

const routes = [
  [
    [22.356, 82.681],
    [22.352, 82.677],
    [22.348, 82.680],
    [22.344, 82.676],
  ],

  [
    [22.343, 82.676],
    [22.340, 82.681],
    [22.342, 82.688],
    [22.347, 82.691],
  ],
];


// ===============================
// PANEL COLORS
// ===============================

function getPanelStyle(risk) {
  if (risk === "high") {
    return {
      color: "#d62828",
      weight: 2,
      fillColor: "#ff3b30",
      fillOpacity: 0.30,
    };
  }

  if (risk === "medium") {
    return {
      color: "#e59f00",
      weight: 2,
      fillColor: "#ffc107",
      fillOpacity: 0.25,
    };
  }

  return {
    color: "#2e8b57",
    weight: 2,
    fillColor: "#58c27d",
    fillOpacity: 0.18,
  };
}


// ===============================
// MAP CONTROLLER
// ===============================

function MapController() {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();

      map.fitBounds(mineBoundary, {
        padding: [25, 25],
        maxZoom: 14,
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
}


// ===============================
// MAIN COMPONENT
// ===============================

export default function MineMap() {
  return (
    <div className="mine-map-card">

      {/* ================= HEADER ================= */}

      <div className="map-card-header">

        <div>
          <h3>Mine Map</h3>
          <p>Live spatial monitoring · Korba Underground Mine</p>
        </div>

        <div className="map-status">
          <span className="status-dot"></span>
          LIVE
        </div>

      </div>


      {/* ================= MAP ================= */}

      <div className="map-container">

        <MapContainer
          center={center}
          zoom={13}
          zoomControl={false}
          className="mine-map"
          preferCanvas={true}
          zoomAnimation={false}
          fadeAnimation={false}
          markerZoomAnimation={false}
        >

          {/* IMPORTANT */}
          <MapController />

          {/* Zoom */}
          <ZoomControl position="bottomright" />


          {/* ================= LAYERS ================= */}

         <LayersControl position="topright">

  <LayersControl.BaseLayer
    checked
    name="Street"
  >
    <TileLayer
      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="© OpenStreetMap contributors"
    />
  </LayersControl.BaseLayer>

</LayersControl>


          {/* ================= MINE BOUNDARY ================= */}

          <Polygon
            positions={mineBoundary}
            pathOptions={{
              color: "#ffffff",
              weight: 3,
              fillOpacity: 0.03,
            }}
          >

            <Tooltip sticky>
              Korba Underground Mine
            </Tooltip>

          </Polygon>


          {/* ================= PANELS ================= */}

          {panels.map((panel) => (

            <Polygon
              key={panel.id}
              positions={panel.positions}
              pathOptions={getPanelStyle(panel.risk)}
            >

              <Tooltip sticky>
                <strong>{panel.name}</strong>
                <br />
                Risk: {panel.risk.toUpperCase()}
              </Tooltip>

            </Polygon>

          ))}


          {/* ================= RISK ZONE ================= */}

          <Circle
            center={[22.348, 82.681]}
            radius={450}
            pathOptions={{
              color: "#ff2d2d",
              fillColor: "#ff2d2d",
              fillOpacity: 0.13,
              weight: 2,
              dashArray: "8 6",
            }}
          >

            <Tooltip>
              High Risk Zone · Panel B-07
            </Tooltip>

          </Circle>


          {/* ================= SENSOR NODES ================= */}

          {sensorNodes.map((sensor) => (

            <Marker
              key={sensor.id}
              position={sensor.position}
              icon={sensorIcon}
            >

              <Popup>
                <strong>{sensor.id}</strong>
                <br />
                Sensor Node
                <br />
                Status: Online
              </Popup>

            </Marker>

          ))}


          {/* ================= GATEWAYS ================= */}

          {gateways.map((gateway) => (

            <Marker
              key={gateway.id}
              position={gateway.position}
              icon={gatewayIcon}
            >

              <Popup>
                <strong>{gateway.id}</strong>
                <br />
                LoRa Gateway
                <br />
                Status: Online
              </Popup>

            </Marker>

          ))}


          {/* ================= ROUTES ================= */}

          {routes.map((route, index) => (

            <Polyline
              key={index}
              positions={route}
              pathOptions={{
                color: "#1683ff",
                weight: 3,
                opacity: 0.85,
                dashArray: "7 5",
              }}
            />

          ))}

        </MapContainer>


        {/* ================= MAP LEGEND ================= */}

        <div className="map-legend">

          <div className="legend-title">
            MAP LEGEND
          </div>

          <div className="legend-item">
            <span className="legend-dot sensor"></span>
            Sensor Node
          </div>

          <div className="legend-item">
            <span className="legend-dot gateway"></span>
            Gateway
          </div>

          <div className="legend-item">
            <span className="legend-box low"></span>
            Low Risk
          </div>

          <div className="legend-item">
            <span className="legend-box medium"></span>
            Medium Risk
          </div>

          <div className="legend-item">
            <span className="legend-box high"></span>
            High Risk
          </div>

        </div>

      </div>

    </div>
  );
}