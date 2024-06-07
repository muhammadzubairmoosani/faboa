"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CustomCheckbox } from "../buttons";
import { Status } from "../status";
import { Toggle } from "../toggle";
import { Service } from "../types";

export interface ServiceTableProps {
  members: Service[];
  onSelectAll: () => void;
  selectedAll: boolean;
  onSelectMember: (memberId: number) => void;
  selectedMembers: number[];
  onDelete: (memberId: number) => void;
}

export const ServiceTable = ({
  members,
  onSelectAll,
  selectedAll,
  onSelectMember,
  selectedMembers,
  onDelete,
}: ServiceTableProps) => {
  const [sortedColumn, setSortedColumn] = useState<keyof Service | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortedMembers, setSortedMembers] = useState<Service[]>([]);
  const [paginatedMembers, setPaginatedMembers] = useState<Service[]>([]);

  useEffect(() => {
    const direction = sortDirection === "asc" ? 1 : -1;
    const sorted = [...members].sort((a, b) => {
      if (sortedColumn) {
        if (a[sortedColumn] < b[sortedColumn]) return -1 * direction;
        if (a[sortedColumn] > b[sortedColumn]) return 1 * direction;
      }
      return 0;
    });
    setSortedMembers(sorted);
  }, [members, sortedColumn, sortDirection]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginated = sortedMembers.slice(
      startIndex,
      startIndex + itemsPerPage
    );
    setPaginatedMembers(paginated);
  }, [sortedMembers, currentPage, itemsPerPage]);

  const handleSort = (column: keyof Service) => {
    const direction =
      sortedColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortedColumn(column);
    setSortDirection(direction);
  };

  // const totalPages = Math.ceil(members.length / itemsPerPage);

  return (
    <div className="overflow-x-auto no-scrollbar border-2 border-[#E4E7EC] rounded-xl mr-4">
      <table className="min-w-full  bg-white  ">
        <thead className="bg-gray-100">
          <tr className="border-b">
            <th className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 w-64 sticky left-0 z-10 bg-gray-100 drop-shadow-lg flex items-center">
              <CustomCheckbox
                checked={selectedAll}
                onChange={onSelectAll}
                className="mr-2"
              />
              <span
                className="cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Service
              </span>
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap "
              onClick={() => handleSort("username")}
            >
              Supplier
            </th>

            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("address")}
            >
              Address
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("city")}
            >
              City
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("company")}
            >
              Company
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("accountManagerName")}
            >
              Account manager name
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("phoneNumber")}
            >
              Phone Number
            </th>
            <th className="p-3  text-center text-xs text-gray-600  sticky right-20 bg-gray-100 z-10 drop-shadow-lg">
              Active
            </th>
            <th className="p-3  text-center text-xs text-gray-600  sticky right-0 bg-gray-100 z-10"></th>
          </tr>
        </thead>
        <tbody>
          {paginatedMembers.map((member) => (
            <tr key={member.id} className="border-b ">
              <td className="p-4 flex items-center text-sm space-x-2 w-64 sticky left-0 bg-white z-10 whitespace-nowrap drop-shadow-lg">
                <CustomCheckbox
                  onChange={() => onSelectMember(member.id)}
                  checked={selectedMembers.includes(member.id)}
                  className="mr-2"
                />
                <div>
                  <div className="text-gray-900">{member.service}</div>
                  <div className="text-gray-600 ">{member.subService}</div>
                </div>
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                <div className="flex items-center space-x-2">
                  <Image
                    src={`/Avatar.png`}
                    alt={member.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <div className="text-gray-900">{member.name}</div>
                    <div className="text-gray-600 ">{member.username}</div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {member.address}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {member.city}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {member.company}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {member.accountManagerName}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {member.phoneNumber}
              </td>




              {/* <td className="p-4 w-20 sticky right-20 bg-white z-10 drop-shadow-lg text-center "> */}
              <td className="p-4 sticky right-20 bg-white z-10 drop-shadow-lg text-center ">
                <Toggle />
              </td>
              {/* <td className="p-4 w-20 sticky right-0 bg-white z-10  "> */}
              <td className="p-4  sticky right-0 bg-white z-10  ">
                <button className="w-12 flex justify-center items-center mx-auto">
                  <Image
                    src="/trash.svg"
                    alt="notification"
                    width={20}
                    height={20}
                    className="rounded-full"
                    onClick={() => onDelete(member.id)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};
