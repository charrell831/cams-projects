"use client"

import { useState } from "react";
import Link from "next/link";

export default function StudioBlock() {
    const [hovered, setHovered] = useState(false);

    return (
        <div className={hovered ? "bg-ellies-yellow flex h-screen" : "bg-dark-red flex h-screen" } >
            <div className="m-auto" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
                <Link href="https://open.spotify.com/playlist/3EOfHc2OSKkXcHSUX3e2Du?si=i1O2ywDySkW9X0QG6Xa_rA">
                <header className="text-ellies-yellow font-script text-5xl text-center hover:text-dark-red">a creative studio.</header>
                </Link>
            </div>
        </div>
    )
}