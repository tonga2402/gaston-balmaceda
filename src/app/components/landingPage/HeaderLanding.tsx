import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/app/UI-KIT/LogoLandingPage.png'
import LoggedIn from '../auth/LoggedIn';


const HeaderLanding = () => {



  return (
    <div className="header_container">
      <div>
        <Link href={"/"}>
          <Image src={Logo} alt={"Logo Home"} priority={true} />
        </Link>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <LoggedIn />
      </div>
    </div>
  );
}

export default HeaderLanding;
