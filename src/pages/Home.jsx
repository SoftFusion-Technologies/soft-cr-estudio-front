import React, { useState } from 'react';
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
export default function Home() {
  const [introOpen, setIntroOpen] = useState(true);

  return (
    <div className="min-h-dvh bg-[#FFFFFF]" id="inicio">
      <Navbar />

      <BrandIntro
        open={introOpen}
        onDone={() => setIntroOpen(false)}
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

      <main>
        <HeroCR />
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
