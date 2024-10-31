import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
const Error = () => {
  const imageSize = {
    height: "500px",
  };
  return (
    <div>
      <div>
        <img
          style={imageSize}
          className="text-center items-center mx-auto"
          src="https://i.ibb.co.com/nRZDHt0/detective-animation-404-error-page.gif"
          alt=""
        />
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="btn btn-outline btn-secondary">
            <FaLongArrowAltLeft className="text-xl font-bold"></FaLongArrowAltLeft>
            <h1>Please-Go-To-Home-Page</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
