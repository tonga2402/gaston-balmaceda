import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/UI-KIT/LogoLandingPage.png";
import UserHeader from "./UserHeader";


const HeaderDashboard = () => {
  return (
    <div className="header_container">
      <div>
        <Link href={"/"}>
          <Image src={Logo} alt={"Logo Home"} priority={true} />
        </Link>
      </div>
      <div className="avatar_container">
        <UserHeader />
      </div>
    </div>
  );
};

export default HeaderDashboard;
