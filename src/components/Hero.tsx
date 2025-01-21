import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section">
      <div className="text-center space-y-8 w-full max-w-4xl px-4">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-8"
        >
          <img
            src="/uploads/2115e5c0-27d8-4ccc-9d4c-7b8908d6c421.png"
            alt="Profile picture"
            className="rounded-full object-cover w-full h-full shadow-lg"
          />
        </motion.div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="heading text-3xl md:text-4xl lg:text-5xl"
        >
          Harish Nair
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="subheading text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4"
        >
          AI Engineer at the National Research Council Canada, specializing in digital transformation 
          and innovation in applied data science.
        </motion.p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center gap-4 md:gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/harishker99"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary transition-colors flex items-center gap-2"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" />
            <span className="hidden md:inline">GitHub</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/harishnair04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary transition-colors flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            <span className="hidden md:inline">LinkedIn</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://huggingface.co/harishnair04"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary transition-colors flex items-center gap-2"
          >
            <span className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">🤗</span>
            <span className="hidden md:inline">HuggingFace</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:hnair102@uottawa.ca"
            className="p-2 rounded-full hover:bg-secondary transition-colors flex items-center gap-2"
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
            <span className="hidden md:inline">Email</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;