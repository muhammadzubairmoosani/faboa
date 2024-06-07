"use client";

import Image from "next/image";
import { useState } from "react";

export const RevenueFiltersAndSearch = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const tabs = ["All", "Active", "Inactive"];
  const tabs1 = ["All", "Approved", "Pending", "Rejected"];

  return (
    <header className="p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl text-gradient font-berlingske-semibold">
            Revenue
          </h2>

          <span className="bg-secondary-50 text-gradient  px-2 py-1 rounded-lg flex gap-2">
            <Image
              src="/revenues.svg"
              alt="Members"
              width={20}
              height={20}
              priority
            />
            87
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 border py-2 px-4 rounded-lg ">
            <Image
              src="/upload.svg"
              alt="upload"
              width={20}
              height={20}
              priority
            />
            <span className="text-gray-800  text-xs">Import</span>
          </button>

          <button className="flex items-center space-x-2 border py-2 px-4 rounded-lg ">
            <Image
              src="/download.svg"
              alt="download"
              width={20}
              height={20}
              priority
            />
            <span className="text-gray-800  text-xs">Export</span>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center border space-x-2 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs rounded-lg font-medium ${
                  activeTab === tab
                    ? "bg-secondary-100 text-gradient"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center border space-x-2 p-1 rounded-lg">
            {tabs1.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs rounded-lg font-medium ${
                  activeTab === tab
                    ? "bg-secondary-100 text-gradient"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button className="flex items-center space-x-2 border py-2 px-4 rounded-lg">
            <Image
              src="/filters.svg"
              alt="filters"
              width={20}
              height={20}
              priority
            />

            <span className="text-gray-600  text-xs ">More filters</span>
          </button>
        </div>
        <div className="flex items-center space-x-2 border py-2 px-4 rounded-lg w-full max-w-[367px]">
          <Image
            src="/search.svg"
            alt="search"
            width={20}
            height={20}
            priority
          />

          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent text-gray-600  text-xs w-full"
          />
        </div>
      </div>
    </header>
  );
};
