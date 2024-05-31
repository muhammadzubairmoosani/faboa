import Image from "next/image";
import { ChangeEvent, FC } from "react";

interface InputFieldProps {
  src?: string;
  alt?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const InputField: FC<InputFieldProps> = ({
  src = "",
  alt = "",
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center border rounded-full px-6 py-4 w-full text-gray-700 focus-within:border-primary-700 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        className="w-auto h-auto text-gray-500 mr-3"
        width={24}
        height={24}
        priority
      />
      <input
        type={type}
        placeholder={placeholder}
        className="appearance-none bg-transparent border-none w-full text-gray-600 leading-tight focus:outline-none font-normal"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
