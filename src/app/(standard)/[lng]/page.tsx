"use client";

import { useEffect, useState, useRef } from 'react';
import { Card } from 'flowbite-react';

import * as THREE from "three";
// @ts-expect-error no types available for vanta
import GLOBE from 'vanta/dist/vanta.globe.min.js';

import { Gama, Encora, TomorrowTech } from "@/ui/ExperienceCard";
import Carousel from "@/ui/HomeCarousel";
import CardGrid from "@/ui/CardGrid";
import { useTranslation } from "@/app/i18n/client";

// dummy type for vanta
interface VantaEffect { destroy: () => void }


export default function Home({ params }: { params: { lng: string } }) {
  const { t } = useTranslation(params.lng, "home");

  // starting animation.
  const [vanta, setVanta] = useState<VantaEffect | null>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vanta) {
      setVanta(GLOBE({
        THREE,
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: "#23153c",
        color: "#ff3f81",
        color2: "#ffffff"
      }))
    }

    return () => {
      if (vanta) vanta.destroy()
    }
  }, [vanta])

  return (
    <div className="z-10 flex flex-col grow">
      <section className="-z-10 p-6 h-screen" ref={vantaRef}>
        <h1 className="text-6xl font-extrabold dark:text-stone-200 ">
          {t("title")}
        </h1>
      </section>

      <section className="p-6 h-fit flex flex-col justify-center dark:bg-stone-700" id="whoiam">
        <div className="mt-10 mb-10 flex justify-center text-black dark:text-stone-200">
          <Card className="md:w-2/5">
            <h1 className="text-4xl font-bold text-black dark:text-stone-200">{t("aboutTitle")}</h1>
            <p>
              {t("aboutDescription")}
            </p>
          </Card>
        </div>
      </section>

      <section className="flex flex-col items-center p-6 h-screen" id="experience">
        <div className="flex flex-col w-full h-2/3">
        <Carousel className="" slide={false}>
          {Gama}
          {Encora}
          {TomorrowTech}
        </Carousel>
          <div className="text-black dark:text-stone-200 md:m-auto">
            {t("experienceDescription")}
          </div>
        </div>
      </section>

      <section className="p-5 text-black dark:text-white dark:bg-gray-700" id="skills">
        <div className="flex flex-col md:flex-row items-center h-full">
          <Card className="md:w-64">
            {t("skillsDescription")}
          </Card>
          <div className="p-5 grow">
            <CardGrid />
          </div>
        </div>
      </section>
    </div>
  )
}
