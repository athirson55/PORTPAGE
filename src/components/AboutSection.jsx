import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/portfolioData";
import { skillIcons } from "../data/skillIcons";

export default function AboutSection() {
  return (
    <section id="about" className="section-block py-12 sm:py-16">
      <SectionTitle
        eyebrow="Sobre mim"
        title="Aprender, construir, evoluir"
        subtitle="Comecei a aprender programacao com curiosidade e rapidamente avancei para o desenvolvimento de sistemas. Cada projeto e uma chance de melhorar arquitetura, escrever codigo mais limpo e evoluir com consistencia."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.08 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
      >
        {skills.map((skill) => {
          const Icon = skillIcons[skill];
          return (
            <motion.article
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              className="glass-card skill-card group flex min-h-[100px] items-center gap-4 rounded-[1.35rem] border border-white/10 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
            >
              <span className="skill-icon inline-flex h-11 w-11 items-center justify-center rounded-[0.95rem] border border-white/10 bg-white/7 text-slate-200 transition-transform duration-300 group-hover:scale-105">
                <Icon size={18} />
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold tracking-[0.01em] text-slate-100">
                  {skill}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Habilidade principal
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
