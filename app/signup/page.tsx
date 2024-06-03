"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  CustomButton,
  CustomCheckbox,
  CustomLink,
  InputField,
} from "../components";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  return (
    <div className="flex h-screen">
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
        <CustomButton className="bg-primary-500 text-white py-2 px-8 font-heebo-normal rounded-full">
          Read More
        </CustomButton>
      </div>

      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <div className="w-2/3 max-w-[307px]">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl mb-4 text-primary-700 font-heebo-bold">
              Hello!
            </h2>
            <p className="text-lg mb-8 text-primary-700 font-heebo-normal">
              Sign Up to Get Started
            </p>
          </div>

          <InputField
            src="/user.svg"
            alt="full name"
            label="Full Name"
            className="my-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

          <div className="ml-4 mb-10">
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
            onClick={() => {
              router.push(
                `/email-verification?email=${encodeURIComponent(email)}`
              );
            }}
          >
            Register
          </CustomButton>
        </div>
        <p className="mt-4 font-heebo-normal text-gray-600 text-center cursor-pointer text-sm">
          Already have an account?{" "}
          <CustomLink className="text-secondary-600 font-heebo-bold" href="/">
            Log in
          </CustomLink>
        </p>
      </div>
    </div>
  );
}
