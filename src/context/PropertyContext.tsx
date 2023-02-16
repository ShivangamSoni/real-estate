import {
    createContext,
    useReducer,
    useContext,
    ReactNode,
    useEffect,
} from "react";

import { Action, ContextShape, ReducerShape, State, Filters } from "./types";

import SampleData from "@data/sample.json";

const PropertyContext = createContext<ContextShape>({
    properties: SampleData,
    filteredProperties: [],
    setFilters: () => {},
    resetFilters: () => {},
});

const defaultState: State = {
    properties: SampleData,
    filteredProperties: [],
};

const ACTION_TYPES = new Map([["set filter", "SET_FILTER"]]);

function reducer(state = defaultState, { type, payload }: Action): State {
    switch (type) {
        case ACTION_TYPES.get("set filter"): {
            const { location, bedroom, priceRange, propertyType } =
                payload as Filters;

            let newFiltered = state.properties;

            if (location && location !== "All") {
                newFiltered = newFiltered.filter(
                    ({ address: { state, country } }) => {
                        return `${state}, ${country}` === location;
                    },
                );
            }

            if (bedroom && bedroom !== "All" && typeof bedroom === "number") {
                newFiltered = newFiltered.filter(({ bedrooms }) => {
                    return bedrooms === bedroom;
                });
            }

            if (priceRange && priceRange.label !== "All") {
                newFiltered = newFiltered.filter(({ price }) => {
                    const { low, hight } = priceRange;
                    return price >= low && price < hight;
                });
            }

            if (propertyType && propertyType !== "All") {
                newFiltered = newFiltered.filter(({ type }) => {
                    return type === propertyType;
                });
            }

            return { ...state, filteredProperties: newFiltered };
        }
        default: {
            return state;
        }
    }
}

export function PropertyProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer<ReducerShape>(reducer, defaultState);

    useEffect(() => {
        resetFilters();
    }, []);

    function resetFilters() {
        dispatch({ type: ACTION_TYPES.get("set filter")!, payload: {} });
    }

    function setFilters({
        location,
        bedroom,
        priceRange,
        propertyType,
    }: Filters) {
        dispatch({
            type: ACTION_TYPES.get("set filter")!,
            payload: {
                location,
                bedroom,
                priceRange,
                propertyType,
            },
        });
    }

    return (
        <PropertyContext.Provider
            value={{ ...state, setFilters, resetFilters }}
        >
            {children}
        </PropertyContext.Provider>
    );
}

export function useProperty() {
    return useContext(PropertyContext);
}
