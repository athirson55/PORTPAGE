import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-block py-20 sm:py-24">
      <SectionTitle
        eyebrow="Projetos"
        title="Projetos em destaque"
        subtitle="Uma selecao de projetos com foco em resolucao pratica de problemas, pensamento sistemico e implementacao de software."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.12 }}
        className="grid gap-5 md:grid-cols-2 lg:gap-6"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
            className="glass-card project-card group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 p-6 shadow-[0_8px_26px_rgba(0,0,0,0.22)]"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-white/5 blur-3xl transition-all duration-500 group-hover:bg-white/8" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between gap-4">
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
              <p className="max-w-md text-sm leading-relaxed text-slate-300/85">
                {project.description}
              </p>
            </div>

            <a
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : "_self"}
              rel={project.link.startsWith("http") ? "noreferrer" : undefined}
              className="project-cta relative z-10 mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/14 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 transition-all duration-300 hover:border-white/24 hover:bg-white/10"
            >
              {project.buttonLabel}
              <ArrowUpRight size={16} />
            </a>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
