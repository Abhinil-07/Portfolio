import React from "react";
import { StackCard } from "./StackCard";

const Timeline = () => {
  return (
    <>
      <div className="flex flex-col ml-5 lg:ml-[350px] mt-8 ">
        <span className="text-[40px] font-bold mt-[30px] mb-[60px]">
          Education
        </span>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-600">
              <img src="https://i.ibb.co/KwZD8M9/college.png" alt="college" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Netaji Subhash Engineering College
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-6 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Current
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2020-present
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Kolkata,West Bengal,India
              <br /> B.Tech in Computer Science and Engineering
              <br />
              CGPA: 9.32
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-600">
              <img src="https://i.ibb.co/LPYT8S0/school.png" alt="" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Indus Valley World School
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2020
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Kolkata, West Bengal, India
              <br />
              Class 12 (CBSE)
              <br />
              Percentage : 92.6%
            </p>
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-600">
              <img src="https://i.ibb.co/wQ8pgHR/clas-10.png" alt="class" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Indus Valley World School
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              March 2018
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Kolkata, West Bengal, India
              <br />
              Class 10 (CBSE)
              <br />
              Percentage : 92.2%
            </p>
          </li>
        </ol>
      </div>
      <StackCard />
    </>
  );
};

export default Timeline;
