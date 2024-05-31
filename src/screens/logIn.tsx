"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  CustomButton,
  CustomLink,
  InputField,
  RememberMeButton,
} from "../components";

export const LogInScreen = () => {
  const [email, setEmail] = useState("maria@faboa.co");
  const [password, setPassword] = useState("maria@");

  return (
    <div className="flex h-screen font-heebo">
      <div className="w-1/2 bg-primary-700 flex flex-col justify-center items-center text-center p-10">
        <Image
          src="/logo.svg"
          alt="FABOA Logo"
          className="w-32 mb-8"
          width={100}
          height={100}
          priority
        />

        <Image
          src="/faboa.svg"
          alt="FABOA Logo"
          className="w-96 mb-8"
          width={100}
          height={100}
          priority
        />

        <p className="text-xl text-secondary-50 font-medium mb-8">
          THE MOST ICONIC TRAVEL CLUB
        </p>

        <CustomButton className="bg-primary-500 text-white font-normal py-2 px-8 rounded-full">
          Read More
        </CustomButton>
      </div>

      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <form className="w-2/3">
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-4xl mb-4 text-primary-700 font-semibold">
              Hello Maria!
            </h2>
            <p className="text-lg mb-8 text-primary-700 font-normal">
              Welcome Back
            </p>
          </div>

          <InputField
            src="/envelop.svg"
            alt="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-4"
          />
          <InputField
            src="/lock.svg"
            alt="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-4"
          />

          <RememberMeButton />
          <CustomButton
            className="bg-primary-700 font-medium rounded-full text-white py-4 px-4 w-full"
            type="button"
          >
            Log In
          </CustomButton>

          <p className="mt-4 font-medium text-gray-600 text-center cursor-pointer">
            <CustomLink href="/signup">Forgot Password</CustomLink>
          </p>
        </form>
      </div>
    </div>
  );
};
