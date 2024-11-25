import { Project } from "../projects/page"
import Image from "next/image"

export default function ProjectRowCard(project: {project: Project}) {
    return (
        <div>
            <div className="bg-ellies-yellow w-[100%]">
                <div className="pt-[2%]">
                    <Image
                        className="pl-[2%]"
                        src={'/' + project.project.imageSrc}
                        width={100}
                        height={200}
                        alt={project.project.descList.title} 
                    />
                </div>
                <h4 className="text-dark-red text-left font-playfair font-bold text-xl">{project.project.descList.title}</h4>
            </div>
        </div>
    )
}