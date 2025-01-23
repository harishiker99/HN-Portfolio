import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import { motion } from "framer-motion";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

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
  const phrases = [
    "Data Scientist.",
    "ML Engineer.",
    "Jedi, like my father before me.",
  ];
  
  const animatedText = useTypingAnimation(phrases);
  return (
    <>
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-violet-50 to-violet-100 dark:from-violet-700 dark:to-violet-800">
      <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="min-h-screen mt-[-20vh]" // Adjust this value as needed
        >
          <motion.div variants={fadeInUp}>
            <Hero />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8 mt-[-10vh]"
              >
                <h1 className="text-4xl md:text-4xl font-sans font-bold tracking-tight text-violet-900 dark:text-violet-50">
                  <span className="inline-block min-h-[1.5em]">
                    I am a {animatedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="min-h-screen"
      >
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
    </>
  );
};

export default Index;