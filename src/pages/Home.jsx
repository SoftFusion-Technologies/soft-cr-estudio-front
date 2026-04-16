import React, { useState,useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import BrandIntro from '../components/intro/BrandIntro';
import HeroCR from '../components/sections/HeroCR';
import ValuePropositionCR from '../components/sections/ValuePropositionCR';
import CommunityManagerSection from '../components/sections/services/CommunityManagerSection';
import MarketingRedesSection from '../components/sections/services/MarketingRedesSection';
import BrandingSection from '../components/sections/services/BrandingSection';
import FooterCR from '../components/sections/FooterCR';
import VideoCreationSection from '../components/sections/services/VideoCreationSection';
import VideoPhotographySection from '../components/sections/services/VideoPhotographySection';
import FullProductionSection from '../components/sections/services/FullProductionSection';
import Animation3DSection from '../components/sections/services/Animation3DSection';
import WorkWithUsSection from '../components/sections/WorkWithUsSection';
import CRLinksModal from '../components/modals/CRLinksModal';
import ConstanzaPresentationSection from '../components/sections/ConstanzaPresentationSection';

export default function Home() {
  const [introOpen, setIntroOpen] = useState(true);
  const [brandFinished, setBrandFinished] = useState(false);
  const [linksModalOpen, setLinksModalOpen] = useState(false);

  /* Benjamin Orellana - 2026/04/16 - Abre la modal social 2 segundos después de terminar la intro para evitar choque visual con el BrandIntro. */
  useEffect(() => {
    if (!brandFinished) return;

    const timer = window.setTimeout(() => {
      setLinksModalOpen(true);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [brandFinished]);

  return (
    <div className="min-h-dvh bg-[#FFFFFF]" id="inicio">
      <Navbar />

      <BrandIntro
        open={introOpen}
        onDone={() => {
          setIntroOpen(false);
          setBrandFinished(true);
        }}
        claim="Creamos identidad, contenido y presencia"
        brand="CR · ESTUDIO CREATIVO"
        accentHex="#61574B"
        inkHex="#171614"
        bgHex="#E5E0D7"
        brandHoldMs={1800}
        exitMs={650}
        brandColorCycle={true}
        brandColors={['#171614', '#61574B', '#A69C90', '#61574B', '#171614']}
      />

      <CRLinksModal
        open={linksModalOpen}
        onClose={() => setLinksModalOpen(false)}
        brand="CR estudio | Estudio Creativo"
        description="Empoderamos marcas con identidad, contenido y estrategia."
        websiteUrl="/#inicio"
        whatsappUrl="https://wa.me/5493863407430"
        instagramUrl="https://www.instagram.com/cr.estudiocreativo?igsh=MXczcG0wbjBneWRqeQ%3D%3D&utm_source=qr"
        tiktokUrl="https://www.tiktok.com/@contiromero?_r=1&_t=ZS-94z3fBieu5U"
        linkedinUrl=""
        newsletterUrl=""
      />

      <main>
        <HeroCR />
        <ConstanzaPresentationSection autoRotateMs={5000} />

        <ValuePropositionCR></ValuePropositionCR>
        <CommunityManagerSection></CommunityManagerSection>
        <MarketingRedesSection></MarketingRedesSection>
        <BrandingSection></BrandingSection>
        <VideoCreationSection></VideoCreationSection>
        <VideoPhotographySection></VideoPhotographySection>
        <FullProductionSection></FullProductionSection>
        <Animation3DSection></Animation3DSection>
        <WorkWithUsSection></WorkWithUsSection>
      </main>
      <FooterCR></FooterCR>
    </div>
  );
}
