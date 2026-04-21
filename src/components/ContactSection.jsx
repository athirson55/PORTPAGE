import { motion } from "framer-motion";
import { useState } from "react";
import { Mail } from "lucide-react";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setSubmitStatus({
        type: "error",
        message: "Preencha todos os campos antes de enviar.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const subject = encodeURIComponent(
        `Contato do portfólio - ${trimmedName}`,
      );
      const body = encodeURIComponent(
        `Nome: ${trimmedName}\nE-mail: ${trimmedEmail}\n\nMensagem:\n${trimmedMessage}`,
      );
      window.location.href = `mailto:athirsonsilva55@gmail.com?subject=${subject}&body=${body}`;

      setSubmitStatus({
        type: "success",
        message:
          "Seu cliente de e-mail foi aberto. Se não abrir, use os links de contato ao lado.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Não foi possível abrir o cliente de e-mail. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="section-block py-24 sm:py-28 lg:py-32"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <SectionTitle
        eyebrow="Contato"
        title="Vamos construir algo incrível"
        subtitle="Envie uma mensagem para conversarmos sobre ideias, produtos e soluções."
      />

      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:mt-5">
        Retorno em até 24h úteis.
      </p>

      <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-8">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="glass-card contact-form-card space-y-4 rounded-2xl border border-white/10 p-6 shadow-[0_8px_26px_rgba(0,0,0,0.22)] sm:p-7"
        >
          <label className="block text-sm font-medium text-slate-300">
            Nome
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="input-surface mt-2 w-full rounded-lg border border-white/12 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition-colors duration-200 focus:border-white/35 focus:ring-2 focus:ring-white/12"
              placeholder="Seu nome"
            />
          </label>

          <label className="block text-sm font-medium text-slate-300">
            E-mail
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="input-surface mt-2 w-full rounded-lg border border-white/12 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition-colors duration-200 focus:border-white/35 focus:ring-2 focus:ring-white/12"
              placeholder="você@email.com"
            />
          </label>

          <label className="block text-sm font-medium text-slate-300">
            Mensagem
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="input-surface mt-2 w-full resize-none rounded-lg border border-white/12 bg-slate-900/50 px-4 py-3 text-slate-100 outline-none transition-colors duration-200 focus:border-white/35 focus:ring-2 focus:ring-white/12"
              placeholder="Conte sobre o seu projeto"
            />
          </label>

          {submitStatus.message ? (
            <p
              className={`text-sm ${
                submitStatus.type === "success"
                  ? "text-emerald-300"
                  : "text-rose-300"
              }`}
              role="status"
              aria-live="polite"
            >
              {submitStatus.message}
            </p>
          ) : null}

          <button
            type="submit"
            className="button-primary w-full sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </button>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="glass-card contact-social-card rounded-2xl border border-white/10 p-6 shadow-[0_8px_26px_rgba(0,0,0,0.22)] sm:p-7"
        >
          <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-white">
            Redes sociais
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Você também pode me encontrar nestas plataformas.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <motion.a
              href="mailto:athirsonsilva55@gmail.com"
              className="social-link inline-flex items-center gap-3 rounded-xl border border-white/12 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/35"
              whileHover={{ x: 4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} />
              E-mail
            </motion.a>
            <motion.a
              href="https://github.com/athirson55"
              target="_blank"
              rel="noreferrer"
              className="social-link inline-flex items-center gap-3 rounded-xl border border-white/12 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/35"
              whileHover={{ x: 4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <SiGithub size={18} />
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/athirson-silva-b4542721b"
              target="_blank"
              rel="noreferrer"
              className="social-link inline-flex items-center gap-3 rounded-xl border border-white/12 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/35"
              whileHover={{ x: 4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaLinkedin size={18} />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://wa.me/5588981592554"
              target="_blank"
              rel="noreferrer"
              className="social-link inline-flex items-center gap-3 rounded-xl border border-white/12 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-100 transition-colors duration-200 hover:border-white/35"
              whileHover={{ x: 4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <SiWhatsapp size={18} />
              WhatsApp
            </motion.a>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
}
