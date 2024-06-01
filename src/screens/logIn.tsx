"use client";
import Image from "next/image";
import { useState } from "react";
import {
  CustomButton,
  CustomCheckbox,
  CustomLink,
  InputField,
} from "../components";

export const LogInScreen = () => {
  const [email, setEmail] = useState("maria@faboa.co");
  const [password, setPassword] = useState("maria@");
  const [rememberMe, setRememberMe] = useState(false);

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

        <p className="text-xl text-secondary-50 font-heebo-medium mb-8">
          THE MOST ICONIC TRAVEL CLUB
        </p>

        <CustomButton className="bg-primary-500 text-white font-heebo-normal py-2 px-8 rounded-full">
          Read More
        </CustomButton>
      </div>

      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <form className="w-2/3">
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-4xl mb-4 text-primary-700 font-berlingske-semibold">
              Hello Maria!
            </h2>
            <p className="text-lg mb-8 text-primary-700 font-heebo-normal">
              Welcome Back
            </p>
          </div>

          <InputField
            src="/envelop.svg"
            alt="email"
            type="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-4"
          />
          <InputField
            src="/lock.svg"
            alt="password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-4"
          />

          <div className="ml-4 mb-12">
            <CustomCheckbox
              checked={rememberMe}
              onChange={(e) => {
                setRememberMe(!rememberMe);
              }}
            >
              Remember me
            </CustomCheckbox>
          </div>

          <CustomButton
            className="bg-primary-700 font-heebo-medium rounded-full text-white py-4 px-4 w-full"
            type="submit"
          >
            Log In
          </CustomButton>

          <p className="mt-4 font-heebo-medium text-gray-600 text-center cursor-pointer text-sm">
            <CustomLink href="/signup">Forgot Password</CustomLink>
          </p>
        </form>
      </div>
    </div>
  );
};
