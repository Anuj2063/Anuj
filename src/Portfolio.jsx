import React, { useState } from 'react';
import './Portfolio.css';
import profile from './assets/profile.jpg';
const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const personalInfo = {
        name: "Anuj Gyawali",
        title: "AI Agent Developer | Data Scientist | UI/UX Enthusiast",
        email: "Gyawalianuj123@gmail.com",
        phone: "9869464866",
        location: "Baneshwor, Kathmandu, Nepal",
        github: "https://github.com/Anuj2063",
        linkedin: "https://www.linkedin.com/in/anuj-gyawali-517777290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    };

    const skills = [
        { name: "React" },
        { name: "JavaScript" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Machine Learning" },
        { name: "TensorFlow" },
        { name: "Node.js" },
        { name: "Git" },
        { name: "Python" },
        
    ];

    const projects = [
        {
            id: 1,
            title: "Breast Disease Cancer Detection",
            description: "A machine learning model for early breast cancer detection, built to improve accuracy in medical diagnostics.",
            technologies: ["Python", "HTML", "CSS", 'Scikit Learn', 'Flask', "Javascript"],
            link: "https://github.com/",
        },
        {
            id: 2,
            title: "Netflix Clone",
            description: "A React-based Netflix clone with dynamic movie browsing, user authentication, and responsive UI for seamless streaming experience.",
            technologies: ["JavaScript", "HTML", "CSS", "API"],
            link: "https://github.com/",
        },
        {
            id: 3,
            title: "Animal Disease Prediction System",
            description: "An AI-powered prediction system to identify potential animal diseases, supporting early intervention and better livestock management.",
            technologies: ["Tesseract OCR", "TensorFlow/Keras"],
            link: "https://github.com/",
        },
    ];

    const experiences = [
        {
            id: 1,
            title: "Video Editor Intern",
            company: "Tech Company.",
            year: "Feburary 2024 - April 2024",
            responsibilities: [
                "Edited and produced short-form and long-form video content for marketing and social media campaigns.",
                "Collaborated with creative teams to align video storytelling with brand guidelines and project goals.",
                "Optimized videos for different platforms, ensuring aspect ratios, resolutions, and formats matched publishing requirements."
            ]
        },
        {
            id: 2,
            title: "UI/UX Design Intern",
            company: "Fusion Technology.",
            year: "January 2025 - Feburary 2025",
            responsibilities: [
                "Designed intuitive and responsive user interfaces using Figma and Adobe XD.",
                "Conducted user research and created wireframes, prototypes, and design systems to improve usability.",
                "Focused on accessibility, responsive design, and consistency to deliver user-centered experiences."
            ]
        }
    ];

    const education = [
        {
            degree: "Bachelor of Science in Computer Science with Artificial Intelligence",
            school: "Sunway College Kathmandu",
            year: "2025-Current",
            gpa: "Not Graduated Yet"
        },
        {
            degree: "High School (+2 Management)",
            school: "New Horizon College",
            year: "2022-2024",
            gpa: "3.26/4.0"
        },
        {
            degree: "Secondary Education (SEE)",
            school: "New Horizon Secondary School",
            year: "2018",
            gpa: "3.4/4.0"
        }
    ];

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // You would typically handle form submission here, e.g., by sending data to a server
        alert("Thank you for your message!");
        setFormData({ name: '', email: '', message: '' }); // Clear form
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'about':
                return (
                    <section className="content-section fade-in">
                        <h2 className="section-title">About Me</h2>
                        <div className="text-content">
                            <p>
                                As a motivated Data Science and Computing student, I am deeply fascinated by the potential of Artificial Intelligence and Data Science to transform the way we solve real-world problems. I enjoy tackling complex challenges and continuously seek opportunities to strengthen my technical and analytical skills. Through academic projects, internships, and collaborative work, I have developed a strong foundation in applying data-driven approaches to practical scenarios. I also actively participate in tech programs, workshops, and competitions, which fuel my curiosity and broaden my perspective. With a growth-oriented mindset, I am committed to expanding my expertise and contributing to innovative solutions in the rapidly evolving field of AI and data science.
                            </p>
                            <p>
                                My goal is to contribute to innovative projects that leverage AI to create meaningful impact. I am especially interested in data science and machine learning, where I can apply my skills to solve real-world challenges. Throughout my academic journey, I have gained a strong foundation in machine learning algorithms, data analysis, and core AI principles, which I am eager to expand further. This knowledge equips me to continue growing as a professional while making valuable contributions in the field of artificial intelligence.
                            </p>
                        </div>
                    </section>
                );

            case 'skills':
                return (
                    <section className="content-section fade-in">
                        <h2 className="section-title">Skills</h2>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-name">{skill.name}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            case 'projects':
                return (
                    <section className="content-section fade-in">
                        <h2 className="section-title">Projects</h2>
                        <div className="projects-grid">
                            {projects.map(project => (
                                <div key={project.id} className="card project-card">
                                    <div className="project-details">
                                        <h3 className="card-title">{project.title}</h3>
                                        <p className="card-description">{project.description}</p>
                                        <div className="tech-tags">
                                            {project.technologies.map((tech, index) => (
                                                <span key={index} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                        <a href={project.link} className="card-link" target="_blank" rel="noopener noreferrer">
                                            View on GitHub
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );

            case 'experience':
                return (
                    <section className="content-section fade-in">
                        <h2 className="section-title">Experience</h2>
                        {experiences.map(exp => (
                            <div key={exp.id} className="card experience-card">
                                <h3 className="card-title">{exp.title}</h3>
                                <p className="experience-company-year">{exp.company} | {exp.year}</p>
                                <ul>
                                    {exp.responsibilities.map((resp, index) => (
                                        <li key={index}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                );

            case 'education':
                return (
                    <section className="content-section fade-in">
                        <h2 className="section-title">Education</h2>
                        {education.map((edu, index) => (
                            <div key={index} className="card education-card">
                                <h3 className="card-title">{edu.degree}</h3>
                                <p className="education-school">{edu.school}</p>
                                <p className="education-year">{edu.year}</p>
                                <p className="education-gpa">GPA: {edu.gpa}</p>
                            </div>
                        ))}
                    </section>
                );

            case 'contact':
                return (
                    <section className="content-section fade-in">
                        <h2 className="section-title">Contact</h2>
                        <div className="contact-info">
                            <p><strong>Email:</strong> <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
                            <p><strong>Phone:</strong> {personalInfo.phone}</p>
                            <p><strong>Location:</strong> {personalInfo.location}</p>
                            <p><strong>GitHub:</strong> <a href={personalInfo.github}>{personalInfo.github}</a></p>
                            <p><strong>LinkedIn:</strong> <a href={personalInfo.linkedin}>{personalInfo.linkedin}</a></p>
                        </div>
                        <div className="contact-form-container">
                            <h3 className="form-title">Send Me a Message</h3>
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    rows="5"
                                    required
                                ></textarea>
                                <button type="submit" className="submit-btn">Send Message</button>
                            </form>
                        </div>
                    </section>
                );

            default:
                return null;
        }
    };

    return (
        <div className="portfolio-container">
            <header className="hero-section">
                <div className="intro-container">
                    <div className="profile-image-container">
                        <img
                          src={profile}
                            alt="anuj gyawali"
                            className="profile-image"
                        />
                    </div>
                    <div className="text-content">
                        <p className="portfolio-tag">Personal Portfolio</p>
                        <h1 className="name cursive-name">{personalInfo.name}</h1>
                        <p className="title">{personalInfo.title}</p>
                    </div>
                </div>
            </header>

            <nav className="nav">
                {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map(section => (
                    <button
                        key={section}
                        className={`nav-button ${activeSection === section ? 'active' : ''}`}
                        onClick={() => setActiveSection(section)}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </nav>

            <main className="main-content">
                {renderContent()}
            </main>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Portfolio;