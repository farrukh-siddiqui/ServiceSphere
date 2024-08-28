"use client";
import React from "react";
import Image from "next/image";
const WebsiteDesign = () => {
  return (
    <div className=" p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div
        className="text-4xl pd-5 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500
              to bg-sky-100 bg-opacity-50"
      >
        Website Design
        <br /> that works
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
        Creating, designing and developing websites that work for your business.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/businesspage.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/investmentcalculator.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/portfolio.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/settingpageaceinterview.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/loginpageaceinterview.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/feedbackaceinterview.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/shoesproductpage.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/dashboardaceinterview.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/ubereatspage.png"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/aceInterviewDesign1.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/signupaceinterview.png"
              alt=""
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              priority
              className="h-auto max-w-full rounded-lg"
              src="/images/shoebazar.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesign;
