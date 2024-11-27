import NavBar from "../components/NavBar"
import Link from "next/link";

export default function Contact() {
    return (
        <div className="bg-dark-red">
            <NavBar />
            <div className="flex h-screen pt-[5%] px-[15%]">
                <div className="m-auto">
                    <header className="text-ellies-yellow font-script text-6xl text-center">Email:</header>
                    <Link href="mailto:camsprojects931@gmail.com">
                        <header className="text-ellies-yellow font-playfair text-4xl text-center">
                            cams.projects831@gmail.com
                        </header>
                    </Link>
                    
                </div>
            </div>
        </div>
        
    )
}