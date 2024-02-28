import { Link } from "react-router-dom";

const medicalHousingData = [
  {
    id: 1,
    name: "Announcing partnership with NOVA SCOTIA, IPOANS and medshousing.com",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/410-307-0-62-2400-1875-87557ab3d24d3bed9dbbd663a54c7900c17339a58cf7ab1cd/20240209112418-ipoans-ns-and-mh-logo.jpeg",
    more: "Read More",
  },
  {
    id: 2,
    name: "Housing For Healthcare partnerships",
    imageUrl:
      "https://www.medshousing.com/fichiersUploadOpt/410-307-207-0-1063-831-1a3518b21a409a4ffb93a2315710fe407f4639c7891a43a96/20240208192105-housing-for-healthcare-partnerships-feb-8-2024-1.jpg",
    more: "Read More",
  },

  {
    id: 3,
    title: "What is MedsHousing?",
    click: "Short clip to show the medshousing.com advantage",
  },
];
const BlogFooter = () => {
  return (
    <div className="HerroSecond">
      {" "}
      <h2>
        <strong style={{ color: "black" }}>Blog</strong>{" "}
      </h2>
      <a href="/blogpath" className="float-link" id="btn_map">
        See all →
      </a>
      <div className="Blog" style={{ position: "relative", left: "50px" }}>
        {medicalHousingData.map((housing) => (
          <div key={housing.id} className="">
            <img
              src={housing.imageUrl}
              alt={housing.name}
              style={{
                width: "25vw",
              }}
            />
            <div style={{ marginTop: "40px" }}>
              <Link to="/">
                <strong
                  style={{ width: "20vw", position: "relative", top: "30px" }}
                >
                  {housing.name}
                </strong>
              </Link>

              <Link to="/">
                <span>
                  <strong>{housing.title}</strong>
                  <br />
                  {housing.click}
                </span>
              </Link>
            </div>
            <Link to="/">
              {" "}
              <i style={{ position: "relative", right: "72%" }}>Read more</i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
<hr />;
export default BlogFooter;
