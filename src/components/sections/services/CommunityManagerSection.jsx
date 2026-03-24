import React from 'react';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  ChartNoAxesColumn,
  MessageCircleMore,
  PenSquare,
  Sparkles,
  Target
} from 'lucide-react';

/*
 * Programador: Benjamin Orellana
 * Fecha Creación: 24 / 03 / 2026
 * Versión: 1.0
 *
 * Descripción:
 * Sección de servicio individual para Community Manager en la home de
 * CR - Estudio Creativo. Se alinea con el navbar y presenta el servicio
 * con enfoque estratégico, visual y comercial.
 *
 * Tema: Home / Servicios / Community Manager
 * Capa: Frontend
 */

const FEATURES = [
  {
    id: 1,
    icon: CalendarDays,
    title: 'Planificación de contenido',
    description:
      'Organizamos publicaciones con una mirada estratégica para que tu marca sostenga presencia y coherencia.'
  },
  {
    id: 2,
    icon: PenSquare,
    title: 'Contenido con criterio',
    description:
      'Pensamos piezas que acompañen la identidad de tu negocio y comuniquen con más claridad.'
  },
  {
    id: 3,
    icon: MessageCircleMore,
    title: 'Presencia más activa',
    description:
      'Ayudamos a que tu marca se mantenga visible, conectada con su audiencia y mejor posicionada en redes.'
  },
  {
    id: 4,
    icon: ChartNoAxesColumn,
    title: 'Enfoque en crecimiento',
    description:
      'No se trata solo de publicar: se trata de construir una presencia digital con dirección.'
  }
];

const STATS = [
  { id: 1, value: '01', label: 'Estrategia' },
  { id: 2, value: '02', label: 'Contenido' },
  { id: 3, value: '03', label: 'Presencia' }
];

export default function CommunityManagerSection() {
  return (
    <section
      id="community-manager"
      className="relative overflow-hidden bg-[var(--color-cream)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,rgba(23,22,20,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,22,20,0.14)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute left-[-8%] top-[10%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,_rgba(166,156,144,0.16)_0%,_rgba(229,224,215,0)_72%)]" />
        <div className="absolute bottom-[-14%] right-[-8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(97,87,75,0.10)_0%,_rgba(229,224,215,0)_72%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span
              className="inline-flex rounded-full border border-[#A69C90]/28 bg-white/68 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#61574B] backdrop-blur-sm"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              CM & Marca · Community Manager
            </span>

            <h2
              className="mt-6 text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#171614] sm:text-[2.8rem] lg:text-[3.5rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Una red bien gestionada no solo publica: {' '}
              <span
                className="uppercase inline-block text-[#61574B]"
                style={{ fontFamily: 'var(--font-secondary)' }}
              >
                posiciona
              </span>
              .
            </h2>

            <p
              className="mt-6 max-w-xl text-[1rem] leading-8 text-[#171614]/72 sm:text-[1.05rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              En CR trabajamos la presencia diaria de tu marca para que se vea
              activa, ordenada y coherente. El objetivo no es llenar redes por
              llenar, sino sostener una comunicación que acompañe tu imagen y tu
              crecimiento.
            </p>

            {/* <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {STATS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    delay: 0.08 + index * 0.08,
                    duration: 0.5,
                    ease: 'easeOut'
                  }}
                  className="rounded-[24px] border border-[#A69C90]/18 bg-white/74 p-4 shadow-[0_18px_45px_-34px_rgba(23,22,20,0.20)] backdrop-blur-sm"
                >
                  <div
                    className="text-[1.6rem] font-semibold tracking-[-0.04em] text-[#171614]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {item.value}
                  </div>
                  <div
                    className="mt-1 text-sm text-[#61574B]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div> */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.16, duration: 0.55, ease: 'easeOut' }}
              className="mt-8 rounded-[28px] border border-[#A69C90]/18 bg-[#171614] p-6 text-white shadow-[0_25px_60px_-30px_rgba(23,22,20,0.38)]"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Target className="h-5 w-5" strokeWidth={1.9} />
                </div>

                <div>
                  <h3
                    className="text-[1rem] font-semibold tracking-[-0.02em]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    El foco está en cómo se percibe tu marca
                  </h3>
                  <p
                    className="mt-2 text-sm leading-7 text-white/76"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Una buena gestión de redes acompaña la identidad visual,
                    sostiene el mensaje y mejora la presencia general del
                    negocio.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: 0.08 + index * 0.08,
                    duration: 0.5,
                    ease: 'easeOut'
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-[#A69C90]/18 bg-white/82 p-6 shadow-[0_20px_55px_-34px_rgba(23,22,20,0.20)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#61574B]/24 hover:shadow-[0_24px_64px_-30px_rgba(23,22,20,0.24)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#61574B]/26 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#A69C90]/16 bg-[#E5E0D7]/62 text-[#171614] transition-transform duration-300 group-hover:scale-[1.04]">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </div>

                  <h3
                    className="text-[1.02rem] font-semibold tracking-[-0.02em] text-[#171614]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="mt-3 text-[0.96rem] leading-7 text-[#171614]/68"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {feature.description}
                  </p>
                </motion.article>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.22, duration: 0.5, ease: 'easeOut' }}
              className="sm:col-span-2 rounded-[32px] border border-[#A69C90]/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.90)_0%,rgba(229,224,215,0.82)_100%)] p-6 shadow-[0_20px_55px_-34px_rgba(23,22,20,0.20)]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#A69C90]/16 bg-white/75 text-[#171614]">
                    <Sparkles className="h-5 w-5" strokeWidth={1.9} />
                  </div>

                  <h3
                    className="text-[1.08rem] font-semibold tracking-[-0.02em] text-[#171614]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Community Manager con mirada de marca
                  </h3>

                  <p
                    className="mt-3 text-[0.97rem] leading-7 text-[#171614]/70"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    La diferencia está en que el contenido no se trabaja
                    aislado: se piensa junto con la estética, el tono, la
                    intención y la percepción general de la marca.
                  </p>
                </div>

                <a
                  href="#marketing-redes"
                  className="inline-flex shrink-0 items-center rounded-full border border-[#171614] px-5 py-3 text-sm font-semibold text-[#171614] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#61574B] hover:bg-[#171614] hover:text-white"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Ver siguiente servicio
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
