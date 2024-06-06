import Image from "next/image";

interface StatusProps {
  status: string;
}

export const Status = ({ status }: StatusProps) => (
  <div
    className={`flex items-center space-x-2  py-1 px-3 rounded-lg pr-5 border-2 border-[#BFC2BD]`}
  >
    {status === "Approved" ? (
      <Image src="/active.svg" alt="active" width={20} height={20} />
    ) : (
      <Image src="/inactive.svg" alt="inactive" width={20} height={20} />
    )}
    <span className="text-gray-800">{status}</span>
  </div>
);
