import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Container } from "./Container";

export function Section({
  children,
  className,
  containerClassName,
  tone = "dark",
  size = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "dark" | "graphite" | "light";
  size?: "default" | "narrow" | "wide";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-24 lg:py-28",
        tone === "dark" && "bg-night text-white",
        tone === "graphite" && "bg-graphite text-white",
        tone === "light" && "bg-ivory text-night",
        className,
      )}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
