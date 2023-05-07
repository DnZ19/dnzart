import Product from "@/app/components/Product";
import Image from "next/image";
import { SearchParamTypes } from "@/types/SearchParamTypes";

export default async function ProductPage({
	searchParams,
}: SearchParamTypes) {
	return (
		<div>
			<Image
				src={searchParams.image}
				alt={searchParams.name}
				width={600}
				height={600}
				className="w-full rounded-lg"
			/>
			<div>
				<h1>{searchParams.name}</h1>
				<p>{searchParams.description}</p>
			</div>
		</div>
	);
}
