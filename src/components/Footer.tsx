import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3>hamza.backend</h3>
                        <p>Building the digital infrastructure of tomorrow.</p>
                    </div>

                    <div className={styles.links}>
                        <h4>Connect</h4>
                        <div className={styles.socials}>
                            <a href="https://github.com/HamzaOubada2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/hamza-oubada-4aa94b340/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="oubham220@gmail.com" aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Hamza Oub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
