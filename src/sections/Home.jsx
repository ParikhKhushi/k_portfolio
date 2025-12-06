// src/sections/Home.jsx (REVISED for Centering)
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import ParallaxShape from '../components/ParallaxShape';
import Button from '../components/Button';

const Home = () => {
    // Define colors from the theme for consistent icon visibility
    const lavenderMuted = "#A890D0";
    const textDark = "#4A4A68";

    return (
        <section
            id="home"
            // *** CRITICAL CHANGE: Use calc() and remove pt-24 ***
            className="relative flex flex-col justify-center items-center overflow-hidden p-8
                       bg-peach-light/50 min-h-[calc(100vh-4rem)]" // 4rem is roughly the navbar height (pt-16 padding in main)
            // If pt-16 is applied to the main container in App.jsx, you can use min-h-screen
            // and ensure the content is centered below the navbar. Let's use pt-[8rem] as a safer clearing space.
        >
            {/* 🟣 Parallax Background Shapes (soft gradient) */}
            <ParallaxShape
                className="w-80 h-80 md:w-[500px] md:h-[500px] bg-lilac-soft top-10 left-[-100px]"
                speed={0.4}
            />
            <ParallaxShape
                className="w-64 h-64 md:w-96 md:h-96 bg-pink-blush bottom-20 right-[-100px]"
                speed={0.6}
            />

            <div className="relative z-10 text-center max-w-5xl">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-xl text-lavender-muted font-serif mb-4"
                >
                    Hi, I'm Khushi, a passionate software developer.
                </motion.p>

                {/* 📝 Staggered Text Animation */}
                <AnimatedText
                    text="Building Elegant UIs with Modern React, UX, and Advanced Motion."
                    className="text-4xl sm:text-6xl lg:text-8xl font-serif font-extrabold text-text-dark leading-tight"
                    delay={0.8}
                />

                {/* 🚀 CTA Buttons with Motion */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8, duration: 0.6 }}
                    className="mt-12 flex flex-wrap justify-center gap-4"
                >
                    <Button href="#projects" primary>
                        View Projects <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <Button
                        href="https://github.com/ParikhKhushi"
                        icon={<Github className="w-6 h-6" color={textDark} />}
                        aria-label="GitHub Profile"
                    />

                    <Button
                        href="https://www.linkedin.com/in/khushi-parikh-91111438a/"
                        icon={<Linkedin className="w-6 h-6" color={lavenderMuted} />}
                        aria-label="LinkedIn Profile"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Home;