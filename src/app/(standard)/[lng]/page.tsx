"use client";

import { useEffect, useState, useRef } from 'react';
import { Card } from 'flowbite-react';
import { Variants, motion } from "framer-motion";

import * as THREE from "three";
// @ts-ignore
import GLOBE from 'vanta/dist/vanta.globe.min.js';

import { Gama, Encora, TomorrowTech } from "@/ui/ExperienceCard";
import Carousel from "@/ui/HomeCarousel";
import CardGrid from "@/ui/CardGrid";

// dummy type for vanta
interface VantaEffect { destroy: () => void };

const introHeaderVariants: Variants = {
  hide: {
    opacity: 0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    }
  }
};

const introExperienceVariants: Variants = {
  hide: {
    opacity: 0,
    x: 500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    }
  }
};

export default function Home({ params }: { params: { lng: any } }) {
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
          Websites done right.
        </h1>
      </section>

      <section className="p-6 h-fit flex flex-col justify-center dark:bg-stone-700" id="whoiam">
        <div className="mt-10 mb-10 flex justify-center dark:text-stone-200">
          <Card className="md:w-2/5">
            <h1 className="text-4xl font-bold dark:text-stone-200">Hello. I'm Luis.</h1>
            <p>
              I'm a software developer from Colombia 🇨🇴. This is my personal
              website. I've been in business for nearly 7 years. Throughout
              this time, I've worked with a number of clients and partners both
              national and overseas (specially from the U.S.). I'm always willing
              to learn and innovate.
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
          <div className="md:m-auto">
            take a look at some of the things I've done.
          </div>
        </div>
      </section>

      <section className="p-5 dark:text-white dark:bg-gray-700" id="skills">
        <div className="flex flex-col md:flex-row items-center h-full">
          <Card className="md:w-64">
            These are some of my skills, either from work or explored out of
            curiosity.
          </Card>
          <div className="p-5 grow">
            <CardGrid cardArray={[]} />
          </div>
        </div>
      </section>
    </div>
  )
}
