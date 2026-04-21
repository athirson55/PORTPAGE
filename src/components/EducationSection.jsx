import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { education } from "../data/portfolioData";

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      className="section-block py-24 sm:py-28 lg:py-32"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <SectionTitle
        eyebrow="Formação"
        title="Educação e Aprendizado"
        subtitle="Cursando Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento web fullstack e soluções práticas."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12 }}
        className="space-y-5"
      >
        {education.map((edu, index) => (
          <motion.article
            key={index}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 230, damping: 22 }}
            className="glass-card relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 p-6 shadow-[0_8px_26px_rgba(0,0,0,0.22)] sm:p-7"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10">
              <div className="education-card-top flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-white">
                    {edu.course}
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    {edu.institution}
                  </p>
                  <p className="mt-2 text-xs font-medium text-slate-400">
                    {edu.semester}
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                  {edu.status}
                </span>
              </div>

              <div className="education-card-date mt-4 flex items-center gap-2 text-xs text-slate-400">
                <span className="font-mono">{edu.startDate}</span>
                <span>—</span>
                <span className="font-mono">{edu.endDate}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-7 text-center sm:p-9"
      >
        <p className="text-sm leading-relaxed text-slate-300">
          🎯{" "}
          <span className="font-semibold text-white">
            Buscando oportunidades
          </span>{" "}
          como{" "}
          <span className="text-white">Estagiário ou Desenvolvedor Jr.</span>{" "}
          para aplicar conhecimentos em projetos reais e crescer
          profissionalmente.
        </p>
      </motion.div>
    </motion.section>
  );
}
