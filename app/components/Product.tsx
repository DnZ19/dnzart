"use client";

import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { ProductType } from "@/types/ProductType";
import Link from "next/link";
import { useState } from "react";

export default function Product({
	id,
	name,
	images,
	length,
	Height,
	depth,
	price,
	description,
	sold,
}: ProductType) {
	const [isSold, setIsSold] = useState(false);

	return (
		<Link
			href={{
				pathname: sold ? `/sold` : `/productPages/${id}`,
				query: {
					id,
					name,
					images,
					length,
					Height,
					depth,
					price,
					description,
					sold,
				},
			}}>
			<div className="text-gray-700 relative">
				<Image
					src={images[0]}
					alt={name}
					width={400}
					height={400}
					className="w-full h-auto max-h-48 object-cover"
				/>
				{sold ? (
					<div>
						<h1 className="text-white bg-red-600 absolute top-0 left-0 w-20 px-4 py-2 text-center">
							Sold
						</h1>
					</div>
				) : (
					<div></div>
				)}
				<div className="font-medium py-6 flex flex-col items-start">
					<h1 className="text-xl pb-4">{name}</h1>
					<div className="gap-2 flex flex-col items-start md:flex-wrap mb-8">
						<button className="py-1 px-4 bg-slate-300 text-slate-950 rounded-xl text-left text-xs">
							{length}
						</button>
						<button className="py-1 px-4 bg-slate-300 text-slate-950 rounded-xl text-left text-xs">
							{Height}
						</button>
						<button className="py-1 px-4 bg-slate-300 text-slate-950 rounded-xl text-left text-xs">
							{depth}
						</button>
					</div>

					{price !== null && formatPrice(price)}

					<p className="text-sm">{description}</p>
				</div>
			</div>
		</Link>
	);
}
