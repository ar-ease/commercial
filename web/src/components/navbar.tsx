"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { ModeToggle } from "./theme-button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="z-20 fixed top-0 w-full border-b shadow-sm bg-slate-800">
      <div className="container flex items-center justify-between h-16 sm:h-20 px-3 mx-auto">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="https://img.favpng.com/15/3/8/logo-web-design-business-png-favpng-iGvrjpRwy8Ln86XmUPfa1dYTm.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="sm:w-8 sm:h-8"
            />
          </Link>
          <h1 className="text-slate-300 hidden sm:block text-lg font-semibold">
            Perfect Paper and Boards
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <FaTimes className="text-white" />
            ) : (
              <FaBars className="text-white" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-gray-200 hover:text-gray-500">
              About
            </Link>
            <Link href="/hell" className="text-gray-200 hover:text-gray-500">
              Test
            </Link>
            <Link
              href="/services"
              className="text-gray-200 hover:text-gray-500"
            >
              Services
            </Link>
            <Link href="/contact" className="text-gray-200 hover:text-gray-500">
              Contact
            </Link>
          </div>

          <a href="https://wa.me/1234566890" className="text-green-500 flex">
            <FaWhatsapp className="w-5 h-5" />
            <span className="hidden md:inline">+91 6291222232</span>
          </a>
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 py-4">
          <div className="flex flex-col space-y-4 px-4">
            <Link href="/about" className="text-gray-200">
              About
            </Link>
            <Link href="/hell" className="text-gray-200">
              Test
            </Link>
            <Link href="/services" className="text-gray-200">
              Services
            </Link>
            <Link href="/contact" className="text-gray-200">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
