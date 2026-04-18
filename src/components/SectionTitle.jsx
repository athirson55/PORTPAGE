import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 max-w-4xl sm:mb-14 lg:mb-16"
    >
      <span className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300/90">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold leading-[1.07] tracking-[-0.025em] text-white sm:text-4xl lg:text-[2.7rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-[1.82] tracking-[0.005em] text-slate-300/92 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
