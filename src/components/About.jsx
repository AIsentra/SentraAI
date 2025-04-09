import React from 'react'
import ScrollReveal from './ScrollReveal'

function About() {
    return (
        <section id="about" className="py-20 px-6 bg-white text-center">
            <ScrollReveal>
                <h2 className="text-3xl font-bold mb-4">What is SentraAI?</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    SentraAI is a smart companion for your favorite AI tools. Whether you're using ChatGPT or other models, SentraAI enhances your workflow with context awareness, organization, and seamless integration — acting like a second brain that evolves with you.
                </p>
            </ScrollReveal>
        </section>
    )
}

export default About
