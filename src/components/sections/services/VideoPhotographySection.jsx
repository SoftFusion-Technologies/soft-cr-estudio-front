import React from 'react';
import { motion } from 'framer-motion';
import {
  Aperture,
  ArrowUpRight,
  Camera,
  Image as ImageIcon,
  MonitorPlay,
  ScanEye
} from 'lucide-react';

/*
 * Programador: Benjamin Orellana
 * Fecha Creación: 24 / 03 / 2026
 * Versión: 1.0
 *
 * Descripción:
 * Sección individual para Video y Fotografía profesional.
 * Se diseñó con una atmósfera más editorial y de campaña visual,
 * distinta al bloque anterior de creación y edición de videos.
 *
 * Tema: Home / Servicios / Video y Fotografía profesional
 * Capa: Frontend
 */

const VISUAL_POINTS = [
  {
    id: '01',
    icon: Camera,
    title: 'Fotografía con intención',
    description:
      'Cada toma busca mostrar mejor el producto, el espacio, el servicio o la identidad detrás de la marca.'
  },
  {
    id: '02',
    icon: MonitorPlay,
    title: 'Video que acompaña la percepción',
    description:
      'Las piezas audiovisuales no solo registran: ayudan a que una marca se vea más sólida, más cuidada y más profesional.'
  },
  {
    id: '03',
    icon: ScanEye,
    title: 'Dirección visual coherente',
    description:
      'El valor está en que foto y video se trabajen con un mismo criterio estético para que todo se sienta parte del mismo universo.'
  }
];

const MINI_TAGS = [
  'Campañas visuales',
  'Contenido profesional',
  'Estética de marca',
  'Presencia más cuidada'
];

export default function VideoPhotographySection() {
  return (
    <section
      id="video-profesional"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f4ee_0%,#ffffff_42%,#f5f1ea_100%)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.028] [background-image:linear-gradient(to_right,rgba(23,22,20,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,22,20,0.14)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute left-[-10%] top-[8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(166,156,144,0.14)_0%,_rgba(255,255,255,0)_72%)]" />
        <div className="absolute bottom-[-16%] right-[-8%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,_rgba(97,87,75,0.10)_0%,_rgba(255,255,255,0)_72%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
          {/* Lado visual editorial */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.62, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[620px]">
              <div className="absolute -inset-4 rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(166,156,144,0.18)_0%,rgba(255,255,255,0)_68%)] blur-2xl" />

              <div className="relative rounded-[36px] border border-[#A69C90]/18 bg-white/72 p-4 shadow-[0_34px_80px_-42px_rgba(23,22,20,0.24)] backdrop-blur-xl sm:p-5">
                <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: 0.06, duration: 0.5, ease: 'easeOut' }}
                    className="relative overflow-hidden rounded-[28px] border border-[#A69C90]/16 bg-[linear-gradient(180deg,rgba(23,22,20,0.94)_0%,rgba(97,87,75,0.92)_100%)] p-5 text-white"
                  >
                    <div className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                      <Camera className="h-5 w-5" strokeWidth={1.9} />
                    </div>

                    <div
                      className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      Fotografía
                    </div>

                    <h3
                      className="mt-16 max-w-[220px] text-[1.28rem] font-semibold leading-[1.05] tracking-[-0.03em]"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      Imágenes que elevan cómo se percibe la marca.
                    </h3>

                    <div className="mt-10 flex items-end justify-between gap-4">
                      <div
                        className="text-[12px] uppercase tracking-[0.24em] text-[#E5E0D7]/76"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        Dirección visual
                      </div>

                      <div className="h-12 w-12 rounded-full border border-white/10 bg-[radial-gradient(circle,_rgba(255,255,255,0.18)_0%,_rgba(255,255,255,0.02)_72%)]" />
                    </div>
                  </motion.div>

                  <div className="grid gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{
                        delay: 0.12,
                        duration: 0.5,
                        ease: 'easeOut'
                      }}
                      className="relative overflow-hidden rounded-[28px] border border-[#A69C90]/16 bg-[linear-gradient(180deg,rgba(229,224,215,0.70)_0%,rgba(255,255,255,0.92)_100%)] p-5"
                    >
                      <div className="mb-8 flex items-center justify-between">
                        <div
                          className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#61574B]"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          Video
                        </div>

                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#A69C90]/18 bg-white/76 text-[#171614]">
                          <MonitorPlay className="h-5 w-5" strokeWidth={1.9} />
                        </div>
                      </div>

                      <div
                        className="max-w-[220px] text-[1.06rem] font-semibold leading-7 tracking-[-0.02em] text-[#171614]"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        Piezas que muestran mejor lo que la marca quiere
                        comunicar.
                      </div>

                      <div className="mt-8 h-20 rounded-[22px] border border-[#A69C90]/14 bg-[linear-gradient(135deg,rgba(97,87,75,0.12)_0%,rgba(229,224,215,0.18)_100%)]" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{
                        delay: 0.18,
                        duration: 0.5,
                        ease: 'easeOut'
                      }}
                      className="grid gap-4 sm:grid-cols-2"
                    >
                      <div className="overflow-hidden rounded-[24px] border border-[#A69C90]/16 bg-white p-5 shadow-[0_18px_40px_-34px_rgba(23,22,20,0.16)]">
                        <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#A69C90]/16 bg-[#E5E0D7]/54 text-[#171614]">
                          <Aperture className="h-5 w-5" strokeWidth={1.9} />
                        </div>
                        <div
                          className="text-[0.98rem] font-semibold leading-7 tracking-[-0.02em] text-[#171614]"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          Estética que acompaña la identidad.
                        </div>
                      </div>

                      <div className="overflow-hidden rounded-[24px] border border-[#A69C90]/16 bg-[#171614] p-5 text-white shadow-[0_18px_40px_-34px_rgba(23,22,20,0.22)]">
                        <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-[#E5E0D7]">
                          <ImageIcon className="h-5 w-5" strokeWidth={1.9} />
                        </div>
                        <div
                          className="text-[0.98rem] font-semibold leading-7 tracking-[-0.02em]"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          Una presencia más cuidada en cada pieza.
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
                className="absolute -bottom-5 left-8 hidden rounded-[24px] border border-[#A69C90]/18 bg-white/88 px-4 py-3 shadow-[0_18px_45px_-30px_rgba(23,22,20,0.18)] backdrop-blur-xl md:block"
              >
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#61574B]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Foto & Video
                </div>
                <div
                  className="mt-2 text-sm font-semibold text-[#171614]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Campaña visual · estética · percepción
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Lado textual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.62, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span
              className="inline-flex rounded-full border border-[#A69C90]/28 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#61574B]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Foto & Video · Video y Fotografía profesional
            </span>

            <h2
              className="mt-6 text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#171614] sm:text-[2.9rem] lg:text-[3.7rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Una marca también se construye con
              <span
                className="ml-2 inline-block text-[#61574B]"
                style={{ fontFamily: 'var(--font-secondary)' }}
              >
                imagen
              </span>
              .
            </h2>

            <p
              className="mt-6 max-w-xl text-[1rem] leading-8 text-[#171614]/72 sm:text-[1.05rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              La fotografía y el video profesional ayudan a que una marca se vea
              más seria, más atractiva y más consistente. No es solo mostrar: es
              decidir cómo querés ser percibido.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {MINI_TAGS.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    delay: 0.08 + index * 0.06,
                    duration: 0.44,
                    ease: 'easeOut'
                  }}
                  className="inline-flex rounded-full border border-[#A69C90]/22 bg-[#E5E0D7]/38 px-4 py-2.5 text-sm text-[#171614]/80"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 space-y-4">
              {VISUAL_POINTS.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.article
                    key={point.id}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.24 }}
                    transition={{
                      delay: 0.08 + index * 0.08,
                      duration: 0.5,
                      ease: 'easeOut'
                    }}
                    className="group rounded-[28px] border border-[#A69C90]/16 bg-white/86 p-5 shadow-[0_18px_40px_-32px_rgba(23,22,20,0.14)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#61574B]/20 hover:shadow-[0_24px_52px_-28px_rgba(23,22,20,0.18)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#A69C90]/16 bg-[#E5E0D7]/58 text-[#171614]">
                        <Icon className="h-5 w-5" strokeWidth={1.9} />
                      </div>

                      <div>
                        <div
                          className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#61574B]"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          {point.id}
                        </div>

                        <h3
                          className="mt-2 text-[1.03rem] font-semibold tracking-[-0.02em] text-[#171614]"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          {point.title}
                        </h3>

                        <p
                          className="mt-2 text-[0.96rem] leading-7 text-[#171614]/68"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.18, duration: 0.54, ease: 'easeOut' }}
              className="mt-8 overflow-hidden rounded-[32px] border border-[#171614]/10 bg-[#171614] text-white shadow-[0_24px_65px_-34px_rgba(23,22,20,0.34)]"
            >
              <div className="grid gap-0 sm:grid-cols-[1fr_190px]">
                <div className="p-6">
                  <h3
                    className="text-[1.08rem] font-semibold tracking-[-0.02em]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    La calidad visual no es un detalle: cambia la percepción
                    completa.
                  </h3>

                  <p
                    className="mt-3 max-w-2xl text-[0.96rem] leading-7 text-white/70"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Cuando foto y video están bien resueltos, la marca transmite
                    más cuidado, más valor y más profesionalismo.
                  </p>

                  <a
                    href="#produccion-completa"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:border-[#A69C90]/26 hover:bg-white/10"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Ver siguiente servicio
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="relative hidden sm:block">
                  <div className="absolute inset-0 border-l border-white/8" />
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="relative h-28 w-28">
                      <div className="absolute inset-0 rounded-[30px] border border-white/10" />
                      <div className="absolute inset-[12px] rounded-[24px] border border-[#A69C90]/18" />
                      <div className="absolute inset-[28px] rounded-[16px] bg-[#A69C90]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
