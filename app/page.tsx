"use client";

import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import SliderOne from "@/components/ui/slider";
import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./shopify-stores";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { useRef, useEffect } from "react";

export default function Home() {
  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "center", // Ensures the section is centered in the viewport
    });
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToBrands={() => scrollToSection(brandsRef)}
        scrollToGraphicDesign={() => scrollToSection(graphicDesignRef)}
        scrollToShopifyStores={() => scrollToSection(shopifyStoresRef)}
        scrollToWebsiteDesign={() => scrollToSection(websiteDesignRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
      />
      <Spotlight className="hidden md:flex left-80" fill="white" />

      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-4xl pd-5 md:text-7xl px-6 text-center bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50"
        >
          Create, grow, and <br /> Scale your Business
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom tailored solutions for your business. We are a team of
          creatives who are excited to help you grow your business.
        </p>
        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white"
        >
          {" "}
          Book a call
        </Link>

        <div className="w-full pt-20">
          <SliderOne />
        </div>
        <div ref={websiteDesignRef}>
          <WebsiteDesign />
        </div>
        <div ref={graphicDesignRef}>
          <GraphicDesign />
        </div>
        <div ref={shopifyStoresRef}>
          <ShopifyStores />
        </div>
        <div ref={brandsRef}>
          <Brands />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <FAQS />
      </div>
    </div>
  );
}
