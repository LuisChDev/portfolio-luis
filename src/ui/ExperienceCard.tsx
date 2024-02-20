import { Card } from "flowbite-react";
import gamaImage3 from "../../public/files/logogama2.png";
import encoraImage from "../../public/files/Encora.jpg";
import tomorrowImage from "../../public/files/Tomorrow-Tech.png";

import type { ReactNode } from "react";

interface CardData {
  imgAlt: string;
  imgSrc: string;
  description: ReactNode;
}

const cards: { [key: string]: CardData } = {
  Gama: {
    imgAlt: "Logo de Aduanas Gama",
    imgSrc: gamaImage3.src,
    description: (
      <>
        <h5 className="font-bold text-black dark:text-stone-200">
          Agencia de Aduanas Gama S.A.S.
        </h5>
        <p className="font-normal text-black dark:text-stone-200">
          <span className="font-bold">Cargo: </span>
          Desarrollo y mantenimiento de aplicación móvil (React Native).
        </p>
      </>
    ),
  },

  Encora: {
    imgAlt: "Logo de Encora",
    imgSrc: encoraImage.src,
    description: (
      <>
        <h5 className="font-bold text-black dark:text-stone-200">Encora LLC</h5>
        <p className="font-normal text-black dark:text-stone-200">
          <span className="font-bold">Cargo: </span>
          Desarrollo de componentes en React. Pruebas unitarias, code reviews y
          pruebas e2e.
        </p>
      </>
    ),
  },

  TomorrowTech: {
    imgAlt: "Logo de Tomorrow Tech",
    imgSrc: tomorrowImage.src,
    description: (
      <>
        <h5 className="font-bold text-black dark:text-stone-200">Tomorrow Tech S.A.S.</h5>
        <p className="font-normal text-black dark:text-stone-200">
          <span className="font-bold">Cargo: </span>
          Desarrollo de aplicaciones en React. Despliegues en la nube con AWS.
          Manejo de DNS. Interacción con el cliente y levantamiento de requerimientos.
        </p>
      </>
    )
  }
};

const makeExperienceCard = ({ imgAlt, imgSrc, description }: CardData) => {
  return (
    <Card className="max-w-sm flex flex-col" imgAlt={imgAlt} imgSrc={imgSrc}>
      {description}
    </Card>
  );
};

export const { Gama, Encora, TomorrowTech } = Object.fromEntries(
  Object.entries(cards).map(([key, value]) => [key, makeExperienceCard(value)])
);
