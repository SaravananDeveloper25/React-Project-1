import React from 'react'
import { motion } from 'framer-motion';

const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
            duration: 3,
        },
    },
};
const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 5 },
    },
};


function Banner() {
    return (

        <>
            <motion.div
                initial="initial"
                animate="animate"
                variants={containerVariants}
                className='banner-text' >
                <motion.h1 variants={containerVariants}>Software Training Institute in Bengaluru</motion.h1>
                <motion.p variants={childVariants}>
                Getin Technologies is Bangalore’s premier software training institute, dedicated to your success. With courses designed by industry veterans, we focus on giving you the practical skills and confidence to excel in today’s competitive tech landscape.</motion.p>
            </motion.div>
        </>


    )
}

export default Banner