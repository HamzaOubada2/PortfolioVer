"use client";

import { ExternalLink, Github, Server } from "lucide-react";
import styles from "./Projects.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Freelancer Focus App",
        description:"A professional management engine featuring a modular NestJS/PostgreSQL backend and a responsive Next.js interface.",
        tech: ["NestJs", "Postgresql", "React", "Tailwind Css"],
        links: {
            github: "https://github.com/HamzaOubada2/Freelancer",
            demo: "",
        },
        metrics: ["10k+ TPS", "50ms Latency"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="container section">
            <h2 className="section-title">
                <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className={styles.subtitle}>
                Real-world solutions focusing on scalability, performance, and security.
            </p>

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={styles.projectCard}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className={styles.cardHeader}>
                            <div className={styles.headerTop}>
                                <Server size={32} className={styles.projectIcon} />
                                <div className={styles.links}>
                                    {project.links.github && (
                                        <Link href={project.links.github} target="_blank" aria-label="GitHub Repo">
                                            <Github size={20} />
                                        </Link>
                                    )}
                                    {project.links.demo && (
                                        <Link href={project.links.demo} target="_blank" aria-label="Live Demo">
                                            <ExternalLink size={20} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                        </div>

                        <p className={styles.description}>{project.description}</p>

                        <div className={styles.metrics}>
                            {project.metrics.map((metric, i) => (
                                <span key={i} className={styles.metricBadge}>
                                    {metric}
                                </span>
                            ))}
                        </div>

                        <div className={styles.techStack}>
                            {project.tech.map((tech, i) => (
                                <span key={i} className={styles.techTag}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
