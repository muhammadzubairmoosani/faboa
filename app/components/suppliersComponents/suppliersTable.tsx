"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CustomCheckbox } from "../buttons";
import { Status } from "../status";
import { Toggle } from "../toggle";
import { Supplier } from "../types";

export interface SuppliersTableProps {
  members: Supplier[];
  onSelectAll: () => void;
  selectedAll: boolean;
  onSelectMember: (memberId: number) => void;
  selectedMembers: number[];
  onDelete: (memberId: number) => void;
}

export const SuppliersTable = ({
  members,
  onSelectAll,
  selectedAll,
  onSelectMember,
  selectedMembers,
  onDelete,
}: SuppliersTableProps) => {
  const [sortedColumn, setSortedColumn] = useState<keyof Supplier | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortedMembers, setSortedMembers] = useState<Supplier[]>([]);
  const [paginatedMembers, setPaginatedMembers] = useState<Supplier[]>([]);

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

  const handleSort = (column: keyof Supplier) => {
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
                onClick={() => handleSort("name")}
              >
                Supplier
              </span>
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap "
              onClick={() => handleSort("category")}
            >
              Category
            </th>

            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("address")}
            >
              Address
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("accountManager")}
            >
              Account Manager
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("accountManager2")}
            >
              Account Manager #2
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("phoneNumber")}
            >
              Phone Number
            </th>
            <th
              className="py-3 pl-4 pr-16 text-left text-xs text-gray-600 cursor-pointer whitespace-nowrap"
              onClick={() => handleSort("email")}
            >
              Email
            </th>
            <th className="p-3  text-center text-xs text-gray-600  sticky right-20 bg-gray-25 z-10 drop-shadow-lg">
              Active
            </th>
            <th className="p-3  text-center text-xs text-gray-600  sticky right-0 bg-gray-25 z-10"></th>
          </tr>
        </thead>
        <tbody>
          {paginatedMembers.map((supplier) => (
            <tr key={supplier.id} className="border-b ">
              <td className="p-4 flex items-center text-sm space-x-2 w-64 sticky left-0 bg-white z-10 whitespace-nowrap drop-shadow-lg">
                <CustomCheckbox
                  onChange={() => onSelectMember(supplier.id)}
                  checked={selectedMembers.includes(supplier.id)}
                  className="mr-2"
                />
                <div className="flex items-center space-x-2">
                  <Image
                    src={`/Avatar.png`}
                    alt={supplier.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <div className="text-gray-900">{supplier.name}</div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {supplier.category}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {supplier.address}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {supplier.accountManager}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {supplier.accountManager2}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {supplier.phoneNumber}
              </td>
              <td className="p-4 text-sm text-gray-600 whitespace-nowrap">
                {supplier.email}
              </td>
              <td className="p-4 sticky right-20 bg-white z-10 drop-shadow-lg text-center ">
                <Toggle />
              </td>
              <td className="p-4  sticky right-0 bg-white z-10  ">
                <button className="w-12 flex justify-center items-center mx-auto">
                  <Image
                    src="/edit-icon.svg"
                    alt="edit icon"
                    width={20}
                    height={20}
                    onClick={() => onDelete(supplier.id)}
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
