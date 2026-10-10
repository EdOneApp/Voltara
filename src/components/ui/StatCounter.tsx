import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useReducedMotion } from "framer-motion";

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      if (ref.current) ref.current.textContent = `${prefix}${value.toLocaleString("fr-FR")}${suffix}`;
      return;
    }
    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.round(latest).toLocaleString("fr-FR")}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [isInView, value, suffix, prefix, motionValue, prefersReducedMotion]);

  return (
    <div className="text-center sm:text-left">
      <span ref={ref} className="font-mono text-[clamp(2.2rem,1.6rem+2.5vw,3.6rem)] font-semibold text-white">
        {prefix}0{suffix}
      </span>
      <p className="mt-2 text-sm text-steel">{label}</p>
    </div>
  );
}
