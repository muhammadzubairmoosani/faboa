"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import { Sidebar, FiltersAndSearch, Header } from "../components";

const members = [
  {
    name: "Marta Ruiz",
    username: "olivia",
    email: "marta.ruiz@email.com",
    address: "123 Calle Mayor",
    city: "Barcelona",
    documentType: "ID",
    documentNumber: "SL345678",
    countryCode: "B",
  },
  // Add other members here
];

function MembersTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg shadow-md">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left text-gray-600">Full Name</th>
            <th className="p-4 text-left text-gray-600">Email Address</th>
            <th className="p-4 text-left text-gray-600">Street Address</th>
            <th className="p-4 text-left text-gray-600">City</th>
            <th className="p-4 text-left text-gray-600">Document Type</th>
            <th className="p-4 text-left text-gray-600">Document Number</th>
            <th className="p-4 text-left text-gray-600">Country Code</th>
            <th className="p-4 text-left text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-4 flex items-center space-x-2">
                <input type="checkbox" className="mr-2" />
                <div className="flex items-center space-x-2">
                  <Image
                    src={`/path/to/profile/${member.username}.jpg`}
                    alt={member.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <div className="text-gray-900">{member.name}</div>
                    <div className="text-gray-600 text-sm">
                      @{member.username}
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-gray-600">{member.email}</td>
              <td className="p-4 text-gray-600">{member.address}</td>
              <td className="p-4 text-gray-600">{member.city}</td>
              <td className="p-4 text-gray-600">{member.documentType}</td>
              <td className="p-4 text-gray-600">{member.documentNumber}</td>
              <td className="p-4 text-gray-600">{member.countryCode}</td>
              <td className="p-4 text-gray-600">
                <button className="text-red-600 hover:text-red-800">
                  <span className="material-icons">delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MembersPage() {
  const members = [
    // Dummy data for members
    {
      id: 1,
      name: "Marta Ruiz",
      email: "marta.ruiz@email.com",
      address: "123 Calle Mayor",
      city: "Barcelona",
      documentType: "ID",
      documentNumber: "SL345678",
      countryCode: "34",
    },
    // Add other members
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />

        <div className="p-4">
          <FiltersAndSearch />
          <MembersTable />
        </div>
      </div>
    </div>
  );
}
