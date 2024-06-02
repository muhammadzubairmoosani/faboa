import { CustomButton, CustomLink } from "../components";

export const PasswordChangedScreen = () => {
  return (
    <div className="flex items-center justify-center bg-white h-screen">
      <div className="flex flex-col justify-center p-10 max-w-[400px]">
        <div className="flex flex-col justify-center items-start  mb-10">
          <h2 className="text-[26px] mb-2 text-primary-700 font-berlingske-semibold">
            Password Changed
          </h2>
          <p className="text-lg text-primary-700 font-heebo-normal">
            Your password has been successfully changed
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
      </div>
    </div>
  );
};
