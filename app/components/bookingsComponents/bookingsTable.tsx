"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CustomCheckbox } from "../buttons";
import { Itineraries } from "../types";

export interface BookingsTableTableProps {
  members: Itineraries[];
  onSelectAll: () => void;
  selectedAll: boolean;
  onSelectMember: (memberId: number) => void;
  selectedMembers: number[];
  onDelete: (memberId: number) => void;
}

export const BookingsTable = ({
  members,
  onSelectAll,
  selectedAll,
  onSelectMember,
  selectedMembers,
  onDelete,
}: BookingsTableTableProps) => {
  const [sortedColumn, setSortedColumn] = useState<keyof Itineraries | null>(
    null
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortedMembers, setSortedMembers] = useState<Itineraries[]>([]);
  const [paginatedMembers, setPaginatedMembers] = useState<Itineraries[]>([]);

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

  const handleSort = (column: keyof Itineraries) => {
    const direction =
      sortedColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortedColumn(column);
    setSortDirection(direction);
  };

  // const totalPages = Math.ceil(members.length / itemsPerPage);

  return (
    <div className="overflow-x-auto no-scrollbar border-2 border-[#E4E7EC] rounded-xl mr-4">
      <table className="min-w-full  bg-white  ">
        <thead className="bg-gray-25">
          <tr className="border-b">
            <th className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 w-64 sticky left-0 z-10 bg-gray-25 flex items-center">
              <CustomCheckbox
                checked={selectedAll}
                onChange={onSelectAll}
                className="mr-2"
              />
              <span
                className="cursor-pointer"
                onClick={() => handleSort("itineraries")}
              >
                Booking
              </span>
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap "
              onClick={() => handleSort("name")}
            >
              Name
            </th>

            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("lastName")}
            >
              Last Name
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("nationality")}
            >
              Nationality
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("supplierName")}
            >
              Supplier Name
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("category")}
            >
              Category
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("subcategory")}
            >
              Subcategory
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("price")}
            >
              Price
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("people")}
            >
              People
            </th>
            <th className="p-3  text-center text-xs text-gray-600  sticky right-20 bg-gray-25 z-10 drop-shadow-lg"></th>
            <th className="p-3  text-center text-xs text-gray-600  sticky right-0 bg-gray-25 z-10"></th>
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
                <div className="flex items-center space-x-2">
                  <div>
                    <div className="text-gray-900">{member.itineraries}</div>
                    <div className="text-gray-600 ">
                      @{member.subItineraries}
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {member.name}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {member.lastName}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {member.nationality}
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
                    <div className="text-gray-900">{member.supplierName}</div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {member.category}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {member.subcategory}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {member.price}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {member.people}
              </td>
              <td className="p-4 sticky right-20 bg-white z-10 drop-shadow-lg text-center ">
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

              <td className="p-4  sticky right-0 bg-white z-10  ">
                <button className="w-12 flex justify-center items-center mx-auto">
                  <Image
                    src="/edit-icon.svg"
                    alt="notification"
                    width={20}
                    height={20}
                    onClick={() => onDelete(member.id)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
