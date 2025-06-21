import * as React from "react";
import { cn } from "@/lib/utils"; // utility to merge classNames
import Link from "next/link";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "blockquote"
  | "inlineCode"
  | "lead"
  | "large"
  | "muted"
  | "small"
  | "link";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
  href?: string;
}

const typographyStyles: Record<TypographyVariant, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic text-muted-foreground",
  inlineCode:
    "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  muted: "text-sm text-muted-foreground",
  small: "text-sm font-medium leading-none",
  link: "text-blue-600 hover:underline underline-offset-2 transition-colors",
};

export const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  as,
  className,
  children,
  href,
  ...props
}) => {
  const Component = as || (variant === "link" ? Link : "div");
  const classes = cn(typographyStyles[variant], className);

  if (variant === "link") {
    return (
      <Link href={href || "#"} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
