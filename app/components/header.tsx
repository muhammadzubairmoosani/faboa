"use client";

import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <header className="flex items-center justify-end p-4 bg-gray-50 shadow-md">
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 border p-2 rounded-full">
          <span>{language}</span>
        </button>
        <button className="flex items-center border space-x-1 p-2 rounded-full">
          <Image
            src="/bell.svg"
            alt="notification"
            width={20}
            height={20}
            className="rounded-full"
          />
        </button>
        <div className="flex items-center space-x-2">
          <Image
            src="/Avatar.png"
            alt="Profile Image"
            width={42}
            height={42}
            className="rounded-full"
          />

          <div>
            <div className="text-sm font-medium">María Moreno</div>
            <div className="text-xs text-gray-600">Admin</div>
          </div>
          <button className="flex items-center p-2 rounded">
            <Image
              src="/arrow-down.svg"
              alt="arrow down"
              width={12}
              height={12}
              priority
            />

            {/* <span className="material-icons text-gray-600">
              arrow_drop_down
            </span> */}
          </button>
        </div>
      </div>
    </header>
  );
};
