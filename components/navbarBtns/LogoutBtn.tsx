"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export function LogoutBtn() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const renewSession = useCallback(() => {
    router.replace("/");
  }, [router]);

  useEffect(
    () =>
      hanko?.onSessionExpired(() => {
        renewSession();
      }),

    [hanko, renewSession]
  );

  const logout = () => {
    hanko?.user
      .logout()
      .then(() => {
        router.push("/");
        router.refresh();
        return;
      })
      .catch(setError);
  };

  return (
    <button
      className=" bg-brand-contrast-color rounded-full py-2 px-10 xl:text-lg border font-IBM border-color-shade-1 text-base-color text-base hover:ring-0 hover:ring-base-color hover:border-base-color"
      onClick={logout}
    >
      Logout
    </button>
  );
}
