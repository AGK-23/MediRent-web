import { Link } from "react-router-dom";

const CopyWrite = () => {
  return (
    <div className="copyWrite" style={{ marginTop: "100px" }}>
      <div
        className="bottom_link"
        style={{ fontSize: "smaller", color: "#85B8D5" }}
      >
        <Link to="#">Mission</Link>
        <Link to="#">Pricing</Link>
        <Link to="#">Add your Property</Link>
        <Link to="#">Faq</Link>
        <Link to="#">Blog</Link>
        <Link to="#">Privacy/GDPR</Link>
        <Link to="#">sITE Map</Link>
      </div>
      <div>
        <span className="copyright">
          {" "}
          © 2024 medirent.com <br />
          Built by{" "}
          <Link
            to="https://www.numerique.ca"
            target="blank"
            id="realisationFooter"
          >
            Numérique.ca
          </Link>
        </span>
      </div>
    </div>
  );
};
export default CopyWrite;
