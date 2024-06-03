import Image from "next/image";
import { Fragment, PropsWithChildren } from "react";

export const AuthWrapper = ({ children }: PropsWithChildren) => (
  <Fragment>
    <div className="h-screen bg-primary-700 absolute w-[72px]">
      <Image
        src="/logo.svg"
        alt="FABOA Logo"
        className="w-full p-5"
        width={100}
        height={100}
        priority
      />
    </div>
    <div className="flex items-center justify-center bg-white h-screen">
      <div className="flex flex-col justify-center p-10 max-w-[450px]">
        {children}
      </div>
    </div>
  </Fragment>
);
