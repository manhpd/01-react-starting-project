import React from "react";
import Header from "./components/header/Header";
import { CORE_CONCEPTS, EXAMPLES  } from "./data";
import CoreConcept from "./components/core-concepts/core-concept/CoreConcept";
import { Fragment } from "react";
import TabContent from "./components/examples/tab-content/TabContent";
import Examples from "./components/examples/Examples";
import CoreConcepts from "./components/core-concepts/CoreConcepts";

function App() {
    return (
        <Fragment>
            <Header />
            <main>
               <CoreConcepts />
               <Examples />
            </main>
        </Fragment>
    );
}

export default App;
