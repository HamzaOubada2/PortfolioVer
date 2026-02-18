import { Mail, Linkedin, Github } from "lucide-react";
import styles from "./Contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="container section">
      <div className={styles.wrapper}>
        <h2 className="section-title">
          <span className="text-gradient">Get in Touch</span>
        </h2>

        <p className={styles.text}>
          Ideally I am looking for opportunities where I can solve complex
          backend challenges. Whether you have a question or just want to say
          hi, I'll try my best to get back to you!
        </p>

        <Link href="mailto:hello@example.com" className={styles.chatBtn}>
          <Mail size={20} />
          Say Hello
        </Link>

        <div className={styles.socials}>
          <Link
            href="https://github.com/HamzaOubada2"
            target="_blank"
            className={styles.socialLink}
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/HamzaOubada2"
            target="_blank"
            className={styles.socialLink}
          >
            <Github size={24} />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
