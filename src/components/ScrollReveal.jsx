import React from 'react'
import { motion } from 'framer-motion'

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
}

function ScrollReveal({ children, delay = 0 }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay }}
            variants={sectionVariants}
        >
            {children}
        </motion.div>
    )
}

export default ScrollReveal
