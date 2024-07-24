import Footer from '../components/landingPage/Footer';
import HeaderAuth from '../components/landingPage/HeaderAuth';
import './auth.css'


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <HeaderAuth />
        {children}
        <Footer />
      </body>
    </html>
  );
}
