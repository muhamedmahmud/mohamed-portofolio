"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export default function Navbar() {
  const [navbarOpen, setnavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212]/90  ">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          className="text-2xl md:text-5xl text-white font-semibold"
          href={"/"}
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={()=>setnavbarOpen(true)} className="flex items-center px-3 py-2 border  rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="w-5 h-5"/> 
            </button>
          ) : (
            <button onClick={()=>setnavbarOpen(false)} className="flex items-center px-3 py-2 border  rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="w-5 h-5"/> 
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((Link, index) => (
              <li key={index}>
                <NavLink href={Link.path} title={Link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen?<MenuOverlay links={navLinks}/>:null}
    </nav>
  );
}
