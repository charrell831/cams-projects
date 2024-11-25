'use client'

import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import { useRouter } from 'next/navigation';
import {Button} from "@nextui-org/react";
import Image from "next/image"

export default function NavBar() {
    const router = useRouter();
    const navMenu: {name:string, dir: string}[] = [{name: 'Home', dir: '/'}, {name: 'Podcasts', dir: '/'}, {name: 'Welcome', dir: '/'}]

    return (
        <>
             <Navbar className="px-[20%] pt-[1%] bg-transparent **nav.scrolled { @apply shadow-2xl; border-bottom: 0px; }">
                    <NavbarContent>
                        <NavbarItem className="mx-8">
                            <Button 
                                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  bg-transparent data-[hover=true]:bg-transparent text-ellies-yellow font-playfair"  
                                onClick={() => router.push('/about')}
                            >
                                About
                            </Button>
                        </NavbarItem>
                        <NavbarItem className="mx-8">
                            <Button 
                                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  bg-transparent data-[hover=true]:bg-transparent text-ellies-yellow font-playfair"  
                                onClick={() => {router.push('/projects')}}
                            >
                                Projects
                            </Button>
                        </NavbarItem>
                        <NavbarItem className="mx-8">
                            <Button 
                                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  bg-transparent data-[hover=true]:bg-transparent"  
                                onClick={() => router.push('/')}
                            >
                                <Image 
                                    src="/logo.png" 
                                    alt="cams projects logo"
                                    width={150}
                                    height={150}
                                />
                            </Button>
                        </NavbarItem>
                        <NavbarItem className="mx-8">
                            <Button 
                                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  bg-transparent data-[hover=true]:bg-transparent text-ellies-yellow font-playfair"  
                                onClick={() => {router.push('/magazine')}}
                            >
                                Magazine
                            </Button>
                        </NavbarItem>
                        <NavbarItem className="mx-8">
                            <Button 
                                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  bg-transparent data-[hover=true]:bg-transparent text-ellies-yellow font-playfair"  
                                onClick={() => {router.push('/contact')}}
                            >
                                Contact
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
        </>
    );
}