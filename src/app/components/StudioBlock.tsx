"use client"

import { useState } from "react";

export default function StudioBlock() {
    const [hovered, setHovered] = useState(false);

    return (
        <div className={hovered ? "bg-ellies-yellow flex h-screen" : "bg-dark-red flex h-screen" } >
            <div className="m-auto" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
                <header className="text-ellies-yellow font-script text-5xl text-center hover:text-dark-red">a creative studio.</header>
            </div>
        </div>
    )
}