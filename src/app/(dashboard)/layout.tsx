import { Toaster } from "sonner";
import HeaderDashboard from "../components/dashboard/HeaderDashboard";
import Navbar from "../components/dashboard/Navbar";
import Footer from "../components/landingPage/Footer";
import "./dashboard.css";


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
        {children}
        <Toaster/>
        <Footer />
      </body>
    </html>
  );
}
