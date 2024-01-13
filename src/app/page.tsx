"use client";
import { useEffect, useState, useRef } from 'react';
import { Carousel } from 'flowbite-react';

import * as THREE from "three";
// @ts-ignore
import GLOBE from 'vanta/dist/vanta.globe.min.js';

// dummy type for vanta
interface VantaEffect { destroy: () => void };

export default function Home() {
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
        scaleMobile: 1.00
      }))
    }

    return () => {
      if (vanta) vanta.destroy()
    }
  }, [vanta])

  return (
    <div className="z-10 flex flex-col grow">
      <section className="-z-10 p-6 h-screen" ref={vantaRef}>
        <h1 className="text-5xl font-extrabold dark:text-stone-200">
          Websites done right.
        </h1>

      </section>

      <section className="p-6 h-screen" id="experience">
        <div className="flex">
          <div className="flex-1 dark:text-stone-200">
            take a look at some of the things I've done.
          </div>
          <div className="flex-3">
            {/* <Carousel>
              <p> Alice </p>
              <p> Bob </p>
            </Carousel> */}
          </div>
        </div>
      </section>
    </div>
  )
}
