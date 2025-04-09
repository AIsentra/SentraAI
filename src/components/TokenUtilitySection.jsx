import React from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaShieldAlt, FaChartPie } from 'react-icons/fa'

const utilities = [
    {
        icon: <FaRocket className="text-3xl text-blue-600" />,
        title: 'Boost Productivity',
        description: 'Access AI tools that help you work faster and smarter with your tokens.'
    },
    {
        icon: <FaShieldAlt className="text-3xl text-blue-600" />,
        title: 'Exclusive Access',
        description: 'Hold tokens to unlock premium SentraAI features, private betas, and integrations.'
    },
    {
        icon: <FaChartPie className="text-3xl text-blue-600" />,
        title: 'Governance Rights',
        description: 'Vote on platform decisions and future feature development.'
    }
]

function TokenUtility() {
    return (
        <section className="py-20 bg-blue-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">Token Utility Visual</h2>
                <p className="text-blue-600 mb-12 text-lg">
                    Discover how $SentraAi brings real utility to your AI experience.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {utilities.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-md rounded-xl p-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
                            <p className="text-blue-600 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TokenUtility
