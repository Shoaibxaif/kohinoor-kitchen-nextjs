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
        "bg-dark text-white hover:opacity-90",

        variant === "outline" &&
        "border border-border text-dark hover:bg-white",

        variant === "light" &&
        "bg-white text-dark hover:bg-accent",

        variant === "accent" &&
        `
      bg-accent
      text-white
      border
      border-accent
      hover:bg-white
      hover:text-accent
      hover:border-accent
      `,
        variant === "link" &&
        `
    bg-transparent
    p-0
    text-dark
    hover:text-accent
    hover:bg-transparent
    `,

        variant === "outline-light" &&
        "border border-white/20 text-white hover:bg-white hover:text-dark",

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
