import { FaFacebookMessenger } from "react-icons/fa";
import { Link } from "react-router-dom";

const Messageme = () => {
  return (
    <div className="element">
      <div className="message">
        <Link to="https://web.facebook.com/v2.12/plugins/customer_chat/bubble">
          <FaFacebookMessenger
            className="text-4xl"
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              lineHeight: " 1.28",
            }}
          ></FaFacebookMessenger>
        </Link>
      </div>
    </div>
  );
};

export default Messageme;
