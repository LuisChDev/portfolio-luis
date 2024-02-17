import {
  Footer as BaseFooter,
  FooterBrand,
} from "flowbite-react";
import logo from "../../public/favicon-32x32.png";

const Footer = () => (
  <BaseFooter container className="relative z-20 p-6">
    <div className="w-full text-center">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <FooterBrand
          href="https://luisedo.cc"
          src={logo.src}
          alt="Luis Chavarriaga Logo"
          name="Luis Chavarriaga"
        />
        2024
      </div>
    </div>
  </BaseFooter>
);
export default Footer;
