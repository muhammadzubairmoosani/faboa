import { CustomButton } from "../components";

export const EmailVerificationScreen = () => {
  return (
    <div className="flex items-center justify-center bg-white h-screen">
      <div className="flex flex-col justify-center p-10 max-w-[450px]">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-[26px] mb-4 text-primary-700 font-berlingske-semibold">
            Confirm your email address
          </h2>
          <p className="text-lg mb-8 text-primary-700 font-heebo-normal">
            Please check your inbox, account verification link has been sent at
            nadeem@gmail.com
          </p>
        </div>

        <CustomButton
          className="bg-primary-700 font-heebo-medium rounded-full text-white py-4 px-4 w-full max-w-[307px]"
          type="button"
        >
          Open Link
        </CustomButton>
      </div>
    </div>
  );
};
