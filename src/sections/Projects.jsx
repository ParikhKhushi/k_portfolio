// src/sections/Projects.jsx
import { motion } from 'framer-motion';
import { Github, Link, Terminal, Zap } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import Button from '../components/Button';

// Placeholder Project Data
const projectsData = [
    {
        title: "Resinique Artistry Web-Gallery",
        desc: "A headless e-commerce frontend built using Angular, Material-Design, and SCSS. Features responsive layouts, interactive UI components, and smooth, modern transitions for an engaging user experience.",
        tags: ['Angular', 'Material-Design', 'SCSS', 'TypeScript'],
        icon: <Zap />,
        github: 'https://github.com/ParikhKhushi/Khushi_Parikh_Learning_Angular',
        live: '#'
    },
    {
        title: "Store-Mate POS Application",
        desc: "A desktop POS application built with Java and JavaFX, featuring a responsive UI, efficient database interactions with JDBC, and polished styling using JavaFX CSS for a smooth user experience.",
        tags: ['Java', 'JavaFX', 'JDBC', 'JavaFX CSS'],
        icon: <Terminal />,
        github: 'https://github.com/jeet7122/Store-Mate',
        live: '#'
    },
    {
        title: "Quotivation Game",
        desc: "A motivational desktop game built with JavaFX, emphasizing clean UX design, smooth animations, and consistent performance across devices.",
        tags: ['UX Design', 'JavaFX', 'Animation'],
        icon: <Link />,
        github: '#',
        live: '#'
    },
];

const ProjectCard = ({ project, index }) => {
    const { ref, animate, initial, transition } = useScrollReveal();

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            // Stagger the reveal slightly
            transition={{ ...transition, delay: 0.1 + index * 0.15 }}

            // Hover animation: slight upward motion and shadow
            whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(168, 144, 208, 0.4)" }}
            className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-lilac-soft p-8 transition-transform duration-300"
        >
            <div className="text-pink-blush mb-4">{project.icon}</div>
            <h3 className="text-2xl font-serif font-bold text-lavender-muted mb-3">{project.title}</h3>
            <p className="text-text-dark mb-6 text-sm">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 bg-peach-light rounded-full text-text-dark/80">
            {tag}
          </span>
                ))}
            </div>

            <div className="flex gap-4">
                <Button href={project.github} icon={<Github />} small primary type='a' aria-label="GitHub Repository"/>
                <Button href={project.live} icon={<Link />} small type='a' aria-label="Live Demo" />
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-8 bg-peach-light/20">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-center mb-16 text-lavender-muted">
                Featured Projects
            </h2>
            <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
