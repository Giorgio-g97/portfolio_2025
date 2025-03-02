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
    "inline-flex items-center justify-center px-6 py-3 border rounded-full text-sm font-medium transition-all duration-300";
  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground border-transparent hover:bg-primary/90 hover:scale-105 shadow-md hover:shadow-lg",
    outline:
      "bg-transparent text-foreground dark:text-foreground-dark border-current hover:bg-primary/10 dark:hover:bg-primary-dark/10 hover:scale-105",
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
