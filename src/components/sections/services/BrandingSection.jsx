import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeCheck,
  LayoutGrid,
  Palette,
  ScanSearch,
  Type
} from 'lucide-react';

/*
 * Programador: Benjamin Orellana
 * Fecha Creación: 24 / 03 / 2026
 * Versión: 1.0
 *
 * Descripción:
 * Sección individual para Branding y rebranding en la home de
 * CR - Estudio Creativo.
 * Se diseñó con una atmósfera distinta a Community Manager y
 * Marketing para redes, con una composición más editorial y
 * más enfocada en sistema de identidad.
 *
 * Tema: Home / Servicios / Branding y rebranding
 * Capa: Frontend
 */

const BRAND_BLOCKS = [
  {
    id: '01',
    icon: ScanSearch,
    title: 'Diagnóstico de marca',
    description:
      'Revisamos cómo se ve, cómo comunica y qué percepción genera hoy tu marca para detectar qué ordenar, qué sostener y qué transformar.'
  },
  {
    id: '02',
    icon: Palette,
    title: 'Dirección visual',
    description:
      'Definimos una estética más clara, coherente y alineada con la personalidad real del negocio para que todo tenga una misma lógica.'
  },
  {
    id: '03',
    icon: Type,
    title: 'Lenguaje e identidad',
    description:
      'Construimos una identidad que no dependa de piezas aisladas, sino de un sistema que pueda repetirse con criterio y consistencia.'
  },
  {
    id: '04',
    icon: LayoutGrid,
    title: 'Sistema aplicable',
    description:
      'La marca tiene que funcionar en redes, piezas gráficas, presentaciones, producción visual y cualquier punto de contacto.'
  }
];

const PRINCIPLES = [
  'Más claridad visual',
  'Más coherencia en el mensaje',
  'Más reconocimiento',
  'Más consistencia de marca'
];

export default function BrandingSection() {
  return (
    <section id="branding" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(23,22,20,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,22,20,0.14)_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="absolute left-[-8%] top-[12%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,_rgba(166,156,144,0.12)_0%,_rgba(255,255,255,0)_72%)]" />
        <div className="absolute bottom-[-18%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(97,87,75,0.09)_0%,_rgba(255,255,255,0)_72%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.62, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span
              className="inline-flex rounded-full border border-[#A69C90]/28 bg-[#E5E0D7]/42 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#61574B]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              CM & Marca · Branding y rebranding
            </span>

            <h2
              className="mt-6 text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#171614] sm:text-[2.85rem] lg:text-[3.65rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Una marca fuerte no es solo un logo.
              <span
                className="ml-2 inline-block text-[#61574B]"
                style={{ fontFamily: 'var(--font-secondary)' }}
              >
                es un sistema
              </span>
              .
            </h2>

            <p
              className="mt-6 max-w-xl text-[1rem] leading-8 text-[#171614]/72 sm:text-[1.05rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              El branding ordena cómo se ve, cómo se siente y cómo se recuerda
              una marca. Y el rebranding permite actualizar esa identidad cuando
              ya no representa lo que el negocio es hoy o hacia dónde quiere ir.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {PRINCIPLES.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    delay: 0.08 + index * 0.06,
                    duration: 0.45,
                    ease: 'easeOut'
                  }}
                  className="inline-flex rounded-full border border-[#A69C90]/24 bg-white px-4 py-2.5 text-sm text-[#171614]/78 shadow-[0_12px_35px_-28px_rgba(23,22,20,0.16)]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{ delay: 0.16, duration: 0.55, ease: 'easeOut' }}
              className="mt-10 overflow-hidden rounded-[34px] border border-[#A69C90]/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.92)_0%,rgba(229,224,215,0.72)_100%)] shadow-[0_26px_70px_-38px_rgba(23,22,20,0.18)]"
            >
              <div className="grid gap-0 sm:grid-cols-[170px_1fr]">
                <div className="border-b border-[#A69C90]/14 p-6 sm:border-b-0 sm:border-r">
                  <div
                    className="text-[3.1rem] font-semibold leading-none tracking-[-0.08em] text-[#171614]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    CR
                  </div>
                  <div
                    className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#61574B]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Sistema de marca
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#A69C90]/14 bg-white/78 text-[#171614]">
                      <BadgeCheck className="h-5 w-5" strokeWidth={1.9} />
                    </div>

                    <div>
                      <h3
                        className="text-[1.05rem] font-semibold tracking-[-0.02em] text-[#171614]"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        El objetivo no es rediseñar por estética solamente
                      </h3>
                      <p
                        className="mt-2 text-[0.96rem] leading-7 text-[#171614]/68"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        Se trata de lograr una identidad que se vea más clara,
                        más sólida y más aplicable en todos los espacios donde
                        la marca aparece.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna derecha */}
          <div className="grid gap-4 sm:grid-cols-2">
            {BRAND_BLOCKS.map((block, index) => {
              const Icon = block.icon;

              return (
                <motion.article
                  key={block.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    delay: 0.06 + index * 0.08,
                    duration: 0.55,
                    ease: 'easeOut'
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-[#A69C90]/18 bg-white p-6 shadow-[0_20px_60px_-36px_rgba(23,22,20,0.18)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#61574B]/24 hover:shadow-[0_28px_70px_-34px_rgba(23,22,20,0.22)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#61574B]/24 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#A69C90]/16 bg-[#E5E0D7]/58 text-[#171614]">
                      <Icon className="h-5 w-5" strokeWidth={1.9} />
                    </div>

                    <div
                      className="text-[1.65rem] font-semibold leading-none tracking-[-0.05em] text-[#A69C90]"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      {block.id}
                    </div>
                  </div>

                  <h3
                    className="text-[1.04rem] font-semibold tracking-[-0.02em] text-[#171614]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {block.title}
                  </h3>

                  <p
                    className="mt-3 text-[0.96rem] leading-7 text-[#171614]/68"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {block.description}
                  </p>
                </motion.article>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: 0.18, duration: 0.58, ease: 'easeOut' }}
              className="sm:col-span-2 overflow-hidden rounded-[36px] border border-[#171614]/10 bg-[#171614] text-white shadow-[0_30px_75px_-36px_rgba(23,22,20,0.34)]"
            >
              <div className="grid gap-0 lg:grid-cols-[1fr_220px]">
                <div className="p-6 sm:p-7">
                  <span
                    className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E5E0D7]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Branding con criterio
                  </span>

                  <h3
                    className="mt-5 max-w-2xl text-[1.2rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.34rem]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Cuando la identidad está bien construida, todo comunica
                    mejor.
                  </h3>

                  <p
                    className="mt-3 max-w-2xl text-[0.97rem] leading-7 text-white/72"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Una marca consistente ayuda a que las decisiones visuales no
                    parezcan aisladas. Hace que redes, piezas, presentaciones,
                    contenido y producción se sientan parte de un mismo
                    universo.
                  </p>

                  <a
                    href="#edicion-video"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:border-[#A69C90]/28 hover:bg-white/10"
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
                      <div className="absolute inset-0 rounded-[28px] border border-white/10 rotate-0" />
                      <div className="absolute inset-[12px] rounded-[24px] border border-[#A69C90]/22 rotate-6" />
                      <div className="absolute inset-[24px] rounded-[18px] border border-white/12 -rotate-6" />
                      <div className="absolute inset-[42px] rounded-[14px] bg-[#A69C90]" />
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
