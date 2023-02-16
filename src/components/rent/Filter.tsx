import { useState, useMemo } from "react";

import { useProperty } from "@context/PropertyContext";
import { getList } from "@lib/getList";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

import ListMenu from "@components/common/ListMenu";
import Button from "@components/common/Button";

export default function Filter() {
    const { properties, setFilters, resetFilters } = useProperty();
    const [open, setOpen] = useState(false);

    // Locations
    const locations = useMemo(() => {
        return getList(
            properties,
            ({ address: { state, country } }) => {
                return `${state}, ${country}`;
            },
            "All",
        );
    }, []);
    const [selectedLocationId, setSelectedLocationId] = useState(
        locations[0].id,
    );

    // Bedrooms
    const bedrooms = useMemo(() => {
        return getList(properties, ({ bedrooms }) => bedrooms, "All");
    }, []);
    const [selectedBedroomId, setSelectedBedroomId] = useState(bedrooms[0].id);

    // Price Range
    const [selectedPriceId, setSelectedPriceId] = useState(PriceRanges[0].id);

    // Property Types
    const propertyTypes = useMemo(() => {
        return getList(properties, ({ type }) => type, "All");
    }, []);
    const [selectedTypeId, setSelectedTypeId] = useState(propertyTypes[0].id);

    function handleReset() {
        setSelectedLocationId(locations[0].id);
        setSelectedBedroomId(bedrooms[0].id);
        setSelectedPriceId(PriceRanges[0].id);
        setSelectedTypeId(propertyTypes[0].id);
        resetFilters();
    }

    function handleSearch() {
        const location = locations.find(
            ({ id }) => id === selectedLocationId,
        )!.label;

        const bedroom = bedrooms.find(
            ({ id }) => id === selectedBedroomId,
        )!.label;

        const priceRange = PriceRanges.find(
            ({ id }) => id === selectedPriceId,
        )!;

        const propertyType = propertyTypes.find(
            ({ id }) => id === selectedTypeId,
        )!.label;

        // TODO: Filter properties based data
        console.log({ location, bedroom, priceRange, propertyType });
        setFilters({ location, bedroom, priceRange, propertyType });
    }

    return (
        <div className="relative">
            <Button
                variant="outlined"
                className="md:hidden flex items-center justify-center gap-3"
                aria-controls="filter-bar"
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className="sr-only">Open Filters Menu</span>
                <span className="">Filters</span>
                {open ? (
                    <XMarkIcon className="w-5 h-5" />
                ) : (
                    <Bars3Icon className="w-5 h-5" />
                )}
            </Button>
            <div
                id="filter-bar"
                className={`absolute top-full left-0 mt-4 z-10 w-full bg-white p-6 rounded-md shadow-lg grid transition-all origin-top-left
                    ${
                        open
                            ? "scale-100 opacity-100"
                            : "scale-75 opacity-0 pointer-events-none"
                    }
                    md:static md:grid-cols-5 md:divide-x md:transition-none md:scale-100 md:opacity-100 md:pointer-events-auto md:mt-0
                `}
            >
                <div className="flex flex-col justify-center px-4">
                    <h2 className="text-slate-400 font-semibold text-sm">
                        Location
                    </h2>
                    <ListMenu
                        items={locations}
                        selectedId={selectedLocationId}
                        onChange={(id) => setSelectedLocationId(id)}
                    />
                </div>

                <div className="flex flex-col px-4 justify-center">
                    <h2 className="text-slate-400 font-semibold text-sm">
                        Bedrooms
                    </h2>
                    <ListMenu
                        items={bedrooms}
                        selectedId={selectedBedroomId}
                        onChange={(id) => setSelectedBedroomId(id)}
                    />
                </div>

                <div className="flex flex-col px-4 justify-center">
                    <h2 className="text-slate-400 font-semibold text-sm">
                        Price
                    </h2>
                    <ListMenu
                        items={PriceRanges}
                        selectedId={selectedPriceId}
                        onChange={(id) => setSelectedPriceId(id)}
                    />
                </div>

                <div className="flex flex-col px-4 justify-center">
                    <h2 className="text-slate-400 font-semibold text-sm">
                        Property Type
                    </h2>
                    <ListMenu
                        items={propertyTypes}
                        selectedId={selectedTypeId}
                        onChange={(id) => setSelectedTypeId(id)}
                    />
                </div>

                <div className="flex flex-col px-4 justify-center gap-2">
                    <Button onClick={handleSearch}>Search</Button>
                    <Button variant="outlined" onClick={handleReset}>
                        Reset
                    </Button>
                </div>
            </div>
        </div>
    );
}

const PriceRanges = [
    {
        id: crypto.randomUUID(),
        label: "All",
        low: 0,
        hight: Number.MAX_SAFE_INTEGER,
    },
    {
        id: crypto.randomUUID(),
        label: "Below $500",
        low: 0,
        hight: 500,
    },
    {
        id: crypto.randomUUID(),
        label: "$500-$2500",
        low: 500,
        hight: 2500,
    },
    {
        id: crypto.randomUUID(),
        label: "$2500-$4500",
        low: 2500,
        hight: 4500,
    },
    {
        id: crypto.randomUUID(),
        label: "$4500+",
        low: 4500,
        hight: Number.MAX_SAFE_INTEGER,
    },
];

export type IPriceRange = typeof PriceRanges[number];
