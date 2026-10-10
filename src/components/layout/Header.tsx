import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle, ChevronDown, ArrowUpRight, Globe } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { navPanels, topLevelLinks } from "../../data/nav";
import { cn } from "../../lib/utils";

const toneDot: Record<string, string> = {
  volt: "bg-volt",
  cyan: "bg-cyan",
  solar: "bg-solar",
  go: "bg-go",
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenPanel(null);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/5 bg-night/70 py-1.5 text-xs text-steel backdrop-blur">
        <Container className="flex items-center justify-between">
          <div className="hidden items-center gap-4 sm:flex">
            <button className="flex items-center gap-1.5 hover:text-volt">
              <Globe size={13} /> Côte d'Ivoire
            </button>
            <span className="text-white/10">|</span>
            <button className="hover:text-volt">FR / EN</button>
          </div>
          <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
            <a href="https://wa.me/2250000000000" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-volt">
              <MessageCircle size={14} /> WhatsApp
            </a>
            <Link to="/espace-client" className="hover:text-volt">
              Espace client
            </Link>
          </div>
        </Container>
      </div>

      <div
        className={cn(
          "transition-colors duration-300",
          scrolled || mobileOpen ? "border-b border-white/10 bg-night/85 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <Container className="flex h-18 items-center justify-between gap-4 py-3">
          <Link to="/" className="flex shrink-0 items-center gap-2 font-display text-xl font-bold tracking-tight">
            <span className="voltara-gradient-text">VOLTARA</span>
          </Link>

          <nav className="hidden items-center xl:flex" onMouseLeave={() => setOpenPanel(null)}>
            {navPanels.map((panel) => (
              <div key={panel.key} className="relative" onMouseEnter={() => setOpenPanel(panel.key)}>
                <button
                  className={cn(
                    "flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium transition-colors",
                    openPanel === panel.key ? "text-volt" : "text-white/85 hover:text-volt",
                  )}
                >
                  {panel.label}
                  <ChevronDown size={13} className={cn("transition-transform", openPanel === panel.key && "rotate-180")} />
                </button>
              </div>
            ))}
            {topLevelLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-medium text-white/85 hover:text-volt"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2.5 xl:flex">
            <Button href="/demande-de-devis" variant="secondary" size="md" className="!px-4 !text-[13px]">
              Demander un devis
            </Button>
            <Button href="/devenir-partenaire" size="md" className="!px-4 !text-[13px]">
              Devenir partenaire
            </Button>
          </div>

          <button className="shrink-0 xl:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Ouvrir le menu">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </Container>

        <AnimatePresence>
          {openPanel && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setOpenPanel(openPanel)}
              onMouseLeave={() => setOpenPanel(null)}
              className="hidden border-t border-white/10 bg-night/95 backdrop-blur-xl xl:block"
            >
              <Container className="grid grid-cols-3 gap-10 py-8">
                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-5">
                  {navPanels
                    .find((p) => p.key === openPanel)
                    ?.links.map((link) => (
                      <Link key={link.href} to={link.href} className="group">
                        <p className="font-display text-sm font-semibold text-white group-hover:text-volt">{link.label}</p>
                        {link.description && <p className="mt-1 text-xs text-steel">{link.description}</p>}
                      </Link>
                    ))}
                </div>
                {(() => {
                  const panel = navPanels.find((p) => p.key === openPanel)!;
                  return (
                    <div className="glass rounded-2xl p-6">
                      <span className={cn("inline-flex h-2 w-2 rounded-full", toneDot[panel.tone])} />
                      <p className="mt-3 font-display text-lg font-semibold">{panel.highlight.label}</p>
                      <p className="mt-2 text-sm text-steel">{panel.highlight.description}</p>
                      <Link to={panel.highlight.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-volt">
                        Découvrir <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  );
                })()}
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-y-auto border-b border-white/10 bg-night xl:hidden"
            style={{ maxHeight: "calc(100vh - 100px)" }}
          >
            <Container className="flex flex-col gap-6 py-6">
              {navPanels.map((panel) => (
                <div key={panel.key}>
                  <p className="font-display text-sm font-semibold uppercase tracking-wide text-volt">{panel.label}</p>
                  <div className="mt-3 flex flex-col gap-3">
                    {panel.links.map((link) => (
                      <Link key={link.href} to={link.href} className="text-white/85">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-4">
                {topLevelLinks.map((l) => (
                  <Link key={l.href} to={l.href} className="text-white/85">
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <Button href="/demande-de-devis" variant="secondary">
                  Demander un devis
                </Button>
                <Button href="/devenir-partenaire">Devenir partenaire</Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
