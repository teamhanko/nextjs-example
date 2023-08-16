import { Logo } from "@/components/Logo"

export const Bottom = () => {
  return (
    <div className="my-10">
      <p className="mb-10 text-xs md:text-base xl:text-lg font-medium text-center">
        Example app
      </p>
      <div className="flex  gap-4  items-center">
        <p className="text-xs md:text-base xl:text-lg">Powered by</p>
        <Logo
          src={
            "https://uploads-ssl.webflow.com/5e6f5bf4a2ae9702a833f3ee/5ee0ee956a85ef31e5064956_Hanko_Logo_White.svg"
          }
          className="h-8 lg:h-10"
        />
      </div>
    </div>
  );
};
