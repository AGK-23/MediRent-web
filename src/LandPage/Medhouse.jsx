const medicalHousingData = [
  {
    id: 1,
    name: "med",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/400-0-0-0-304-112-84151bd0d96a186864a65621a8f5340ee3536822f8a701af3/20240206132947-novascotia.png",
  },
  {
    id: 2,
    name: "med",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/600-0-0-0-2892-840-168b1a610e6b35865c932c532ad57b1913be459dc8c675820/20240206122319-logoipoans.png",
  },
  {
    id: 3,
    name: "med",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/600-0-0-0-2922-526-ed5a2ad4ca7256d020f1adcb4bc7ce87a701b4a74c429f70c/20230920153545-mahc-logo-vector.png",
  },
  {
    id: 4,
    title: "medicine",
    image:
      "https://www.medshousing.com/fichiersUploadOpt/400-0-0-0-150-165-92d1804f98b0ad6eacb4e8564d1fe194d5821ed13f8896a52/20221108074125-logocfms-femc-thumbnail.jpg",
  },
];
const Medhouse = () => {
  return (
    <div className="Medhousing mt-20">
      <div style={{ textAlign: "center" }}>
        <h2>
          <strong
            style={{ color: "black", fontWeight: "700", fontSize: "1.2em" }}
          >
            medshousing.com
          </strong>
        </h2>
        <span style={{ fontSize: "80%" }}>Is the Proud partner of:</span>
      </div>
      <div className="Medname">
        {medicalHousingData.map((housing) => (
          <div key={housing.id} className="med_img">
            <img
              src={housing.imageUrl}
              alt={housing.name}
              style={{
                width: "15vw",
              }}
            />
            <img style={{ width: "6vw" }} src={housing.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medhouse;
