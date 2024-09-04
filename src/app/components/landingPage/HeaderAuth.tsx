"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/UI-KIT/LogoBlack.png";
import { usePathname } from "next/navigation";

const HeaderAuth = () => {
  const currentPage = usePathname();

  return (
    <div className="header_container">
      <div>
        <Link href={"/"}>
          <Image src={Logo} alt={"Logo Home"} priority={true} />
        </Link>
      </div>
      <div>
        {currentPage === "/login" ? (
          <></>
        ) : (
          <Link
            href={"/login"}
            className="button_grey"
            style={{ textDecoration: "none" }}
          >
            Iniciar sesión
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderAuth;
