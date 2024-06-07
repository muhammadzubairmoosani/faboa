"use client";

import Image from "next/image";
import { useState } from "react";

export const CloudFiltersAndSearch = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const tabs = ["All", "Import", "Export"];
  const tabs1 = ["All", "Completed", "In progress", "Cancelled"];

  return (
    <header className="p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl text-gradient font-berlingske-semibold">
            Cloud operations
          </h2>

          <span className="bg-gradient px-2 py-1 font-medium rounded-lg flex gap-2">
            <Image
              src="/Cloud.svg"
              alt="Members"
              width={20}
              height={20}
              priority
            />
            <span className="text-gradient">87</span>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center border space-x-2 p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm rounded-lg font-medium ${
                  activeTab === tab ? "bg-gradient" : "text-gray-600"
                }`}
              >
                <span className={`${activeTab === tab && "text-gradient"}`}>
                  {tab}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center border space-x-2 p-1 rounded-lg">
            {tabs1.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm rounded-lg font-medium ${
                  activeTab === tab ? "bg-gradient" : "text-gray-600"
                }`}
              >
                <span className={`${activeTab === tab && "text-gradient"}`}>
                  {tab}
                </span>
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

            <span className="text-gray-600  text-sm ">More filters</span>
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
            className="outline-none bg-transparent text-gray-600  text-sm w-full"
          />
        </div>
      </div>
    </header>
  );
};
