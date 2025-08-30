"use client";
import type React from "react";
import Link from "next/link";

type ButtonProps = {
  asChild?: boolean;
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20";
  
  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-lg",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent",
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}