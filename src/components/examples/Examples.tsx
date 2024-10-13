import React from 'react';
import { EXAMPLES } from '../../data';
import TabContent from './tab-content/TabContent';
import TabButton from './tap-button/TabButton';
import Section from '../section/Section';
import TabMenu from './tap-menu/TabMenu';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = React.useState<string | null>(null);
    
    function handleSelect(topic: string) {
        setSelectedTopic(topic);
    }

    let tabContent = <p>Please select  a topic.</p>;
    if (selectedTopic) {
        tabContent = <TabContent selectedTopic={selectedTopic} />;
    }

    return (
        <Section id="examples" title="Examples">
            <TabMenu 
            buttons=  {Object.keys(EXAMPLES).map((key) => (
                    <TabButton key={key} onClick={() => handleSelect(key)} isSelected={selectedTopic === key} >{EXAMPLES[key].title}</TabButton>
                ))}>
                <div id="tab-content">
                    {tabContent}
                </div>
            </TabMenu>
        </Section>
    )
}