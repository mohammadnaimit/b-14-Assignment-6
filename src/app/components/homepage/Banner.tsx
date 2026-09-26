import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png"; 

const Banner = () => {
  return (
    <section className="px-4 py-8">
      <div className="container mx-auto overflow-hidden rounded-2xl bg-[#121318] p-8 md:p-12 lg:p-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Content */}
          <div className="space-y-6 text-left">
            <p className="text-xs font-semibold tracking-wider text-[#a3e635] uppercase">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into {`today's`} plan, and watch the {`week's`} work add up.
            </p>

            <div>
              <button className="rounded-md bg-[#ccff00] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#b8e600]">
                BROWSE WORKOUTS
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src={bannerImg}
                alt="Gym Workout"
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
