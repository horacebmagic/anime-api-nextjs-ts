import { useRouter } from "next/router";
import Link from "next/link";
import React, { ReactNode } from "react";
import { NextPage } from "next";

interface ActiveLinkProps {
  children: ReactNode;
  activeClassName: string;
  href: string;
}

const ActiveLink: NextPage<ActiveLinkProps> = ({
  children,
  activeClassName,
  href,
}) => {
  const route = useRouter();
  const isActive = route.pathname === href;
  return (
    <Link href={href}>
      <a
        className={
          isActive
            ? activeClassName + " hover:text-indigo-500 text-gray-500"
            : "" + "hover:text-indigo-500 text-gray-500"
        }
      >
        {children}
      </a>
    </Link>
  );
};

export default ActiveLink;
