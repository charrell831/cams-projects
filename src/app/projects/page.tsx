"use client"

import ProjectCard from "../components/ProjectCard";
import useMediaQuery from "../useMedia"
import NavBar from "../components/NavBar";
import Link from "next/link";

export type Project = {
    imageSrc: string;
    descList: {title: string, link: string}
}

export default function Projects() {
    let isPhone = useMediaQuery("(max-width: 650px)")
    const screenHeight = isPhone ? 'h-full' : 'min-h-screen'
    const filmList = [
        {name: 'red sweater', link: 'https://youtu.be/KmwxEsbkxvY?si=0V2mXHCtcmqvRsaT'}, 
        {name: '8:15 on a sunday', link: 'https://youtu.be/ruhZTADN4Gw?si=mvP4BPClMDBzbXVh'}, 
        {name: 'record player', link: 'https://youtu.be/cBQicQiw-mo?si=4KIIbh9nEpH3T79F'},
        {name: 'too much is going on', link: 'https://youtu.be/wz4HUaHnUXQ?si=UtCHRwo7Rfa0JIjV'},
        {name: 'limitless', link: 'https://youtu.be/0Fdl-Hh43Jw?si=0pKRP9OuitUeQ2oT'}]

    const projects = [
        {imageSrc: 'static/mised.jpg', descList: {title: 'the miseducation of us', link: 'https://www.youtube.com/watch?v=nAOWblPoBhU&t=3s'}},
        {imageSrc: 'static/jours.jpg', descList: {title: 'jours normaux', link: 'https://www.youtube.com/watch?v=fmWUyyCHqoU&t=19s'}},
        {imageSrc: 'static/3peat.jpg', descList: {title: 'the 3-peat', link: 'https://www.youtube.com/watch?v=uiCg45Put74'}},
    ]


    return (
        <div className={`bg-dark-red px-[8%] ${screenHeight}`}>
            <NavBar />
            <h3 className="pt-12 text-8xl font-script text-ellies-yellow drop-shadow-md">The Work</h3>
            <br />
            <div>
            {isPhone ? 
                <div className="flex flex-col gap-y-2">
                    {projects.map((proj)=> {
                        return <ProjectCard project={proj} />
                    })}
                </div>
            :
                <div className="grid grid-cols-3 gap-10 content-center">
                    {projects.map((proj)=> {
                        return <ProjectCard project={proj} />
                    })}
                </div>
            }
            </div>
            <div>
            {/* {filmList.map((film)=> {
                return <h1 className="text-ellies-yellow font-playfair font-bold text-2xl">
                            <Link href={film.link}>{film.name}</Link>
                        </h1>
            })} */}
            </div>
        </div>    
    )
}