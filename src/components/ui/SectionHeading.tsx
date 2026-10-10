import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-[0.18em]",
            tone === "dark" ? "border-white/15 text-volt" : "border-night/15 text-volt-dim",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-volt" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-balance font-display font-semibold leading-[1.08] tracking-tight",
          "text-[clamp(1.9rem,1.3rem+2.6vw,3.2rem)]",
          tone === "dark" ? "text-white" : "text-night",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-balance text-lg leading-relaxed",
            tone === "dark" ? "text-steel" : "text-night/70",
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
