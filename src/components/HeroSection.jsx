import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section
      className="section-block home-no-photo relative flex min-h-screen items-start pt-28 sm:pt-32 lg:pt-40 pb-8 sm:pb-12"
      id="home"
    >
      <div className="home-spot home-spot-a" aria-hidden="true" />
      <div className="home-spot home-spot-b" aria-hidden="true" />
      <div className="home-spot home-spot-c" aria-hidden="true" />

      <div className="home-outline" aria-hidden="true">
        <span>D</span>
        <span>E</span>
        <span>V</span>
      </div>

      <div className="grid w-full items-start gap-10 lg:grid-cols-[1fr]">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          className="relative z-10 max-w-3xl space-y-6"
        >
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-mono text-xs uppercase tracking-[0.24em] text-slate-400 sm:text-sm"
          >
            Portfolio de Desenvolvedor
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-4xl font-semibold leading-[1.03] text-white sm:text-5xl lg:text-7xl"
          >
            Sou Athirson Silva, desenvolvedor Fullstack.
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg font-medium text-slate-300 sm:text-xl"
          >
            Analise e Desenvolvimento de Sistemas
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl text-base leading-relaxed text-slate-300/90 sm:text-lg"
          >
            Transformo ideias em experiencias digitais funcionais, com foco em
            desenvolvimento web, clareza de produto e resolucao de problemas
            reais.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="button-primary">
              Ver projetos
            </a>
            <a href="#contact" className="button-secondary">
              Fale comigo
            </a>
            <a
              href={`${import.meta.env.BASE_URL}curriculo-athirson-silva.pdf`}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Baixar curriculo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
