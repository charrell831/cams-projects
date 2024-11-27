import NavBar from "./components/NavBar";
import Link from "next/link";
import StudioBlock from "./components/StudioBlock";

export default function Home() {
  return (
    <div className="grid grid-cols-1 divide-y">
      <div>
      
        <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
          <div className="static bg-transparent">
            <video src={'../../static/bg-vid.mp4'} autoPlay muted loop className='relative -z-1 top-0 w-[100%] h-[100%] object-cover'/>
            <div className="absolute inset-x-0 top-0">
              <NavBar />
            </div>
              <div className="absolute inset-x-0 bottom-0 pb-[2%] text-center ">
                  <Link href="https://www.youtube.com/watch?v=nAOWblPoBhU">
                    <h2 className="font-script text-ellies-yellow xsm:text-1xl sm:text-2xl md:text-2xl lg:text-3xl font-light italic">the miseducation of us</h2>
                  </Link>
              </div>
          </div>
        </header>
      </div>
      <div>
        <StudioBlock />
      </div>
    </div>
    
  );
}
