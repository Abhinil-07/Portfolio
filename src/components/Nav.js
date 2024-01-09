import React from 'react'
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
let tabs = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" }
];

const Nav = () => {
    let [activeTab, setActiveTab] = useState(tabs[0].id);
    return (
        <div className='flex flex-wrap items-center justify-between mt-[30px]'>
            <div className='flex flex-col items-start  ml-5'>
                <h4 className='text-2xl'>Abhinil Nath</h4>
                <h2 className='text-sm text-[#9d9588]'>Freelance Frontend Developer</h2>
            </div>
            {/* <div className='border-2 rounded-2xl ml-5 border-transparent bg-[#222222]'>
                <ul className='flex'>
                    <li className='px-5 py-1'>Home</li>
                    <li className='px-5 py-1'>Work</li>
                    <li className='px-5 py-1'>About</li>
                    <li className='px-5 py-1'>Contact</li>
                </ul>
            </div> */}
            <div className="flex space-x-4  p-[8px] border-2 rounded-full ml-5 border-transparent bg-[#222222] ">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`${activeTab === tab.id ? "" : "hover:text-white/60"
                            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className='flex mr-7 space-x-9'>
                <a href='https://github.com' className='text-2xl' target='blank'>
                    <FaGithub />
                </a>
                <a href='https://github.com' className='text-2xl' target='blank'>
                    <FaLinkedin />
                </a>
                <a href='https://github.com' className='text-2xl' target='blank'>
                    <FaTwitter />
                </a>
            </div>

        </div>
    )
}

export default Nav