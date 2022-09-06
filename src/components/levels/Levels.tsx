import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CwcLevelsElement } from "../../cwc-elements-interfaces";

import "./Levels.css";

const LEVELS_DEFINITIONS = [
  { tooltip: "Tooltip for level 1" },
  { tooltip: "Tooltip for level 2" },
  { tooltip: "Tooltip for level 3" },
  { tooltip: "Tooltip for level 4" },
  { tooltip: "Tooltip for level 5" },
];

const LEVELS_DEFINITIONS_JSON = JSON.stringify(LEVELS_DEFINITIONS);

function Levels() {
  return (
    <div className="wrapper levels-page">
      <h1>Levels</h1>

      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <SectionAllLevels />
        <SectionNightMode />
      </div>

      <SectionResponsive />

      <SectionDynamic />

      <SectionForDevs />

      <p style={{ marginTop: "var(--big-gap)" }}>
        <Link className="btn btn-primary" to="/" style={{ width: "106px" }}>
          Back
        </Link>
      </p>
    </div>
  );
}

// this sections uses attributes to set the data
function SectionAllLevels() {
  return (
    <section className="samples">
      <h1>All levels</h1>
      <cwc-levels levels={LEVELS_DEFINITIONS_JSON} currentlevel={0}></cwc-levels>
      <cwc-levels levels={LEVELS_DEFINITIONS_JSON} currentlevel={1}></cwc-levels>
      <cwc-levels levels={LEVELS_DEFINITIONS_JSON} currentlevel={2}></cwc-levels>
      <cwc-levels levels={LEVELS_DEFINITIONS_JSON} currentlevel={3}></cwc-levels>
      <cwc-levels levels={LEVELS_DEFINITIONS_JSON} currentlevel={4}></cwc-levels>
    </section>
  );
}

// this sections uses methods to set the data
function SectionNightMode() {
  const levels1Ref = useRef<CwcLevelsElement>(null);
  const levels2Ref = useRef<CwcLevelsElement>(null);
  const levels3Ref = useRef<CwcLevelsElement>(null);
  const levels4Ref = useRef<CwcLevelsElement>(null);
  const levels5Ref = useRef<CwcLevelsElement>(null);

  const levelsDefinitions = [
    { tooltip: "Tooltip for level 1" },
    { tooltip: "Tooltip for level 2" },
    { tooltip: "Tooltip for level 3" },
    { tooltip: "Tooltip for level 4" },
    { tooltip: "Tooltip for level 5" },
  ];

  useEffect(() => {
    if (levels1Ref.current) {
      levels1Ref.current._setLevels(levelsDefinitions);
      levels1Ref.current._setCurrentLevel(0);
    }
    if (levels2Ref.current) {
      levels2Ref.current._setLevels(levelsDefinitions);
      levels2Ref.current._setCurrentLevel(1);
    }
    if (levels3Ref.current) {
      levels3Ref.current._setLevels(levelsDefinitions);
      levels3Ref.current._setCurrentLevel(2);
    }
    if (levels4Ref.current) {
      levels4Ref.current._setLevels(levelsDefinitions);
      levels4Ref.current._setCurrentLevel(3);
    }
    if (levels5Ref.current) {
      levels5Ref.current._setLevels(levelsDefinitions);
      levels5Ref.current._setCurrentLevel(4);
    }
  });

  return (
    <section className="samples samples-nightmode">
      <h1>Nightmode</h1>
      <cwc-levels ref={levels1Ref}></cwc-levels>
      <cwc-levels ref={levels2Ref}></cwc-levels>
      <cwc-levels ref={levels3Ref}></cwc-levels>
      <cwc-levels ref={levels4Ref}></cwc-levels>
      <cwc-levels ref={levels5Ref}></cwc-levels>
    </section>
  );
}

function SectionResponsive() {
  return (
    <section className="samples samples-resizable">
      <h1>Responsive</h1>
      <p>This container is resizable.</p>
      <cwc-levels
        levels={LEVELS_DEFINITIONS_JSON}
        currentlevel={0}
      ></cwc-levels>
      <cwc-levels
        levels={LEVELS_DEFINITIONS_JSON}
        currentlevel={1}
      ></cwc-levels>
      <cwc-levels
        levels={LEVELS_DEFINITIONS_JSON}
        currentlevel={2}
      ></cwc-levels>
      <cwc-levels
        levels={LEVELS_DEFINITIONS_JSON}
        currentlevel={3}
      ></cwc-levels>
      <cwc-levels
        levels={LEVELS_DEFINITIONS_JSON}
        currentlevel={4}
      ></cwc-levels>
    </section>
  );
}

function SectionDynamic() {
  const levelsRef = useRef<CwcLevelsElement>(null);

  const decLevel = () => {
    if (levelsRef.current && levelsRef.current._currentLevel > 0) {
      levelsRef.current._setCurrentLevel(levelsRef.current._currentLevel - 1);
    }
  };

  const incLevel = () => {
    if (
      levelsRef.current &&
      levelsRef.current._currentLevel < levelsRef.current._levels.length - 1
    ) {
      levelsRef.current._setCurrentLevel(levelsRef.current._currentLevel + 1);
    }
  };

  const setLevel = (newLevel: number) => {
    if (levelsRef.current) {
      levelsRef.current._setCurrentLevel(newLevel);
    }
  };

  return (
    <section className="samples">
      <h1>Dynamic</h1>

      <cwc-levels
        ref={levelsRef}
        levels={LEVELS_DEFINITIONS_JSON}
        currentlevel={0}
      ></cwc-levels>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <button style={{ flex: "1" }} onClick={() => decLevel()}>
          ←
        </button>
        <button style={{ flex: "1" }} onClick={() => setLevel(0)}>
          1
        </button>
        <button style={{ flex: "1" }} onClick={() => setLevel(1)}>
          2
        </button>
        <button style={{ flex: "1" }} onClick={() => setLevel(2)}>
          3
        </button>
        <button style={{ flex: "1" }} onClick={() => setLevel(3)}>
          4
        </button>
        <button style={{ flex: "1" }} onClick={() => setLevel(4)}>
          5
        </button>
        <button style={{ flex: "1" }} onClick={() => incLevel()}>
          →
        </button>
      </div>
    </section>
  );
}

function SectionForDevs() {
  return (
    <section>
      <h1>For developers</h1>

      Data can be set using attributes or functions:

      <h2>Using attributes (React)</h2>
      <pre>
        {`const LEVELS = [
  { tooltip: "Tooltip for level 1" },
  { tooltip: "Tooltip for level 2" },
  { tooltip: "Tooltip for level 3" },
  { tooltip: "Tooltip for level 4" },
  { tooltip: "Tooltip for level 5" },
]

<cc-levels levels={JSON.stringify(LEVELS)} currentlevel={0}></cc-levels>`}
      </pre>

      <h2>Using methods (React)</h2>
      <pre>
        {`const levelsRef = useRef(null)

useEffect(() => {
  if (levelsRef.current) {
    levelsRef.current._setLevels([
      { tooltip: "Tooltip for level 1" },
      { tooltip: "Tooltip for level 2" },
      { tooltip: "Tooltip for level 3" },
      { tooltip: "Tooltip for level 4" },
      { tooltip: "Tooltip for level 5" },
    ])
    levelsRef.current._setCurrentLevel(1)
  }
})

return <cc-levels ref={levelsRef}></cc-levels>`}
      </pre>

      <h2>Using attributes (Vanilla JS)</h2>
      <pre>
        {`<cc-levels levels currentlevel="0"></cc-levels>

querySelector("cc-levels").setAttribute("levels", JSON.stringify([
  { tooltip: "Tooltip for level 1" },
  { tooltip: "Tooltip for level 2" },
  { tooltip: "Tooltip for level 3" },
  { tooltip: "Tooltip for level 4" },
  { tooltip: "Tooltip for level 5" },
]))`}
      </pre>

      <h2>Using methods (Vanilla JS)</h2>
      <pre>
        {`<cc-levels></cc-levels>

querySelector("cc-levels")._setLevels([
  { tooltip: "Tooltip for level 1" },
  { tooltip: "Tooltip for level 2" },
  { tooltip: "Tooltip for level 3" },
  { tooltip: "Tooltip for level 4" },
  { tooltip: "Tooltip for level 5" },
])
querySelector("cc-levels")._setCurrentLevel(1)`}
      </pre>
    </section>
  );
}

export default Levels;
