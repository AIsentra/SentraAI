import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const features = [
    {
        title: 'Prompt Optimization',
        content:
            'SentraAI rewrites and enhances your prompts to maximize clarity and relevance, so your AI interactions produce better results automatically.'
    },
    {
        title: 'Command Memory',
        content:
            'Remembers previous instructions and preferences, making each interaction smarter and more personalized over time.'
    },
    {
        title: 'Auto Execution',
        content:
            'Automatically triggers AI actions and sequences based on context without requiring manual input or re-confirmation.'
    },
    {
        title: 'Platform Integration',
        content:
            'Easily connects with your favorite platforms like ChatGPT, Notion, or Slack to work seamlessly across your daily tools.'
    }
]

function Features() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                    Core Features
                </h2>

                <div className="grid md:grid-cols-2 gap-4 text-left">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl border p-5 transition shadow-sm ${
                                openIndex === index ? 'shadow-md' : ''
                            }`}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleIndex(index)}
                            >
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {feature.title}
                                </h3>
                                <span className="text-gray-500">
                  {openIndex === index ? (
                      <FaChevronUp className="w-4 h-4" />
                  ) : (
                      <FaChevronDown className="w-4 h-4" />
                  )}
                </span>
                            </div>
                            {openIndex === index && (
                                <p className="mt-4 text-sm text-gray-600">{feature.content}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
