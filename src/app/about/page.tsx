import Image from "next/image"
import NavBar from "../components/NavBar"

export default function About() {
    return (
        <div className="bg-dark-red">
        <NavBar/>
        <div className="grid gap-10 grid-cols-2">
            <div className="pl-[15%] pt-[2%]">
                <header className="font-script text-8xl text-ellies-yellow drop-shadow-md">About</header>
                <br />
                <h2 className="text-ellies-yellow font-script text-5xl drop-shadow-md">who's cam?</h2>
                <br />
                <p className="text-ellies-yellow font-league_spartan text-1xl">
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
                <br />
                <h2 className="text-ellies-yellow font-script text-5xl drop-shadow-md">best,</h2>
                <h2 className="text-ellies-yellow font-script text-5xl drop-shadow-md">cam</h2>  
            </div>
            <div className="pr-[15%] pt-[2%] pb-[25%]">
                <Image 
                    className="rounded-sm content-center"
                    src="/cam.jpg" 
                    alt="picture of cam"
                    width={550}
                    height={400}
                />
            </div>
        </div>
        </div>
    )
}