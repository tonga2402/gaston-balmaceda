import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/UI-KIT/LogoLandingPage.png";


const HeaderDashboard = () => {

  return (
    <div className="header_container">
      <div>
        <Link href={"/"}>
          <Image src={Logo} alt={"Logo Home"} priority={true} />
        </Link>
      </div>
      <div className="avatar_container">
        <div className="avatar_logo">MB</div>
        <p>Hola, Mauricio Brito</p>
      </div>
    </div>
  );
};

export default HeaderDashboard;
