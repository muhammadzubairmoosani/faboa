"use client";

import Image from "next/image";
import { useState } from "react";

export const FiltersAndSearch = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const tabs = ["All", "Active", "Inactive"];
  const tabs1 = ["All", "Approved", "Pending", "Rejected"];

  return (
    <header className="p-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl text-gradient font-berlingske-semibold">
            Members
          </h2>

          <span className="bg-secondary-50 text-secondary-500 px-2 py-1 rounded-lg flex gap-2">
            <Image
              src="/members1.svg"
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
            <span className="text-gray-800">Import</span>
          </button>

          <button className="flex items-center space-x-2 border py-2 px-4 rounded-lg ">
            <Image
              src="/download.svg"
              alt="download"
              width={20}
              height={20}
              priority
            />

            <span className="text-gray-800">Export</span>
          </button>
          <button className="flex items-center space-x-2 bg-primary-500 text-white py-2 px-4 rounded-lg font-bold">
            <Image src="/add.svg" alt="add" width={14} height={14} priority />
            <span>Member</span>
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
                    ? "bg-secondary-100 text-secondary-500"
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
                    ? "bg-secondary-100 text-secondary-500"
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

            <span className="text-gray-600 ">More filters</span>
          </button>
        </div>
        <div className="flex items-center space-x-2 border py-2 px-4 rounded-lg">
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
            className="outline-none bg-transparent"
          />
        </div>
      </div>
    </header>
  );
};
