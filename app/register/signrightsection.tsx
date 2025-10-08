"use client";

type Props = {
  openSignup: () => void;
  openSignin: () => void;
  showSigninContent: boolean;
  showSignupContent: boolean;
};

import Image from "next/image";
import logo from "@/public/images/logoreal.png";
// Removed local state, now controlled by parent
import { AnimatePresence, motion } from "framer-motion";


export default function SignRightSection({ openSignup, openSignin, showSigninContent, showSignupContent }: Props) {
  const showContent1  = () => {
    openSignup();
  };

  const showContent2 = () => {
    openSignin();
  };
  return (
    <>
      <div className="px-3 py-8 relative overflow-hidden h-full w-full">
        <span className="circle1"></span>
        <span className="circle2"></span>
        <Image src={logo} alt="logo" height={80} width={80} />
        <AnimatePresence mode="wait">
          {showSigninContent && (
            <motion.div
              key="register-signin-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className="flex justify-center items-center gap-9 flex-col text-white mt-8 z-20"
            >
              <h1 className="text-4xl font-bold">Welcome back</h1>
              <p className="text-center w-[80%] font-light">
                Hey there!!!, we miss your presence, can't wait for you to
                spread the gospel.
              </p>
              <button onClick={showContent1} className="h-[50px] w-[220px] ring-2 ring-light-background rounded-full">Sign up</button>
            </motion.div>
          )}
          {showSignupContent && (
            <motion.div
              key="register-signup-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className="flex justify-center items-center flex-col gap-5 text-white mt-8 z-20"
            >
              <h1 className="text-4xl font-bold">Hello there </h1>
              <p className="text-center w-[80%] font-light">Yooo, I see you are new, Get on here!!!, to let go do the will of God.</p>
              <button onClick={showContent2} className="h-[50px] w-[220px] ring-2 ring-light-background rounded-full">Sign in</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
