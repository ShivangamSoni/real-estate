import { forwardRef } from "react";

export default forwardRef<
    HTMLButtonElement,
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > & { variant?: "outlined" | "filled" }
>(function Button({ children, variant = "filled", className, ...props }, ref) {
    return (
        <button
            className={`border-2 border-slate-100 bg-transparent rounded-md py-2 px-4 transition-colors disabled:bg-gray-500 ${
                variant === "filled" ? FilledClasses : OutlinedClasses
            } ${className}`}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});

const OutlinedClasses =
    "text-violet-600 bg-white font-semibold hover:bg-violet-600 hover:text-white focus-visible:bg-violet-600 focus-visible:text-white";
const FilledClasses =
    "text-white bg-violet-600 font-semibold hover:bg-white hover:text-violet-600 focus-visible:bg-white focus-visible:text-violet-600";
