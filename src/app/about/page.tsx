"use client"

import Image from "next/image"
import NavBar from "../components/NavBar"
import useMediaQuery from "../useMedia";

export default function About() {
    let isPhone = useMediaQuery("(max-width: 820px)")
    const grid = isPhone ? "grid grid-rows-2" : "grid gap-10 grid-cols-2"
    const padding = isPhone ? "px-[15%] pt-[5%]" : "pl-[20%] pt-[5%]"
    const imagePadding = isPhone ? "flex justify-center items-center pt-[2%] px-[15%]" : "flex justify-center items-center pt-12 pr-[15%]"
    // flex justify-center items-center pt-12 pr-[15%]
    return (
        <div className="bg-dark-red h-full">
            <NavBar/>
                 <div className= {grid}>
                    <div className={padding}>
                        <header className="font-script text-8xl text-ellies-yellow drop-shadow-md">About</header>
                        <br />
                        <h2 className="text-ellies-yellow font-script text-5xl drop-shadow-md">who's cam?</h2>
                        <br />
                        <p className="text-ellies-yellow font-playfair text-xl">
                            hi! i’m cam, the person behind cam’s projects. cam’s projects 
                            is a creative studio that produces small films which includes short 
                            documentaries and narrative shorts.
                            <br />
                            <br />
                            the documentaries are meant to dive into stories that are not 
                            often talked about.
                            <br />
                            <br />
                            the narrative shorts are smaller, more experimental projects 
                            that are meant to shine a light on how intentional cinematography 
                            can tell a story without any words.

                            <br/>
                            <br/>
                            filmmaking is one of my many interests, i also love coding, 
                            running and nerding out over whatever my current hyperfixation is.
                        </p>

                        <br />
                        <h2 className="text-right text-ellies-yellow font-script text-4xl drop-shadow-md">best,</h2>
                        <h2 className="text-right text-ellies-yellow font-script text-4xl drop-shadow-md">cam &lt;3</h2>  
                    </div>
                    <div className={imagePadding}>
                        <Image 
                            className="rounded-sm content-center drop-shadow-md"
                            src="/static/cam.jpg" 
                            alt="picture of cam"
                            width={550}
                            height={0}
                        />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
        </div>
    )
}