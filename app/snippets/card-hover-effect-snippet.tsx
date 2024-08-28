import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  PiMonitor,
  PiStorefront,
  PiLock,
  PiMegaphone,
  PiAppStoreLogo,
  PiHeadsetFill,
  PiFacebookLogo,
  PiMessengerLogoLight,
  PiFunnelLight,
  PiIntersectThreeFill,
  PiInvoiceDuotone,
  PiGoogleLogoBold,
} from "react-icons/pi";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiInvoiceDuotone className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Social Media Management",
    description:
      "We manage your social media accounts to enhance your online presence and engage with your audience effectively.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Website Design",
    description:
      "We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiStorefront className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "E-commerce Store",
    description:
      "From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMessengerLogoLight className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Cold Email Marketing",
    description:
      "Our cold email marketing strategies are designed to generate leads and build relationships with potential customers.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiLock className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Authentication",
    description:
      "Secure authentication solutions for your website or app. We use the latest technology to keep your data safe.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMegaphone className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Social Media",
    description:
      "We offer social media management and ad creation services. We can help you grow your social media presence and reach new customers.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "App Development",
    description:
      "We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.",
  },

  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiFacebookLogo className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Facebook Ads",
    description:
      "Reach a wider audience and drive more traffic with our targeted Facebook Ads services. We create campaigns that convert.",
  },

  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiFunnelLight className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Sales Funnels",
    description:
      "Optimize your sales process with our custom-built sales funnels that guide your customers from awareness to purchase.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiIntersectThreeFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Content Marketing",
    description:
      "Engage your audience with high-quality content. We create and distribute content that drives traffic and builds brand authority.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiGoogleLogoBold className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Google Ads",
    description:
      "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Support",
    description:
      "We offer google adds for all our clients.Maximize your reach and drive targeted traffic with our expert Google Ads management services, to boost your business growth.",
  },
];
