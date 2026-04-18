import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section
      className="section-block home-no-photo relative flex min-h-screen items-start pt-32 sm:pt-36 lg:pt-44 pb-14 sm:pb-18 lg:pb-20"
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

      <div className="grid w-full items-start gap-12 lg:grid-cols-[1fr]">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          className="relative z-10 max-w-4xl space-y-8"
        >
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-slate-400/90 sm:text-sm"
          >
            Portfolio de Desenvolvedor
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl"
          >
            Sou Athirson Silva, desenvolvedor Fullstack.
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg font-medium tracking-[0.005em] text-slate-300 sm:text-xl"
          >
            Análise e Desenvolvimento de Sistemas
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl text-base leading-[1.82] tracking-[0.005em] text-slate-300/92 sm:text-lg"
          >
            Transformo ideias em experiências digitais funcionais, com foco em
            desenvolvimento web, clareza de produto e resolução de problemas.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="button-primary">
              Ver projetos
            </a>
            <a
              href={`${import.meta.env.BASE_URL}curriculo-athirson-silva.pdf`}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Baixar currículo
            </a>
            <a href="#contact" className="button-secondary">
              Fale comigo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
