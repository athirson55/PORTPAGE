import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/portfolioData";
import { skillIcons } from "../data/skillIcons";

const skillDetails = {
  HTML: { note: "Estrutura semântica e acessível" },
  CSS: { note: "Layout responsivo e refinamento visual" },
  JavaScript: {
    note: "Lógica, interatividade e manipulação de estado",
  },
  React: { note: "Componentização e fluxo de interface" },
  "Node.js": { note: "Rotas, APIs e serviços backend" },
  Python: { note: "Automação e fundamentos de backend" },
  C: { note: "Base de lógica e estrutura de dados" },
  Git: { note: "Versionamento e fluxo de colaboração" },
};

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="section-block py-20 sm:py-24 lg:py-28"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <SectionTitle
        eyebrow="Sobre mim"
        title="Aprender, construir, evoluir"
        subtitle="Tenho foco em desenvolvimento fullstack com interfaces claras, componentes reutilizáveis e integrações backend. Também aplico princípios de UX/UI Design no Figma para estruturar fluxos e melhorar a experiência do usuário."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.08 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
      >
        {skills.map((skill) => {
          const Icon = skillIcons[skill];
          const detail = skillDetails[skill] ?? {
            note: "Evolução contínua",
          };

          return (
            <motion.article
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 230, damping: 22 }}
              className="glass-card skill-card group flex min-h-[122px] flex-col items-center gap-4 rounded-[1.35rem] border border-white/10 p-5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.22)] sm:flex-row sm:text-left"
            >
              <span className="skill-icon inline-flex h-11 w-11 items-center justify-center rounded-[0.95rem] border border-white/10 bg-white/7 text-slate-200 transition-transform duration-300 group-hover:scale-105">
                <Icon size={18} />
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold tracking-[0.01em] text-slate-100">
                  {skill}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {detail.note}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
