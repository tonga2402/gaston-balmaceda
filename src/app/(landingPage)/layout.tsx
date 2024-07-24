import type { Metadata } from "next";
import "../landing.css";
import HeaderLanding from "../components/landingPage/HeaderLanding";
import Footer from "../components/landingPage/Footer";


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
        {children}
        <Footer />
        </body>
    </html>
  );
}
