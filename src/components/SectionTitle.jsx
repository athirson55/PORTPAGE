import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="section-title-block mx-auto mb-10 max-w-4xl text-center sm:mb-14 sm:text-left lg:mb-16"
    >
      <span className="section-title-eyebrow mb-3 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300/90 sm:mb-4 sm:px-3.5 sm:text-[11px] sm:tracking-[0.24em]">
        {eyebrow}
      </span>
      <h2 className="section-title-heading font-display text-[1.85rem] font-semibold leading-[1.09] tracking-[-0.023em] text-white sm:text-4xl sm:leading-[1.07] lg:text-[2.7rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="section-title-subtitle mx-auto mt-3 max-w-2xl text-[0.98rem] leading-[1.72] tracking-[0.005em] text-slate-300/92 sm:mx-0 sm:mt-4 sm:text-lg sm:leading-[1.82]">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
