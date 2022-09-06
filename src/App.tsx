import React, { useEffect, useState } from "react";
import { Routes, Route, MemoryRouter } from "react-router-dom";

// import "./App.css";
import Buttons from "./components/buttons/Buttons";
import Colors from "./components/colors/Colors";
import Fonts from "./components/fonts/Fonts";
import Forms from "./components/forms/Forms";
import Home from "./components/home/Home";
import Levels from "./components/levels/Levels";
import Modal from "./components/modal/Modal";
import Multiselect from "./components/multiselect/Multiselect";
import Stepper from "./components/stepper/Stepper";
import Login from "./components/login/Login";

import { defineRequiredCwcElements } from "./cwc-elements-definitions"
import { createRoot } from "react-dom/client";
import Flipcard from "./components/flipcard/Flipcard";

const cwcElementsDefinedPromise = defineRequiredCwcElements()

export function AppRoutes() {
    const [loadingState, setLoadingState] = useState<"loading" | "ok" | "error">("loading");

    // Wait until we finish loading the CWC microfrontend.
    // Or else, the methods of the web components won't be available, and the app crashes (not good).
    useEffect(() => {
        cwcElementsDefinedPromise.then(({ loadedOk }) => {
            if (loadedOk) {
                setLoadingState("ok");
            } else {
                setLoadingState("error");
            }
        });
    });


    if (loadingState === "loading") return <h1>Loading...</h1>;

    if (loadingState === "error") return <h1>Oops... couldn't load Carnival microfrontend</h1>;

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/colors" element={<Colors />}> </Route>
            <Route path="/font-sample" element={<Fonts />}> </Route>
            <Route path="/buttons" element={<Buttons />}></Route>
            <Route path="/forms" element={<Forms />}></Route>
            <Route path="/levels" element={<Levels />}></Route>
            <Route path="/multiselect" element={<Multiselect />}></Route>
            <Route path="/stepper" element={<Stepper />}></Route>
            <Route path="/modal" element={<Modal />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/flipcard" element={<Flipcard />}></Route>
        </Routes>
    );
}

const AppMFE = () => (
    <>
        <link rel="stylesheet" href={process.env.STYLES_URL} /> 
        <link rel="stylesheet" href={process.env.WC_DEMO_STYLE_URL} /> 
        <MemoryRouter>
            <AppRoutes />
        </MemoryRouter>
    </>

);


class StandaloneWebComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const mountPoint = document.createElement("section");

        this.attachShadow({ mode: "closed" }).appendChild(mountPoint);

        const root = createRoot(mountPoint); 
        root.render(<AppMFE />);
    }
}

const init = () => {
    window.customElements.get("cwc-foundations") || window.customElements.define("cwc-foundations", StandaloneWebComponent);
    return Promise.resolve('cwc-foundations')
}


export default init();