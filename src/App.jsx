import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'



function App() {
    return (
        <div className="relative font-sans scroll-smooth bg-transparent text-gray-800">
            <Navbar />
            <Hero />
            <About />
            <Features />
            <section id="documentation" className="bg-white py-20 px-6 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Documentation & Roadmap</h2>
                    <p className="text-gray-600 mb-10">
                        Learn how SentraAI works, how to integrate with your tools, and where we're heading.
                    </p>

                    {/* Botões de documentação */}
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
                        <a
                            href="#"
                            className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:scale-105 hover:bg-gray-900 transition transform duration-300"
                        >
                            Whitepaper (PDF)
                        </a>
                        <a
                            href="#"
                            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-medium hover:scale-105 hover:bg-gray-300 transition transform duration-300"
                        >
                            API Docs
                        </a>
                    </div>

                    {/* Blocos informativos */}
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Architecture</h3>
                            <p className="text-sm text-gray-600">
                                SentraAI is built with modular AI pipelines, enabling fast integration with GPT models and automation layers.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Integrations</h3>
                            <p className="text-sm text-gray-600">
                                Native support for ChatGPT, Notion, Slack and more. Seamless connection with your workflows.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Token Utility</h3>
                            <p className="text-sm text-gray-600">
                                $SentraAi powers governance, access tiers and automation modules. Designed for utility and scale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default App
