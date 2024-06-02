"use client";
import React, { useState } from "react";
import { CustomButton, InputField } from "../components";

export const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center bg-white h-screen">
      <div className="flex flex-col justify-center p-10 max-w-[400px]">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-[26px] mb-4 text-primary-700 font-berlingske-semibold">
            Forgot Password
          </h2>
          <p className="text-lg mb-4 text-primary-700 font-heebo-normal">
            Please enter email address linked with your account.
          </p>
        </div>

        <form>
          <InputField
            src="/envelop.svg"
            alt="email"
            type="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 mb-8 max-w-[307px]"
          />

          <CustomButton
            className="bg-primary-700 font-heebo-medium rounded-full text-white py-4 px-4 w-full max-w-[307px]"
            type="submit"
          >
            Open Link
          </CustomButton>
        </form>
      </div>
    </div>
  );
};
