"use client";

import { useState } from "react";
import { AuthWrapper, CustomButton, InputField } from "../components";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <AuthWrapper>
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-[26px] mb-4 text-primary-700 font-berlingske-semibold">
          Forgot Password
        </h2>
        <p className="text-lg mb-4 text-primary-700 font-heebo-normal">
          Please enter email address linked with your account.
        </p>
      </div>

      <InputField
        src="/envelop.svg"
        alt="email"
        type="email"
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-4 mb-8"
      />

      <CustomButton
        className="bg-primary-700 font-heebo-medium rounded-full text-white py-4 px-4 w-full"
        onClick={() => {
          router.push(`/code-verification?email=${encodeURIComponent(email)}`);
        }}
      >
        Send
      </CustomButton>
    </AuthWrapper>
  );
}
