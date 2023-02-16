import { FormEvent, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Search() {
    const [query, setQuery] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        // TODO: Search based on Query
        console.log({ query });
    }

    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-slate-900 font-semibold text-2xl sm:text-4xl md:text-6xl">
                Search properties to rent
            </h1>
            <form onSubmit={handleSubmit} className="relative w-full lg:w-auto">
                <input
                    type="search"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search with Search Bar"
                    className="w-full p-2 pr-9 outline outline-2 outline-slate-100 rounded-lg focus:outline-violet-300"
                />
                <button
                    type="submit"
                    className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-3 p-1 bg-violet-50 text-violet-500 rounded-full hover:bg-violet-100 hover:text-violet-700"
                >
                    <MagnifyingGlassIcon />
                </button>
            </form>
        </div>
    );
}
