"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/UI-KIT/LogoBlack.png";
import { useRouter, usePathname } from "next/navigation";

const HeaderAuth = () => {
  const router = useRouter();
  const currentPage = usePathname();

  const goToLink = () => {
    router.push("/login");
  };
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
          <button className="button_grey" onClick={goToLink}>
            Iniciar sesión
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderAuth;
