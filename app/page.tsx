import { Topper } from "@/components/Topper";
import { Bottom } from "@/components/Bottom";
import dynamic from "next/dynamic";

const HankoAuth = dynamic(() => import('@/components/hankoComponents/Register'), { ssr: false })

const Home = () => {
  return (
    <main className="flex flex-row justify-center min-h-screen  text-base-color ">
      <div className="relative w-screen bg-background-color hidden md:block">
        <div className="top-14 left-16  absolute ">
          <Topper />
        </div>
      </div>
      <div className="flex flex-col relative items-center justify-center w-screen bg-brand-contrast-color pb-10 px-8">
        <div className="top-10 left-8  absolute md:hidden">
          <Topper />
        </div>
        <div className="max-w-sm mt-20 mb-48">
          <HankoAuth />
        </div>
        <div className="absolute bottom-0">
          <Bottom />
        </div>
      </div>
    </main>
  );
};

export default Home;
