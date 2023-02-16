import { IPriceRange } from "@components/rent/Filter";
import { Reducer } from "react";

export interface IProperty {
    id: number;
    name: string;
    address: {
        full: string;
        state: string;
        country: string;
    };
    image: string;
    bedrooms: number;
    bathrooms: number;
    area: {
        w: number;
        l: number;
    };
    price: number;
    isPopular?: boolean;
    type: string;
}

export interface Action {
    type: string;
    payload?: any;
}

export interface State {
    properties: IProperty[];
    filteredProperties: IProperty[];
}

export type ReducerShape = Reducer<State, Action>;

export interface ContextShape extends State {
    setFilters: (filters: Filters) => void;
    resetFilters: () => void;
}

export interface Filters {
    location: string;
    bedroom: number | string;
    priceRange: IPriceRange;
    propertyType: string;
}
