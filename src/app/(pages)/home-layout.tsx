"use client";

import { useThemeProvider } from "@/_contexts/theme-provider";
import Header from "@/_components/layout/header";
import Footer from "@/_components/layout/footer";
import HomeImage from "@/_components/home-image";

export default function HomeLayout() {
  const { theme } = useThemeProvider();

  const image = theme === "dark" ? "planetdark" : "planet";

  return (
    <>
      <Header />
      <HomeImage img={image} />
      <Footer />
    </>
  );
}
