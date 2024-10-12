import React from "react";
import Header from "./components/header/Header";
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/core-concept/CoreConcept";

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {/* loop through CORE_CONCEPTS and render each concept */}
                        {CORE_CONCEPTS.map((concept) => (
                            <CoreConcept key={concept.title} {...concept} />
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
