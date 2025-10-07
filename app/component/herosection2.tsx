"use client";
import React from "react";
import { MdMenu } from "react-icons/md";
type card = {
  icon: React.ReactNode;
  header: string;
  paragragh: string;
}[];

export default function HeroSection2() {
  const cardComponent: card = [
    {
      icon: <MdMenu />,
      header: "Header",
      paragragh: "Hello, I am a realy nice paragraph",
    },
    {
      icon: <MdMenu />,
      header: "Header",
      paragragh: "Hello, I am a realy nice paragraph",
    },
    {
      icon: <MdMenu />,
      header: "Header",
      paragragh: "Hello, I am a realy nice paragraph",
    },
    {
      icon: <MdMenu />,
      header: "Header",
      paragragh: "Hello, I am a realy nice paragraph",
    },
  ];
  return (
    <>
      <div className="p-9 mt-9">
        <div className="bg-white w-full md:p-9 md:grid md:grid-cols-2 items-center gap-4 drop-shadow-sm">
          <div className="flex justify-start items-start flex-col text-slate-800">
            {" "}
            <h1 className="font-bold text-xl">Features</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              debitis provident molestias officiis numquam libero voluptatibus,
              nam ducimus, recusandae, dignissimos natus quaerat commodi qui
              pariatur iusto dolores eligendi quae. Laboriosam.
            </p>
          </div>
          <div className="md:grid md:grid-cols-2 gap-5">
            {cardComponent.map((card, i) => (
              <div key={i}>
                <div className="h-full w-full rounded-xl p-6 flex justify-center items-start flex-col gap-3 text-slate-800 ring-2 ring-slate-200 bg-white">
                  <span className="h-[45px] w-[45px] rounded-md bg-slate-500"></span>
                  <h2 className="font-bold">{card.header}</h2>
                  <p className="text-[0.9rem]">{card.paragragh}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
