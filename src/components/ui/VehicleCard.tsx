import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Battery, Zap } from "lucide-react";
import type { Vehicle } from "../../data/vehicles";
import { formatXOF } from "../../lib/utils";
import { Photo } from "./Photo";
import { Badge } from "./Badge";
import { vehiclePhotos } from "../../data/images";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-graphite"
    >
      <Link to={`/vehicules/${vehicle.slug}`} className="relative block p-3">
        <Photo
          src={vehiclePhotos[vehicle.slug]}
          alt={vehicle.name}
          ratio="aspect-[4/3]"
          className="rounded-xl"
        />
        {vehicle.badge && (
          <div className="absolute left-5 top-5">
            <Badge tone={vehicle.badge === "Promo" ? "solar" : "volt"}>{vehicle.badge}</Badge>
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col px-5 pb-5">
        <p className="font-mono text-[11px] uppercase tracking-wide text-steel">{vehicle.range}</p>
        <Link to={`/vehicules/${vehicle.slug}`}>
          <h3 className="mt-1 font-display text-lg font-semibold text-white group-hover:text-volt">{vehicle.name}</h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-steel">{vehicle.tagline}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-steel">
          <span className="flex items-center gap-1">
            <Battery size={14} className="text-cyan" /> {vehicle.autonomyKm} km
          </span>
          <span className="flex items-center gap-1">
            <Zap size={14} className="text-volt" /> {vehicle.swapCompatible ? "Swap" : vehicle.chargeTime.split(" ")[0]}
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">
          <div>
            <p className="font-mono text-base font-semibold text-white">{formatXOF(vehicle.priceFrom)}</p>
            <p className="text-xs text-steel">ou {formatXOF(vehicle.dailyPayment)} / jour</p>
          </div>
          <Link
            to={`/vehicules/${vehicle.slug}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white group-hover:border-volt group-hover:text-volt"
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
