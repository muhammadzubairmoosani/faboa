import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className = "",
  ...props
}) => (
  <button className={`py-2 px-4 ${className}`} {...props}>
    {children}
  </button>
);

export const RememberMeButton: FC = () => (
  <div className="flex items-center mb-4">
    <label className="flex items-center text-gray-700 text-sm">
      <input className="mr-2 leading-tight" type="checkbox" />
      <span className="font-heebo-medium text-gray-600">Remember me</span>
    </label>
  </div>
);
