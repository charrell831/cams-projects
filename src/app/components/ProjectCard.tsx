import { Project } from "../projects/page"
import Image from "next/image"
import Link from "next/link";
import useMediaQuery from "../useMedia"


export default function ProjectCard(project: {project: Project}) {
    let isPhone = useMediaQuery("(max-width: 650px)")
    const cardHeight = isPhone ? 'h-96' : 'h-[175%]'

    return (
            <div className={`content-center ${cardHeight} relative`}>
                <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 items-center bg-ellies-yellow w-[100%] h-[100%] shadow-2xl">
                    <div className="flex justify-center items-center pt-[2%]">
                        <Link href={project.project.descList.link}>
                            <Image
                                className="content-center px-[2%]" 
                                src={'/' + project.project.imageSrc}
                                width={500}
                                height={700}
                                alt={project.project.descList.title} 
                            />
                        </Link>
                        
                    </div>
                    <h4 className="px-[2%] text-dark-red text-center font-playfair font-bold text-2xl">{project.project.descList.title}</h4> 
                    <h3 className="absolute bottom-0 left-0 pl-[2%] pb-[2%] text-dark-red font-script">2024</h3>
                </div>
            </div>
    )
}