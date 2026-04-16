import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { crServices } from '../../data/crServices';

/* Benjamin Orellana - 2026/04/16 - Grilla editorial de servicios clickeables para navegar a páginas individuales. */
export default function ServicesShowcaseCR() {
  return (
    <section className="relative overflow-hidden bg-[#171614] py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(166,156,144,0.12),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 max-w-3xl sm:mb-12"
        >
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/72 backdrop-blur-sm">
            Servicios
          </span>

          <h2 className="mt-5 text-[2.8rem] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-[4rem] lg:text-[5rem]">
            Lo que
            <br />
            hacemos
          </h2>

          <p className="mt-6 max-w-2xl text-[1rem] leading-[1.9] text-white/74 sm:text-[1.08rem]">
            Explorá las áreas de trabajo de CR Estudio Creativo. Cada servicio
            tiene su propia página para comunicar mejor el enfoque, el valor y
            la propuesta de cada solución.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {crServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <Link
                to={`/servicios/${service.slug}`}
                className="group relative block overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_24px_70px_-28px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative aspect-[1/1.08] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                    <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/72 backdrop-blur-md">
                      {service.eyebrow}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className="text-[1.5rem] font-semibold leading-tight text-white sm:text-[1.65rem]">
                      {service.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/78 sm:text-[15px]">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
