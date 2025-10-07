"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logoreal.png";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import React from "react";


export function Header() {
  
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

        <div className=" gap-3 text-[0.9rem] hidden md:flex">
          <button className="h-[40px] w-[100px] border-2 border-light-primary text-light-primary outline-none rounded-md">
            Sign in
          </button>
          <button className="h-[40px] w-[100px] text-light-background border-none outline-none rounded-md header-btn2">
            Sign up
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
