import { Logo } from "@/components/Logo";

export const Topper = () => {
  return (
    <div className=" flex items-center gap-4 ">
      <Logo
        src={
          "https://uploads-ssl.webflow.com/5e6f5bf4a2ae9702a833f3ee/615edb7d0e629820a4be41b5_Logo_Color.svg"
        }
        className="h-10 lg:h-12"
      />
      <p className="text-xs md:text-base xl:text-lg font-light ">Example app</p>
    </div>
  );
};
