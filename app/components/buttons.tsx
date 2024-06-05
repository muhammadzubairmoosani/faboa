import { ButtonHTMLAttributes, ChangeEvent, PropsWithChildren } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
interface CustomCheckboxProps {
  checked: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const CustomButton = ({
  children,
  className = "",
  ...props
}: PropsWithChildren<CustomButtonProps>) => (
  <button className={`py-2 px-4 cursor-pointer ${className}`} {...props}>
    {children}
  </button>
);

export const CustomCheckbox = ({
  children,
  checked,
  onChange,
  className,
}: PropsWithChildren<CustomCheckboxProps>) => {
  return (
    <label
      className={`custom-checkbox flex items-center cursor-pointer space-x-2 ${className}`}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={`checkmark ${
          checked
            ? "bg-gradient-to-r from-[#C1963B] to-[#745A23]"
            : "border-2 border-gray-300 bg-white"
        }`}
      ></span>
      <span className="font-heebo-medium text-gray-400 text-sm">
        {children}
      </span>
    </label>
  );
};
