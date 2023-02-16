import Button from "./common/Button";
import { NavLink } from "./common/Link";

export default function Header() {
    return (
        <header className="flex shadow-sm py-6">
            <div className="max-w-7xl w-[98%] m-auto flex items-center justify-start gap-6">
                <h1 className="text-violet-900 text-2xl font-bold">Estatery</h1>
                <div className="flex items-center justify-between gap-6 flex-1">
                    <nav>
                        <ul className="flex items-center justify-center gap-6">
                            {SITE_LINKS.map(({ id, label, to }) => (
                                <li key={id}>
                                    <NavLink to={to}>{label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center justify-center gap-6">
                        <Button variant="outlined">Login</Button>
                        <Button>Signup</Button>
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
