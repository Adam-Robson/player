"use client";

import { useThemeProvider } from "@/_contexts/theme-provider";
import Header from "@/_components/layout/header";
import Footer from "@/_components/layout/footer";
import HomeImage from "@/_components/home-image";

export default function HomeLayout() {
  const { theme } = useThemeProvider();

  const image = theme === "dark" ? "lefog_dark" : "lefog_light";

  return (
    <div
      className={`
      relative h-full max-w-screen-lg w-full mx-auto
      flex flex-col justify-between items-center z-0
    `}
    >
      <Header />
      <HomeImage img={image} />
      <Footer />
    </div>
  );
}
