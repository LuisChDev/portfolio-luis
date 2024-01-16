"use client";
import { useEffect, useState, useRef } from 'react';
import { Carousel, Card } from 'flowbite-react';

import * as THREE from "three";
// @ts-ignore
import GLOBE from 'vanta/dist/vanta.globe.min.js';

// dummy type for vanta
interface VantaEffect { destroy: () => void };

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

      <section className="p-6 h-screen" id="whoiam">
        <div className="dark:text-stone-200">
          These are some of my skills, either from work or explored out of
          curiosity.
        </div>

      </section>

      <section className="p-6 h-screen" id="experience">
        <div className="flex flex-col">
          <div className="dark:text-stone-200">
            take a look at some of the things I've done.
          </div>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
              <Card className="max-w-sm">
                <h5 className="text-2xl font-bold trancking-tight dark:text-stone-200">
                  Aduanas Gama S.A.S. Ingeniero programador
                </h5>
                <p className="font-normal dark:text-stone-300">
                  In charge of developing a React Native & React Web application.
                </p>
              </Card>

              <Card className="max-w-sm">
                <h5 className="text-2xl font-bold trancking-tight dark:text-stone-200">
                  Encora LLC - Senior Software Engineer
                </h5>
                <p className="font-normal dark:text-stone-300">
                  Front-end development using React, Formik, Bootstrap and other
                  modern JS stack technologies.
                </p>
              </Card>

              <Card className="max-w-sm">
                <h5 className="text-2xl font-bold trancking-tight dark:text-stone-200">
                  Tomorrow Tech S.A.S. Software developer
                </h5>
                <p className="font-normal dark:text-stone-300">
                  customer relationships, front-end and cloud developement & admin
                </p>
              </Card>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="h-screen" id="skills">
        <div className="dark:text-stone-200">
          These are some of my skills, either from work or explored out of
          curiosity.
        </div>
      </section>
    </div>
  )
}
