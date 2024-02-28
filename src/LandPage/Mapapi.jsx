import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import LandingPage from "./LandingPage";
import HerroSecond from "./HerroSecond";
import MarketFooter from "./MarketFooter";
import { Link } from "react-router-dom";
import marker_1 from "../assets/marker_1.png";
import marker_2 from "../assets/marker_2.png";
import marker_3 from "../assets/marker_3.png";

const Mapapi = () => {
  <LandingPage />;
  // Set the initial map center and zoom level
  const mapOptions = {
    center: { lat: 51.5074, lng: -0.1278 }, // London, UK
    zoom: 10,
  };

  // Array of city locations
  const cityLocations = [
    { lat: 51.5074, lng: -0.1278 }, // London, UK
    { lat: 40.7128, lng: -74.006 }, // New York City, USA
    // Add more city locations as needed
  ];

  return (
    <div>
      <LandingPage />
      <div className="featured-medical-housing pl-20 pr-20">
        <Link to="/" className="float-link" id="btn_map">
          View on map →
        </Link>
        <h2>
          Featured Medical <strong style={{ color: "black" }}>Housing</strong>{" "}
        </h2>

        <div className="mt-10">
          <div className="flex gap-2 justify-end">
            <img
              src={marker_1}
              alt="marker"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            Housing
            <img src={marker_2} alt="marker" />
            School
            <img src={marker_3} alt="marker" />
            Hospital
          </div>
          <LoadScript googleMapsApiKey="GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "400px" }}
              zoom={mapOptions.zoom}
              center={mapOptions.center}
            >
              {cityLocations.map((location, index) => (
                <Marker
                  key={index}
                  position={{ lat: location.lat, lng: location.lng }}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      <HerroSecond />
      <MarketFooter />
    </div>
  );
};

export default Mapapi;
