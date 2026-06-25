import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import LogoImg from "../../../B12-A08-Hero-Apps/assets/logo.png"
export default function Header() {
    return (
        <>
            <div className="navbar bg-white shadow-sm sticky top-0 z-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li>
                                <NavLink to="app">App</NavLink>
                            </li>
                            <li><NavLink to='installation'>Installation</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/" className="text-xl flex items-center px-5 gap-2.5"><img className="max-w-10" src={LogoImg} alt="icon here" /><span className="uppercase inline-block bg-[linear-gradient(90deg,#8b5cf6,#6d28d9)] bg-clip-text text-transparent">hero.io</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li>
                            <NavLink to="app">App</NavLink>
                        </li>
                        <li><NavLink to='installation'>Installation</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://github.com/ab14702580" target="_blank" className="btn rounded-xl border-none outline-none px-9 bg-gray-500 text-white bg-[linear-gradient(90deg,#8b5cf6,#6d28d9)]"> <FaGithub /> Button</a>
                </div>
            </div>
        </>
    );
}