import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    const scrollToFeatures = () => {
        const element = document.getElementById('features')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="relative bg-white text-center py-8 md:py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-6 pt-6 md:pt-10 lg:pt-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Use your favorite AI, powered by{' '}
                    <span className="text-blue-600">SentraAI</span>.
                </h1>
                <p className="text-gray-600 text-lg md:text-xl mb-8">
                    Your intelligent right-hand assistant to boost productivity and make
                    every prompt more powerful.
                </p>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={scrollToFeatures}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-transform transform hover:scale-105"
                    >
                        Learn More
                    </button>
                    <Link
                        to="#"
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl text-sm font-semibold transition-transform transform hover:scale-105"
                    >
                        GitHub <span className="text-xs">(soon)</span>
                    </Link>
                </div>
            </div>

            {/* LOGO no fundo da secção */}
            <div className="mt-14 md:mt-20">
                <img
                    src="/assets/sentra-full-logo.png"
                    alt="SentraAI Full Logo"
                    className="mx-auto w-80 transition-transform duration-300 hover:scale-105"
                />
            </div>
        </section>
    )
}

export default Hero
