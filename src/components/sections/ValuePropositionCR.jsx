import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Layers3, Sparkles, TrendingUp } from 'lucide-react';

/*
 * Programador: Benjamin Orellana
 * Fecha Creación: 24 / 03 / 2026
 * Versión: 1.0
 *
 * Descripción:
 * Sección de propuesta de valor para CR - Estudio Creativo.
 * Busca explicar qué transforma CR en una marca, sin listar servicios
 * de forma técnica. Está pensada para ir debajo del hero principal.
 *
 * Tema: Home / Propuesta de valor
 * Capa: Frontend
 */

const VALUE_ITEMS = [
  {
    id: 1,
    icon: Eye,
    title: 'Identidad más clara',
    description:
      'Ordenamos visualmente tu marca para que se vea coherente, reconocible y mejor definida.'
  },
  {
    id: 2,
    icon: Layers3,
    title: 'Contenido con dirección',
    description:
      'Cada pieza responde a una intención: comunicar mejor, conectar con tu audiencia y sostener presencia.'
  },
  {
    id: 3,
    icon: Sparkles,
    title: 'Imagen más profesional',
    description:
      'Foto, video y recursos visuales pensados para elevar la percepción de tu negocio.'
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'Presencia que acompaña el crecimiento',
    description:
      'No se trata solo de verse bien, sino de construir una marca sólida, consistente y preparada para crecer.'
  }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' }
  }
};

export default function ValuePropositionCR() {
  return (
    <section id="propuesta-valor" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(23,22,20,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,22,20,0.14)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute left-[-8%] top-[-20%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(166,156,144,0.12)_0%,_rgba(255,255,255,0)_70%)]" />
        <div className="absolute bottom-[-18%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(97,87,75,0.08)_0%,_rgba(255,255,255,0)_72%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="inline-flex rounded-full border border-[#A69C90]/28 bg-[#E5E0D7]/45 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#61574B]"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Propuesta de valor
          </span>

          <h2
            className="mt-6 text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#171614] sm:text-[2.7rem] lg:text-[3.35rem]"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            No hacemos solo contenido. Construimos percepción.
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-[1rem] leading-8 text-[#171614]/70 sm:text-[1.05rem]"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Trabajamos la imagen, el mensaje y la presencia de tu marca para que
            se vea más clara, más profesional y más coherente en cada punto de
            contacto.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5"
        >
          {VALUE_ITEMS.map((entry) => {
            const Icon = entry.icon;

            return (
              <motion.article
                key={entry.id}
                variants={item}
                className="group relative overflow-hidden rounded-[28px] border border-[#A69C90]/18 bg-[#FFFFFF]/88 p-6 shadow-[0_18px_50px_-34px_rgba(23,22,20,0.18)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#61574B]/24 hover:shadow-[0_24px_60px_-30px_rgba(23,22,20,0.22)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#61574B]/24 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#A69C90]/18 bg-[#E5E0D7]/58 text-[#171614] transition-transform duration-300 group-hover:scale-[1.04]">
                  <Icon className="h-5 w-5" strokeWidth={1.9} />
                </div>

                <h3
                  className="text-[1.02rem] font-semibold tracking-[-0.02em] text-[#171614]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {entry.title}
                </h3>

                <p
                  className="mt-3 text-[0.96rem] leading-7 text-[#171614]/68"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {entry.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.1, duration: 0.55, ease: 'easeOut' }}
          className="mx-auto mt-10 max-w-3xl text-center"
        >
          <p
            className="text-sm leading-7 text-[#61574B]"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Una marca no crece solo por publicar más. Crece cuando se ve mejor,
            comunica con claridad y sostiene una identidad consistente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
