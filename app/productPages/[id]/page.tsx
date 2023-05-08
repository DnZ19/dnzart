import Image from "next/image";
import { SearchParamTypes } from "@/types/SearchParamTypes";
import formatPrice from "@/util/PriceFormat";
import Link from "next/link";
import { TiArrowBack } from "react-icons/ti";
import Products from "../../products/page";

export default async function ProductPage({
	searchParams,
}: SearchParamTypes) {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex flex-col md:flex-row mt-10 min-h-max">
				<div>
					<Image
						src={searchParams.image}
						alt={searchParams.name}
						width={600}
						height={600}
						className="w-auto max-h-auto md:max-w-xs lg:md:max-h-none lg:max-w-md rounded-lg bg-cover"
					/>
				</div>
				<div>
					<div className="px-4 text-justify">
						<h1 className="text-2xl pb-4">
							{searchParams.name}
						</h1>
						{searchParams.price !== null &&
							formatPrice(searchParams.price)}
						<p className="mt-10">
							{searchParams.description}
						</p>
						<div className="flex flex-row items-center gap-6 lg:mt-16 lg:w-full lg:justify-end">
							<Link href="/contact">
								<button className="bg-transparent border-2 border-teal-950 hover:bg-teal-500 text-teal-900 rounded-lg py-2 px-4 mt-10 cursor-pointer">
									Check availability
								</button>
							</Link>
							<Link href="/products">
								<TiArrowBack className="w-12 h-12 mb-[-40px]" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
