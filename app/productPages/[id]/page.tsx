import Product from "@/app/components/Product";
import Image from "next/image";
import { SearchParamTypes } from "@/types/SearchParamTypes";
import formatPrice from "@/util/PriceFormat";

export default async function ProductPage({
	searchParams,
}: SearchParamTypes) {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex flex-row mt-10 min-h-max">
				<Image
					src={searchParams.image}
					alt={searchParams.name}
					width={600}
					height={600}
					className="w-auto max-h-70 rounded-lg"
				/>
				<div>
					<div className="px-4 text-justify">
						<h1 className="text-2xl pb-4">
							{searchParams.name}
						</h1>
						{searchParams.price !== null &&
							formatPrice(searchParams.price)}
						<p>{searchParams.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
