import React from "react";
import Header from "./components/header/Header";
import { CORE_CONCEPTS, EXAMPLES  } from "./data";
import CoreConcept from "./components/core-concept/CoreConcept";
import TabButton from "./components/tap-button/TabButton";
import TabContent from "./components/tab-content/TabContent";


function App() {
    const [selectedTopic, setSelectedTopic] = React.useState("");

    const handleSelect = (selectedButton : string) => {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select  a topic.</p>;
    if (selectedTopic) {
        tabContent = <TabContent selectedTopic={selectedTopic} />;
    }

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
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {/* loop through EXAMPLES and render each tab button */}
                        {/* <TabButton onSelect={() => handleSelect("components")} >Components</TabButton> */}
                        {Object.keys(EXAMPLES).map((key) => (
                            <TabButton key={key} onSelect={() => handleSelect(key)} isSelected={selectedTopic === key} >{EXAMPLES[key].title}</TabButton>
                        ))}
                    </menu>
                    <div id="tab-content">
                        { tabContent }
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
