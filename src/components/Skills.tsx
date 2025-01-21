import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

const skills = {
  "Programming Languages": [
    "Python", "SQL", "C", "C++", "HTML", "CSS", "JavaScript", "TypeScript", "SAP ABAP", "bash"
  ],
  "Frameworks": [
    "Scikit-learn", "NLTK", "NumPy", "Pandas", "Keras", "Matplotlib", "TensorFlow", "PyTorch",
    "Seaborn", "Flask", "Django", "Node", "React", "MONAI"
  ],
  "Tools": [
    "Git", "Unix", "SAP MI", "Figma", "MS Excel", "Power BI", "Docker", "Kubernetes", "AWS EC2",
    "Postman API", "Azure AI", "Semantic Kernel", "Copilot", "Vertex AI", "JAX", "Kaggle"
  ],
  "Databases": [
    "Oracle", "SQLite", "MongoDB", "PostgreSQL", "MySQL", "AWS S3", "Azure Blob Storage"
  ]
};

const Skills = () => {
  return (
    <section className="section px-4 md:px-12" id="skills">
      <h2 className="heading text-3xl md:text-4xl lg:text-5xl flex items-center justify-center gap-4 relative">
        <Rocket className="w-8 h-8 md:w-10 md:h-10 relative z-10 bg-white/50 rounded-full p-2 text-primary" />
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            className="glass p-4 md:p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
              }
            }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-2 md:px-3 py-1 bg-secondary rounded-full text-xs md:text-sm"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;