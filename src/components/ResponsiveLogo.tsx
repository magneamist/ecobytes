"use client";
import LogoEcobytes from "@/app/icons/logo";
import { useEffect, useState } from "react";

export const ResponsiveLogo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? (
    <LogoEcobytes height="20" width="fill" />
  ) : (
    <LogoEcobytes />
  );
};