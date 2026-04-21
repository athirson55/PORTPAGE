import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section
      className="section-block home-no-photo relative flex min-h-[74vh] items-start pt-16 pb-8 sm:min-h-[84vh] sm:pt-24 sm:pb-14 lg:min-h-screen lg:pt-28 lg:pb-20"
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
          className="hero-content relative z-10 mx-auto max-w-4xl space-y-8 text-center sm:mx-0 sm:text-left"
        >
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-kicker font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-400/90 sm:text-sm sm:tracking-[0.3em]"
          >
            Portfolio de Desenvolvedor
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-title mx-auto max-w-3xl font-display text-[2.05rem] font-semibold leading-[1.05] tracking-[-0.028em] text-white sm:mx-0 sm:text-5xl lg:text-7xl"
          >
            Sou Athirson Silva, desenvolvedor Fullstack.
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-subtitle text-base font-medium tracking-[0.005em] text-slate-300 sm:text-xl"
          >
            Análise e Desenvolvimento de Sistemas
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-copy mx-auto max-w-2xl text-[0.98rem] leading-[1.72] tracking-[0.005em] text-slate-300/92 sm:mx-0 sm:text-lg sm:leading-[1.82]"
          >
            Transformo ideias em experiências digitais funcionais, com foco em
            desenvolvimento web, clareza de produto e resolução de problemas.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-actions flex flex-wrap justify-center gap-2.5 sm:justify-start sm:gap-4"
          >
            <a
              href="#projects"
              className="button-primary w-full justify-center sm:w-auto"
            >
              Ver projetos
            </a>
            <a
              href={`${import.meta.env.BASE_URL}curriculo-athirson-silva.pdf`}
              target="_blank"
              rel="noreferrer"
              className="button-secondary w-full justify-center sm:w-auto"
            >
              Baixar currículo
            </a>
            <a
              href="#contact"
              className="button-secondary w-full justify-center sm:w-auto"
            >
              Fale comigo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
