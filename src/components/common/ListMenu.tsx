import { Listbox, Transition } from "@headlessui/react";
import {
    ChevronUpDownIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    CheckIcon,
} from "@heroicons/react/20/solid";
import { Fragment } from "react";

export interface IListItem {
    id: ReturnType<typeof crypto.randomUUID>;
    label: any;
}

export default function ListMenu<T>({
    selectedId,
    items,
    onChange,
}: {
    selectedId: IListItem["id"];
    items: IListItem[];
    onChange: (id: IListItem["id"]) => void;
}) {
    const selectedLocation =
        items.find(({ id }) => id === selectedId) || items[0];
    return (
        <Listbox
            value={selectedId}
            onChange={onChange}
            as="div"
            className="relative inline-block"
        >
            <Listbox.Button className="relative cursor-pointer w-full py-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-violet-200 sm:text-sm">
                {({ open }) => (
                    <>
                        <span className="block truncate capitalize text-lg">
                            {selectedLocation.label}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                            <span className="bg-violet-50 text-violet-500 rounded-full">
                                {open ? (
                                    <ChevronUpIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <ChevronDownIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                )}
                            </span>
                        </span>
                    </>
                )}
            </Listbox.Button>
            <Transition
                as={Fragment}
                enter="transition-transform transition-opacity ease-in duration-100"
                enterFrom="transform origin-top-left opacity-0 scale-95"
                enterTo="transform origin-top-left opacity-100 scale-100"
                leave="transition-transform transition-opacity ease-in duration-100"
                leaveFrom="transform origin-top-left opacity-100 scale-100"
                leaveTo="transform origin-top-left opacity-0 scale-95"
            >
                <Listbox.Options className="absolute mt-2 max-h-60 w-max overflow-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                    {items.map(({ id, label }) => (
                        <Listbox.Option
                            key={id}
                            value={id}
                            className={({ active }) =>
                                `relative cursor-pointer select-none py-2 pl-10 pr-4 capitalize ${
                                    active
                                        ? "bg-violet-100 text-violet-900"
                                        : "text-gray-900"
                                }`
                            }
                        >
                            {({ selected }) => (
                                <>
                                    <span
                                        className={`block truncate ${
                                            selected
                                                ? "font-medium"
                                                : "font-normal"
                                        }`}
                                    >
                                        {label}
                                    </span>
                                    {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-violet-600">
                                            <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    ) : null}
                                </>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    );
}
