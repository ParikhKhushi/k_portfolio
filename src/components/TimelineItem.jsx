// src/components/TimelineItem.jsx
import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const TimelineItem = ({ title, institution, duration, description, index }) => {
    const { ref, animate, initial, transition } = useScrollReveal();

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            transition={{ ...transition, delay: index * 0.1 }}
            className="relative pl-8 sm:pl-16 py-6 border-l-2 border-lilac-soft"
        >
            {/* 🟣 Timeline Dot */}
            <div className="absolute -left-[10px] top-7 sm:left-[-11px] w-5 h-5 bg-pink-blush rounded-full flex items-center justify-center shadow-lg">
                <Dot className="w-4 h-4 text-white" />
            </div>

            <h3 className="text-xl font-serif font-bold text-lavender-muted">{title}</h3>
            <p className="text-md font-semibold text-text-dark/80">{institution}</p>
            <p className="text-sm italic text-text-dark/60 mb-2">{duration}</p>
            <p className="text-text-dark/90 max-w-xl">{description}</p>
        </motion.div>
    );
};

export default TimelineItem;