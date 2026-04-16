import { Mail } from "lucide-react";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-shell mt-12 border-t border-white/10">
      <div className="content-wrap container mx-auto px-4 py-10 text-center sm:px-6 lg:px-8">
        <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
          Athirson Silva
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-300/85">
          Desenvolvido com cuidado para um portfolio de desenvolvedor moderno e
          de alta performance.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="mailto:athirsonsilva55@gmail.com"
            className="footer-social"
            aria-label="E-mail"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/athirson55"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
            aria-label="GitHub"
          >
            <SiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/athirson-silva-b4542721b"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://wa.me/5588981592554"
            target="_blank"
            rel="noreferrer"
            className="footer-social"
            aria-label="WhatsApp"
          >
            <SiWhatsapp size={18} />
          </a>
        </div>

        <p className="mt-6 text-xs tracking-[0.08em] text-slate-400/90">
          © {new Date().getFullYear()} Athirson Silva. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
