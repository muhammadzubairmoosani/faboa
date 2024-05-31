import Link, { LinkProps } from "next/link";
import { ReactNode, FC } from "react";

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  className?: string; // Add className to the interface
}

export const CustomLink: FC<CustomLinkProps> = ({
  children,
  className,
  ...props
}) => (
  <Link {...props} className={className}>
    {children}
  </Link>
);
