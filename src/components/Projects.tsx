"use client";

import { ExternalLink, Github, Server } from "lucide-react";
import styles from "./Projects.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Distributed Task Queue System",
        description:
            "A high-throughput distributed task queue built with Go and Redis. Features include priority queuing, delayed tasks, and graceful shutdown handling. Designed to handle 10k+ concurrent jobs with 99.9% reliability.",
        tech: ["Go", "Redis", "gRPC", "Docker"],
        links: {
            github: "https://github.com",
            demo: "https://demo.com",
        },
        metrics: ["10k+ TPS", "50ms Latency"],
    },
    {
        title: "E-Commerce Microservices API",
        description:
            "Scalable e-commerce backend implementing event-driven architecture using Apache Kafka. Services include Order Processing, Inventory Management, and Payment Gateway integration with idempotent operations.",
        tech: ["Node.js", "Express", "Kafka", "PostgreSQL", "Kubernetes"],
        links: {
            github: "https://github.com",
            demo: null,
        },
        metrics: ["Event-Driven", "Idempotent"],
    },
    {
        title: "Secure Auth Provider",
        description:
            "OAuth2.0 and OpenID Connect compliant identity provider. Implements JWT refresh rotation, MFA support, and role-based access control (RBAC). Audited for OWASP Top 10 vulnerabilities.",
        tech: ["Python", "Django", "PostgreSQL", "OAuth2", "Redis"],
        links: {
            github: "https://github.com",
            demo: "https://demo.com",
        },
        metrics: ["OAuth 2.0", "MFA Support"],
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
