import Link, { LinkProps } from "next/link";
import { ReactNode, FC } from "react";

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
}

export const CustomLink: FC<CustomLinkProps> = ({ children, ...props }) => (
  <Link {...props}>{children}</Link>
);
