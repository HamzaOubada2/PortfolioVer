import styles from "./Experience.module.css";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
    {
        type: "work",
        role: "Backend Developer",
        company: "HK Solutions",
        period: "2026 - 2027",
        description: "During my internship as a Full-Stack MERN Developer, I architected and deployed the platform’s V1 and V2 from scratch, ensuring a smooth transition from MVP to a production-ready product. Leveraging the power of MongoDB, Express.js, React, and Node.js, I built scalable REST APIs and responsive, user-centric interfaces, focusing on performance and end-to-end functionality.",
    },
    {
        type: "education",
        role: "Web Development",
        school: "L'Office de la formation professionnelle et de promotion du travail | OFPPT",
        period: "2024 - 2025",
        description: "Focus on Distributed Systems and Database Management.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="container section">
            <h2 className="section-title">
                <span className="text-gradient">Journey</span>
            </h2>

            <div className={styles.timeline}>
                {experience.map((item, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.marker}>
                            {item.type === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <h3>{item.role}</h3>
                                <span className={styles.period}>{item.period}</span>
                            </div>
                            <h4 className={styles.company}>{item.school ?? item.company}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
