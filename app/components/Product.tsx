"use client";

import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { ProductType } from "@/types/ProductType";
import Link from "next/link";
import { useState } from "react";

export default function Product({
	id,
	name,
	image,
	price,
	description,
	sold,
}: ProductType) {
	const [isSold, setIsSold] = useState(false);

	return (
		<Link
			href={{
				pathname: `/productPages/${id}`,
				query: {
					id,
					name,
					image,
					price,
					description,
					sold,
				},
			}}>
			<div className="text-gray-700 relative">
				<Image
					src={image}
					alt={name}
					width={400}
					height={400}
					className="w-full h-auto object-fill"
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
				<div className="font-medium py-6">
					<h1 className="text-xl pb-4">{name}</h1>
					{price !== null && formatPrice(price)}
					<p className="text-sm">{description}</p>
				</div>
			</div>
		</Link>
	);
}
