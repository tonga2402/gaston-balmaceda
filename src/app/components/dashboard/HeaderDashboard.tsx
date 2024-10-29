import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/UI-KIT/LogoLandingPage.png";
import UserHeader from "./UserHeader";
import { Suspense } from "react";

const HeaderDashboard = () => {
  return (
    <div className="header_container">
      <div>
        <Link href={"/"}>
          <Image src={Logo} alt={"Logo Home"} priority={true} />
        </Link>
      </div>
      <div className="avatar_container">
        <Suspense fallback={<p>...cargando</p>}>
          <UserHeader />
        </Suspense>
      </div>
    </div>
  );
};

export default HeaderDashboard;
