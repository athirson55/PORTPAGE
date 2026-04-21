import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { technologiesByCategory } from "../data/portfolioData";
import { skillIcons } from "../data/skillIcons";

export default function TechnologiesSection() {
  return (
    <motion.section
      id="technologies"
      className="section-block py-24 sm:py-28 lg:py-32"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <SectionTitle
        eyebrow="Tecnologias"
        title="Stack que eu utilizo"
        subtitle="Tecnologias que aplico em projetos acadêmicos e pessoais, com foco em desenvolvimento web fullstack para vagas de estágio e júnior."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid gap-5 md:grid-cols-3 lg:gap-6"
      >
        {Object.entries(technologiesByCategory).map(([category, items]) => (
          <motion.article
            key={category}
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0 },
            }}
            className="glass-card tech-category-card rounded-2xl border border-white/10 p-5 text-center sm:text-left"
          >
            <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-white">
              {category}
            </h3>

            <div className="tech-category-pills mt-4 flex flex-wrap justify-center gap-2.5 sm:justify-start">
              {items.map((tech) => {
                const Icon = skillIcons[tech];

                return (
                  <motion.span
                    key={tech}
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="tech-pill inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/5 px-3.5 py-2 text-sm font-medium tracking-[0.02em] text-slate-200 transition-all duration-300 hover:border-white/26 hover:bg-white/10"
                  >
                    {Icon ? <Icon size={14} /> : null}
                    {tech}
                  </motion.span>
                );
              })}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
