import React from 'react'
import { FaXTwitter, FaDiscord } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'

function Footer() {
    return (
        <footer id="social" className="bg-white text-gray-800 mt-20 px-6 py-12 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

                {/* Contacto e estado */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">AI Assisted Experience.</h2>
                    <div className="flex items-center space-x-2 text-sm">
                        <HiOutlineMail className="w-5 h-5" />
                        <a href="mailto:assistance@sentraai.com" className="hover:underline">
                            assistance@sentraai.com
                        </a>
                    </div>
                    <div className="mt-3 text-green-600 text-sm flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-600 inline-block" />
                        All Systems Operational
                    </div>
                </div>

                {/* Redes sociais */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold mb-4">Social Media</h2>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a
                            href="https://x.com/ai_sentra"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-200 hover:bg-gray-300 transition p-3 rounded-xl"
                        >
                            <FaXTwitter className="w-5 h-5 text-black" />
                        </a>
                        <a
                            href="https://discord.gg/q45p2Jka"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-200 hover:bg-gray-300 transition p-3 rounded-xl"
                        >
                            <FaDiscord className="w-5 h-5 text-black" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Direitos de autor */}
            <div className="mt-10 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} SentraAI — All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
