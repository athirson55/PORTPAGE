import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/portfolioData";
import { skillIcons } from "../data/skillIcons";

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="section-block py-20 sm:py-24">
      <SectionTitle
        eyebrow="Tecnologias"
        title="Stack que eu utilizo"
        subtitle="Ferramentas e linguagens modernas para criar interfaces responsivas e sistemas robustos."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.07 }}
        className="flex flex-wrap gap-3 sm:gap-3.5"
      >
        {skills.map((tech) => (
          <motion.span
            key={tech}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              show: { opacity: 1, scale: 1 },
            }}
            className="tech-pill inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/5 px-4 py-2 text-sm font-medium tracking-[0.02em] text-slate-200 transition-all duration-300 hover:border-white/26 hover:bg-white/10"
          >
            {(() => {
              const Icon = skillIcons[tech];
              return Icon ? <Icon size={14} /> : null;
            })()}
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
