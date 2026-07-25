import clsx from "clsx";
import Link from "next/link";

const Button = ({
    children,
    variant = "primary",
    className = "",
    href,
    to,
    ...props
}) => {
    const classes = clsx(
        `
    inline-flex
    items-center
    justify-center
    px-8
    py-4
    text-sm
    uppercase
    tracking-[0.15em]
    text-center
    leading-tight
    transition-all
    duration-300
    cursor-pointer
    `,

        variant === "primary" &&
        "bg-[#1a1a18] text-white hover:opacity-90",

        variant === "outline" &&
        "border border-[#e8e4dc] text-[#1a1a18] hover:bg-white",

        variant === "light" &&
        "bg-white text-[#1a1a18] hover:bg-[#c8a97a]",

        variant === "accent" &&
        `
      bg-[#C8A97A]
      text-white
      border
      border-[#C8A97A]
      hover:bg-white
      hover:text-[#C8A97A]
      hover:border-[#C8A97A]
      `,
        variant === "link" &&
        `
    bg-transparent
    p-0
    text-[#1a1a18]
    hover:text-[#C8A97A]
    hover:bg-transparent
    `,

        variant === "outline-light" &&
        "border border-white/20 text-white hover:bg-white hover:text-[#1a1a18]",

        className
    );

    // Internal Next.js navigation
    if (to) {
        return (
            <Link href={to} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    // External link
    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    // Default button
    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
