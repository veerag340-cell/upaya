import Image from "next/image";
import Link from "next/link";

const Logo = () => {
return ( <Link href="/" className="flex items-center">


  {/* Light Logo */}
   <Image
        src="/images/logo/logo.png"
        alt="UpayaInd Logo"
        width={200}
        height={60}
        priority
        className="dark:hidden w-auto h-14"
      />

  {/* Dark Logo */}
  <Image
    src="/images/logo/logo-white.svg"
    alt="UpayaInd Logo"
    width={160}
    height={50}
    priority
    className="hidden dark:block w-auto h-8"
  />

</Link>


);
};

export default Logo;
