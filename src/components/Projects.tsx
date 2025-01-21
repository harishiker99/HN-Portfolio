import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Medical Image Analysis with Deep Learning",
    description: "Developed and refined deep learning, vision language foundation models using MedSAM and nnU-Net for segmenting abdominal lesions and metastasis in CT scans.",
    tags: ["PyTorch", "Computer Vision", "Medical Imaging"]
  },
  {
    title: "Natural Language Processing System",
    description: "Applied word embeddings (N-gram, TF-IDF) on Project Gutenberg texts, utilizing stemming, lemmatization, and 10-fold cross-validation.",
    tags: ["NLP", "Machine Learning", "Python"]
  },
  {
    title: "CNN Image Classifier",
    description: "Built and deployed a CNN model for image classification utilizing the fastai library on PyTorch, Dockerfile image container and Kubernetes.",
    tags: ["Deep Learning", "Docker", "Kubernetes"]
  }
];

const Projects = () => {
  return (
    <section className="section px-4 md:px-12" id="projects">
      <h2 className="heading text-3xl md:text-4xl lg:text-5xl flex items-center justify-center gap-4 relative">
        <BookOpen className="w-8 h-8 md:w-10 md:h-10 relative z-10 bg-white/50 rounded-full p-2 text-primary" />
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="glass p-4 md:p-6 rounded-lg h-full flex flex-col"
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
            <h3 className="text-lg md:text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-foreground/80 mb-4 flex-grow text-sm md:text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="px-2 md:px-3 py-1 bg-accent/10 text-accent rounded-full text-xs md:text-sm"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;