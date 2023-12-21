"use client";
import { useState } from "react";
import { classNames } from "@/lib/classNames";
import dynamic from "next/dynamic";


const HankoProfile = dynamic(() => import('@/components/hankoComponents/Profile'), { ssr: false })


export function ProfileBtn() {
  const [openState, setOpenState] = useState(false);

  const profileClick = () => {
    return setOpenState(!openState);
  };

  return (
    <>
      <button
        type="button"
        className={classNames(openState && "open", "font-IBM p-2 xl:text-lg")}
        onClick={profileClick}
      >
        Profile
      </button>
      {openState && (
        <div className="lg:backdrop-blur-md lg:bg-background-color/30 z-30 lg:min-h-screen w-full absolute left-0 right-0 top-36 lg:top-24 ">
          <section className="w-[350px] sm:w-[420px] lg:w-[450px]  h-auto lg:mx-0 px-6 py-8 rounded-2xl z-50 lg:shadow-color-shade-1/10 shadow-md bg-brand-contrast-color border border-color-shade-2 absolute right-0 top-0 lg:right-20 lg:top-20 2xl:right-60  ">
            <HankoProfile />
          </section>
        </div>
      )}
    </>
  );
}
