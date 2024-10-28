import { Suspense } from "react";
import Footer from "../components/landingPage/Footer";
import HeaderAuth from "../components/landingPage/HeaderAuth";
import "./auth.css";
import Loading from "./loading";
import { Toaster } from "sonner";

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
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
