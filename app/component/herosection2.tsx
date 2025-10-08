"use client";
import React from "react";
import {
  MdMenu,
  MdPictureInPicture,
  MdQuestionAnswer,
  MdSpeaker,
} from "react-icons/md";
type card = {
  id: number;
  icon: React.ReactNode;
  header: string;
  paragragh: string;
}[];

export default function HeroSection2() {
  const cardComponent: card = [
    {
      id: 1,
      icon: <MdSpeaker size={20} />,
      header: "Announcement",
      paragragh: "Hello, I am a realy nice paragraph",
    },
    {
      id: 2,
      icon: <MdQuestionAnswer size={20} />,
      header: "Q&A submision",
      paragragh: "Hello, I am a realy nice paragraph",
    },
    {
      id: 3,
      icon: <MdPictureInPicture size={20} />,
      header: "Picture generate",
      paragragh: "Hello, I am a realy nice paragraph",
    },
  ];
  return (
    <>
      <div className="p-9 mt-9">
        <div className="bg-white w-full md:p-9 md:grid md:grid-cols-2 flex flex-wrap items-center gap-6 drop-shadow-sm overflow-x-hidden">
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
          <div className="flex flex-wrap md:justify-center md:items-center gap-5">
            {cardComponent.map((card) => (
              <div key={card.id}>
                <div className="h-[220px] w-[260px] rounded-xl p-6 flex justify-center items-start flex-col gap-3 text-slate-800 ring-2 ring-slate-100 bg-white">
                  <span
                    className={`h-[50px] w-[50px] flex justify-center items-center rounded-md ${
                      card.id == 1
                        ? "bg-red-200 text-red-700"
                        : card.id == 2
                        ? "bg-green-200 text-green-700"
                        : card.id == 3
                        ? "bg-yellow-200 text-yellow-700 "
                        : ""
                    }`}
                  >{card.icon}</span>
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
