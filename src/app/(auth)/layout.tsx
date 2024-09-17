import { Suspense } from "react";
import Footer from "../components/landingPage/Footer";
import HeaderAuth from "../components/landingPage/HeaderAuth";
import "./auth.css";
import Loading from "./loading";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <HeaderAuth />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
