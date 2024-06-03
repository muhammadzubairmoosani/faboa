"use client";

import { AuthWrapper, CustomButton, CustomLink } from "../components";
import { useSearchParams } from "next/navigation";

export default function EmailVerification() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <AuthWrapper className="max-w-[369px]">
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-[26px] mb-4 text-primary-700 font-berlingske-semibold">
          Confirm your email address
        </h2>
        <p className="text-lg mb-8 text-primary-700 font-heebo-normal">
          Please check your inbox, account verification link has been sent at{" "}
          {email || ""}
        </p>
      </div>
      <CustomLink href="/">
        <CustomButton
          className="bg-primary-700 font-heebo-medium rounded-full text-white py-4 px-4 w-full max-w-[307px]"
          type="button"
        >
          Back to Log In
        </CustomButton>
      </CustomLink>
    </AuthWrapper>
  );
}
