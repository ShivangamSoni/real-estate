import { Outlet } from "react-router-dom";
import Header from "@components/Header";

export default function SiteLayout() {
    return (
        <div className="min-h-screen bg-slate-50 grid grid-cols-1 grid-rows-[auto,1fr] gap-8">
            <Header />
            <main className="max-w-6xl w-11/12 mx-auto">
                <Outlet />
            </main>
        </div>
    );
}
