import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="section-block py-24 sm:py-28 lg:py-32"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <SectionTitle
        eyebrow="Projetos"
        title="Projetos em destaque"
        subtitle="Uma seleção de projetos com foco em resolução prática de problemas, pensamento sistêmico e implementação de software."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
        className="grid gap-6 md:grid-cols-2 lg:gap-7"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="glass-card project-card group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 p-6 text-center shadow-[0_8px_26px_rgba(0,0,0,0.22)] sm:text-left"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-white/5 blur-3xl transition-all duration-500 group-hover:bg-white/8" />

            <div className="relative z-10 space-y-4">
              <div className="project-meta flex items-center justify-center gap-4 sm:justify-between">
                <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
                  Projeto
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  01
                </span>
              </div>

              <h3 className="font-display text-[1.45rem] font-semibold tracking-[-0.03em] text-white">
                {project.title}
              </h3>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-300/85 sm:mx-0">
                {project.description}
              </p>
            </div>

            <a
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : "_self"}
              rel={project.link.startsWith("http") ? "noreferrer" : undefined}
              className="project-cta relative z-10 mx-auto mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/14 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 transition-all duration-300 hover:border-white/24 hover:bg-white/10 sm:mx-0"
            >
              {project.buttonLabel}
              <ArrowUpRight size={16} />
            </a>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
