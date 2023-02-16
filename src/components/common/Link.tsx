import {
    Link as RouterLink,
    LinkProps,
    NavLink as RouterNavLink,
    NavLinkProps,
} from "react-router-dom";

const LinkClasses =
    "font-semibold py-2 px-4 rounded-sm outline outline-1 outline-transparent hover:outline-violet-500 focus-visible:outline-violet-500 transition-colors";

function Link({ to, children, ...props }: LinkProps) {
    return (
        <RouterLink to={to} {...props} className={LinkClasses}>
            {children}
        </RouterLink>
    );
}

function NavLink({ to, children, ...props }: NavLinkProps) {
    return (
        <RouterNavLink
            to={to}
            {...props}
            className={({ isActive }) =>
                `${LinkClasses} ${
                    isActive ? "bg-violet-100 text-violet-500" : ""
                }`
            }
        >
            {children}
        </RouterNavLink>
    );
}

export { Link, NavLink };
