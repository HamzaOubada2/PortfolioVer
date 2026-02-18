import styles from "./About.module.css";
import { Terminal, Cpu, Lock } from "lucide-react";
import Counter from "@/components/Counter";

export default function About() {
    return (
        <section id="about" className="container section">
            <div className={styles.grid}>
                <div className={styles.content}>
                    <h2 className="section-title">
                        <span className="text-gradient">About Me</span>
                    </h2>

                    <div className={styles.bio}>
                        <p>
                            I am a backend engineer passionate about building robust, scalable infrastructure.
                            While others focus on the visible layer, I thrive in the logic, data, and architecture
                            that makes applications performant and secure.
                        </p>
                        <p>
                            My expertise lies in designing microservices, optimizing database queries for high loads,
                            and implementing secure authentication flows. I believe that good backend code should be
                            invisible to the user—it just works, fast and reliably.
                        </p>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <h3><Counter to={3} suffix="+" /></h3>
                            <p>Years Experience</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3><Counter to={20} suffix="+" /></h3>
                            <p>Projects Deployed</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3><Counter to={99.9} decimals={1} suffix="%" /></h3>
                            <p>Uptime Focus</p>
                        </div>
                    </div>
                </div>

                <div className={styles.features}>
                    <div className={styles.featureCard}>
                        <Cpu className={styles.icon} size={32} />
                        <h3>Performance First</h3>
                        <p>Optimizing for low latency and high throughput in every API I design.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <Terminal className={styles.icon} size={32} />
                        <h3>Clean Code</h3>
                        <p>Writing maintainable, self-documenting code with strong typing and testing.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <Lock className={styles.icon} size={32} />
                        <h3>Security Focused</h3>
                        <p>Implementing best practices like OAuth, JWT, and data encryption by default.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
