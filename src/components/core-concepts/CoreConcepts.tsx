import React from 'react';
import { CORE_CONCEPTS } from '../../data';
import CoreConcept from './core-concept/CoreConcept';
import Section from '../section/Section';

export default function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {/* loop through CORE_CONCEPTS and render each concept */}
                {CORE_CONCEPTS.map((concept) => (
                    <CoreConcept key={concept.title} {...concept} />
                ))}
            </ul>
        </Section>
    )
}