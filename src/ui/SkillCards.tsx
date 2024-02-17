import { Card } from "flowbite-react";

import type { ReactNode } from "react";

interface CardData {
  imgAlt: string;
  imgSrc: string;
  description: ReactNode;
}

const cards: { [key: string]: CardData } = {

};

const makeSkillCard = ({ imgAlt, imgSrc, description}: CardData) => {
  return (
    <Card>
    </Card>
  );
};
