// src/components/ParallaxShape.jsx
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxShape = ({ className, speed = 0.5, style = {} }) => {
    // Get the scroll progress of the entire page
    const { scrollYProgress } = useScroll();

    // Map scroll progress (0 to 1) to vertical movement (e.g., -50vh to 0vh)
    // Higher speed means greater displacement
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [`${0 * speed}vh`, `${-60 * speed}vh`]
    );

    return (
        <motion.div
            style={{ y, ...style }}
            className={`absolute rounded-[40%] filter blur-3xl opacity-50 ${className}`}
            aria-hidden="true"
        />
    );
};

export default ParallaxShape;