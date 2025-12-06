// src/hooks/useScrollReveal.js (REVISED)
import { useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Custom hook to manage scroll-triggered reveal animations.
 * @param {boolean} once - If true, the animation only runs once. (Set to false for repeated triggers)
 * @returns {object} Framer Motion props and ref.
 */
const useScrollReveal = (once = false) => { // <<< CHANGED DEFAULT to false
    const ref = useRef(null);

    // Trigger when the element is 150px into the viewport
    // The 'once: once' argument now defaults to false, triggering on every scroll into view
    const isInView = useInView(ref, { once: once, margin: "-150px 0px" });

    // If we are NOT in view, we reset the state to initial (opacity 0, y: 50)
    const initial = { opacity: 0, y: 50 };
    const animate = isInView ? { opacity: 1, y: 0 } : initial; // <<< KEY: Resets to 'initial' when out of view

    const transition = {
        duration: 0.8,
        type: "spring",
        stiffness: 70,
        damping: 10,
    };

    return { ref, animate, initial, transition };
};

export default useScrollReveal;