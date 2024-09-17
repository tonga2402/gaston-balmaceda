import type { Metadata } from "next";
import "../landing.css";
import HeaderLanding from "../components/landingPage/HeaderLanding";
import Footer from "../components/landingPage/Footer";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Digital Money House",
  description: "E-Commerce",
};

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderLanding />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
