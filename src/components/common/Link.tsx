import {
    Link as RouterLink,
    LinkProps,
    NavLink as RouterNavLink,
    NavLinkProps,
} from "react-router-dom";

function Link({ to, children, className, ...props }: LinkProps) {
    return (
        <RouterLink
            to={to}
            {...props}
            className={`font-semibold border-none outline-0 outline-transparent hover:underline hover:underline-offset-4 hover:text-violet-700 focus-visible:underline focus-visible:underline-offset-4 focus-visible:text-violet-700 ${className}`}
        >
            {children}
        </RouterLink>
    );
}

function NavLink({ to, children, className, ...props }: NavLinkProps) {
    return (
        <RouterNavLink
            to={to}
            {...props}
            className={({ isActive }) =>
                `font-semibold py-2 px-4 rounded-sm outline outline-1 outline-transparent hover:outline-violet-500 focus-visible:outline-violet-500 transition-colors 
                ${isActive ? "bg-violet-100 text-violet-500" : ""} ${className}`
            }
        >
            {children}
        </RouterNavLink>
    );
}

export { Link, NavLink };
