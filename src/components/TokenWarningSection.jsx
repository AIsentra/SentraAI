import React from 'react'

function TokenWarningSection() {
    return (
        <section className="bg-white py-16 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-4">
                    <img
                        src="/assets/blue-warning-icon.png"
                        alt="Warning Icon"
                        className="w-12 h-12"
                    />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Official <span className="text-blue-600">SentraAI</span> Notice
                </h2>

                <p className="text-gray-700 mb-4 text-lg">
                    SentraAI will be launched exclusively with the official brand images shown below. Be cautious of fake tokens.
                </p>
                <p className="text-gray-700 mb-8 text-md">
                    The official contract address (CA) will be announced on the verified SentraAI Twitter page at the time of launch.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
                    <img src="/assets/sentra-full-logo.png" alt="SentraAI Full Logo" className="w-64 md:w-72" />
                    <img src="/assets/sentra-logo.png" alt="SentraAI S Logo" className="w-24 md:w-28" />
                </div>
            </div>
        </section>
    )
}

export default TokenWarningSection
