import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TokenUtilitySection from '../components/TokenUtilitySection'
import TokenWarningSection from '../components/TokenWarningSection'


function TokenBenefits() {
    return (
        <div className="bg-white text-center">
            <Navbar isTokenPage={true} />
            {/* Why Hold Section */}
            <section className="py-20">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Why Hold <span className="text-blue-600">$SentraAI</span> Early?
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-10">
                    Be among the first to benefit from exclusive rewards, governance rights, and deep integration with SentraAI's ecosystem. Early holders enjoy advantages as the platform grows.
                </p>

                <div className="grid md:grid-cols-3 gap-4 px-4 max-w-5xl mx-auto">
                    <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
                        <h3 className="font-semibold mb-2">Early Access Benefits</h3>
                        <p className="text-sm text-gray-600">
                            Get priority access to new features, beta tools, and product launches.
                        </p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
                        <h3 className="font-semibold mb-2">Governance Influence</h3>
                        <p className="text-sm text-gray-600">
                            Vote on future SentraAI features, partnerships, and token utility.
                        </p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
                        <h3 className="font-semibold mb-2">Staking & Rewards</h3>
                        <p className="text-sm text-gray-600">
                            Stake $SentraAi and earn rewards or access exclusive services within the platform.
                        </p>
                    </div>
                </div>
            </section>

            {/* Token Utility Section */}
            <TokenUtilitySection />
            <TokenWarningSection />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default TokenBenefits
