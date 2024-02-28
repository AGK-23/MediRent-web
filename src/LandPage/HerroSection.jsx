// Dummy data for medical housing
import { FaBath } from "react-icons/fa";
import { RiHotelBedLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
const medicalHousingData = [
  {
    id: 1,
    name: "  1 bedroom fully furnished in Westboro - close to Civic Hospital ",
    location: "Ottawa, Ontario / Ad #04356",
    price: "$1,000.00",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-dd9d3d189ee7f1a5b4512fb522aea9c8f72366f03ea3d9983/20240209122636-private-bedroom.JPG",
    mapImageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-dd9d3d189ee7f1a5b4512fb522aea9c8f72366f03ea3d9983/20240209122636-private-bedroom.JPG",
  },
  {
    id: 2,
    name: "Bath Ocean Front Executive Home Near Duncan/Nanaimo Hospitals",
    location: "Saltair, British Columbia / Ad #04318",
    price: "4,000.00",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-99eee92d35a568eca4d07defd279a42bb4ccacc339a6a8c7e/20240130141915-20210428-162430.jpg",
    mapImageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-99eee92d35a568eca4d07defd279a42bb4ccacc339a6a8c7e/20240130141915-20210428-162430.jpg",
  },
  {
    id: 3,
    name: "Rustic Rowcliffe Studio Loft",
    location: "Kelowna, British / Ad #04321",
    price: "$1,9000.00",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-2bfab8521878f906539af995df03520882bdc37f95c300b5b/20240130165825-img-6499-original.jpeg",
    mapImageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-2bfab8521878f906539af995df03520882bdc37f95c300b5b/20240130165825-img-6499-original.jpeg",
  },
  {
    id: 4,
    name: "Rockland 1 bdrm basement suite close to downtown and Royal Jubilee Hospital",
    location: "Ottawa, Ontario / Ad #04356",
    price: "$1,000.00",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-2bfab8521878f906539af995df03520882bdc37f95c300b5b/20240130165825-img-6499-original.jpeg",
    mapImageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-2bfab8521878f906539af995df03520882bdc37f95c300b5b/20240130165825-img-6499-original.jpeg",
  },
  {
    id: 5,
    name: "medical housing e",
    location: "Ottawa, Ontario / Ad #04356",
    price: "$1,000.00",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9ad8e53cd8f93088e1b6d7176e502b9ff5fc0bf5631767b3e/20240205182109-img-8853.jpeg",
    mapImageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9ad8e53cd8f93088e1b6d7176e502b9ff5fc0bf5631767b3e/20240205182109-img-8853.jpeg",
  },
  {
    id: 6,
    name: "medical housing e",
    location: "Ottawa, Ontario / Ad #04356",
    price: "$1,000.00",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-02939d335131a634c19eb373a9855c44f7180c518d73e14f4/20240206133225-031-36eaglecrestave-full-1.jpg",
    mapImageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-02939d335131a634c19eb373a9855c44f7180c518d73e14f4/20240206133225-031-36eaglecrestave-full-1.jpg",
  },
  {
    id: 7,
    name: "medical housing e",
    location: "Ottawa, Ontario / Ad #04356",
    price: "$1,000.00",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9c28b77d342e26fcac82fd4460ed92bf93b4093874d02af12/20240122114323-13-104-n-van-pelt-st13.jpg",
    mapImageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9c28b77d342e26fcac82fd4460ed92bf93b4093874d02af12/20240122114323-13-104-n-van-pelt-st13.jpg",
  },
  {
    id: 8,
    name: "medical housing e",
    location: "Ottawa, Ontario / Ad #04356",
    price: "$1,000.00",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9c28b77d342e26fcac82fd4460ed92bf93b4093874d02af12/20240122114323-13-104-n-van-pelt-st13.jpg",
    mapImageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9c28b77d342e26fcac82fd4460ed92bf93b4093874d02af12/20240122114323-13-104-n-van-pelt-st13.jpg",
  },
  {
    id: 9,
    name: "medical housing e",
    location: "Ottawa, Ontario / Ad #04356",
    price: "$1,000.00",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9c28b77d342e26fcac82fd4460ed92bf93b4093874d02af12/20240122114323-13-104-n-van-pelt-st13.jpg",
    mapImageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9c28b77d342e26fcac82fd4460ed92bf93b4093874d02af12/20240122114323-13-104-n-van-pelt-st13.jpg",
  },
  {
    id: 10,
    name: "medical housing e",
    location: "Ottawa, Ontario / Ad #04356",
    price: "$1,000.00",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9c28b77d342e26fcac82fd4460ed92bf93b4093874d02af12/20240122114323-13-104-n-van-pelt-st13.jpg",
    mapImageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9c28b77d342e26fcac82fd4460ed92bf93b4093874d02af12/20240122114323-13-104-n-van-pelt-st13.jpg",
  },
  {
    id: 11,
    name: "medical housing e",
    location: "Ottawa, Ontario / Ad #04356",
    price: "$1,000.00",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9c28b77d342e26fcac82fd4460ed92bf93b4093874d02af12/20240122114323-13-104-n-van-pelt-st13.jpg",
    mapImageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9c28b77d342e26fcac82fd4460ed92bf93b4093874d02af12/20240122114323-13-104-n-van-pelt-st13.jpg",
  },
  {
    id: 12,
    name: "medical housing e",
    location: "Ottawa, Ontario / Ad #04356",
    price: "$1,000.00",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9c28b77d342e26fcac82fd4460ed92bf93b4093874d02af12/20240122114323-13-104-n-van-pelt-st13.jpg",
    mapImageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/370-252-9c28b77d342e26fcac82fd4460ed92bf93b4093874d02af12/20240122114323-13-104-n-van-pelt-st13.jpg",
  },
];

const FeaturedMedicalHousing = () => {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };
  return (
    <div className="featured-medical-housing" onClick={toggleMap}>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
      <Link to="/map" className="float-link" id="btn_map">
        View on map →
      </Link>
      <h2>
        Featured Medical <strong style={{ color: "black" }}>Housing</strong>{" "}
      </h2>
      {/* </div> */}

      <div>
        <Link to="/" className="Cards">
          {medicalHousingData.map((housing) => (
            <div key={housing.id} className="Card_split">
              <img
                src={housing.imageUrl}
                alt={housing.name}
                style={{
                  width: "21vw",
                  display: "inline-block",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <div className="option">
                <span style={{}}>
                  <strong
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "18vw",
                      color: "#262626",
                      textAlign: "center",
                      marginLeft: "20px",
                    }}
                  >
                    {housing.name}
                  </strong>
                </span>
                <span style={{ textAlign: "center", marginLeft: "15px" }}>
                  {housing.location}
                </span>
                <span
                  style={{
                    display: "flex",
                    gap: "1em",
                    textAlign: "center",
                    marginLeft: "80px",
                    fontSize: "11px",
                  }}
                >
                  <RiHotelBedLine />1
                  <FaBath />1
                  <span style={{ color: "#1779ba" }}>{housing.price}</span>
                </span>
                {/* <img src={housing.mapImageUrl} alt={`Map for ${housing.name}`} /> */}
              </div>
            </div>
          ))}
        </Link>
      </div>

      {showMap && <div className="map-section">{/* Map section */}</div>}
    </div>
  );
};

export default FeaturedMedicalHousing;
