import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "AI Engineer",
    company: "National Research Council Canada",
    period: "May 2024 - Present",
    location: "Ottawa, Ontario, Canada",
    description: [
      "Enhanced chatbot development through natural language understanding workflow in Semantic Kernel, Copilot Studio and LLMOps in Azure AI Studio, with retrieval augmented generation for the International Relations Office at NRC."
    ],
    logo: "/uploads/51497fc8-4ada-4264-ba2b-dde5c30902b1.png"
  },
  {
    title: "Kaggle Fellow",
    company: "Kaggle",
    period: "September 2024-Present",
    location: "Ottawa, Ontario, Canada",
    description: [
      "Developed front-end interfaces for LLM integration with Vertex AI, leveraging Groq and Gradio within a scalable RESTful architecture.",
      "Fine-tuned the Gemma 2B model with QLoRA, conducted post-training quantization, and applied Direct Preference Optimization with Argilla and Distillabel for medical transcripts, evaluating performance using weights & biases."
    ],
    logo: "/uploads/51aa9bbf-3506-4703-9a82-d8049e267cd9.png"
  },
  {
    title: "Senior Analyst",
    company: "Capgemini",
    period: "March 2023-August 2023",
    location: "Mumbai, Maharashtra, India",
    description: [
      "Enhanced software efficiency by 20% through SQL scripting improvements and agile issue resolution across Canada and APAC, ensuring SLA compliance, KPI reporting, and successful go-live support."
    ],
    logo: "/uploads/132d11e5-f296-477a-8190-08e043874f7a.png"
  },
  {
    title: "Analyst",
    company: "Capgemini",
    period: "August 2021-February 2023",
    location: "Mumbai, Maharashtra, India",
    description: [
      "Developed and maintained SQL scripts for data analysis and reporting, supporting business operations across multiple regions.",
      "Monitored middleware event logs in SAP MII, performed forecasting using ETL tools like Tableau, Power BI and Excel, and managed PCo modules across XML back-end systems in SOAP whilst streamlining SAP Process Integration by optimizing message distribution, creating packages, maintaining tables, scripting in SQL with HANA, and building forms with Adobe LiveCycle Designer, visualizing data using CDS views."
    ],
    logo: "/uploads/132d11e5-f296-477a-8190-08e043874f7a.png"
  }
];

const Experience = () => {
  return (
    <section className="section px-4 md:px-12" id="experience">
      <h2 className="heading text-3xl md:text-4xl lg:text-5xl flex items-center justify-center gap-4 relative">
        <Briefcase className="w-8 h-8 md:w-10 md:h-10 relative z-10 bg-white/50 rounded-full p-2 text-primary" />
        Experience
      </h2>
      <div className="space-y-12 md:space-y-16 relative">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className={`${index % 2 === 0 ? 'glass-primary' : 'glass-secondary'} p-4 md:p-6 lg:p-8 rounded-lg`}
              whileHover={{
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <motion.img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-semibold">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="text-left lg:text-right">
                  <p className="text-muted text-sm md:text-base">{exp.period}</p>
                  <p className="text-muted text-sm md:text-base">{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                {exp.description.map((desc, i) => (
                  <motion.li 
                    key={i} 
                    className="text-foreground/80"
                    whileHover={{
                      x: 10,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 20
                      }
                    }}
                  >
                    {desc}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;