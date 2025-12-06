// src/sections/Education.jsx
import TimelineItem from '../components/TimelineItem';
import ParallaxShape from '../components/ParallaxShape';

const educationData = [
    {
        title: "Computer Programming",
        institution: "St Clair College",
        duration: "2024 – 2026",
        description: "My coursework includes Front-End and Back-End frameworks and technologies such as Angular, PHP, Java, JDBC, MySQL, HTML, CSS, and Laravel. I have also studied Object-Oriented Analysis and Design (OOAD) and version control with Git. This diverse skill set allows me to build full-stack, responsive, and well-structured web applications while following best practices in design and development."
    },
    {
        title: "Front-End Development Internship",
        institution: "TOPS Technologies",
        duration: "2022 – 2023",
        description: "Completed internship focused on building responsive and interactive web interfaces using HTML, CSS, and vanilla JavaScript. Gained hands-on experience in DOM manipulation, layout design, cross-browser compatibility, and best practices for clean, maintainable code."
    },
];

const Education = () => {
    return (
        <section id="education" className="relative py-24 px-8 bg-lilac-soft/20 overflow-hidden">

            {/* 🟣 Parallax Accent Shapes */}
            <ParallaxShape
                className="w-48 h-48 bg-pink-blush top-[20%] right-[10%]"
                speed={0.3}
            />
            <ParallaxShape
                className="w-32 h-32 bg-lavender-muted bottom-[15%] left-[5%]"
                speed={0.2}
            />

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-center mb-16 text-lavender-muted">
                    My Journey
                </h2>

                {/* 📚 Timeline Layout */}
                <div className="space-y-12">
                    {educationData.map((item, index) => (
                        <TimelineItem key={index} {...item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;