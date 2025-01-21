import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Index = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={stagger}
      className="min-h-screen"
    >
      <motion.div variants={fadeInUp}>
        <Hero />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Education />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Experience />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Skills />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Projects />
      </motion.div>
    </motion.div>
  );
};

export default Index;