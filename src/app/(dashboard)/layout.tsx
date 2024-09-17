import { Toaster } from "sonner";
import HeaderDashboard from "../components/dashboard/HeaderDashboard";
import Navbar from "../components/dashboard/Navbar";
import Footer from "../components/landingPage/Footer";
import "./dashboard.css";
import { Suspense } from "react";
import Loading from "./loading";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <HeaderDashboard />
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
