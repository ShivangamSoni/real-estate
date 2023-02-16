import { IoMdHeartEmpty as HeartIcon } from "react-icons/io";
import { IoBedOutline as BedIcon } from "react-icons/io5";
import { TbBath as BathIcon } from "react-icons/tb";
import { RxDimensions as AreaIcon } from "react-icons/rx";

import { currencyFormatter } from "@lib/currencyFormatter";
import { Link } from "@components/common/Link";
import Button from "@components/common/Button";

interface IPropertyCard {
    id: number;
    type: string;
    image: string;
    price: number;
    name: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    area: { l: number; w: number };
}

export default function PropertyCard({
    id,
    type,
    image,
    price,
    name,
    address,
    bedrooms,
    bathrooms,
    area: { l, w },
}: IPropertyCard) {
    return (
        <div className="grid grid-cols-1 grid-rows-[200px,auto] rounded-xl shadow-sm overflow-hidden bg-white hover:shadow-md">
            <div className="overflow-hidden">
                <img src={image} alt="" className="w-full h-full" />
            </div>
            <div className="px-6 py-4 divide-y">
                <div className="relative">
                    <span className="flex items-center">
                        <span className="text-xl font-bold text-violet-400">
                            {currencyFormatter.format(price)}
                        </span>
                        <span className="text-sm font-semibold text-slate-400">
                            /month
                        </span>
                    </span>
                    <h3 className="font-bold text-xl">
                        <Link
                            to={`/${type}/${id}`}
                            className="inline-block w-full"
                        >
                            {name}
                        </Link>
                    </h3>
                    <span className="text-slate-400 font-semibold capitalize text-sm">
                        {address}
                    </span>
                    <Button
                        className="absolute top-1 right-1 p-2 outline-transparent border bg-white text-violet-500 rounded-full hover:border-violet-500 hover:bg-violet-50 focus-visible:border-violet-500 focus-visible:bg-violet-50"
                        title="Add to Favorite"
                    >
                        <HeartIcon className="w-5 h-5" />
                    </Button>
                </div>
                <div className="flex items-center justify-between pt-4 mt-4">
                    <span className="flex items-center gap-1">
                        <BedIcon className="w-4 h-4 text-violet-700" />
                        <span className="text-sm text-slate-400">
                            {bedrooms} Beds
                        </span>
                    </span>

                    <span className="flex items-center gap-1">
                        <BathIcon className="w-4 h-4 text-violet-700" />
                        <span className="text-sm text-slate-400">
                            {bathrooms} Bathrooms
                        </span>
                    </span>

                    <span className="flex items-center gap-1">
                        <AreaIcon className="w-4 h-4 text-violet-700" />
                        <span className="text-sm text-slate-400">
                            {l}x{w} m<sup>2</sup>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}
