import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface CustomLinkProps extends LinkProps {
  className?: string;
}

export const CustomLink = ({
  children,
  className,
  ...props
}: PropsWithChildren<CustomLinkProps>) => (
  <Link {...props} className={className}>
    {children}
  </Link>
);
