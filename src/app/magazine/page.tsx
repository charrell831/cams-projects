'use client'

import Image from "next/image";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useSwipeable } from 'react-swipeable';
import useMediaQuery from "../useMedia";

export type MagazinePage = {
    imageSrc: string;
}


export default function Magazine() {
    const [selected, setSelected] = useState(0)
    let isPhone = useMediaQuery("(max-width: 820px)")

    const magazineVol1 = [
        {imageSrc: '/static/CAMS_PROJECTS_1.jpg'},
        {imageSrc: '/static/2.png'},
        {imageSrc: '/static/3.png'},
        {imageSrc: '/static/4.png'},
        {imageSrc: '/static/5.png'},
        {imageSrc: '/static/6.png'},
    ]

    const handleNextPageOnClick = () => {
        setSelected(prev => {
          if (prev === magazineVol1.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      };

      const handlePrevPageOnClick = () => {
        setSelected(prev => {
          if (prev === 0) {
            return magazineVol1.length - 1;
          } else {
            return prev - 1;
          }
        });
      };

      const handleNextPageOnSwipe = useSwipeable({
        onSwipedLeft: handlePrevPageOnClick,
        onSwipedRight: handleNextPageOnClick,
        swipeDuration: 500,
      });

    return (
        <div>
            <NavBar />
            {isPhone ? 
                  <div {...handleNextPageOnSwipe} className="flex justify-center animate-fadeIn">
                      <Image 
                          src={magazineVol1[selected].imageSrc} 
                          alt="cams projects pg 1"
                          width={550}
                          height={700}
                      />
                  </div>
                :
                  <div className="grid grid-cols-3 gap-2 justify-center pt-[2%]  animate-fadeIn">
                    <div className="flex justify-center items-center ">
                      <button type="button" onClick={handlePrevPageOnClick} className="rotate-180 text-ellies-yellow bg-dark-red font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>  
                          <span className="sr-only">Previous arrow</span>
                        </button>
                      </div>
                      <div {...handleNextPageOnSwipe} className="transition-opacity ease-in duration-700 opacity-100">
                          <Image 
                              src={magazineVol1[selected].imageSrc} 
                              alt="cams projects pg 1"
                              width={550}
                              height={700}
                          />
                      </div>
                      <div className="flex justify-center items-center ">
                        <button type="button" onClick={handleNextPageOnClick} className="text-ellies-yellow bg-dark-red font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2">
                          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>  
                        <span className="sr-only">Forward arrow</span>
                        </button>
                      </div>
                  </div>
                }
            <br />
            <div className="grid grid-cols-3 gap-4 px-[15%]">
                {magazineVol1.map((page)=>{
                    return <Image 
                                src={page.imageSrc} 
                                alt="cams projects pg 1"
                                width={350}
                                height={500}
                            />
                })}
            </div>
        </div>
    )
}