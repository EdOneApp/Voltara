import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold font-body transition-colors duration-200 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-volt text-night hover:bg-white",
  secondary: "border border-white/25 text-white hover:border-volt hover:text-volt",
  ghost: "text-white/80 hover:text-volt",
  light: "bg-night text-white hover:bg-graphite",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm min-h-11",
  lg: "px-7 py-3.5 text-base min-h-12",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  icon?: ReactNode;
}

export function Button({
  children,
  href,
  external,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  icon,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={classes}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-active:opacity-100 group-active:duration-0"
        style={{ background: "radial-gradient(circle, rgba(198,255,61,0.9) 0%, rgba(198,255,61,0) 70%)" }}
      />
      <span className="relative inline-flex items-center gap-2">
        {children}
        {icon}
      </span>
    </motion.span>
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
