import { Link } from "react-router-dom";

const medicalHousingData = [
  {
    id: 1,
    name: "University of Toronto",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/270-216-144-292-826-593-9ff1dce9cec675a898380c2c6c1a132102e0d01c16909c254/20210219055732-uoft-temerty-fac-of-medicine.jpg",
  },
  {
    id: 2,
    name: "University of British Colombia",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/270-216-169-308-782-532-758fca88c98f832dbe1ee83914cb5e268a08407153f0db91d/20201101225046-ubc-medicine.jpg",
  },
  {
    id: 3,
    name: "McMaster University",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/270-216-222-272-738-589-7fcf2d2e16dc19a996a94196d0051b320d23ed2e7c31ab61c/20210219060144-schulich-school-of-medicine-western.jpg",
  },
  {
    id: 4,
    name: "University of Ottawa",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/270-216-187-273-856-617-2c5ee673e3f5164a083b61a7ffa29d1acac132e08748c4747/20210219061900-uottawa-medicine.jpg",
  },
  {
    id: 5,
    name: "University of Calgary",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/270-216-245-250-658-431-87289f9c37707bead224a165a6d655001eab1352fe29df55e/20201101224657-ucalgary.jpg",
  },
  {
    id: 6,
    name: "McGill University ",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/270-216-228-318-686-530-0c81168fbf54bfcdf58dd87349b6c422679cb18916d8cca5b/20210216224313-mcgill-medicine.jpg",
  },
  {
    id: 7,
    name: "University of Alberta",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/270-216-198-308-768-551-cb116d90ec9f001bcf7c2e149b637c2141023242b338f992d/20201101225411-fomdalberta.jpg",
  },
  {
    id: 8,
    name: "University of Manitoba",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/270-216-145-335-892-556-caa9054a3ea419b6b8386cb0391b0c5a0ca07dbc687adbe0e/20210219062511-umanitoba-rady-school-of-medicine.jpg",
  },
  {
    id: 9,
    name: "Suny State University of New York Down State Medical Center Colledge Of Medicine",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/270-216-203-307-740-529-08fc020037701a375e6c060e893b4fa6703a18ccdf32c83a3/20201005141354-suny-downstate-college-of-medicine.jpg",
  },
  {
    id: 10,
    name: "Nosm University (Northern Ontario School of Medicine",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/270-216-388-236-769-679-f6d1b11ccf7389c2a9a69e2a7c821b51742da0398ecd785f0/20230314124856-image-2023-03-14-at-12-48-pm.jpeg",
  },
  {
    id: 11,
    name: "Dalhousie Medical School-Halifax and New Brunswick Campus",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/270-216-370-150-760-642-c40a19b80afd06216a0f791f34f556e0fdab0676cee95a6c3/20201029081123-dalhousie-medicine.jpg",
  },
  {
    id: 12,
    name: "Dalhousie Medical School-Halifax and New Brunswick Campus",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/270-216-370-150-760-642-c40a19b80afd06216a0f791f34f556e0fdab0676cee95a6c3/20201029081123-dalhousie-medicine.jpg",
  },
];

const HerroSecond = () => {
  return (
    <div className="HerroSecond">
      {/* <div > */}
      <h2 style={{ color: "black" }}>
        Popular Medical <strong>Schools</strong>{" "}
      </h2>
      <Link to="/purpular" className="float-link">
        See all →
      </Link>
      {/* </div> */}
      <div className="HerroFooter">
        {medicalHousingData.map((housing) => (
          <div key={housing.id} className="item">
            <img
              src={housing.imageUrl}
              alt={housing.name}
              style={{
                width: "15vw",
                objectFit: "contain",
              }}
            />
            <Link
              to="/"
              className="hover"
              style={{
                width: "12.5vw",
                textAlign: "center",
                marginLeft: "20px",
              }}
            >
              {housing.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HerroSecond;
