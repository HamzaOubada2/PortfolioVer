import Link from "next/link";
import { ArrowRight, Database, Server, Shield } from "lucide-react";
import Scene3D from "@/components/Scene3D";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Scene3D />
      <div className={styles.backgroundGrid} />

      <div className="container">
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Available for hire
          </div>

          <h1 className={styles.title}>
            Architecting <span className="text-gradient">Scalable</span> <br />
            Backend Systems
          </h1>

          <p className={styles.description}>
            Hi, I'm <span className={styles.highlight}>Hamza Oub</span>. A
            backend engineer focused on building high-performance APIs, secure
            databases
          </p>

          <div className={styles.actions}>
            <Link href="#projects" className={styles.primaryBtn}>
              View Projects
            </Link>
            <Link href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </Link>
          </div>

          <div className={styles.techStack}>
            <div className={styles.techItem}>
              <Server size={20} />
              <span>System Design</span>
            </div>
            <div className={styles.techItem}>
              <Database size={20} />
              <span>Database Architecture</span>
            </div>
            <div className={styles.techItem}>
              <Shield size={20} />
              <span>API Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
