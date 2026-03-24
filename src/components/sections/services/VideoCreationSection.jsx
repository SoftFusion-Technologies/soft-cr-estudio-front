import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Clapperboard,
  Film,
  Scissors,
  WandSparkles
} from 'lucide-react';

/*
 * Programador: Benjamin Orellana
 * Fecha Creación: 24 / 03 / 2026
 * Versión: 2.0
 *
 * Descripción:
 * Rediseño UX/UI de la sección Creación y edición de videos.
 * Se elimina el embed de video y se reemplaza por una composición
 * visual más editorial, moderna, equilibrada y responsiva.
 *
 * Tema: Home / Servicios / Creación y edición de videos
 * Capa: Frontend
 */

const VIDEO_POINTS = [
  {
    id: '01',
    icon: Clapperboard,
    title: 'Idea y producción',
    description:
      'Pensamos piezas con dirección visual y con una intención clara desde el inicio.'
  },
  {
    id: '02',
    icon: Scissors,
    title: 'Edición con ritmo',
    description:
      'El material se trabaja para que se sienta dinámico, prolijo y alineado a la marca.'
  },
  {
    id: '03',
    icon: WandSparkles,
    title: 'Resultado más atractivo',
    description:
      'Buscamos que cada video eleve la percepción del negocio y mejore cómo se presenta.'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export default function VideoCreationSection() {
  return (
    <section
      id="edicion-video"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#0f0f0e_0%,#171614_56%,#211f1b_100%)] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute left-[-10%] top-[4%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(166,156,144,0.18)_0%,_rgba(23,22,20,0)_72%)]" />
        <div className="absolute right-[-10%] top-[22%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,_rgba(229,224,215,0.08)_0%,_rgba(23,22,20,0)_72%)]" />
        <div className="absolute bottom-[-18%] left-[28%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(166,156,144,0.10)_0%,_rgba(23,22,20,0)_74%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-28">
        {/* Intro centrada */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          custom={0}
          variants={fadeUp}
          className="mx-auto max-w-4xl text-center"
        >
          <span
            className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E5E0D7]"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Foto & Video · Creación y edición de videos
          </span>

          <h2
            className="mt-6 text-[2.35rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.2rem] lg:text-[4.45rem]"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Un buen video no solo se ve bien.
            <span
              className="ml-2 inline-block text-[#A69C90]"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              sostiene una idea
            </span>
            .
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-[1rem] leading-8 text-white/72 sm:text-[1.05rem]"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Creamos y editamos piezas visuales para que una marca se vea más
            profesional, más atractiva y más consistente en redes, campañas y
            presentaciones.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {VIDEO_POINTS.map((item) => (
              <div
                key={item.id}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/70"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                <span className="text-[#A69C90]">{item.id}</span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Grid principal */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {VIDEO_POINTS.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.article
                key={point.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.22 }}
                custom={0.08 + index * 0.08}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07)_0%,rgba(166,156,144,0.05)_100%)] p-6 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#A69C90]/24 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.09)_0%,rgba(166,156,144,0.07)_100%)]"
              >
                <div className="pointer-events-none absolute right-[-20px] top-[-20px] h-28 w-28 rounded-full bg-[#A69C90]/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#E5E0D7] transition-all duration-300 group-hover:border-[#A69C90]/24 group-hover:bg-white/[0.08]">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </div>

                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A69C90]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {point.id}
                  </span>
                </div>

                <h3
                  className="mt-6 text-[1.08rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.12rem]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {point.title}
                </h3>

                <p
                  className="mt-3 text-[0.96rem] leading-7 text-white/68"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {point.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Franja visual inferior */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          custom={0.14}
          variants={fadeUp}
          className="mt-8 overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] shadow-[0_28px_90px_-48px_rgba(0,0,0,0.58)]"
        >
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Visual abstracto */}
            <div className="relative min-h-[320px] overflow-hidden border-b border-white/8 p-6 sm:min-h-[360px] sm:p-8 lg:border-b-0 lg:border-r lg:border-white/8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(166,156,144,0.16)_0%,rgba(166,156,144,0)_52%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_68%,rgba(229,224,215,0.08)_0%,rgba(229,224,215,0)_46%)]" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute left-[10%] top-[16%] rounded-[24px] border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl"
              >
                <div
                  className="text-[11px] uppercase tracking-[0.24em] text-[#A69C90]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  01
                </div>
                <div
                  className="mt-2 text-sm text-white"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Idea y producción
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 7.2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute right-[10%] top-[18%] rounded-[24px] border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-xl"
              >
                <div
                  className="text-[11px] uppercase tracking-[0.24em] text-[#A69C90]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  02
                </div>
                <div
                  className="mt-2 text-sm text-white"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Edición con ritmo
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{
                  duration: 6.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute bottom-[14%] left-1/2 -translate-x-1/2 rounded-[24px] border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-xl"
              >
                <div
                  className="text-[11px] uppercase tracking-[0.24em] text-[#A69C90]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  03
                </div>
                <div
                  className="mt-2 text-sm text-white"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Resultado más atractivo
                </div>
              </motion.div>

              <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-[128px] w-[128px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#A69C90]/20" />

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute left-1/2 top-1/2 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#A69C90] text-[#171614] shadow-[0_0_40px_rgba(166,156,144,0.35)]"
              >
                <Film className="h-7 w-7" strokeWidth={1.8} />
              </motion.div>
            </div>

            {/* Copy + CTA */}
            <div className="flex items-center p-6 sm:p-8 lg:p-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-[#E5E0D7]">
                  <span style={{ fontFamily: 'var(--font-primary)' }}>
                    Dirección visual
                  </span>
                </div>

                <h3
                  className="mt-5 text-[1.45rem] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[1.8rem]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  El video ordena cómo una marca se presenta, se mueve y se
                  percibe.
                </h3>

                <p
                  className="mt-4 max-w-xl text-[0.98rem] leading-8 text-white/68"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Una pieza bien resuelta puede elevar muchísimo la imagen
                  general del negocio y hacer que su comunicación se sienta más
                  cuidada, más clara y más profesional.
                </p>

                <a
                  href="#video-profesional"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:border-[#A69C90]/26 hover:bg-white/[0.10]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Ver siguiente servicio
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
