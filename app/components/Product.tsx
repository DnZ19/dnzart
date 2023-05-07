import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { ProductType } from "@/types/ProductType";
import Link from "next/link";

export default function Product({
	id,
	name,
	image,
	price,
	description,
}: ProductType) {
	return (
		<Link
			href={{
				pathname: `/productPages/${id}`,
				query: { id, name, image, price, description },
			}}>
			<div className="text-gray-700">
				<Image
					src={image}
					alt={name}
					width={400}
					height={400}
					className="w-full h-auto object-fill"
				/>
				<div className="font-medium py-6">
					<h1 className="text-xl pb-4">{name}</h1>
					{formatPrice(price)}
					<p className="text-sm">{description}</p>
				</div>
			</div>
		</Link>
	);
}
