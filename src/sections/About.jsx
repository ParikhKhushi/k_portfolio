// src/sections/About.jsx
import { motion } from 'framer-motion';
import { Zap, Code, Palette, Cpu } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
    const { ref, animate, initial, transition } = useScrollReveal();

    const skills = [
        { name: 'React 19', icon: <Code />, color: 'text-lavender-muted' },
        { name: 'Framer Motion', icon: <Zap />, color: 'text-pink-blush' },
        { name: 'UI/UX Design', icon: <Palette />, color: 'text-text-dark' },
        { name: 'Performance', icon: <Cpu />, color: 'text-lilac-soft' },
        { name: 'Tailwind CSS', icon: <Code />, color: 'text-pink-blush' },
    ];

    return (
        <section id="about" className="py-24 px-8 bg-white" ref={ref}>
            <motion.div
                initial={initial}
                animate={animate}
                transition={transition}
                className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-center"
            >
                {/* 📸 Profile Image */}
                <div className="md:col-span-1 flex justify-center order-2 md:order-1">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ ...transition, delay: 0.2 }}
                        className="w-64 h-64 sm:w-80 sm:h-80 relative"
                    >
                        <div className="absolute inset-0 bg-lilac-soft rounded-3xl transform -rotate-6 shadow-xl"></div>
                        <img
                            src="/profile.jpg" // **PLACEHOLDER: Update this path**
                            alt="Khushi's Profile Picture"
                            className="absolute inset-0 w-full h-full object-cover rounded-3xl border-4 border-white shadow-2xl transform rotate-3"
                        />
                    </motion.div>
                </div>

                {/* 📝 Bio & Skills */}
                <div className="md:col-span-2 order-1 md:order-2">
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-lavender-muted">
                        A Deep Dive into the Frontend.
                    </h2>
                    <p className="text-lg text-text-dark mb-8 leading-relaxed">
                        I am a Computer Programming student at St. Clair College with a strong interest in front-end development, UI design, and building modern web experiences. I enjoy creating clean, responsive interfaces and learning new technologies that enhance user interaction and project performance. My focus is on improving my skills in React, JavaScript, TypeScript and full-stack development while exploring animations, modern design patterns, and best coding practices.
                    </p>

                    {/* 🛠️ Skills with Animated Icons */}
                    <h3 className="text-2xl font-semibold mb-4 text-pink-blush">Core Toolkit</h3>
                    <div className="flex flex-wrap gap-4 sm:gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={animate}
                                transition={{ ...transition, delay: 0.3 + index * 0.08 }}
                                className={`flex items-center space-x-2 p-3 rounded-full bg-peach-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-blush/30`}
                            >
                                <span className={`w-5 h-5 ${skill.color}`}>{skill.icon}</span>
                                <span className="text-sm font-semibold text-text-dark whitespace-nowrap">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;