"use client";

import React, { useState } from "react";
import { CustomButton, InputField, AuthWrapper } from "../components";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [newRepeatPassword, setNewRepeatPassword] = useState("");

  return (
    <AuthWrapper>
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-[26px] mb-2 text-primary-700 font-berlingske-semibold">
          Set a new Password
        </h2>
        <p className="text-lg mb-4 text-primary-700 font-heebo-normal">
          Please enter new password and repead new password.
        </p>
      </div>

      <InputField
        src="/lock.svg"
        alt="password"
        type="password"
        label="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="my-4"
      />
      <InputField
        src="/lock.svg"
        alt="password"
        type="password"
        label="Repeat New Password"
        value={newRepeatPassword}
        onChange={(e) => setNewRepeatPassword(e.target.value)}
        className="my-4"
      />
      <CustomButton
        className="bg-primary-700 font-heebo-medium rounded-full text-white py-4 px-4 w-full mt-6"
        type="submit"
      >
        Confirm
      </CustomButton>
    </AuthWrapper>
  );
}
