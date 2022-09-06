import { Link } from "react-router-dom";
import "./Fonts.css";

const Fonts = () => {
  return (
    <div className="fontsContainer">
      <div className="wrapper">
        <h1>Fonts</h1>

        <p className="detail">Gellix regular</p>
        <p className="regular">
          Almost before we knew it, we had left the <strong>ground</strong>.
        </p>

        <p className="detail">Gellix regular italic</p>
        <p className="regular italic">
          Almost before we knew it, we had left the <strong>ground</strong>.
        </p>

        <p className="detail">Gellix light</p>
        <p className="light">
          Almost before we knew it, we had left the <strong>ground</strong>.
        </p>

        <p className="detail">Gellix light italic</p>
        <p className="light italic">
          Almost before we knew it, we had left the <strong>ground</strong>.
        </p>

        <p className="detail">Gellix semi bold</p>
        <p className="semi-bold">
          Almost before we knew it, we had left the <strong>ground</strong>.
        </p>

        <p className="detail">Gellix semi bold italic</p>
        <p className="semi-bold italic">
          Almost before we knew it, we had left the <strong>ground</strong>.
        </p>

        <div className="containerDark">
          <p className="detail">Gellix regular</p>
          <p className="regular">
            Almost before we knew it, we had left the <strong>ground</strong>.
          </p>

          <p className="detail">Gellix regular italic</p>
          <p className="regular italic">
            Almost before we knew it, we had left the <strong>ground</strong>.
          </p>

          <p className="detail">Gellix light</p>
          <p className="light">
            Almost before we knew it, we had left the <strong>ground</strong>.
          </p>

          <p className="detail">Gellix light italic</p>
          <p className="light italic">
            Almost before we knew it, we had left the <strong>ground</strong>.
          </p>

          <p className="detail">Gellix semi bold</p>
          <p className="semi-bold">
            Almost before we knew it, we had left the <strong>ground</strong>.
          </p>

          <p className="detail">Gellix semi bold italic</p>
          <p className="semi-bold italic">
            Almost before we knew it, we had left the <strong>ground</strong>.
          </p>
        </div>

        <div className="dark-blue containerDarkBlue">
          <p className="detail white">Gellix regular</p>
          <p className="regular">
            Almost before we knew it, we had left the <strong>ground</strong>.
          </p>

          <p className="detail white">Gellix regular italic</p>
          <p className="regular italic">
            Almost before we knew it, we had left the <strong>ground</strong>.
          </p>

          <p className="detail">Gellix light</p>
          <p className="light">
            Almost before we knew it, we had left the <strong>ground</strong>.
          </p>

          <p className="detail white">Gellix light italic</p>
          <p className="light italic">
            Almost before we knew it, we had left the <strong>ground</strong>.
          </p>

          <p className="detail">Gellix semi bold</p>
          <p className="semi-bold">
            Almost before we knew it, we had left the <strong>ground</strong>.
          </p>

          <p className="detail">Gellix semi bold italic</p>
          <p className="semi-bold italic">
            Almost before we knew it, we had left the <strong>ground</strong>.
          </p>
        </div>

        <p style={{ marginTop: "var(--big-gap)" }}>
          <Link className="btn btn-primary" to="/" style={{ width: "106px" }}>
            Back
          </Link>
        </p>
        
      </div>
    </div>
  );
};
export default Fonts;

