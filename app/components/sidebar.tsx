"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex flex-col ${
        isOpen ? "w-64" : "w-20"
      } bg-primary-700 h-screen transition-width duration-300`}
    >
      <div
        className={`flex items-center justify-between p-4 
      ${isOpen ? "w-60" : "w-20"}
     `}
      >
        <div className="flex justify-center w-full">
          {isOpen ? (
            <Image
              src="/fullLogo.svg"
              alt="logo"
              width={137}
              height={47}
              priority
            />
          ) : (
            <Image src="/logo.svg" alt="logo" width={29} height={47} priority />
          )}
        </div>
      </div>
      <nav className="flex flex-col mt-4 pl-3 pr-3">
        <Link legacyBehavior href="/members">
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600 hover:rounded-lg">
            <Image
              src="/members.svg"
              alt="Members"
              width={20}
              height={20}
              priority
            />
            {isOpen && <span className="ml-4">Members</span>}
          </a>
        </Link>
        <Link legacyBehavior href="/suppliers">
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600 hover:rounded-lg">
            <Image
              src="/suppliers.svg"
              alt="Suppliers"
              width={20}
              height={20}
              priority
            />
            {isOpen && <span className="ml-4">Suppliers</span>}
          </a>
        </Link>
        <Link legacyBehavior href="/services">
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600 hover:rounded-lg">
            <Image
              src="/services.svg"
              alt="Services"
              width={20}
              height={20}
              priority
            />
            {isOpen && <span className="ml-4">Services</span>}
          </a>
        </Link>
        <Link legacyBehavior href="/itineraries">
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600 hover:rounded-lg">
            <Image
              src="/itineraries.svg"
              alt="Itineraries"
              width={20}
              height={20}
              priority
            />
            {isOpen && <span className="ml-4">Itineraries</span>}
          </a>
        </Link>
        <Link legacyBehavior href="/bookings">
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600 hover:rounded-lg">
            <Image
              src="/bookings.svg"
              alt="Bookings"
              width={20}
              height={20}
              priority
            />
            {isOpen && <span className="ml-4">Bookings</span>}
          </a>
        </Link>
        <Link legacyBehavior href="/revenue">
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600 hover:rounded-lg">
            <Image
              src="/revenue.svg"
              alt="Revenue"
              width={20}
              height={20}
              priority
            />
            {isOpen && <span className="ml-4">Revenue</span>}
          </a>
        </Link>
        <Link legacyBehavior href="/cloud">
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600 hover:rounded-lg">
            <Image
              src="/cloud.svg"
              alt="Cloud"
              width={20}
              height={20}
              priority
            />
            {isOpen && <span className="ml-4">Cloud</span>}
          </a>
        </Link>
      </nav>
    </div>
  );
};
