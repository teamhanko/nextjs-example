import { Topper } from "@/components/Topper";
import { ProfileBtn } from "@/components/navbarBtns/ProfileBtn";
import { LogoutBtn } from "@/components/navbarBtns/LogoutBtn";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 border-color-shade-2 border-b bg-background-color text-base-color pt-2 z-40 lg:block hidden">
      <div className="flex justify-between items-center py-5 lg:px-14 xl:px-56">
        <Topper />
        <div className="flex gap-10 items-center">
          <ProfileBtn />
          <LogoutBtn />
        </div>
      </div>
    </nav>
  );
};
