import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"


const navItems = [
    { path: '/about', text: 'About' },
    { path: '/contact', text: 'Contact' },
    { path: '/pricing', text: 'Pricing' }
]

export const Navbar = () => {
    return (
        <nav className="flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href="/" className="flex gap-1">
                <HomeIcon></HomeIcon>
                <span>Home</span>
            </Link>

            <div className="flex gap-5">
                {/* <Link href="/about">About</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/contact">Contact</Link> */}

                {
                    navItems.map((value) => (
                        <ActiveLink key={value.path} path={value.path} text={value.text}></ActiveLink>
                    ))
                }




            </div>
        </nav>
    )
}