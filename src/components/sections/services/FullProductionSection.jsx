import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Camera,
  CheckCircle2,
  Clapperboard,
  Crown,
  LayoutTemplate,
  Sparkles,
  UserRound
} from 'lucide-react';

/*
 * Programador: Benjamin Orellana
 * Fecha Creación: 24 / 03 / 2026
 * Versión: 1.0
 *
 * Descripción:
 * Sección individual para Producción completa.
 * Este bloque representa un servicio más integral y premium, donde
 * CR articula video, fotografía y modelo dentro de una propuesta
 * visual unificada y con dirección estética.
 *
 * Tema: Home / Servicios / Producción completa
 * Capa: Frontend
 */

const PRODUCTION_ITEMS = [
  {
    id: '01',
    icon: Clapperboard,
    title: 'Video',
    description:
      'Piezas audiovisuales pensadas para mostrar mejor la marca, el producto o el servicio.'
  },
  {
    id: '02',
    icon: Camera,
    title: 'Fotografía',
    description:
      'Imágenes cuidadas y alineadas con la estética general de la producción.'
  },
  {
    id: '03',
    icon: UserRound,
    title: 'Modelo',
    description:
      'La presencia humana suma contexto, estilo y una lectura más aspiracional de la marca.'
  },
  {
    id: '04',
    icon: LayoutTemplate,
    title: 'Dirección integral',
    description:
      'Todo se piensa como una sola experiencia visual para que el resultado se sienta coherente.'
  }
];

const RESULTS = [
  'Campañas más completas',
  'Imagen más premium',
  'Contenido mejor resuelto',
  'Percepción de marca más alta'
];

export default function FullProductionSection() {
  return (
    <section
      id="produccion-completa"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#efe9df_0%,#e5e0d7_45%,#f8f5ef_100%)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(23,22,20,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,22,20,0.14)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute left-[-8%] top-[8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(97,87,75,0.16)_0%,_rgba(229,224,215,0)_72%)]" />
        <div className="absolute bottom-[-18%] right-[-10%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,_rgba(166,156,144,0.14)_0%,_rgba(229,224,215,0)_72%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.62, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span
              className="inline-flex rounded-full border border-[#61574B]/18 bg-white/72 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#61574B]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Foto & Video · Producción completa
            </span>

            <h2
              className="mt-6 text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#171614] sm:text-[2.95rem] lg:text-[3.75rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Cuando todo se piensa en conjunto,
              <span
                className="ml-2 inline-block text-[#61574B]"
                style={{ fontFamily: 'var(--font-secondary)' }}
              >
                el resultado cambia
              </span>
              .
            </h2>

            <p
              className="mt-6 max-w-xl text-[1rem] leading-8 text-[#171614]/72 sm:text-[1.05rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              La producción completa reúne video, fotografía, modelo y dirección
              visual en una misma propuesta. No son piezas aisladas: es una
              producción pensada como un universo coherente para elevar la
              percepción de la marca.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {RESULTS.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    delay: 0.08 + index * 0.06,
                    duration: 0.44,
                    ease: 'easeOut'
                  }}
                  className="inline-flex rounded-full border border-[#A69C90]/22 bg-white/82 px-4 py-2.5 text-sm text-[#171614]/80 shadow-[0_14px_34px_-28px_rgba(23,22,20,0.16)]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{ delay: 0.18, duration: 0.55, ease: 'easeOut' }}
              className="mt-10 overflow-hidden rounded-[34px] border border-[#A69C90]/18 bg-[#171614] text-white shadow-[0_28px_70px_-36px_rgba(23,22,20,0.36)]"
            >
              <div className="grid gap-0 sm:grid-cols-[1fr_170px]">
                <div className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-[#E5E0D7]">
                    <Crown className="h-5 w-5" strokeWidth={1.9} />
                  </div>

                  <h3
                    className="text-[1.08rem] font-semibold tracking-[-0.02em]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Es un servicio para marcas que necesitan verse más
                    completas, más cuidadas y más profesionales.
                  </h3>

                  <p
                    className="mt-3 max-w-2xl text-[0.96rem] leading-7 text-white/70"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    La diferencia aparece cuando cada elemento suma al mismo
                    relato visual en lugar de resolver partes sueltas por
                    separado.
                  </p>
                </div>

                <div className="relative hidden sm:block">
                  <div className="absolute inset-0 border-l border-white/8" />
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="relative h-28 w-28">
                      <div className="absolute inset-0 rounded-[28px] border border-white/10 rotate-0" />
                      <div className="absolute inset-[12px] rounded-[22px] border border-[#A69C90]/18 rotate-6" />
                      <div className="absolute inset-[28px] rounded-[16px] bg-[#A69C90]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna derecha */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.58, ease: 'easeOut' }}
              className="overflow-hidden rounded-[38px] border border-[#A69C90]/18 bg-white/78 p-4 shadow-[0_30px_80px_-40px_rgba(23,22,20,0.22)] backdrop-blur-xl sm:p-5"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {PRODUCTION_ITEMS.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.24 }}
                      transition={{
                        delay: 0.06 + index * 0.08,
                        duration: 0.5,
                        ease: 'easeOut'
                      }}
                      className="group rounded-[28px] border border-[#A69C90]/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(229,224,215,0.62)_100%)] p-5 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#61574B]/20 hover:shadow-[0_22px_46px_-30px_rgba(23,22,20,0.16)]"
                    >
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#A69C90]/16 bg-white/82 text-[#171614]">
                          <Icon className="h-5 w-5" strokeWidth={1.9} />
                        </div>

                        <div
                          className="text-[1.55rem] font-semibold leading-none tracking-[-0.05em] text-[#A69C90]"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          {item.id}
                        </div>
                      </div>

                      <h3
                        className="text-[1.03rem] font-semibold tracking-[-0.02em] text-[#171614]"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="mt-3 text-[0.95rem] leading-7 text-[#171614]/68"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        {item.description}
                      </p>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: 0.12, duration: 0.56, ease: 'easeOut' }}
              className="overflow-hidden rounded-[36px] border border-[#A69C90]/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.84)_0%,rgba(229,224,215,0.72)_100%)] shadow-[0_26px_68px_-38px_rgba(23,22,20,0.18)]"
            >
              <div className="grid gap-0 sm:grid-cols-[1fr_220px]">
                <div className="p-6 sm:p-7">
                  <span
                    className="inline-flex rounded-full border border-[#A69C90]/20 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#61574B]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Producción integral
                  </span>

                  <h3
                    className="mt-5 text-[1.16rem] font-semibold tracking-[-0.03em] text-[#171614] sm:text-[1.32rem]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Más que contenido: una puesta visual completa.
                  </h3>

                  <div className="mt-4 space-y-3">
                    {[
                      'Más coherencia entre piezas',
                      'Más impacto visual en conjunto',
                      'Mejor lectura de marca',
                      'Resultado final más premium'
                    ].map((line) => (
                      <div key={line} className="flex items-start gap-3">
                        <div className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#171614] text-white">
                          <CheckCircle2
                            className="h-3.5 w-3.5"
                            strokeWidth={2.2}
                          />
                        </div>
                        <p
                          className="text-[0.95rem] leading-7 text-[#171614]/72"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          {line}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#animacion-3d"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#171614] bg-[#171614] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:border-[#61574B] hover:bg-[#61574B]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Ver siguiente servicio
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="relative hidden sm:block">
                  <div className="absolute inset-0 border-l border-[#171614]/8" />
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="relative h-36 w-36">
                      <div className="absolute inset-0 rounded-full border border-[#A69C90]/20" />
                      <div className="absolute inset-[16px] rounded-full border border-[#61574B]/18" />
                      <div className="absolute inset-[34px] rounded-full border border-[#171614]/10" />
                      <div className="absolute inset-[54px] rounded-full bg-[#171614]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{ delay: 0.16, duration: 0.5, ease: 'easeOut' }}
              className="rounded-[28px] border border-[#A69C90]/16 bg-white/74 p-5 text-[#171614] shadow-[0_18px_44px_-32px_rgba(23,22,20,0.14)]"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#A69C90]/16 bg-[#E5E0D7]/54 text-[#171614]">
                  <Sparkles className="h-5 w-5" strokeWidth={1.9} />
                </div>

                <div>
                  <h3
                    className="text-[1.02rem] font-semibold tracking-[-0.02em]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Producción completa para campañas, lanzamientos o contenido
                    premium.
                  </h3>

                  <p
                    className="mt-2 text-[0.95rem] leading-7 text-[#171614]/70"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Es la opción ideal cuando la marca necesita una presencia
                    visual más cuidada, más ambiciosa y mejor resuelta en todos
                    sus frentes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
