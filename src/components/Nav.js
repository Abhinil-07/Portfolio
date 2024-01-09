import React from 'react'
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import Button from "./Button"
import "./style.css"
let tabs = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" }
];

const Nav = () => {
    let [activeTab, setActiveTab] = useState(tabs[0].id);
    return (
        <div className='flex flex-wrap items-center justify-between mt-[30px] '>
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
            <div className="flex space-x-7 p-[8px] border-2 rounded-full ml-5 border-transparent bg-[#222222]"
            >
              

                <Button
                    tab={tabs[0]}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                 <Button
                    tab={tabs[1]}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                <Button
                    tab={tabs[2]}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                <Button
                    tab={tabs[3]}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                
               

            </div>
            <div className='flex mr-7 space-x-9'>

                <div className='relative border-t-2  border-slate-800 border-gradient-t px-4 py-3 rounded-full'>
                    <a href='https://github.com' className='text-2xl' target='blank'>
                        <FaGithub className='text-white' />
                    </a>
                </div>
                <div className='relative border-t-2  border-slate-800 border-gradient-t px-4 py-3 rounded-full'>
                    <a href='https://github.com' className='text-2xl' target='blank'>
                        <FaLinkedin className='text-white' />
                    </a>
                </div>

                <div className='relative border-t-2  border-slate-800 border-gradient-t px-4 py-3 rounded-full'>
                    <a href='https://github.com' className='text-2xl' target='blank'>
                        <FaXTwitter className='text-white' />  
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Nav