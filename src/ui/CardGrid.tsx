import type { ReactNode } from "react";
import { Card } from "flowbite-react";

import reactLogo from "../../public/files/react-logo.png";
import nodeLogo from "../../public/files/node-logo.png";
import bootstrapLogo from "../../public/files/bootstrap-logo.png";
import vueLogo from "../../public/files/vue-logo.png";
import nixosLogo from "../../public/files/nixos-logo.png";
import awsLogo from "../../public/files/aws-logo.png";
import tailwindLogo from "../../public/files/tailwind-logo2.png";
import nextLogo from "../../public/files/nextjs-logo.png";
import reduxLogo from "../../public/files/redux-logo.png";
import graphqlLogo from "../../public/files/graphql-logo.png";
import pythonLogo from "../../public/files/python-logo.png";

const SkillCard = ({
  imgSrc,
  imgAlt,
  bgColor,
  description,
}: {
  imgSrc: string;
  imgAlt: string;
  bgColor: string;
  description: ReactNode;
}) => (
  <div className="w-fit my-2 transform transition duration-400 hover:scale-125 text-black dark:text-stone-200 active:scale-125">
    <Card
      renderImage={() => {
        return (
          <div className={`${bgColor} h-36 w-36 rounded-t-lg flex`}>
            <img src={imgSrc} alt={imgAlt} className="h-2/3 m-auto" />
          </div>
        );
      }}
    >
      {description}
    </Card>
  </div>
);

export default function CardGrid({ cardArray }: { cardArray: ReactNode[] }) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:gap-2">
      <SkillCard
        imgSrc={reactLogo.src}
        imgAlt="React Logo"
        bgColor="bg-teal-500"
        description={
          <div>
            React
          </div>
        }
      />
      <SkillCard
        imgSrc={awsLogo.src}
        imgAlt="AWS Logo"
        bgColor="bg-amber-500"
        description="AWS"
      />

      <SkillCard
        imgSrc={graphqlLogo.src}
        imgAlt="GraphQL Logo"
        bgColor="bg-fuchsia-700"
        description="GraphQL"
      />

      <SkillCard
        imgSrc={nextLogo.src}
        imgAlt="Next.js Logo"
        bgColor="bg-white"
        description="Next.js"
      />

      <SkillCard
        imgSrc={nodeLogo.src}
        imgAlt="Node.js Logo"
        bgColor="bg-lime-600"
        description="Node.js"
      />

      <SkillCard
        imgSrc={pythonLogo.src}
        imgAlt="Vue.js Logo"
        bgColor="bg-yellow-300"
        description="Vue.js"
      />

      <SkillCard
        imgSrc={tailwindLogo.src}
        imgAlt="Tailwind Logo"
        bgColor="bg-sky-800"
        description="Tailwind CSS"
      />

      <SkillCard
        imgSrc={nixosLogo.src}
        imgAlt="Bootstrap Logo"
        bgColor="bg-blue-600"
        description="NixOS"
      />

      <SkillCard
        imgSrc={reduxLogo.src}
        imgAlt="Redux Logo"
        bgColor="bg-purple-500"
        description="Redux"
      />
    </div>
  );
}
