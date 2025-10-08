"use client";
import { MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
export default function HeroSection() {
  const parentVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const childrenVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="show"
        className="flex md:justify-center md:items-center justify-start items-start flex-col  gap-7 mt-16"
      >
        <motion.h1
          variants={childrenVariant}
          className="text-[3.4rem] md:text-[4rem] text-left md:text-center px-9 w-[80%] md:w-[60%]"
        >
          We Are God’s{" "}
          <span className="animate-bg bg-clip-text text-transparent">
            <Typewriter
              options={{
                strings: ["Arrows", "Light", "Hope", "Future"],
                loop: true,
                autoStart: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>{" "}
          to the Future.
        </motion.h1>
        <motion.p
          variants={childrenVariant}
          className="md:w-[63%] w-full text-slate-700 text-left md:text-center md:text-[1.2rem] text-[1rem] px-9"
        >
          Every arrow has a target — and every teen has a purpose. We are being
          sharpened, aimed, and released by God to pierce darkness with light.
        </motion.p>
        <motion.div
          variants={childrenVariant}
          className="flex md:justify-center md:items-center justify-start items-start gap-4 px-9"
        >
          <button className="h-[50px] w-[170px] border-none ring-1 ring-slate-400 outline-none text-slate-700 bg-slate-200 flex justify-center items-center gap-4 rounded-lg">
            Learn More <MdChevronRight size={15} />
          </button>
          <button className="h-[50px] w-[170px] border-none outline-none text-light-background bg-gradient-to-r from-light-primary via-blue-600 to-blue-400 flex justify-center items-center gap-4 rounded-lg">
            Get started <MdChevronRight size={15} />
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}
