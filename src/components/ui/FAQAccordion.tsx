import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items, tone = "dark" }: { items: FAQItem[]; tone?: "dark" | "light" }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y", tone === "dark" ? "divide-white/10" : "divide-night/10")}>
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="py-4">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={open}
            >
              <span className={cn("font-display text-lg font-medium", tone === "dark" ? "text-white" : "text-night")}>
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border",
                  tone === "dark" ? "border-white/15 text-volt" : "border-night/15 text-volt-dim",
                )}
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className={cn("pt-3 pr-10 leading-relaxed", tone === "dark" ? "text-steel" : "text-night/70")}>
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
