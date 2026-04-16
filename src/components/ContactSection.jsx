import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section
      id="contact"
      className="section-block pb-24 pt-20 sm:pb-28 sm:pt-24"
    >
      <SectionTitle
        eyebrow="Contato"
        title="Vamos construir algo incrivel"
        subtitle="Envie uma mensagem para conversarmos sobre ideias, produtos e solucoes."
      />

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-6">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="glass-card space-y-4 rounded-2xl border border-white/10 p-6 shadow-[0_8px_26px_rgba(0,0,0,0.22)] sm:p-7"
        >
          <label className="block text-sm font-medium text-slate-300">
            Nome
            <input
              type="text"
              required
              className="input-surface mt-2 w-full rounded-lg border border-white/12 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition-colors duration-200 focus:border-white/35 focus:ring-2 focus:ring-white/12"
              placeholder="Seu nome"
            />
          </label>

          <label className="block text-sm font-medium text-slate-300">
            E-mail
            <input
              type="email"
              required
              className="input-surface mt-2 w-full rounded-lg border border-white/12 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition-colors duration-200 focus:border-white/35 focus:ring-2 focus:ring-white/12"
              placeholder="voce@email.com"
            />
          </label>

          <label className="block text-sm font-medium text-slate-300">
            Mensagem
            <textarea
              required
              rows={5}
              className="input-surface mt-2 w-full resize-none rounded-lg border border-white/12 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition-colors duration-200 focus:border-white/35 focus:ring-2 focus:ring-white/12"
              placeholder="Conte sobre o seu projeto"
            />
          </label>

          <button type="submit" className="button-primary w-full sm:w-auto">
            Enviar mensagem
          </button>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="glass-card rounded-2xl border border-white/10 p-6 shadow-[0_8px_26px_rgba(0,0,0,0.22)] sm:p-7"
        >
          <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-white">
            Redes sociais
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Voce tambem pode me encontrar nestas plataformas.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="mailto:athirsonsilva55@gmail.com"
              className="social-link inline-flex items-center gap-3 rounded-xl border border-white/12 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/35"
            >
              <Mail size={18} />
              E-mail
            </a>
            <a
              href="https://github.com/athirson55"
              target="_blank"
              rel="noreferrer"
              className="social-link inline-flex items-center gap-3 rounded-xl border border-white/12 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/35"
            >
              <SiGithub size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/athirson-silva-b4542721b"
              target="_blank"
              rel="noreferrer"
              className="social-link inline-flex items-center gap-3 rounded-xl border border-white/12 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/35"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://wa.me/5588981592554"
              target="_blank"
              rel="noreferrer"
              className="social-link inline-flex items-center gap-3 rounded-xl border border-white/12 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/35"
            >
              <SiWhatsapp size={18} />
              WhatsApp
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
