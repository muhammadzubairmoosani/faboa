import Image from "next/image";
import { ChangeEvent, FC } from "react";

interface InputFieldProps {
  src?: string;
  alt?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

export const InputField: FC<InputFieldProps> = ({
  src = "",
  alt = "",
  type = "text",
  placeholder = "",
  label = "",
  value = "",
  onChange,
  className = "",
  required = true,
}) => {
  return (
    <div
      className={` flex items-center border rounded-full px-6 py-2 w-full text-gray-700 focus-within:border-primary-700 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        className="w-auto h-auto text-gray-500 mr-3"
        width={24}
        height={24}
        priority
      />
      <div className="relative w-full">
        <input
          id={label}
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
        <label
          htmlFor={label}
          className="absolute cursor-text text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {label}
        </label>
      </div>
    </div>
  );
};
