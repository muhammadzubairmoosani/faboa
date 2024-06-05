"use client";
import Image from "next/image";
import { Member } from "../components/types";

import { useState } from "react";
import { FiltersAndSearch, Header, MembersTable, Sidebar } from "../components";

export default function MembersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const ITEMS_PER_PAGE = 2;
  const allMembers = [
    {
      id: 1,
      name: "Marta Ruiz",
      username: "olivia",
      email: "marta.ruiz@email.com",
      address: "123 Calle Mayor",
      city: "Barcelona",
      documentType: "ID",
      documentNumber: "SL345678",
      countryCode: "B",
      phoneNumber: "+039-66677788",
      occupation: "Doctor",
      dob: "1997-01-04",
      gender: "Female",
      maritalStatus: "Maritial Status",
      status: "Pending",
    },
    {
      id: 2,
      name: "John Doe",
      username: "john",
      email: "john.doe@email.com",
      address: "456 Main St",
      city: "Madrid",
      documentType: "Passport",
      documentNumber: "A1234567",
      countryCode: "E",
      phoneNumber: "+039-66677788",
      occupation: "Doctor",
      dob: "1997-01-04",
      gender: "Female",
      maritalStatus: "Maritial Status",
      status: "Approved",
    },
    {
      id: 3,
      name: "Jane Smith",
      username: "jane",
      email: "jane.smith@email.com",
      address: "789 Central Blvd",
      city: "Valencia",
      documentType: "ID",
      documentNumber: "ID987654",
      countryCode: "V",
      phoneNumber: "+039-66677788",
      occupation: "Doctor",
      dob: "1997-01-04",
      gender: "Female",
      maritalStatus: "Maritial Status",
      status: "Pending",
    },
  ];

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
      <div className="flex-1 bg-white">
        <Header />

        <div className="p-4">
          <FiltersAndSearch />
          <MembersTable
            members={currentMembers}
            onSelectAll={handleSelectAll}
            selectedAll={selectedMembers.length === currentMembers.length}
            onSelectMember={handleSelectMember}
            selectedMembers={selectedMembers}
            onDelete={handleDelete}
          />
          <div className="flex justify-between items-center mt-4">
            <button
              className="flex items-center px-4 py-2 bg-white border text-sm border-gray-300 text-gray-700 rounded hover:bg-gray-100"
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
                  className={`px-4 py-2 rounded text-sm ${
                    currentPage === index + 1
                      ? "bg-gray-100 text-gray-800"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              className="flex items-center px-4 py-2 bg-white border text-sm border-gray-300 text-gray-700 rounded hover:bg-gray-100"
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
