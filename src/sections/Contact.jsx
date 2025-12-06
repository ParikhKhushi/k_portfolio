// src/sections/Contact.jsx (REVISED with Submission Logic)
import {motion} from 'framer-motion';
import {Mail, Phone, MapPin, Send, Linkedin, Github} from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import Button from '../components/Button';
import React, {useState} from 'react';// Import useState and useEffect if needed

const Contact = () => {
    const {ref, animate, initial, transition} = useScrollReveal();
    const [status, setStatus] = useState(''); // To display success/error message

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        // Replace '/api/submit-form' with the actual endpoint of your Serverless Function
        const endpoint = '/.netlify/functions/submit-form';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message Sent! Thank you, Khushi.');
                e.target.reset(); // Clear the form
            } else {
                setStatus('Failed to send. Please try again later.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('Network error. Check your connection.');
        }
    };

    return (
        <section id="contact" className="py-24 px-8 bg-white" ref={ref}>
            <motion.div
                initial={initial}
                animate={animate}
                transition={transition}
                className="max-w-6xl mx-auto"
            >
                {/* ... Heading and Intro Text ... */}

                <div className="grid md:grid-cols-2 gap-12">
                    {/* 📝 Contact Form */}
                    <motion.div
                        initial={{opacity: 0, x: -30}}
                        animate={animate}
                        transition={{...transition, delay: 0.2}}
                        className="bg-peach-light/50 p-8 rounded-xl shadow-lg border border-lilac-soft"
                    >
                        {/* 🌟 Attach handleSubmit to the form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full p-3 border border-pink-blush/50 rounded-lg focus:ring-2 focus:ring-pink-blush/70 outline-none transition"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full p-3 border border-pink-blush/50 rounded-lg focus:ring-2 focus:ring-pink-blush/70 outline-none transition"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message..."
                                rows="5"
                                required
                                className="w-full p-3 border border-pink-blush/50 rounded-lg focus:ring-2 focus:ring-pink-blush/70 outline-none transition"
                            ></textarea>

                            {/* Display submission status */}
                            {status &&
                                <p className={`text-center font-semibold ${status.startsWith('Message Sent') ? 'text-green-600' : 'text-red-500'}`}>{status}</p>}

                            <Button type="button" primary icon={<Send className="w-5 h-5"/>}>
                                Send Message
                            </Button>
                        </form>
                    </motion.div>

                    {/* ... Contact Details ... */}
                    <motion.div

                        initial={{opacity: 0, x: 30}}

                        animate={animate}

                        transition={{...transition, delay: 0.4}}

                        className="space-y-8 pt-4"

                    >

                        {[

                            {
                                icon: Mail,
                                label: 'Email Me',
                                value: 'w0827081@myscc.ca',
                                href: 'mailto:w0827081@myscc.ca'
                            },

                            {icon: MapPin, label: 'Location', value: 'Windsor, Canada', href: '#'},

                            {icon: Linkedin, label: 'Linkedin', value: 'Visit my Linkedin profile', href: '#'},

                            {
                                icon: Github,
                                label: 'GitHub',
                                value: 'Visit my Github profile',
                                href: 'https://github.com/ParikhKhushi'
                            },

                        ].map((item, index) => (

                            <motion.a

                                key={index}

                                href={item.href}

                                className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-lilac-soft/30 hover:shadow-md"

                                whileHover={{scale: 1.02}}

                            >

                                <div className="mt-1 p-2 bg-pink-blush/20 rounded-full text-pink-blush">

                                    <item.icon className="w-6 h-6"/>

                                </div>

                                <div>

                                    <p className="text-sm font-semibold text-lavender-muted">{item.label}</p>

                                    <p className="text-lg font-bold text-text-dark">{item.value}</p>

                                </div>

                            </motion.a>

                        ))}

                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;