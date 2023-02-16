import Filter from "@components/rent/Filter";
import PropertyCard from "@components/rent/PropertyCard";
import Search from "@components/rent/Search";

import { useProperty } from "@context/PropertyContext";

export default function Rent() {
    const { filteredProperties } = useProperty();

    return (
        <section className="grid gap-12 py-4">
            <Search />
            <Filter />

            {filteredProperties.length === 0 ? (
                <p className="text-lg font-bold text-center text-violet-800">
                    No Properties Fit the Applied Filters
                </p>
            ) : (
                <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProperties.map((property) => (
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
            )}
        </section>
    );
}
