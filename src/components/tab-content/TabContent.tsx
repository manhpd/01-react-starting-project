import React from "react";
import { EXAMPLES } from "../../data"

export default function TabContent({selectedTopic}: {selectedTopic: string}) {
    return (
        <div>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
    )
}