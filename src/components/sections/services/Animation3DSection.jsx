import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Boxes,
  Cuboid,
  Layers3,
  Orbit,
  Scan,
  Sparkles
} from 'lucide-react';

/*
 * Programador: Benjamin Orellana
 * Fecha Creación: 24 / 03 / 2026
 * Versión: 1.0
 *
 * Descripción:
 * Sección individual para Diseño y animación 3D.
 * Cierra el bloque Foto & Video con una atmósfera más experimental,
 * visual y futurista, manteniendo coherencia con la identidad de CR.
 *
 * Tema: Home / Servicios / Diseño y animación 3D
 * Capa: Frontend
 */

const BLOCKS = [
  {
    id: '01',
    icon: Cuboid,
    title: 'Visuales más diferenciales',
    description:
      'El 3D permite construir piezas con una estética más distintiva, ideal para marcas que quieren elevar su imagen y destacarse.'
  },
  {
    id: '02',
    icon: Layers3,
    title: 'Recursos con más profundidad',
    description:
      'No se trata solo de animar: se trata de crear escenas, objetos y composiciones con más impacto visual.'
  },
  {
    id: '03',
    icon: Scan,
    title: 'Lenguaje visual más innovador',
    description:
      'La animación 3D aporta una sensación contemporánea, experimental y más premium a la comunicación de marca.'
  }
];

const USES = [
  'Lanzamientos',
  'Presentación de producto',
  'Piezas para redes',
  'Campañas visuales',
  'Contenido diferencial'
];

export default function Animation3DSection() {
  return (
    <section
      id="animacion-3d"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#141311_0%,#1a1815_38%,#211d18_100%)] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="absolute left-[-10%] top-[8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(166,156,144,0.16)_0%,_rgba(23,22,20,0)_72%)]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(229,224,215,0.08)_0%,_rgba(23,22,20,0)_72%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          {/* Columna visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.62, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative mx-auto flex min-h-[420px] w-full max-w-[620px] items-center justify-center sm:min-h-[500px]">
              <div className="pointer-events-none absolute inset-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#A69C90]/16"
                />
                <div className="absolute left-[12%] top-[14%] h-20 w-20 rounded-[24px] border border-white/8 bg-white/[0.03] backdrop-blur-sm" />
                <div className="absolute bottom-[12%] right-[10%] h-24 w-24 rounded-full border border-[#A69C90]/14 bg-[#A69C90]/[0.08] backdrop-blur-sm" />
              </div>

              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="relative z-10"
              >
                <div className="relative flex h-[250px] w-[250px] items-center justify-center rounded-[42px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(166,156,144,0.08)_100%)] shadow-[0_35px_90px_-40px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:h-[300px] sm:w-[300px]">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    className="absolute inset-[28px] rounded-[32px] border border-[#A69C90]/16"
                  />

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 14,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    className="absolute inset-[54px] rounded-[24px] border border-white/10"
                  />

                  <div className="relative z-20 flex h-20 w-20 items-center justify-center rounded-[24px] border border-[#A69C90]/18 bg-[#A69C90]/18 text-[#E5E0D7] shadow-[0_20px_40px_-22px_rgba(0,0,0,0.35)] sm:h-24 sm:w-24">
                    <Boxes
                      className="h-9 w-9 sm:h-10 sm:w-10"
                      strokeWidth={1.8}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.16, duration: 0.48, ease: 'easeOut' }}
                className="absolute bottom-4 left-4 hidden rounded-[24px] border border-white/10 bg-white/[0.06] px-4 py-3 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.28)] backdrop-blur-xl md:block"
              >
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E5E0D7]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Foto & Video
                </div>
                <div
                  className="mt-2 text-sm font-semibold text-white"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Diseño y animación 3D
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Columna textual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.62, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span
              className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E5E0D7]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Foto & Video · Diseño y animación 3D
            </span>

            <h2
              className="mt-6 text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[2.95rem] lg:text-[3.75rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Hay marcas que necesitan algo más que contenido.
              <span
                className="ml-2 inline-block text-[#A69C90]"
                style={{ fontFamily: 'var(--font-secondary)' }}
              >
                necesitan impacto visual
              </span>
              .
            </h2>

            <p
              className="mt-6 max-w-xl text-[1rem] leading-8 text-white/72 sm:text-[1.05rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              El diseño y la animación 3D permiten crear piezas más inmersivas,
              más innovadoras y con una lectura visual mucho más fuerte. Es un
              recurso ideal para marcas que quieren diferenciarse y verse más
              actuales.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {USES.map((tag, index) => (
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
                  className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white/82"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 space-y-4">
              {BLOCKS.map((block, index) => {
                const Icon = block.icon;

                return (
                  <motion.article
                    key={block.id}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.22 }}
                    transition={{
                      delay: 0.08 + index * 0.08,
                      duration: 0.5,
                      ease: 'easeOut'
                    }}
                    className="group rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(166,156,144,0.05)_100%)] p-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#A69C90]/22 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(166,156,144,0.07)_100%)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#E5E0D7]">
                        <Icon className="h-5 w-5" strokeWidth={1.9} />
                      </div>

                      <div>
                        <div
                          className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A69C90]"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          {block.id}
                        </div>

                        <h3
                          className="mt-2 text-[1.03rem] font-semibold tracking-[-0.02em] text-white"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          {block.title}
                        </h3>

                        <p
                          className="mt-2 text-[0.96rem] leading-7 text-white/68"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          {block.description}
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
              className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05]"
            >
              <div className="grid gap-0 sm:grid-cols-[1fr_180px]">
                <div className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#E5E0D7]">
                    <Sparkles className="h-5 w-5" strokeWidth={1.9} />
                  </div>

                  <h3
                    className="text-[1.08rem] font-semibold tracking-[-0.02em] text-white"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    El 3D es ideal cuando la marca quiere verse más
                    contemporánea y más memorable.
                  </h3>

                  <p
                    className="mt-3 max-w-2xl text-[0.96rem] leading-7 text-white/70"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Es un recurso que suma novedad, profundidad y una identidad
                    visual mucho más diferencial dentro del ecosistema digital.
                  </p>

                  <a
                    href="#contacto"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:border-[#A69C90]/26 hover:bg-white/[0.10]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Quiero trabajar con vos
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="relative hidden sm:block">
                  <div className="absolute inset-0 border-l border-white/8" />
                  <div className="flex h-full items-center justify-center p-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                      className="relative h-28 w-28"
                    >
                      <div className="absolute inset-0 rounded-[28px] border border-white/10 rotate-0" />
                      <div className="absolute inset-[12px] rounded-[22px] border border-[#A69C90]/18 rotate-12" />
                      <div className="absolute inset-[28px] rounded-[16px] bg-[#A69C90]" />
                    </motion.div>
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
