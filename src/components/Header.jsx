import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "Início", href: "#home", id: "home" },
  { label: "Sobre", href: "#about", id: "about" },
  { label: "Formação", href: "#education", id: "education" },
  { label: "Projetos", href: "#projects", id: "projects" },
  { label: "Contato", href: "#contact", id: "contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.45, 0.65],
        rootMargin: "-35% 0px -55% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="site-header fixed left-0 right-0 top-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="site-header-inner mx-auto flex w-full max-w-[1180px] items-center justify-between py-6 lg:py-7">
        <a
          href="#home"
          className="font-display text-[1.05rem] font-semibold tracking-[-0.02em] text-slate-100 transition-colors duration-300 hover:text-white"
        >
          Athirson Silva
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link px-1 py-1 text-[0.83rem] font-medium transition-all duration-300 ${
                  isActive
                    ? "is-active text-white"
                    : "text-slate-300/90 hover:text-slate-100"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-9 w-9 touch-manipulation items-center justify-center rounded-md border border-white/15 bg-slate-900/45 text-slate-100 transition-colors duration-300 hover:border-white/30 hover:bg-slate-800/65 lg:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="pointer-events-auto mx-auto mb-2 w-full max-w-[1180px] rounded-xl border border-white/12 bg-slate-950/72 p-3 shadow-[0_10px_26px_rgba(2,6,23,0.48)] backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors duration-300 hover:bg-white/7"
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
