import type { ReactNode } from "react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Carousel as BaseCarousel } from "flowbite-react";

const carouselTheme: CustomFlowbiteTheme["carousel"] = {
  "indicators" : {
    "active": {
      "off": "bg-black/50 hover:bg-black dark:bg-gray-600/50 dark:hover:bg-gray-600",
      "on": "bg-black dark:bg-gray-600"
    }
  },
  control: {
    base:
      "inline-flex h-8 w-8 items-center justify-center rounded-full " +
      "bg-black/30 group-hover:bg-black/50 group-focus:outline-none " +
      "group-focus:ring-4 group-focus:ring-black dark:bg-gray-600/30 " +
      "dark:group-hover:bg-gray-600/60 " +
      "dark:group-focus:ring-gray-600/70 sm:h-10 sm:w-10",
  },
};

export default function Carousel({
  className,
  children,
  slide,
  ...props
}: {
  className: string | undefined;
  children: ReactNode;
  slide: boolean;
}) {
  return (
    <BaseCarousel theme={carouselTheme} className={className || ""} slide={slide} {...props}>
      {children}
    </BaseCarousel>
  );
}
