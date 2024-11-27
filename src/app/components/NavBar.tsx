'use client'

import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import {Button} from "@nextui-org/react";
import Image from "next/image"
import useMediaQuery from "../useMedia";

export default function NavBar() {
    const router = useRouter();
    const navMenu: {name:string, dir: string}[] = [{name: 'About', dir: '/about'}, {name: 'Projects', dir: '/projects'}, {name: 'Home', dir: '/'}, {name: 'Magazine', dir: '/magazine'}, {name: 'Contact', dir: '/contact'}]
    let isPhone = useMediaQuery("(max-width: 812px)")

    return (
        <>
        { isPhone ?      
                <Dropdown className="">
                    <DropdownTrigger>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden bg-red hover:bg-red focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-ellies-yellow dark:hover:bg-red dark:focus:ring-ellies-yellow" aria-controls="navbar-default" aria-expanded="false">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                        </button>
                    </DropdownTrigger>  
                    <DropdownMenu aria-label="Dynamic Actions" items={navMenu}>
                        {(item) =>
                            <DropdownItem key={item.name} onClick={() => router.push(item.dir)} onTouchStart={() => router.push(item.dir)}>
                               <div className="bg-red text-ellies-yellow font-playfair">{item.name}</div> 
                            </DropdownItem>
                        }
                    </DropdownMenu>
                </Dropdown>  :
             <Navbar className="pt-[1%] bg-transparent **nav.scrolled { @apply shadow-2xl; border-bottom: 0px; }">
                    <NavbarContent className="grid grid-cols-5 gap-4 px-[15%]">
                        <NavbarItem className="text-center">
                            <Button 
                                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  bg-transparent data-[hover=true]:bg-transparent text-ellies-yellow font-playfair"  
                                onClick={() => router.push('/about')}
                            >
                                About
                            </Button>
                        </NavbarItem>
                        <NavbarItem className="text-center">
                            <Button 
                                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  bg-transparent data-[hover=true]:bg-transparent text-ellies-yellow font-playfair"  
                                onClick={() => {router.push('/projects')}}
                            >
                                Projects
                            </Button>
                        </NavbarItem>
                        <NavbarItem className="text-center">
                            <Button 
                                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  bg-transparent data-[hover=true]:bg-transparent"  
                                onClick={() => router.push('/')}
                            >
                                <Image 
                                    src="/static/logo.png" 
                                    alt="cams projects logo"
                                    width={150}
                                    height={150}
                                />
                            </Button>
                        </NavbarItem>
                        <NavbarItem className="text-center">
                            <Button 
                                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  bg-transparent data-[hover=true]:bg-transparent text-ellies-yellow font-playfair"  
                                onClick={() => {router.push('/magazine')}}
                            >
                                Magazine
                            </Button>
                        </NavbarItem>
                        <NavbarItem className="text-center">
                            <Button 
                                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  bg-transparent data-[hover=true]:bg-transparent text-ellies-yellow font-playfair"  
                                onClick={() => {router.push('/contact')}}
                            >
                                Contact
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            }   
        </>
    );
}