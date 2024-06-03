"use client";
import { useState } from "react";
import { CustomButton, AuthWrapper } from "../components";
import { useSearchParams } from "next/navigation";

export default function CodeVerification() {
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const updateVerificationCode = (index: number, value: string) => {
    const newValues = [...verificationCode];
    newValues[index] = value;
    setVerificationCode(newValues);
  };

  return (
    <AuthWrapper>
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-[26px] mb-4 text-primary-700 font-berlingske-semibold">
          Forgot Password
        </h2>
        <p className="text-lg mb-8 text-primary-700 font-heebo-normal">
          Please enter the 4 digit code sent to <b>{email || ""}</b>
        </p>
      </div>

      <form>
        <div className="flex space-x-4 mb-10">
          {verificationCode.map((value, index) => (
            <div
              key={index}
              className="relative w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center"
            >
              <input
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => updateVerificationCode(index, e.target.value)}
                required
                className=" text-gray-900 absolute w-full h-full text-center text-xl bg-transparent focus:outline-none"
              />
              {value === "" && (
                <span className=" absolute text-primary-700">-</span>
              )}
            </div>
          ))}
        </div>

        <CustomButton
          className="bg-primary-700 font-heebo-medium rounded-full text-white py-4 px-4 w-full"
          type="submit"
        >
          Confirm
        </CustomButton>
      </form>
    </AuthWrapper>
  );
}
