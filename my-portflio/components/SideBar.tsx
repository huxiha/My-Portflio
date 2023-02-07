import Image from "next/image";
import { AiFillWeiboCircle, AiFillGithub } from 'react-icons/ai'
import { RiBilibiliFill } from 'react-icons/ri'
import { GiPositionMarker, GiTie } from 'react-icons/gi'
import { useState } from "react";
import { useTheme } from "next-themes";

// 侧边栏实现
const SideBar = () => {

    const [currentMode, setCurrentMode] = useState('Light UI');
    const {theme, setTheme} = useTheme();
    const handleMode = () => {
        if(theme === "light") {
            setTheme("dark");
            setCurrentMode("Light UI")
        } else {
            setTheme("light");
            setCurrentMode("Dark UI")
        }
    }

    return ( 
        <div>
            {/* 头像 */}
            <Image 
                src='/images/rabit.png' 
                alt="head portrait" 
                width='128' 
                height='128' 
                className="mx-auto rounded-full"/>
            {/* 姓名 */}
            <h3 className="my-4 text-3xl font-medium tracking-wider text-center font-kausan"><span className="text-green-400">Hu</span>xixi</h3>
            {/* 目前主要方向 */}
            <p className="px-2 py-1 my-3 text-center bg-gray-200 rounded-full dark:bg-dark-200">Learning web3</p>
            {/* 下载简历 */}
            <a className="flex items-center justify-center px-2 py-1 mb-3 bg-gray-200 rounded-full dark:bg-dark-200" 
                href="/images/rabit.png" 
                download="rabit.png"
                >
                {/* 领带Logo */}
                <GiTie />
                Download Resume
            </a>
            

            {/* 社交账户logo */}
            <div className="flex items-center justify-around w-9/12 mx-auto my-3 text-2xl text-green-500 md:w-full">
                {/* 微博 */}
                <AiFillWeiboCircle />
                {/* bilibili */}
                <RiBilibiliFill />
                {/* github */}
                <AiFillGithub />
            </div>

            <div className="py-4 my-5 text-center bg-gray-200 dark:bg-dark-200" style={{marginLeft:"-1rem", marginRight:"-1rem"}}>
                {/* address */}
                <div className="flex items-center justify-center mb-1 space-x-1">
                    {/* address logo */}
                    <GiPositionMarker />
                    <p>TianJin,China</p>
                </div>
                {/* email */}
                <p className="mb-1">hytuaing@163.com</p>
                {/* phone number */}
                <p>666666/888888</p>
            </div>
            <button className='w-8/12 px-5 py-2 mx-8 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r from-green-400 to-blue-400' 
                onClick={() => (window.open('mailto:hytuaing@163.com'))}>Email Me</button>
            <button className='w-8/12 px-5 py-2 mx-8 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r from-green-400 to-blue-400' 
                onClick={handleMode}>
                {currentMode}</button>
        </div>
     );
}
 
export default SideBar;