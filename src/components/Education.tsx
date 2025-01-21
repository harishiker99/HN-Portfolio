import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
  logo: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Engineering in Applied Data Science",
    institution: "University of Ottawa",
    period: "September 2023 - April 2025",
    location: "Ottawa, Ontario, Canada",
    details: [
      "Research focus on Large Language Models and Computer Vision",
      "Relevant Coursework: Fundamentals of applied data science, Data science applications, Web services, Electronic commerce technologies, Process modeling, mining and automation, natural language processing, ethics in AI"
    ],
    logo: "/uploads/e2e12a6f-5ab4-42ae-abfd-808a78c9b44c.png"
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "University of Mumbai",
    period: "August 2018 - June 2022",
    location: "Mumbai, Maharashtra, India",
    details: [
      "Coursework: Data Structures, Algorithms, Machine Learning, Database Management",
      "Relevant Coursework: Advanced Algorithms, Artificial Intelligence, Operating Systems, Computer Networks, Big Data Analytics, Computer Graphics, Web Design, Data warehouse and mining",
      "Publications: Multi-agent driving simulation game based on Reinforcement learning published in International Journal for Research in Applied Science & Engineering Technology (IJRASET) in May, 2021"
    ],
    logo: "/uploads/9648c709-134c-4a8d-b93c-7a31c4320772.png"
  }
];

const Education = () => {
  return (
    <section className="section px-4 md:px-12" id="education">
      <h2 className="heading text-3xl md:text-4xl lg:text-5xl flex items-center justify-center gap-4 relative">
        <GraduationCap className="w-8 h-8 md:w-10 md:h-10 relative z-10 bg-white/50 rounded-full p-2 text-primary" />
        Education
      </h2>
      <div className="space-y-8 md:space-y-12">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="glass-primary p-4 md:p-6 lg:p-8 rounded-lg"
            whileHover={{
              scale: 1.02,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <motion.img 
                  src={edu.logo} 
                  alt={`${edu.institution} logo`} 
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut"
                    }
                  }}
                />
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">{edu.degree}</h3>
                  <p className="text-accent font-medium">{edu.institution}</p>
                </div>
              </div>
              <div className="text-left md:text-right">
                <p className="text-muted text-sm md:text-base">{edu.period}</p>
                <p className="text-muted text-sm md:text-base">{edu.location}</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base lg:text-lg">
              {edu.details.map((detail, i) => (
                <motion.li 
                  key={i} 
                  className="text-foreground/80"
                  whileHover={{
                    x: 10,
                    scale: 1.01,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }
                  }}
                >
                  {detail}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;