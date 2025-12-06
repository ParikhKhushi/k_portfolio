// src/App.jsx
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Sections
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

// --- NEW MOBILE NAVBAR COMPONENT ---
const MobileNavbar = ({ isOpen, toggleMenu, links }) => {
    const sidebarVariants = {
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        },
        closed: {
            x: "100%", // Slides off screen to the right
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        },
    };

    const linkVariants = {
        open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.5 } },
        closed: { opacity: 0, y: 20 },
    };

    return (
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={sidebarVariants}
            className="fixed top-0 right-0 w-64 h-full bg-peach-light/95 backdrop-blur-md z-40 p-8 shadow-xl md:hidden"
        >
            <div className="flex justify-end mb-10">
                <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
            </div>

            <motion.nav
                className="flex flex-col space-y-6"
                variants={{
                    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
            >
                {links.map((link) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={toggleMenu}
                        variants={linkVariants}
                        whileHover={{ scale: 1.05, color: '#FFC0CB' }} // pink-blush
                        className="text-2xl font-serif font-bold text-text-dark hover:text-pink-blush transition-colors"
                    >
                        {link.name}
                    </motion.a>
                ))}
            </motion.nav>
        </motion.div>
    );
};

// --- HAMBURGER ICON COMPONENT WITH ANIMATION ---
const HamburgerMenu = ({ isOpen, toggleMenu }) => {
    const transition = { type: "spring", stiffness: 200, damping: 20 };

    // Define lines positions based on open/closed state
    const top = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 8 },
    };

    const center = {
        closed: { opacity: 1 },
        open: { opacity: 0 },
    };

    const bottom = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -8 },
    };

    return (
        <motion.button
            onClick={toggleMenu}
            className="w-8 h-8 flex flex-col justify-around cursor-pointer p-0 z-50 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            <motion.span variants={top} animate={isOpen ? "open" : "closed"} transition={transition} className="h-0.5 w-full bg-lavender-muted rounded-full" />
            <motion.span variants={center} animate={isOpen ? "open" : "closed"} transition={transition} className="h-0.5 w-full bg-lavender-muted rounded-full" />
            <motion.span variants={bottom} animate={isOpen ? "open" : "closed"} transition={transition} className="h-0.5 w-full bg-lavender-muted rounded-full" />
        </motion.button>
    );
};


// --- REGULAR NAVBAR (Desktop Only) ---
const Navbar = ({ toggleMenu }) => {
    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-md shadow-md"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="#home" className="text-2xl font-serif font-extrabold text-lavender-muted hover:text-pink-blush transition">
                    Khushi.dev
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-text-dark font-semibold hover:text-pink-blush transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Burger Bar */}
                <div className="md:hidden">
                    <HamburgerMenu isOpen={false} toggleMenu={toggleMenu} />
                </div>
            </div>
        </motion.nav>
    );
};

// --- FOOTER (Unchanged) ---
const Footer = () => (
    <footer className="bg-text-dark py-8">
        <div className="max-w-7xl mx-auto px-8 text-center text-white/70">
            <p className="mb-4">Designed and Developed by Khushi. © 2025</p>
            <div className="flex justify-center space-x-6">
                <motion.a
                    href="https://github.com/ParikhKhushi"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#FFC0CB' }}
                    className="text-white hover:text-pink-blush transition"
                >
                    <Github size={24} />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/khushi-parikh-91111438a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#FFC0CB' }}
                    className="text-white hover:text-pink-blush transition"
                >
                    <Linkedin size={24} />
                </motion.a>
                <motion.a
                    href="mailto:20827081@myscc.ca"
                    whileHover={{ scale: 1.2, color: '#FFC0CB' }}
                    className="text-white hover:text-pink-blush transition"
                >
                    <Mail size={24} />
                </motion.a>
            </div>
        </div>
    </footer>
);

// --- APP COMPONENT ---
const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Disable body scrolling when the menu is open
    React.useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    return (
        <div className="min-h-screen bg-white scroll-smooth">

            <Navbar toggleMenu={toggleMenu} />

            <MobileNavbar
                isOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                links={links}
            />

            {/* Overlay to dim background when menu is open */}
            <motion.div
                initial={false}
                animate={isMenuOpen ? { opacity: 1, pointerEvents: 'auto' } : { opacity: 0, pointerEvents: 'none' }}
                onClick={toggleMenu}
                className="fixed inset-0 bg-text-dark/40 z-30 md:hidden"
                transition={{ duration: 0.3 }}
            />

            <main className="pt-16">
                <Home />
                <About />
                <Education />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;