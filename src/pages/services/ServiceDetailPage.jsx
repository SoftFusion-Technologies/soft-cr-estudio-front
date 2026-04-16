import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import FooterCR from '../../components/sections/FooterCR';
import WorkWithUsSection from '../../components/sections/WorkWithUsSection';
import CommunityManagerSection from '../../components/sections/services/CommunityManagerSection';
import MarketingRedesSection from '../../components/sections/services/MarketingRedesSection';
import BrandingSection from '../../components/sections/services/BrandingSection';
import VideoCreationSection from '../../components/sections/services/VideoCreationSection';
import VideoPhotographySection from '../../components/sections/services/VideoPhotographySection';
import FullProductionSection from '../../components/sections/services/FullProductionSection';
import Animation3DSection from '../../components/sections/services/Animation3DSection';
import { crServicesBySlug } from '../../data/crServices';

/* Benjamin Orellana - 2026/04/16 - Registro central que conecta cada slug de servicio con su sección ya existente. */
const serviceSectionMap = {
  'community-manager': CommunityManagerSection,
  'marketing-redes': MarketingRedesSection,
  branding: BrandingSection,
  'edicion-video': VideoCreationSection,
  'video-profesional': VideoPhotographySection,
  'produccion-completa': FullProductionSection,
  'animacion-3d': Animation3DSection
};

export default function ServiceDetailPage() {
  const { slug } = useParams();

  const service = crServicesBySlug[slug];
  const CurrentSection = serviceSectionMap[slug];

  /* Benjamin Orellana - 2026/04/16 - Fuerza scroll al inicio al entrar o cambiar de página de servicio. */
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [slug]);

  if (!service || !CurrentSection) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-dvh bg-[#FFFFFF]">
      <Navbar />

      <main className="pt-24">
        <section className="relative overflow-hidden bg-[#F7F3ED] py-14 sm:py-16 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(166,156,144,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(97,87,75,0.12),transparent_34%)]" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D8CDC1] bg-white/75 px-4 py-2 text-sm font-medium text-[#171614] backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:bg-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>

            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
              <div className="max-w-[640px]">
                <div className="inline-flex rounded-full border border-[#D8CDC1] bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#61574B]">
                  {service.eyebrow}
                </div>

                <h1 className="mt-5 text-[2.8rem] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#171614] sm:text-[4rem] lg:text-[4.8rem]">
                  {service.title}
                </h1>

                <p className="mt-6 text-[1rem] leading-[1.95] text-[#171614]/80 sm:text-[1.08rem]">
                  Descripción editable: aquí puedes colocar una introducción
                  específica para este servicio, explicando enfoque, beneficios,
                  proceso de trabajo y diferencial de CR Estudio Creativo.
                </p>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-[#E3D8CD] bg-white shadow-[0_28px_80px_-28px_rgba(23,22,20,0.18)]">
                <div className="aspect-[4/3.8] w-full overflow-hidden bg-[#EFE9E1]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <CurrentSection />
        <WorkWithUsSection />
      </main>

      <FooterCR />
    </div>
  );
}
