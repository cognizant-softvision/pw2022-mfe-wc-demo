import { Link } from "react-router-dom";
import "./Forms.css";

function Forms() {
  return (
    <div className="wrapper">
      <h1>Forms</h1>

      <form>
        <h2>to: Team Carnival</h2>

        <div id="from">
          <label htmlFor="name">from</label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="User name"
          />
        </div>

        <div id="reply">
          <label htmlFor="mail">reply</label>
          <input
            type="email"
            id="mail"
            name="user_email"
            placeholder="User email"
          />
        </div>

        <div id="message">
          <label htmlFor="msg">Your message</label>
          <textarea id="msg" name="user_message"></textarea>
        </div>

        <div className="button">
          <button className="btn btn-primary" type="submit">
            Send message
          </button>
        </div>
      </form>

      <table style={{ backgroundColor: "var(--midnight-blue)" }}></table>

      <p style={{ marginTop: "var(--big-gap)" }}>
        <Link className="btn btn-primary" to="/" style={{ width: "106px" }}>
          Back
        </Link>
      </p>
    </div>
  );
}

export default Forms;
