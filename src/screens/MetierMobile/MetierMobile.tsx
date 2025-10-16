import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ActualitsPourLesSubsection } from "../../components/sections/ActualitsPourLesSubsection";
import { FooterSubsection } from "../../components/sections/FooterSubsection";
import { HeroSectionSubsection } from "../../components/sections/HeroSectionSubsection";
import { LmentsDeRassuranceSubsection } from "../../components/sections/LmentsDeRassuranceSubsection";
import { NewsletterSubsection } from "../../components/sections/NewsletterSubsection";
import { NosWrapperSubsection } from "../../components/sections/NosWrapperSubsection";
import { TabBarSubsection } from "../../components/sections/TabBarSubsection";
import { VotreDevisEnSubsection } from "../../components/sections/VotreDevisEnSubsection";

const navigationItems = [
  { label: "Je loue", active: true },
  { label: "Je vends", active: false },
  { label: "À la carte", active: false },
];

export const MetierMobile = (): JSX.Element => {
  return (
    <div className="overflow-hidden bg-[linear-gradient(0deg,rgba(243,241,247,1)_0%,rgba(243,241,247,1)_100%)] w-full min-w-[393px] relative">
      <img
        className="absolute top-[306px] left-[-79px] w-[557px] h-[5207px] pointer-events-none"
        alt="Formes décoratives"
      />

      <header className="flex w-full items-center justify-between pt-[50px] pb-4 px-4 fixed top-0 left-0 z-50 rounded-[0px_0px_16px_16px] overflow-hidden border-[none] shadow-[inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb] backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)] bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[0px_0px_16px_16px] before:[background:linear-gradient(172deg,rgba(255,255,255,0)_0%,rgba(170,127,251,1)_37%,rgba(170,127,251,1)_70%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <Link to="/">
            <img
              className="relative w-[170px] h-8 object-cover"
              alt="Logo horizontal"
              src="/logo_horizontal.png"
            />
          </Link>
        </div>

        <nav className="flex items-center justify-end gap-2 relative flex-1 grow">
          <Link to="/metier">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium"
            >
              Métier
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 p-2 rounded-[62px]"
          >
            <img className="relative w-5 h-5" alt="Person" src="/person.svg" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 p-2 rounded-[62px]"
          >
            <img className="relative w-5 h-5" alt="Cart" src="/cart.svg" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 p-2 bg-[#faf8fc] rounded-[62px] shadow-[3.63e-16px_5.93px_11.87px_#33333324,inset_1.13e-16px_1.85px_1.85px_#ffffff,inset_-1.13e-16px_-1.85px_1.85px_#ebebeb]"
          >
            <img
              className="relative w-6 h-6"
              alt="Ellipsis horizontal"
              src="/ellipsis-horizontal.svg"
            />
          </Button>
        </nav>
      </header>

      <main className="relative w-full pt-[110px]">
        <HeroSectionSubsection />

        <LmentsDeRassuranceSubsection />
        <NosWrapperSubsection />
        <ActualitsPourLesSubsection />
        <VotreDevisEnSubsection />
        <NewsletterSubsection />
        <FooterSubsection />
      </main>

      <TabBarSubsection />
    </div>
  );
};
