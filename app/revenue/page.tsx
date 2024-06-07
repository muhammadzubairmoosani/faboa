"use client";
import Image from "next/image";
import { Member } from "../components/types";
import { allMembers } from "../utils/data.json";

import { useState } from "react";
import {
  RevenueFiltersAndSearch,
  Header,
  Sidebar,
  RevenueTable,
} from "../components";

export default function MembersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const ITEMS_PER_PAGE = 5;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMembers: any = allMembers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(allMembers.length / ITEMS_PER_PAGE);

  const handleSelectAll = () => {
    if (selectedMembers.length === currentMembers.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(currentMembers.map((member: Member) => member.id));
    }
  };

  const handleSelectMember = (memberId: number) => {
    if (selectedMembers.includes(memberId)) {
      setSelectedMembers(selectedMembers.filter((id) => id !== memberId));
    } else {
      setSelectedMembers([...selectedMembers, memberId]);
    }
  };

  const handleDelete = (memberId: number) => {
    // Add your delete logic here
    console.log("Deleting member with ID:", memberId);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-white overflow-hidden">
        <Header />
        <div className="p-4">
          <RevenueFiltersAndSearch />
          <RevenueTable
            members={currentMembers}
            onSelectAll={handleSelectAll}
            selectedAll={selectedMembers.length === currentMembers.length}
            onSelectMember={handleSelectMember}
            selectedMembers={selectedMembers}
            onDelete={handleDelete}
          />
          <div className="flex justify-between items-center mt-10 mx-4">
            <button
              className="flex items-center px-4 py-2 bg-white border text-sm border-gray-300 text-gray-700  rounded-lg hover:bg-gray-100"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <Image
                src="/arrow-left.svg"
                alt="Previous"
                width={20}
                height={20}
                priority
              />
              <span className="ml-2">Previous</span>
            </button>
            <div className="space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`px-5 py-3 rounded-lg text-sm font-medium ${currentPage === index + 1
                      ? "bg-gray-50 text-gray-600"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              className="flex items-center px-4 py-2 bg-white border text-sm border-gray-300 text-gray-700  rounded-lg hover:bg-gray-100"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <span className="mr-2">Next</span>
              <Image
                src="/arrow-right.svg"
                alt="Next"
                width={20}
                height={20}
                priority
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
