import React, { useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Globe, MessageCircle, Mail, EllipsisVertical } from 'lucide-react';
import { FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

export default function CRLinksModal({
  open,
  onClose,
  brand = 'CR estudio | Estudio Creativo',
  description = 'Creamos identidad, contenido y presencia.',
  logoSrc = '',
  websiteUrl = '/',
  whatsappUrl = 'https://wa.me/5493863407430',
  instagramUrl = '',
  tiktokUrl = '',
  linkedinUrl = '',
  newsletterUrl = ''
}) {
  /* Benjamin Orellana - 2026/04/16 - Bloquea el scroll del body y permite cerrar con Escape cuando la modal está abierta. */
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  /* Benjamin Orellana - 2026/04/16 - Arma la grilla de accesos del hub visual manteniendo el estilo del mock de referencia. */
  const linkItems = useMemo(
    () =>
      [
        {
          id: 'web',
          label: 'Nuestra WEB',
          href: websiteUrl,
          icon: Globe
        },
        {
          id: 'whatsapp',
          label: 'WhatsApp',
          href: whatsappUrl,
          icon: MessageCircle
        },
        {
          id: 'linkedin',
          label: 'LinkedIn',
          href: linkedinUrl,
          icon: FaLinkedinIn
        },
        {
          id: 'tiktok',
          label: 'TikTok',
          href: tiktokUrl,
          icon: FaTiktok
        },
        {
          id: 'newsletter',
          label: 'Enterate las últimas novedades',
          href: newsletterUrl,
          icon: Mail
        }
      ].filter((item) => Boolean(item.href)),
    [websiteUrl, whatsappUrl, linkedinUrl, tiktokUrl, newsletterUrl]
  );

  const socialItems = [
    {
      id: 'instagram',
      href: instagramUrl,
      icon: FaInstagram,
      label: 'Instagram'
    },
    {
      id: 'tiktok',
      href: tiktokUrl,
      icon: FaTiktok,
      label: 'TikTok'
    },
    {
      id: 'linkedin',
      href: linkedinUrl,
      icon: FaLinkedinIn,
      label: 'LinkedIn'
    }
  ].filter((item) => Boolean(item.href));

  const isExternalLink = (href = '') => /^https?:\/\//i.test(href);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose?.();
          }}
        >
          <motion.div
            className="absolute inset-0 bg-[#171614]/45 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="pointer-events-none absolute left-[8%] top-[12%] h-32 w-32 rounded-full bg-[#A69C90]/30 blur-3xl sm:h-44 sm:w-44"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.28, 0.5, 0.28]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            className="pointer-events-none absolute bottom-[10%] right-[8%] h-40 w-40 rounded-full bg-[#E5E0D7]/60 blur-3xl sm:h-56 sm:w-56"
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.25, 0.48, 0.25]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-[620px] overflow-hidden rounded-[34px] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(245,241,235,0.96)_100%)] px-4 pb-5 pt-4 shadow-[0_40px_120px_-34px_rgba(23,22,20,0.4)] sm:px-6 sm:pb-6 sm:pt-5"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_55%)]" />

            <div className="relative z-10 flex items-start justify-between">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D8D1C7] bg-white/80 text-[#171614] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-white"
                aria-label="Cerrar modal"
              >
                <X className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D8D1C7] bg-white/80 text-[#171614] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-white"
                aria-label="Cerrar modal"
              >
                <X className="h-5 w-5 opacity-0" />
              </button>
            </div>

            <div className="relative z-10 mx-auto flex max-w-[520px] flex-col items-center px-2 pb-2 pt-1 text-center sm:px-4">
              <motion.div
                className="relative mb-5 mt-1 flex h-[110px] w-[110px] items-center justify-center rounded-full border border-white/70 bg-[#A69C90] shadow-[0_18px_55px_-18px_rgba(97,87,75,0.45)] sm:h-[126px] sm:w-[126px]"
                animate={{
                  y: [0, -4, 0],
                  boxShadow: [
                    '0 18px 55px -18px rgba(97,87,75,0.35)',
                    '0 24px 70px -20px rgba(97,87,75,0.5)',
                    '0 18px 55px -18px rgba(97,87,75,0.35)'
                  ]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={brand}
                    className="h-[72px] w-[72px] rounded-full object-cover sm:h-[86px] sm:w-[86px]"
                  />
                ) : (
                  <span className="select-none font-serif text-[2.5rem] tracking-[0.08em] text-white sm:text-[2.9rem]">
                    CR
                  </span>
                )}
              </motion.div>

              <motion.h2
                className="max-w-[480px] font-serif text-[2rem] leading-[1.05] text-[#171614] sm:text-[2.35rem]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.4 }}
              >
                {brand}
              </motion.h2>

              <motion.p
                className="mt-3 max-w-[470px] text-[0.98rem] leading-relaxed text-[#61574B] sm:text-[1.05rem]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.4 }}
              >
                {description}
              </motion.p>

              {socialItems.length > 0 && (
                <motion.div
                  className="mt-5 flex flex-wrap items-center justify-center gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.45 }}
                >
                  {socialItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.24 + index * 0.05,
                          duration: 0.28
                        }}
                        whileHover={{ y: -3, scale: 1.06 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D9D0C6] bg-white text-[#171614] shadow-[0_16px_40px_-22px_rgba(23,22,20,0.35)] transition-all duration-300 hover:border-[#A69C90] hover:text-[#61574B]"
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    );
                  })}
                </motion.div>
              )}

              <div className="mt-7 flex w-full flex-col gap-4">
                {linkItems.map((item, index) => {
                  const Icon = item.icon;
                  const external = isExternalLink(item.href);

                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 18, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: 0.28 + index * 0.07,
                        duration: 0.42,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ y: -3, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="group relative flex min-h-[76px] items-center gap-4 overflow-hidden rounded-[24px] border border-black/5 bg-white/92 px-4 py-4 text-left shadow-[0_22px_60px_-30px_rgba(23,22,20,0.28)] transition-all duration-300 hover:border-[#C9BFB3] hover:shadow-[0_28px_72px_-28px_rgba(97,87,75,0.36)] sm:min-h-[84px] sm:px-5"
                    >
                      <motion.div
                        className="pointer-events-none absolute inset-y-0 left-[-35%] w-[35%] bg-gradient-to-r from-transparent via-white/70 to-transparent"
                        whileHover={{ left: '110%' }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                      />

                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#ECE5DA] bg-[#FCFBF9] text-[#171614] sm:h-14 sm:w-14">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="relative z-10 min-w-0 flex-1">
                        <div className="truncate font-serif text-[1.15rem] text-[#171614] sm:text-[1.32rem]">
                          {item.label}
                        </div>
                      </div>

                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#8A7E71] transition-colors duration-300 group-hover:text-[#61574B]">
                        <EllipsisVertical className="h-5 w-5" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
