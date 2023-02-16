import Filter from "@components/rent/Filter";
import PropertyCard from "@components/rent/PropertyCard";
import Search from "@components/rent/Search";

import SampleData from "@data/sample.json";

export default function Rent() {
    return (
        <section className="grid gap-12 py-4">
            <Search />
            <Filter />

            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {SampleData.map((property) => (
                    <li key={property.id}>
                        <PropertyCard
                            id={property.id}
                            type={property.type}
                            image={property.image}
                            name={property.name}
                            price={property.price}
                            address={property.address.full}
                            bedrooms={property.bedrooms}
                            bathrooms={property.bathrooms}
                            area={property.area}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}
