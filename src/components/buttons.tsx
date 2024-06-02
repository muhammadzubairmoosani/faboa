import { ButtonHTMLAttributes, ChangeEvent, FC, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}
interface CustomCheckboxProps {
  children: ReactNode;
  checked: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className = "",
  ...props
}) => (
  <button className={`py-2 px-4 cursor-pointer ${className}`} {...props}>
    {children}
  </button>
);

export const CustomCheckbox: FC<CustomCheckboxProps> = ({
  children,
  checked,
  onChange,
}) => {
  return (
    <label className="custom-checkbox flex items-center cursor-pointer space-x-2">
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
