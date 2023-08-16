"use client";

import { useState } from "react";
import { classNames } from "@/lib/classNames";
import { ProfileBtn } from "@/components/navbarBtns/ProfileBtn";
import { LogoutBtn } from "@/components/navbarBtns/LogoutBtn";

export const HamburgerBtn = () => {
  const [openState, setOpenState] = useState(false);

  const buttonClick = () => {
    setOpenState(!openState);
  };

  return (
    <>
      <button
        type="button"
        className={classNames(
          openState && "open",
          "z-40 block lg:hidden  hamburger   p-6 h-5 w-5    "
        )}
        onClick={buttonClick}
      >
        <span className="hamburger-top "></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      {openState && <MobileMenu />}
    </>
  );
};

const MobileMenu = () => {
  return (
    <div className="flex flex-col gap-6  absolute top-12 right-8 bg-brand-contrast-color w-[175px] h-[160px] py-6 px-4 rounded-3xl border border-color-shade-2  ">
      <ProfileBtn />
      <LogoutBtn />
    </div>
  );
};
