import { Link } from "react-router-dom";

import "./Buttons.css";

function Buttons() {
  return (
    <div className="wrapper">
      <h1>Buttons</h1>

      <p style={{ marginBottom: "var(--medium-gap)" }}>
        We can use the <em>transition-duration</em> property to determine the
        speed of the <em>hover</em> effect
      </p>

      <table>
        <tr>
          <td>
            <button className="btn btn-primary">Label</button>
          </td>
          <td>
            <button className="btn btn-primary" disabled>
              Label
            </button>
          </td>
          <td>
            <button className="btn btn-primary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.91682 2.9289C-0.972272 6.81799 -0.972272 13.1819 2.91682 17.071C6.8059 20.9601 13.1699 20.9601 17.059 17.071C20.948 13.1819 20.948 6.81799 17.059 2.9289C13.1699 -0.960187 6.8059 -0.960187 2.91682 2.9289ZM14.9376 8.76253V11.2374L11.2253 11.2374V14.9497L8.75045 14.9497V11.2374L5.03814 11.2374V8.76253L8.75045 8.76253V5.05022L11.2253 5.05022V8.76253L14.9376 8.76253Z" />
              </svg>
              Label
            </button>
          </td>
          <td>
            <button className="btn btn-primary" disabled>
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.91682 2.9289C-0.972272 6.81799 -0.972272 13.1819 2.91682 17.071C6.8059 20.9601 13.1699 20.9601 17.059 17.071C20.948 13.1819 20.948 6.81799 17.059 2.9289C13.1699 -0.960187 6.8059 -0.960187 2.91682 2.9289ZM14.9376 8.76253V11.2374L11.2253 11.2374V14.9497L8.75045 14.9497V11.2374L5.03814 11.2374V8.76253L8.75045 8.76253V5.05022L11.2253 5.05022V8.76253L14.9376 8.76253Z" />
              </svg>
              Label
            </button>
          </td>
        </tr>
      </table>

      <table className="dark-background">
        <tr>
          <td>
            <button className="btn btn-primary">Label</button>
          </td>
          <td>
            <button className="btn btn-primary" disabled>
              Label
            </button>
          </td>
          <td>
            <button className="btn btn-primary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.91682 2.9289C-0.972272 6.81799 -0.972272 13.1819 2.91682 17.071C6.8059 20.9601 13.1699 20.9601 17.059 17.071C20.948 13.1819 20.948 6.81799 17.059 2.9289C13.1699 -0.960187 6.8059 -0.960187 2.91682 2.9289ZM14.9376 8.76253V11.2374L11.2253 11.2374V14.9497L8.75045 14.9497V11.2374L5.03814 11.2374V8.76253L8.75045 8.76253V5.05022L11.2253 5.05022V8.76253L14.9376 8.76253Z" />
              </svg>
              Label
            </button>
          </td>
          <td>
            <button className="btn btn-primary" disabled>
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.91682 2.9289C-0.972272 6.81799 -0.972272 13.1819 2.91682 17.071C6.8059 20.9601 13.1699 20.9601 17.059 17.071C20.948 13.1819 20.948 6.81799 17.059 2.9289C13.1699 -0.960187 6.8059 -0.960187 2.91682 2.9289ZM14.9376 8.76253V11.2374L11.2253 11.2374V14.9497L8.75045 14.9497V11.2374L5.03814 11.2374V8.76253L8.75045 8.76253V5.05022L11.2253 5.05022V8.76253L14.9376 8.76253Z" />
              </svg>
              Label
            </button>
          </td>
        </tr>
      </table>

      <table>
        <tr>
          <td>
            <button className="btn btn-secondary">Label</button>
          </td>
          <td>
            <button className="btn btn-secondary" disabled>
              Label
            </button>
          </td>
          <td>
            <button className="btn btn-secondary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.91682 2.9289C-0.972272 6.81799 -0.972272 13.1819 2.91682 17.071C6.8059 20.9601 13.1699 20.9601 17.059 17.071C20.948 13.1819 20.948 6.81799 17.059 2.9289C13.1699 -0.960187 6.8059 -0.960187 2.91682 2.9289ZM14.9376 8.76253V11.2374L11.2253 11.2374V14.9497L8.75045 14.9497V11.2374L5.03814 11.2374V8.76253L8.75045 8.76253V5.05022L11.2253 5.05022V8.76253L14.9376 8.76253Z" />
              </svg>
              Label
            </button>
          </td>
          <td>
            <button className="btn btn-secondary" disabled>
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.91682 2.9289C-0.972272 6.81799 -0.972272 13.1819 2.91682 17.071C6.8059 20.9601 13.1699 20.9601 17.059 17.071C20.948 13.1819 20.948 6.81799 17.059 2.9289C13.1699 -0.960187 6.8059 -0.960187 2.91682 2.9289ZM14.9376 8.76253V11.2374L11.2253 11.2374V14.9497L8.75045 14.9497V11.2374L5.03814 11.2374V8.76253L8.75045 8.76253V5.05022L11.2253 5.05022V8.76253L14.9376 8.76253Z" />
              </svg>
              Label
            </button>
          </td>
        </tr>
      </table>

      <table className="dark-background">
        <tr>
          <td>
            <button className="btn btn-secondary">Label</button>
          </td>
          <td>
            <button className="btn btn-secondary" disabled>
              Label
            </button>
          </td>
          <td>
            <button className="btn btn-secondary">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.91682 2.9289C-0.972272 6.81799 -0.972272 13.1819 2.91682 17.071C6.8059 20.9601 13.1699 20.9601 17.059 17.071C20.948 13.1819 20.948 6.81799 17.059 2.9289C13.1699 -0.960187 6.8059 -0.960187 2.91682 2.9289ZM14.9376 8.76253V11.2374L11.2253 11.2374V14.9497L8.75045 14.9497V11.2374L5.03814 11.2374V8.76253L8.75045 8.76253V5.05022L11.2253 5.05022V8.76253L14.9376 8.76253Z" />
              </svg>
              Label
            </button>
          </td>
          <td>
            <button className="btn btn-secondary" disabled>
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.91682 2.9289C-0.972272 6.81799 -0.972272 13.1819 2.91682 17.071C6.8059 20.9601 13.1699 20.9601 17.059 17.071C20.948 13.1819 20.948 6.81799 17.059 2.9289C13.1699 -0.960187 6.8059 -0.960187 2.91682 2.9289ZM14.9376 8.76253V11.2374L11.2253 11.2374V14.9497L8.75045 14.9497V11.2374L5.03814 11.2374V8.76253L8.75045 8.76253V5.05022L11.2253 5.05022V8.76253L14.9376 8.76253Z" />
              </svg>
              Label
            </button>
          </td>
        </tr>
      </table>

      <table style={{ marginTop: "var(--medium-gap)" }}>
        <tr>
          <td>Dark blue</td>
          <td>
            <div
              className="sample-rectangle"
              style={{ backgroundColor: "var(--dark-blue)" }}
            ></div>
          </td>
          <td>#2F78C4</td>
          <td>--dark-blue</td>
          <td>R 47 G 120 B 196</td>
        </tr>

        <tr>
          <td>Medium blue</td>
          <td>
            <div
              className="sample-rectangle"
              style={{ backgroundColor: "var(--medium-blue)" }}
            ></div>
          </td>
          <td>#6AA2DC</td>
          <td>--medium-blue</td>
          <td>R 106 G 162 B 220</td>
        </tr>

        <tr>
          <td>Light blue</td>
          <td>
            <div
              className="sample-rectangle"
              style={{ backgroundColor: "var(--light-blue)" }}
            ></div>
          </td>
          <td>#92BBE6</td>
          <td>--light-blue</td>
          <td>R 146 G 187 B 230</td>
        </tr>

        <tr style={{ color: "var(--highlight-red)" }}>
          <td>Ultra Light blue</td>
          <td>
            <div
              className="sample-rectangle"
              style={{ backgroundColor: "var(--ultra-light-blue)" }}
            ></div>
          </td>
          <td>#E0EBF6</td>
          <td>--ultra-light-blue</td>
          <td>R 224 G 235 B 246</td>
        </tr>
      </table>

      <h2>Reference from Figma</h2>
      <div>
        <img src="assets/Buttons.svg" alt="Buttons from Figma" />
      </div>

      <p style={{ marginTop: "var(--big-gap)" }}>
        <Link className="btn btn-primary" to="/" style={{ width: "106px" }}>
          Back
        </Link>
      </p>
      
    </div>
  );
}

export default Buttons;
