import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Lightbulb,
  MessageSquareQuote,
  Orbit,
  Radar,
  Shapes,
  Target
} from 'lucide-react';

/*
 * Programador: Benjamin Orellana
 * Fecha Creación: 24 / 03 / 2026
 * Versión: 1.0
 *
 * Descripción:
 * Sección individual para el servicio de Marketing para redes sociales.
 * Se diseñó con una estética distinta a Community Manager para aportar
 * variedad visual a la home, manteniendo coherencia con CR.
 *
 * Tema: Home / Servicios / Marketing para redes sociales
 * Capa: Frontend
 */

const PILLARS = [
  {
    id: '01',
    icon: Target,
    title: 'Estrategia antes que volumen',
    description:
      'No se trata de publicar por publicar. Se trata de decidir qué decir, cómo decirlo y por qué vale la pena mostrarlo.'
  },
  {
    id: '02',
    icon: Radar,
    title: 'Mensajes con intención',
    description:
      'El contenido tiene que conectar con el público correcto, reforzar la identidad y sostener una percepción clara de marca.'
  },
  {
    id: '03',
    icon: Orbit,
    title: 'Presencia digital más sólida',
    description:
      'Una buena estrategia ordena el mensaje, mejora la lectura de la marca y acompaña su crecimiento en redes.'
  }
];

const MICRO_POINTS = [
  {
    icon: Lightbulb,
    label: 'Enfoque estratégico'
  },
  {
    icon: MessageSquareQuote,
    label: 'Mensaje más claro'
  },
  {
    icon: Shapes,
    label: 'Contenido coherente'
  }
];

export default function MarketingRedesSection() {
  return (
    <section
      id="marketing-redes"
      className="relative overflow-hidden bg-[#171614] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="absolute left-[-8%] top-[6%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(166,156,144,0.18)_0%,_rgba(23,22,20,0)_72%)]" />
        <div className="absolute bottom-[-18%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(229,224,215,0.10)_0%,_rgba(23,22,20,0)_72%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
          {/* Columna editorial izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.62, ease: 'easeOut' }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span
              className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E5E0D7]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              CM & Marca · Marketing para redes sociales
            </span>

            <h2
              className="mt-6 max-w-xl text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[2.8rem] lg:text-[3.55rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              No alcanza con estar en redes.
              <span
                className="ml-2 inline-block text-[#A69C90]"
                style={{ fontFamily: 'var(--font-secondary)' }}
              >
                hay que saber ocupar ese lugar
              </span>
              .
            </h2>

            <p
              className="mt-6 max-w-xl text-[1rem] leading-8 text-white/72 sm:text-[1.05rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              El marketing para redes sociales ordena el mensaje de tu marca,
              define mejor qué mostrar y construye una presencia más
              intencional. Menos ruido. Más dirección.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {MICRO_POINTS.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      delay: 0.08 + index * 0.08,
                      duration: 0.48,
                      ease: 'easeOut'
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2.5 text-sm text-white/84 backdrop-blur-sm"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    <Icon
                      className="h-4 w-4 text-[#A69C90]"
                      strokeWidth={1.9}
                    />
                    {point.label}
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{ delay: 0.18, duration: 0.55, ease: 'easeOut' }}
              className="mt-10 max-w-lg rounded-[30px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm"
            >
              <p
                className="text-sm leading-7 text-white/76"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Una estrategia bien planteada ayuda a que la marca no dependa
                únicamente de piezas sueltas, sino de una lógica de comunicación
                que sostenga su identidad en el tiempo.
              </p>
            </motion.div>
          </motion.div>

          {/* Columna derecha distinta al layout anterior */}
          <div className="space-y-4 sm:space-y-5">
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  key={pillar.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    delay: 0.06 + index * 0.08,
                    duration: 0.58,
                    ease: 'easeOut'
                  }}
                  className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(166,156,144,0.06)_100%)] p-6 shadow-[0_26px_70px_-36px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#A69C90]/24 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(166,156,144,0.08)_100%)] sm:p-7"
                >
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#A69C90]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="grid gap-5 md:grid-cols-[90px_1fr] md:gap-7">
                    <div className="flex items-start justify-between gap-4 md:block">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-[#E5E0D7]">
                        <Icon className="h-5 w-5" strokeWidth={1.9} />
                      </div>

                      <div
                        className="text-[2.1rem] font-semibold leading-none tracking-[-0.05em] text-[#A69C90] md:mt-5"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        {pillar.id}
                      </div>
                    </div>

                    <div>
                      <h3
                        className="text-[1.12rem] font-semibold tracking-[-0.02em] text-white sm:text-[1.18rem]"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        {pillar.title}
                      </h3>

                      <p
                        className="mt-3 max-w-2xl text-[0.97rem] leading-7 text-white/70"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}

            {/* Bloque final distinto */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.18, duration: 0.58, ease: 'easeOut' }}
              className="overflow-hidden rounded-[36px] border border-[#A69C90]/18 bg-[linear-gradient(135deg,rgba(166,156,144,0.16)_0%,rgba(255,255,255,0.06)_100%)]"
            >
              <div className="grid gap-0 lg:grid-cols-[1fr_210px]">
                <div className="p-6 sm:p-7">
                  <span
                    className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E5E0D7]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Dirección de marca
                  </span>

                  <h3
                    className="mt-5 max-w-2xl text-[1.22rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.35rem]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    El marketing para redes no debería sentirse improvisado.
                  </h3>

                  <p
                    className="mt-3 max-w-2xl text-[0.97rem] leading-7 text-white/72"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Cuando el contenido tiene dirección, la marca se percibe más
                    segura, más clara y más profesional. Y eso cambia la forma
                    en la que la audiencia la mira.
                  </p>

                  <a
                    href="#branding"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:border-[#A69C90]/26 hover:bg-white/10"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Ver siguiente servicio
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="relative hidden lg:block">
                  <div className="absolute inset-0 border-l border-white/8" />
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="relative h-36 w-36">
                      <div className="absolute inset-0 rounded-full border border-[#A69C90]/26" />
                      <div className="absolute inset-[14px] rounded-full border border-[#E5E0D7]/16" />
                      <div className="absolute inset-[30px] rounded-full border border-white/14" />
                      <div className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A69C90]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
