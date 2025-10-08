import Image from "next/image";
import logo from "@/public/images/logoreal.png";
import Link from "next/link";
import { ImInstagram } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";
export default function Footer() {
  return (
    <>
      <div className="bg-light-background w-full px-9 py-6 text-slate-800">
        <div className="flex justify-between items-center w-full">
          <div>
            <Image src={logo} alt="logo" height={50} width={50} />
          </div>
          <nav className="flex gap-4  text-light-primary text-[1rem]">
            <Link href="">HOME</Link>
            <Link href="">ABOUT</Link>
          </nav>
          <div className="flex gap-3 ">
            <span className="social_media_icons">
              <ImInstagram size={18} />
            </span>
            <span className="social_media_icons">
              <FaFacebook size={18} />
            </span>
            <span className="social_media_icons">
              <BsWhatsapp size={18} />
            </span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-100 my-4"></div>
        <div className="">
          <p className="text-[0.9rem] text-center">
            <MdCopyright size={18}/>copyright 2025. All right reserved.
          </p>
        </div>
      </div>
    </>
  );
}
