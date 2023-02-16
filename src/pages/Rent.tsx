import Filter from "@components/rent/Filter";
import Search from "@components/rent/Search";

export default function Rent() {
    return (
        <section className="grid gap-12 py-4">
            <Search />
            <Filter />
            {/* Listing */}
        </section>
    );
}
