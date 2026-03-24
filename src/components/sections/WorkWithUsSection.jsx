import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  CreditCard,
  FileImage,
  ImagePlus,
  MapPin,
  MessageSquareText,
  Palette,
  PenTool,
  Send,
  Sparkles,
  Type,
  UserRound
} from 'lucide-react';

/*
 * Programador: Benjamin Orellana
 * Fecha Creación: 24 / 03 / 2026
 * Versión: 1.0
 *
 * Descripción:
 * Sección final "Quiero trabajar con vos" para CR - Estudio Creativo.
 * El formulario se armó en base a los datos solicitados por el cliente,
 * dividido en:
 * - Info importante
 * - Info historias
 *
 * Queda listo para conectarse a backend, mail o WhatsApp más adelante.
 *
 * Tema: Home / Formulario de contacto
 * Capa: Frontend
 */

const initialForm = {
  logo: '',
  nombre: '',
  colores: '',
  inspiracion: '',
  tipoLetra: '',
  servicios: '',
  contacto: '',
  ubicacion: '',
  mediosPago: '',
  comoAdquirir: '',
  otraInfo: ''
};

const requiredFields = ['nombre', 'servicios', 'contacto'];

function validateForm(values) {
  const errors = {};

  requiredFields.forEach((field) => {
    if (!String(values[field] || '').trim()) {
      errors[field] = 'Este campo es obligatorio.';
    }
  });

  return errors;
}

function FieldLabel({ icon: Icon, children, required = false }) {
  return (
    <label
      className="mb-2 flex items-center gap-2 text-[0.9rem] font-semibold text-[#171614]"
      style={{ fontFamily: 'var(--font-primary)' }}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[#A69C90]/16 bg-[#E5E0D7]/56 text-[#171614]">
        <Icon className="h-4 w-4" strokeWidth={1.9} />
      </span>
      <span>
        {children}
        {required ? <span className="ml-1 text-[#61574B]">*</span> : null}
      </span>
    </label>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  error,
  name,
  type = 'text'
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={[
          'w-full rounded-[20px] border bg-white px-4 py-3.5 text-[0.96rem] text-[#171614] outline-none transition-all duration-300',
          'placeholder:text-[#171614]/36',
          error
            ? 'border-[#61574B]/45 shadow-[0_0_0_4px_rgba(97,87,75,0.08)]'
            : 'border-[#A69C90]/18 focus:border-[#61574B]/32 focus:shadow-[0_0_0_4px_rgba(97,87,75,0.06)]'
        ].join(' ')}
        style={{ fontFamily: 'var(--font-primary)' }}
      />

      {error ? (
        <p
          className="mt-2 text-[0.84rem] text-[#61574B]"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

function TextArea({ value, onChange, placeholder, error, name, rows = 4 }) {
  return (
    <div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={[
          'w-full resize-none rounded-[22px] border bg-white px-4 py-3.5 text-[0.96rem] text-[#171614] outline-none transition-all duration-300',
          'placeholder:text-[#171614]/36',
          error
            ? 'border-[#61574B]/45 shadow-[0_0_0_4px_rgba(97,87,75,0.08)]'
            : 'border-[#A69C90]/18 focus:border-[#61574B]/32 focus:shadow-[0_0_0_4px_rgba(97,87,75,0.06)]'
        ].join(' ')}
        style={{ fontFamily: 'var(--font-primary)' }}
      />

      {error ? (
        <p
          className="mt-2 text-[0.84rem] text-[#61574B]"
          style={{ fontFamily: 'var(--font-primary)' }}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function WorkWithUsSection({ onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const completedCount = useMemo(() => {
    return Object.values(form).filter((value) => String(value || '').trim())
      .length;
  }, [form]);

  const totalCount = Object.keys(form).length;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validation = validateForm(form);
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    try {
      setIsSubmitting(true);

      if (typeof onSubmit === 'function') {
        await onSubmit(form);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700));
      }

      setSent(true);
      setForm(initialForm);
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f1ea_52%,#e5e0d7_100%)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.028] [background-image:linear-gradient(to_right,rgba(23,22,20,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,22,20,0.14)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute left-[-10%] top-[8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(166,156,144,0.14)_0%,_rgba(255,255,255,0)_72%)]" />
        <div className="absolute bottom-[-18%] right-[-8%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,_rgba(97,87,75,0.10)_0%,_rgba(255,255,255,0)_72%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-22 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Columna editorial */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.62, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span
              className="inline-flex rounded-full border border-[#A69C90]/24 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#61574B]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Quiero trabajar con vos
            </span>

            <h2
              className="mt-6 text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#171614] sm:text-[2.95rem] lg:text-[3.75rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Empecemos con una base
              <span
                className="ml-2 inline-block text-[#61574B]"
                style={{ fontFamily: 'var(--font-secondary)' }}
              >
                clara
              </span>
              .
            </h2>

            <p
              className="mt-6 max-w-xl text-[1rem] leading-8 text-[#171614]/72 sm:text-[1.05rem]"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Este formulario reúne la información inicial que CR necesita para
              entender mejor tu marca, tus servicios y lo que querés comunicar.
            </p>

            <div className="mt-8 overflow-hidden rounded-[32px] border border-[#A69C90]/18 bg-[#171614] text-white shadow-[0_28px_70px_-34px_rgba(23,22,20,0.34)]">
              <div className="p-6">
                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E5E0D7]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Mensaje base del cliente
                </div>

                <p
                  className="mt-4 text-[0.97rem] leading-8 text-white/74"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Holaa! Soy Contii. Te envío los datos que necesito así
                  empezamos a trabajar.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-[#A69C90]/18 bg-white/82 p-5 shadow-[0_18px_40px_-32px_rgba(23,22,20,0.14)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#A69C90]/16 bg-[#E5E0D7]/54 text-[#171614]">
                  <Sparkles className="h-5 w-5" strokeWidth={1.9} />
                </div>

                <h3
                  className="text-[1rem] font-semibold tracking-[-0.02em] text-[#171614]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Info importante
                </h3>

                <p
                  className="mt-2 text-[0.94rem] leading-7 text-[#171614]/68"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Logo, nombre, colores, inspiración y bases visuales de la
                  marca.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#A69C90]/18 bg-white/82 p-5 shadow-[0_18px_40px_-32px_rgba(23,22,20,0.14)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#A69C90]/16 bg-[#E5E0D7]/54 text-[#171614]">
                  <MessageSquareText className="h-5 w-5" strokeWidth={1.9} />
                </div>

                <h3
                  className="text-[1rem] font-semibold tracking-[-0.02em] text-[#171614]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Info historias
                </h3>

                <p
                  className="mt-2 text-[0.94rem] leading-7 text-[#171614]/68"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Servicios, contacto, ubicación, medios de pago y datos clave.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[30px] border border-[#A69C90]/18 bg-white/78 p-5 shadow-[0_18px_42px_-32px_rgba(23,22,20,0.14)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div
                    className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#61574B]"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Progreso del formulario
                  </div>

                  <p
                    className="mt-2 text-sm text-[#171614]/68"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Completaste {completedCount} de {totalCount} campos.
                  </p>
                </div>

                <div
                  className="text-[1.55rem] font-semibold tracking-[-0.04em] text-[#171614]"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  {completedCount}/{totalCount}
                </div>
              </div>

              <div className="mt-4 h-2 rounded-full bg-[#E5E0D7]">
                <div
                  className="h-2 rounded-full bg-[#171614] transition-all duration-500"
                  style={{
                    width: `${(completedCount / totalCount) * 100}%`
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{ duration: 0.62, ease: 'easeOut' }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[38px] border border-[#A69C90]/18 bg-white/78 p-4 shadow-[0_34px_80px_-42px_rgba(23,22,20,0.20)] backdrop-blur-xl sm:p-5 lg:p-6">
              <AnimatePresence>
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-5 rounded-[24px] border border-[#A69C90]/18 bg-[#E5E0D7]/46 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#171614] text-white">
                        <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                      </div>

                      <div>
                        <h3
                          className="text-[0.98rem] font-semibold text-[#171614]"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          Formulario listo
                        </h3>
                        <p
                          className="mt-1 text-sm leading-7 text-[#171614]/68"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          La UI ya quedó lista. Ahora se puede conectar con
                          backend, email o WhatsApp.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Info importante */}
                <div className="rounded-[30px] border border-[#A69C90]/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(229,224,215,0.46)_100%)] p-5 sm:p-6">
                  <div className="mb-6">
                    <div
                      className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#61574B]"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      Bloque 01
                    </div>
                    <h3
                      className="mt-2 text-[1.2rem] font-semibold tracking-[-0.03em] text-[#171614]"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      Info importante
                    </h3>
                  </div>

                  <div className="grid gap-5">
                    <div>
                      <FieldLabel icon={FileImage}>Logo</FieldLabel>
                      <TextArea
                        name="logo"
                        value={form.logo}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Contanos si ya tenés logo, si querés rediseñarlo o si hay algo importante que debamos saber."
                      />
                    </div>

                    <div>
                      <FieldLabel icon={UserRound} required>
                        Nombre
                      </FieldLabel>
                      <TextInput
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Nombre de la marca, negocio o proyecto"
                        error={errors.nombre}
                      />
                    </div>

                    <div>
                      <FieldLabel icon={Palette}>Colores</FieldLabel>
                      <TextArea
                        name="colores"
                        value={form.colores}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Indicá colores que ya uses o los que te gustaría transmitir."
                      />
                    </div>

                    <div>
                      <FieldLabel icon={ImagePlus}>Inspiración</FieldLabel>
                      <TextArea
                        name="inspiracion"
                        value={form.inspiracion}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Algún logo, identidad o marca que te guste y nos pueda servir como referencia."
                      />
                    </div>

                    <div>
                      <FieldLabel icon={Type}>Tipo de letra</FieldLabel>
                      <TextInput
                        name="tipoLetra"
                        value={form.tipoLetra}
                        onChange={handleChange}
                        placeholder="Ejemplo: elegante, minimalista, serif, moderna, manuscrita"
                      />
                    </div>
                  </div>
                </div>

                {/* Info historias */}
                <div className="rounded-[30px] border border-[#A69C90]/16 bg-white p-5 shadow-[0_18px_40px_-32px_rgba(23,22,20,0.10)] sm:p-6">
                  <div className="mb-6">
                    <div
                      className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#61574B]"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      Bloque 02
                    </div>
                    <h3
                      className="mt-2 text-[1.2rem] font-semibold tracking-[-0.03em] text-[#171614]"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      Info historias
                    </h3>
                  </div>

                  <div className="grid gap-5">
                    <div>
                      <FieldLabel icon={Sparkles} required>
                        Servicios
                      </FieldLabel>
                      <TextArea
                        name="servicios"
                        value={form.servicios}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Contanos qué servicios ofrecés o cuáles querés destacar."
                        error={errors.servicios}
                      />
                    </div>

                    <div>
                      <FieldLabel icon={MessageSquareText} required>
                        Contacto
                      </FieldLabel>
                      <TextArea
                        name="contacto"
                        value={form.contacto}
                        onChange={handleChange}
                        rows={3}
                        placeholder="WhatsApp, Instagram, email u otros medios de contacto."
                        error={errors.contacto}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <FieldLabel icon={MapPin}>Ubicación</FieldLabel>
                        <TextInput
                          name="ubicacion"
                          value={form.ubicacion}
                          onChange={handleChange}
                          placeholder="Ciudad, zona o dirección comercial"
                        />
                      </div>

                      <div>
                        <FieldLabel icon={CreditCard}>
                          Medios de pago
                        </FieldLabel>
                        <TextInput
                          name="mediosPago"
                          value={form.mediosPago}
                          onChange={handleChange}
                          placeholder="Transferencia, efectivo, tarjetas, etc."
                        />
                      </div>
                    </div>

                    <div>
                      <FieldLabel icon={PenTool}>
                        Cómo adquirir el servicio
                      </FieldLabel>
                      <TextArea
                        name="comoAdquirir"
                        value={form.comoAdquirir}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Ejemplo: por mensaje, por formulario, por presupuesto previo, por reserva, etc."
                      />
                    </div>

                    <div>
                      <FieldLabel icon={MessageSquareText}>
                        Otra info importante
                      </FieldLabel>
                      <TextArea
                        name="otraInfo"
                        value={form.otraInfo}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Agregá cualquier dato extra que quieras sumar y que consideres importante."
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p
                    className="text-sm leading-7 text-[#171614]/62"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    Los campos marcados con * son obligatorios.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#171614] bg-[#171614] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-[1px] hover:border-[#61574B] hover:bg-[#61574B] disabled:cursor-not-allowed disabled:opacity-65"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? 'Enviando...' : 'Enviar información'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
