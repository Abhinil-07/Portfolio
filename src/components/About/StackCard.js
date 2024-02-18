import React from "react";
import js from "../../assets/JS.png";
import react1 from "../../assets/reactjs-g.png";
import css1 from "../../assets/css-g.png";
import html1 from "../../assets/html-g.png";
import tailwind1 from "../../assets/tailwind-g.png";
import node from "../../assets/node-g.png";
import express from "../../assets/express-g.png";
import mongo from "../../assets/mongog.png";
import mongoose from "../../assets/mongoose (1).png";
import passport from "../../assets/passport-g.png";

export const StackCard = () => {
  const Frontend = [
    {
      id: 1,
      title: "HTML5",
      description: "Markup Language",
      image: html1,
    },
    {
      id: 2,
      title: "CSS3",
      description: "Style Sheet",
      image: css1,
    },
    {
      id: 3,
      title: "JavaScript",
      description: "Scripting Language",
      image: js,
    },
    {
      id: 4,
      title: "React",
      description: "JS Framework",
      image: react1,
    },
    {
      id: 5,
      title: "Tailwind CSS",
      description: "CSS Framework",
      image: tailwind1,
    },
    {
      id: 6,
      title: "Typescript",
      description: "Language",
      image: "https://i.ibb.co/ZmHGR28/ts-1.png",
    },
    {
      id: 7,
      title: "Next.js",
      description: "React Framework",
      image: "https://i.ibb.co/1r0D0WG/next.png",
    },
  ];

  const Backend = [
    {
      id: 1,
      title: "Node.js",
      description: "JavaScript Runtime",
      image: node,
    },
    {
      id: 2,
      title: "Express",
      description: "Node.js Framework",
      image: express,
    },
    {
      id: 3,
      title: "Passport.js",
      description: "Authentication",
      image: passport,
    },
    {
      id: 4,
      title: "Multer",
      description: "Node.js Middleware",
      image: "https://i.ibb.co/dDdjRYk/multer-removebg-preview.png",
    },
  ];

  const Database = [
    {
      id: 1,
      title: "MongoDB",
      description: "NoSQL Database",
      image: mongo,
    },
    {
      id: 2,
      title: "PostgreSQL",
      description: "SQL Database",
      image:
        "https://i.ibb.co/Wk7xgkN/Postgre-SQL-Logo-wine-removebg-preview.png",
    },
    {
      id: 3,
      title: "Mongoose",
      description: "ODM",
      image: "https://i.ibb.co/n0DYBS4/mongoose-2-removebg-preview.png",
    },
    {
      id: 3,
      title: "Prisma",
      description: "ORM",
      image: "https://i.ibb.co/p4YpJNk/prisma-removebg-preview.png",
    },
  ];

  return (
    <>
      <div className="flex flex-col mt-[120px] ">
        <span className="text-[40px] font-bold lg:ml-[350px] ml-[120px] 375px:ml-[135px]">
          Stack
        </span>
        <span className="mt-4 text-[25px] text-gray-400 lg:ml-[350px] 375px:ml-[65px] ml-[43px]">
          Frontend
        </span>
      </div>
      <div className="mt-8 grid lg:grid-cols-3 grid-cols-1 lg:gap-9 gap-7 lg:w-[55%] lg:mx-auto 375px:ml-[60px] ml-[38px]">
        {Frontend.map((item) => (
          <div
            key={item.id}
            className="flex rounded-lg border-t border-r border-gray-500 w-[250px] 375px:w-[280px] h-[64px] bg-[#1b1b1e]
              cursor-pointer"
          >
            <div
              className="m-4 w-[40px] h-[40px] bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url('${item.image}')` }}
            ></div>
            <div className="m-1 flex-col items-center justify-center">
              <p className="font-medium text-lg">{item.title}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <span className="mt-8 text-[25px] text-gray-400 lg:ml-[350px] 375px:ml-[65px] ml-[43px]">
          Backend
        </span>
      </div>
      <div className="mt-8 grid lg:grid-cols-3 grid-cols-1 lg:gap-9 gap-7 lg:w-[55%] lg:mx-auto 375px:ml-[60px] ml-[38px]">
        {Backend.map((item) => (
          <div
            key={item.id}
            className="flex rounded-lg border-t border-r border-gray-500 w-[250px] 375px:w-[280px] h-[60px] bg-[#1b1b1e] cursor-pointer"
          >
            <div
              className="m-4 w-[40px] h-[40px] bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url('${item.image}')` }}
            ></div>
            <div className="m-1 flex-col items-center justify-center">
              <p className="font-medium text-lg">{item.title}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <span className="mt-8 text-[25px] text-gray-400 lg:ml-[350px] 375px:ml-[65px] ml-[43px]">
          Database
        </span>
      </div>
      <div className="mt-8 grid lg:grid-cols-3 grid-cols-1 lg:gap-9 gap-7 lg:w-[55%] lg:mx-auto 375px:ml-[60px] ml-[38px]">
        {Database.map((item) => (
          <div
            key={item.id}
            className="flex rounded-lg border-t border-r border-gray-500 w-[250px]  375px:w-[280px] h-[60px] bg-[#1b1b1e] cursor-pointer"
          >
            <div
              className="m-4 w-[40px] h-[40px] bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url('${item.image}')` }}
            ></div>
            <div className="m-1 flex-col items-center justify-center">
              <p className="font-medium text-lg">{item.title}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
