"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logoreal.png";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";


export function Header() {
  const router = useRouter()
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="flex justify-between items-center py-4 px-9 bg-white/80 backdrop-blur-md  w-full sticky top-0 left-0 z-20 shadow-sm"
      >
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" height={50} width={50} />
          <span className="text-[0.9rem] font-bold text-slate-800 h1-cinzel">
            TRUE APP
          </span>
        </div>
        <nav className="hidden md:flex justify-center gap-4 font-light text-[0.9rem] text-light-primary">
          <Link href="/">HOME</Link>
          <Link href="">ABOUT</Link>
        </nav>

        <div className="text-[0.9rem] hidden md:flex gap-3">
          <button className="h-[40px] w-[140px] border-none ring-1 ring-slate-400 outline-none text-slate-700 bg-slate-200">
           Sign up
          </button>
          <button className="h-[40px] w-[140px] border-none outline-none text-light-background bg-gradient-to-r from-light-primary via-blue-600 to-blue-400  rounded-lg" onClick={() => router.push('../register')}>
           Sign in
          </button>
        </div>  

        {/**To show navigation */}
        <div className="md:hidden block">
          <span className="">
            <MdMenu size={15} />
          </span>
        </div>
      </motion.div>
    </>
  );
}
