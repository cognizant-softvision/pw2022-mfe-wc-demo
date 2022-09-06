import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Documentation = () => {
  const [title, setTitle] = useState("Example title")
  const [description, setDescription] = useState("Description example, generally related to project")
  const [prompt, setPrompt] = useState("")

  return (
    <div id="documentation">
      <div className="login-wrapper">
        <section className="section">
          <h1>Using attributes</h1>
          <p>
            You can pass <code>title</code>, <code>prompt</code> and
            <code>description</code> attributes to edit those (or leave them
            blank, which equals to empty string).
          </p>
          <p>
            Further texts could be added, but we recommend using slots for or
            general cases.
          </p>
          <p>
            <b>Use bellow inputs to try it out live!</b>
          </p>
          <div style={{ marginTop: "var(--small-gap)" }}>
            <div className="login-samples">
              <input
                type="text"
                placeholder="title"
                onChange={(event) => setTitle(event.target.value)}
              />
              <input
                type="text"
                placeholder="prompt"
                onChange={(event) => setPrompt(event.target.value)}
              />
              <input
                type="text"
                placeholder="description"
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
        </section>

        <cwc-login
          title={title}
          description={description}
          prompt={prompt}
        >
        </cwc-login>

        <section className="section">
          <h1>Slots</h1>

          <p>
            Alternatively, you can use <code>&lt;slot&gt;</code>
          </p>
          <p>
            For now, there is one slot provided for the logo/title section. Slots
            work by assingning a section of the component to pass down elements
          </p>
          <p>
            For this exapmle, we will pass{" "}
            <code>{`<h1>Sample H1</h1>`}</code> and
            <span style={{ padding: "var(--small-gap)" }}><img
              slot="titleLogo"
              className="sampleImage"
              src="assets/logoCvCreator.svg"
              alt="cv creator logo"
            /></span>
            as slots.
          </p>
          <p>
            The ID for the slot is <b>"titleLogo"</b>
          </p>
          <p>It is passed inside web component as follows </p>
          <p className="levels-page">
            <pre>
{`<cwc-login>
  <h1 slot="titleLogo">Sample H1</h1>
</cwc-login>`}
            </pre>
          </p>
          <p>
            Notice that it can receive n slots, but order passed will be
            preserved.
          </p>
        </section>
        <cwc-login id="" title="" description="" prompt="Sign in">
          <img
            slot="titleLogo"
            style={{ width: "200px" }}
            src="assets/logoCvCreator.svg"
            alt="cv creator logo"
          ></img>
          <h1 slot="titleLogo">Sample H1</h1>
        </cwc-login>
      </div>
    </div>
  );
}

const Login = () => {
  const [displayDocs, setDisplayDocs] = useState(false);

  const onToggleDocs = () => setDisplayDocs(!displayDocs);

  return (
    <>
      <div className="button-container">
        <Link className="btn btn-primary" style={{ width: "200px" }} to="/">
          {" "}
          Back{" "}
        </Link>
        <button className="btn btn-secondary" onClick={onToggleDocs}>
          {displayDocs ? "Login Example" : "Documentation"}
        </button>
      </div>
      {
        displayDocs
          ? <Documentation />
          : <cwc-login></cwc-login>
      }
    </>
  );
};

export default Login;