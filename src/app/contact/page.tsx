'use client'

import NavBar from "../components/NavBar"
import Link from "next/link";
import useMediaQuery from "../useMedia";

export default function Contact() {
    let isPhone = useMediaQuery("(max-width: 820px)")
    const emailSize = isPhone ? "text-ellies-yellow font-script text-3xl text-center" : "text-ellies-yellow font-script text-6xl text-center"
    const projEmailSize = isPhone ? "text-ellies-yellow font-playfair text-2xl text-center" : "text-ellies-yellow font-playfair text-4xl text-center"
    return (
        <div className="bg-dark-red">
            <NavBar />
            <div className="flex justify-center h-screen pt-[5%] px-[15%]">
                <div className="m-auto">
                    <header className={emailSize}>Email:</header>
                    <Link href="mailto:camsprojects831@gmail.com">
                        <header className="text-ellies-yellow font-playfair text-4xl text-center">
                            cams.projects831@gmail.com
                        </header>
                    </Link>
                    
                </div>
            </div>
        </div>
        
    )
}