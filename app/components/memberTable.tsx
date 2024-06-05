"use client";
import Image from "next/image";
import { Member } from "./types";
import { Toggle } from "./toggle";
import { CustomCheckbox } from "./buttons";
import { useState } from "react";
import { Status } from "./status";

export interface MembersTableProps {
  members: Member[];
  onSelectAll: () => void;
  selectedAll: boolean;
  onSelectMember: (memberId: number) => void;
  selectedMembers: number[];
  onDelete: (memberId: number) => void;
}

export const MembersTable = ({
  members,
  onSelectAll,
  selectedAll,
  onSelectMember,
  selectedMembers,
  onDelete,
}: MembersTableProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg shadow-md">
        <thead>
          <tr className="border-b bg-gray-200">
            <th className="py-1 px-4  text-left text-xs text-gray-600 w-64  bg-gray-200 z-10">
              <CustomCheckbox
                checked={selectedAll}
                onChange={onSelectAll}
                className="mr-2"
              />
              Full Name
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600">
              Email Address
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600">
              Street Address
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600">City</th>
            <th className="py-1 px-4  text-left text-xs text-gray-600">
              Document Type
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600">
              Document Number
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600">
              Country Code
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600">
              Phone Number
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600">
              Occupation
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600">
              Referring Member Name
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600">
              Date of Birth
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600">
              Gender
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600">
              Marital Status
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600">
              Status
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600 w-32">
              Active
            </th>
            <th className="py-1 px-4  text-left text-xs text-gray-600 w-20"></th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="border-b hover:bg-gray-50">
              <td className="p-4 flex items-center text-sm space-x-2 w-64  bg-white z-10">
                <CustomCheckbox
                  onChange={() => onSelectMember(member.id)}
                  checked={selectedMembers.includes(member.id)}
                  className="mr-2"
                />
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
                    <div className="text-gray-600 ">@{member.username}</div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-sm text-gray-600">{member.email}</td>
              <td className="p-4 text-sm text-gray-600">{member.address}</td>
              <td className="p-4 text-sm text-gray-600">{member.city}</td>
              <td className="p-4 text-sm text-gray-600">
                {member.documentType}
              </td>
              <td className="p-4 text-sm text-gray-600">
                {member.documentNumber}
              </td>
              <td className="p-4 text-sm text-gray-600">
                {member.countryCode}
              </td>
              <td className="p-4 text-sm text-gray-600">
                {member.phoneNumber}
              </td>
              <td className="p-4 text-sm text-gray-600">{member.occupation}</td>
              <td className="p-4 text-sm text-gray-600">{member.dob}</td>
              <td className="p-4 text-sm text-gray-600">{member.gender}</td>
              <td className="p-4 text-sm text-gray-600">
                {member.maritalStatus}
              </td>
              <td className="p-4 text-sm text-gray-600">
                <Status status={member.status} />
              </td>
              <td className="p-4 text-sm text-gray-600 w-32">
                <Toggle />
              </td>
              <td className="p-4 text-gray-600 w-20">
                <button className="w-12 flex justify-center">
                  <Image
                    src="/trash.svg"
                    alt="notification"
                    width={20}
                    height={20}
                    className="rounded-full"
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
