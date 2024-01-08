import React from 'react'
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Nav = () => {
    return (
        <div className='flex flex-wrap items-center justify-between mt-5'>
            <div className='flex flex-col items-start  ml-5'>
                <h4 className='text-2xl'>Abhinil Nath</h4>
                <h2 className='text-sm text-gray-400'>Freelance Frontend Developer</h2>
            </div>
            <div className='border-2 rounded-2xl ml-5 border-transparent bg-[#222222]'>
                <ul className='flex'>
                    <li className='px-5 py-1'>Home</li>
                    <li className='px-5 py-1'>Work</li>
                    <li className='px-5 py-1'>About</li>
                    <li className='px-5 py-1'>Contact</li>
                </ul>
            </div>

            <div className='flex mr-7'>
                <a href='https://github.com' className='px-5 text-2xl'target='blank'>
                    <FaGithub />
                </a>
                <a href='https://github.com'className='px-5 text-2xl' target='blank'>
                    <FaLinkedin />
                </a>
                <a href='https://github.com'className='px-5 text-2xl' target='blank'>
                    <FaTwitter />
                </a>
            </div>

        </div>
    )
}

export default Nav