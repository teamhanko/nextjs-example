import { Bottom } from "@/components/Bottom";

export function Footer() {
  return (
    <div className="relative mx-auto w-screen h-32 ">
      <footer className="absolute inset-x-0 bottom-0 pt-10 pb-6 border-y border-color-shade-2 flex justify-center bg-background-color text-base-color ">
        <Bottom />
      </footer>
    </div>
  );
}
