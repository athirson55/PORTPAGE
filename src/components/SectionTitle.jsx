import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-10 sm:mb-12"
    >
      <span className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.55rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
