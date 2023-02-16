import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

import Button from "@components/common/Button";
import { NavLink } from "@components/common/Link";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex shadow-sm py-6 md:justify-start">
            <div className="max-w-7xl w-[98%] m-auto flex items-center justify-center sm:justify-start gap-6">
                <h1 className="text-violet-900 text-2xl sm:text-3xl font-bold">
                    Estatery
                </h1>
                <Button
                    variant="outlined"
                    className="sm:hidden fixed top-5 right-4 z-50"
                    aria-controls="navbar"
                    aria-expanded={open}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <span className="sr-only">Open Menu</span>

                    {open ? (
                        <XMarkIcon className="w-5 h-5 " />
                    ) : (
                        <Bars3Icon className="w-5 h-5" />
                    )}
                </Button>
                <div
                    id="navbar"
                    className={`fixed inset-0 bg-violet-400 z-40 flex flex-col items-center justify-center gap-6 flex-1
                        transition-transform ${open ? "" : "translate-x-full"}
                        sm:flex-row sm:justify-between sm:static sm:bg-transparent sm:translate-x-0 sm:transition-none
                    `}
                >
                    <nav>
                        <ul className="flex flex-col items-center justify-center gap-6 w-60 sm:flex-row">
                            {SITE_LINKS.map(({ id, label, to }) => (
                                <li key={id} className="w-full">
                                    <NavLink
                                        to={to}
                                        className="w-full inline-block text-center"
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex flex-col items-center justify-center gap-6 w-60 sm:flex-row">
                        <Button variant="outlined" className="w-full">
                            Login
                        </Button>
                        <Button className="w-full">Signup</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

const SITE_LINKS = [
    {
        id: 1,
        label: "Rent",
        to: "/rent",
    },
    {
        id: 2,
        label: "Buy",
        to: "/buy",
    },
    {
        id: 3,
        label: "Sell",
        to: "/sell",
    },
];
