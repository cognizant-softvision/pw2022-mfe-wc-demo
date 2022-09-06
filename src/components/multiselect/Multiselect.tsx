import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CwcMultiselectElement,
  CwcMultiselectItemElement,
} from "../../cwc-elements-interfaces";

import "./Multiselect.css";

function Multiselect() {
  return (
    <div className="multiselect-wrapper">
      <h1>Multiselect</h1>

      <SectionStyles />

      <SectionOptionsWithHtml />

      <SectionForDevs />

      <p style={{ marginTop: "var(--big-gap)" }}>
        <Link className="btn btn-primary" to="/" style={{ width: "106px" }}>
          Back
        </Link>
      </p>
    </div>
  );
}

function SectionStyles() {
  return (
    <section>
      <h1>Styles</h1>

      <div style={{ display: "flex", flexDirection: "row", gap: "20px"  }}>
        <div className="multiselect-samples">
          <cwc-multiselect>
            <span slot="label">Normal</span>
            <cwc-multiselect-item name="red">Red</cwc-multiselect-item>
            <cwc-multiselect-item name="green">Green</cwc-multiselect-item>
            <cwc-multiselect-item name="blue">Blue</cwc-multiselect-item>
          </cwc-multiselect>

          <cwc-multiselect required>
            <span slot="label">Required</span>
            <cwc-multiselect-item name="red">Red</cwc-multiselect-item>
            <cwc-multiselect-item name="green">Green</cwc-multiselect-item>
            <cwc-multiselect-item name="blue">Blue</cwc-multiselect-item>
          </cwc-multiselect>

          <cwc-multiselect disabled>
            <span slot="label">Disabled</span>
            <cwc-multiselect-item name="red">Red</cwc-multiselect-item>
            <cwc-multiselect-item name="green">Green</cwc-multiselect-item>
            <cwc-multiselect-item name="blue">Blue</cwc-multiselect-item>
          </cwc-multiselect>
        </div>

        <div className="multiselect-samples multiselect-samples-nightmode">
          <cwc-multiselect nightmode>
            <span slot="label">Normal</span>
            <cwc-multiselect-item nightmode name="red">
              Red
            </cwc-multiselect-item>
            <cwc-multiselect-item nightmode name="green">
              Green
            </cwc-multiselect-item>
            <cwc-multiselect-item nightmode name="blue">
              Blue
            </cwc-multiselect-item>
          </cwc-multiselect>

          <cwc-multiselect nightmode required>
            <span slot="label">Required</span>
            <cwc-multiselect-item nightmode name="red">
              Red
            </cwc-multiselect-item>
            <cwc-multiselect-item nightmode name="green">
              Green
            </cwc-multiselect-item>
            <cwc-multiselect-item nightmode name="blue">
              Blue
            </cwc-multiselect-item>
          </cwc-multiselect>

          <cwc-multiselect nightmode disabled>
            <span slot="label">Disabled</span>
            <cwc-multiselect-item nightmode name="red">
              Red
            </cwc-multiselect-item>
            <cwc-multiselect-item nightmode name="green">
              Green
            </cwc-multiselect-item>
            <cwc-multiselect-item nightmode name="blue">
              Blue
            </cwc-multiselect-item>
          </cwc-multiselect>
        </div>
      </div>

      <p style={{ marginTop: "var(--medium-gap)" }}>
        Nightmode currently set by adding the attribute "nightmode" to each
        component.
      </p>
    </section>
  );
}

function SectionOptionsWithHtml() {
  return (
    <section>
      <h1>Options can contain HTML</h1>

      <div className="multiselect-samples">
        <cwc-multiselect>
          <span slot="label">Normal</span>
          <cwc-multiselect-item name="red">
            <span style={{ color: "red" }}>Red</span>
          </cwc-multiselect-item>
          <cwc-multiselect-item name="green">
            <span
              style={{
                color: "green",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Green
            </span>
          </cwc-multiselect-item>
          <cwc-multiselect-item name="blue">
            <span
              style={{
                color: "blue",
                fontVariant: "small-caps",
                letterSpacing: "0.5em",
              }}
            >
              Blue
            </span>
          </cwc-multiselect-item>
        </cwc-multiselect>
      </div>
    </section>
  );
}

function SectionForDevs() {
  const OPTIONS = [
    { name: "red", label: "Red" },
    { name: "green", label: "Green" },
    { name: "blue", label: "Blue" },
  ];
  const OPTIONS_AS_JSON = JSON.stringify(OPTIONS);
  const OPTIONS_WITH_CALLBACK = [
    {
      name: "red",
      label: "Red",
      onChange(event: { itemElement: CwcMultiselectItemElement }) {
        console.log("Event in object (Red)", event.itemElement._isChecked());
      },
    },
    {
      name: "green",
      label: "Green",
      onChange(event: { itemElement: CwcMultiselectItemElement }) {
        console.log("Event in object (Green)", event.itemElement._isChecked());
      },
    },
    {
      name: "blue",
      label: "Blue",
      onChange(event: { itemElement: CwcMultiselectItemElement }) {
        console.log("Event in object (Blue)", event.itemElement._isChecked());
      },
    },
  ];

  const [required, setRequired] = useState(false);
  const [nightmode, setNightmode] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const refUsingSlotWithEventInParent = useRef<CwcMultiselectElement>(null);
  const refEventInChildrenRed = useRef<CwcMultiselectItemElement>(null);
  const refEventInChildrenGreen = useRef<CwcMultiselectItemElement>(null);
  const refEventInChildrenBlue = useRef<CwcMultiselectItemElement>(null);

  const refUsingJsonWithEventInParent = useRef<CwcMultiselectElement>(null);
  const refUsingObjectWithEventInChildren = useRef<CwcMultiselectElement>(null);
  const refUsingJsonAttributeWithEventInParent =
    useRef<CwcMultiselectElement>(null);

  useEffect(() => {
    refUsingSlotWithEventInParent.current?.addEventListener("change", () => {
      console.log(
        "Event in parent",
        refUsingSlotWithEventInParent.current?._state
      );
    });

    refEventInChildrenRed.current?.addEventListener("change", () => {
      console.log(
        "Event in children (Red)",
        refEventInChildrenRed.current?._isChecked()
      );
    });

    refEventInChildrenGreen.current?.addEventListener("change", () => {
      console.log(
        "Event in children (Green)",
        refEventInChildrenGreen.current?._isChecked()
      );
    });

    refEventInChildrenBlue.current?.addEventListener("change", () => {
      console.log(
        "Event in children (Blue)",
        refEventInChildrenBlue.current?._isChecked()
      );
    });

    refUsingJsonWithEventInParent.current?.addEventListener("change", () => {
      console.log(
        "JSON, event in parent",
        refUsingJsonWithEventInParent.current?._state
      );
    });

    refUsingJsonAttributeWithEventInParent.current?.addEventListener(
      "change",
      () => {
        console.log(
          "JSON attribute, event in parent",
          refUsingJsonAttributeWithEventInParent.current?._state
        );
      }
    );

    refUsingObjectWithEventInChildren.current?._buildChildrenFromJsonObject(
      OPTIONS_WITH_CALLBACK
    );
  });

  return (
    <section>
      <h1>Different usages</h1>

      <p>
        Each alternative manages events and the option list differently. See the
        browser console.
      </p>

      <p>
        They all use the same WebComponent for the options (
        <code>{"<cwc-multiselect-item>"}</code>).
      </p>

      <p>
        They using either <code>{"<slot>"}</code> or the <code>list</code>{" "}
        attribute when they are present. The only difference is how the option
        elements are created.
      </p>

      <p style={{ marginTop: "var(--small-gap)", marginBottom: "var(--small-gap)" }}>
        <label className="multiselect-toggle-label">
          <input
            type="checkbox"
            onChange={(event) => setRequired(event.target.checked)}
          />
          Toggle required
        </label>
        <label className="multiselect-toggle-label">
          <input
            type="checkbox"
            onChange={(event) => setNightmode(event.target.checked)}
          />
          Toggle nightmode
        </label>
        <label className="multiselect-toggle-label">
          <input
            type="checkbox"
            onChange={(event) => setDisabled(event.target.checked)}
          />
          Toggle disabled
        </label>
      </p>

      <div
        className={`multiselect-samples multiselect-samples-wide ${nightmode ? "multiselect-samples-nightmode" : ""
          }`}
      >
        <section>
          <h3>
            Using <code>&lt;slot&gt;</code> with event in parent
          </h3>

          <cwc-multiselect
            ref={refUsingSlotWithEventInParent}
            required={required || undefined}
            nightmode={nightmode || undefined}
            disabled={disabled || undefined}
          >
            <span slot="label">Colors</span>
            <cwc-multiselect-item name="red">Red</cwc-multiselect-item>
            <cwc-multiselect-item name="green">Green</cwc-multiselect-item>
            <cwc-multiselect-item name="blue">Blue</cwc-multiselect-item>
          </cwc-multiselect>

          <p>
            The parent maintains a _state object, with the value of each child.
          </p>
          <p>
            When a child changes, the parent emits a <code>"change"</code>{" "}
            event.
          </p>
        </section>

        <section>
          <h3>
            Using <code>&lt;slot&gt;</code> with event in children
          </h3>

          <cwc-multiselect
            required={required || undefined}
            nightmode={nightmode || undefined}
            disabled={disabled || undefined}
          >
            <span slot="label">Colors</span>
            <cwc-multiselect-item name="red" ref={refEventInChildrenRed}>
              Red
            </cwc-multiselect-item>
            <cwc-multiselect-item name="green" ref={refEventInChildrenGreen}>
              Green
            </cwc-multiselect-item>
            <cwc-multiselect-item name="blue" ref={refEventInChildrenBlue}>
              Blue
            </cwc-multiselect-item>
          </cwc-multiselect>

          <p>
            When a child changes, it emits a <code>"change"</code> event.
          </p>
        </section>

        <section>
          <h3>Using JSON with event in parent</h3>

          <cwc-multiselect
            ref={refUsingJsonWithEventInParent}
            required={required || undefined}
            nightmode={nightmode || undefined}
            disabled={disabled || undefined}
            options={OPTIONS_AS_JSON}
          >
            <span slot="label">Colors</span>
          </cwc-multiselect>

          <p>
            The option list is defined as <code>{"[{ name, label }]"}</code> and
            passed to the parent by Javascript.
          </p>
          <p>
            When an option changes, the parent emits a <code>"change"</code>{" "}
            event.
          </p>
        </section>

        <section>
          <h3>Using an object with event in children</h3>

          <cwc-multiselect
            ref={refUsingObjectWithEventInChildren}
            required={required || undefined}
            nightmode={nightmode || undefined}
            disabled={disabled || undefined}
          >
            <span slot="label">Colors</span>
          </cwc-multiselect>

          <p>
            The option list is defined as{" "}
            <code>{"[{ name, label, onChange }]"}</code> and passed to the
            parent by Javascript.
          </p>
          <p>
            When an option changes, its <code>onChange</code> callback is
            called.
          </p>
        </section>

        <section>
          <h3>Using JSON string attribute</h3>

          <cwc-multiselect
            options={OPTIONS_AS_JSON}
            ref={refUsingJsonAttributeWithEventInParent}
            required={required || undefined}
            nightmode={nightmode || undefined}
            disabled={disabled || undefined}
          >
            <span slot="label">Colors</span>
          </cwc-multiselect>

          <p>
            The option list is defined as <code>{"[{ name, label }]"}</code> and
            passed as string to the parent by attribute.
          </p>
          <p>
            When an option changes, the parent emits a <code>"change"</code>{" "}
            event.
          </p>
        </section>
      </div>
    </section>
  );
}

export default Multiselect;
