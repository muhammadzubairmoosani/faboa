"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col ${
        isOpen ? "w-64" : "w-20"
      } bg-primary-700 h-screen transition-width duration-300`}
    >
      <div className="flex items-center justify-between p-4 bg-primary-600">
        <div className="text-white">FABOA</div>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          {isOpen ? "⟨" : "⟩"}
        </button>
      </div>
      <nav className="flex flex-col mt-4">
        <Link legacyBehavior href="/members">
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600">
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
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600">
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
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600">
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
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600">
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
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600">
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
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600">
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
          <a className="flex items-center p-4 text-gray-100 hover:bg-primary-600">
            <Image
              src="/cloud.svg"
              alt="Revenue"
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
