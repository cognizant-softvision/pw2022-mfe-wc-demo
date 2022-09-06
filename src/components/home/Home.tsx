import { Link } from "react-router-dom";

import "./Home.css";

/* @ts-ignore */
import cogniLogo from "./csv-white.svg";
/* @ts-ignore */
import maskLogo from "./carnival.svg";

function Home() {
  return (
    <div className="Home">
      <p>
        <img src={maskLogo} alt="wc_demo" />
        <span className="wc_demo">WC Demo</span>
      </p>

      <nav className="design-gallery">
        <Link className="btn btn-primary" to="/colors">
          Colors
        </Link>
        <Link className="btn btn-primary" to="/font-sample">
          Fonts
        </Link>
        <Link className="btn btn-primary" to="/buttons">
          Buttons
        </Link>
        <Link className="btn btn-primary" to="/forms">
          Forms
        </Link>
        <Link className="btn btn-primary" to="/levels">
          Levels
        </Link>
        <Link className="btn btn-primary" to="/multiselect">
          Multiselect
        </Link>
        <Link className="btn btn-primary" to="/login">
          Login
        </Link>
        <Link className="btn btn-primary" to="/stepper">
          Stepper
        </Link>
        <Link className="btn btn-primary" to="/modal">
          Modal
        </Link>
        <Link className="btn btn-primary" to="/flipcard">
          Flipcard
        </Link>

      </nav>

      <p>
        <img src={cogniLogo} alt="Cognizant Softvision" />
      </p>
    </div>
  );
}

export default Home;
