"use client";

import { useEffect, useState } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function HankoProfile() {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    register(hankoApi ?? "").catch(
      setError
    );
  }, []);

  return <hanko-profile />;
}
